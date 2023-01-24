import { ComponentFixture, fakeAsync, TestBed, tick, flush } from '@angular/core/testing';
import { Table, TableColumn, TableComponent, TableModule } from 'smart-webcomponents-angular/table';

import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild, OnChanges, OnInit, AfterViewInit, Output } from '@angular/core';
import { TestHarness, TableTestHarness, TableGroupingFormatFuncion } from './../../scripts/test.tools';
import { GetData } from '../../../common/data';

/**
 * The following Test Spec tests the Table with Virtualization
 */

interface TableDataSource {
    [property: string]: any;
}

interface DataSourceSettings {
    [property: string]: any;
}

/**
 * Host component for testing @see TableComponent
 */
@Component({
    selector: 'host-component',
    template: `
        <smart-table #table
            [animation]="'none'"
            [columns]="columns"
            [dataSource]="dataSource"
            [virtualization]="virtualization"
            [loadColumnStateBehavior]="loadColumnStateBehavior"
            (onExpand)="handleRowExpand($event)"
            (onCollapse)="handleRowCollapse($event)"
            (onGroup)="handleGroupEvent($event)"
            (onChange)="handleSelectionChange($event)"
            (onColumnClick)="handleTableColumnClick($event)"
            (onCellClick)="handleCellClick($event)"></smart-table>`
})

class TableHostComponent implements OnInit {
    @ViewChild('table', { read: TableComponent, static: true }) table!: TableComponent;

    dataSource = [];
    columns = [];
    virtualization: boolean = true;
    loadColumnStateBehavior: string = 'implementationOnly';

    ngOnInit(): void { }

    //Selection Change handler
    handleSelectionChange(event: CustomEvent): void { }

    //Table column click handler
    handleTableColumnClick(event: CustomEvent): void { }

    //Cell click handler
    handleCellClick(event: CustomEvent): void { }

    //Group Row Collapse/Expand handler
    handleGroupEvent(event: CustomEvent): void { }

    //Handles Tree item expanding
    handleRowExpand(event: CustomEvent): void { }

    //Handles Tree item collapsing
    handleRowCollapse(event: CustomEvent): void { }
}

describe('Table HostComponent', () => {
    let hostComponent: TableHostComponent;
    let component: TableComponent;
    let fixture: ComponentFixture<TableHostComponent>;
    let tools: TableTestHarness;
    let smartTable: Table;
    let TableMockColumns = [
        { label: 'id', dataField: 'id', dataType: 'number' },
        { label: 'Product Name', dataField: 'productName', dataType: 'string' },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
        { label: 'Price', dataField: 'price', dataType: 'number' },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
    ] as TableColumn[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TableHostComponent, TableComponent],
            imports: [TableModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(TableHostComponent);
        hostComponent = fixture.componentInstance;
        component = hostComponent.table;
        smartTable = component.nativeElement as Table;
        tools = new TableTestHarness(smartTable);
        fixture.detectChanges();
    });

    describe('Virtualized Table with Large Data and 5 columns', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            fixture.detectChanges();
        });

        it('to have rows that are less then the dataSource length', () => {
            let tableVirtualRows = Math.round(
                parseFloat(getComputedStyle(smartTable).getPropertyValue('--smart-table-default-height')) /
                parseFloat(getComputedStyle(smartTable).getPropertyValue('--smart-table-row-height'))) * 2;

            if (isNaN(tableVirtualRows)) {
                tableVirtualRows = 10000;
            }

            //Random dynamically generated data method
            let data = tools.getDataSourceFromColumns(TableMockColumns, 10000);

            hostComponent.dataSource = data;
            fixture.detectChanges();

            expect(smartTable.rows.length).toBe(10000);
            expect(tools.getRows().length).toBeLessThan(tableVirtualRows);

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 20000);
            fixture.detectChanges();

            expect(smartTable.rows.length).toBe(20000);
            expect(tools.getRows().length).toBeLessThan(tableVirtualRows);

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 30000);
            fixture.detectChanges();

            expect(smartTable.rows.length).toBe(30000);
            expect(tools.getRows().length).toBeLessThan(tableVirtualRows);
        });

        it('to restore groups expanded state after dataSource reloading', fakeAsync(() => {
            //Random dynamically generated data method
            const spyGroupEvent = spyOn(hostComponent, 'handleGroupEvent');
            let dataSource = tools.getDataSourceFromColumns(TableMockColumns, 100),
                data = dataSource.dataSource; //The actual Data Array

            component.grouping = true;
            hostComponent.dataSource = dataSource;
            fixture.detectChanges();

            component.addGroup(TableMockColumns[1].dataField);

            const eventDetail = spyGroupEvent.calls.mostRecent().args[0].detail;

            //Expect the 'group' event to be fired once when the grouping is created
            expect(spyGroupEvent.calls.count()).toBe(1);

            //Expect the 'group' event details to be correct
            expect(eventDetail.action).toEqual('add');
            expect(eventDetail.dataField).toEqual(TableMockColumns[1].dataField);

            //Expect all rows to be grouped
            expect(tools.isGrouped()).toBe(true);

            //Expand rows
            tools.clickRowArrowByIndex(0);
            tools.clickRowArrowByIndex(2);

            //Expect the rows to be expanded
            expect(tools.isRowExpanded(0)).toBe(true);

            //Expect the groups to not be expanded here
            expect(tools.areGroupChildrenExpanded(0)).toBeFalse();

            tick(50);

            // Expect the children to be visible
            expect(tools.areGroupChildrenExpanded(0)).toBeTrue();

            component.loadColumnStateBehavior = 'stateOnly';
            fixture.detectChanges();

            //Store the state
            let state;

            component.getState().then((s) => state = s);

            tick(50);

            //Adding a new property to the DataSource
            data.forEach(d => d.newProp = 'Some Value');

            //Set the updated dataSource
            hostComponent.dataSource = data;
            fixture.detectChanges();

            //Load the state
            component.loadState(state);

            //Expect the row to be expanded again
            expect(tools.isRowExpanded(0)).toBe(true);
            flush();
        }));
    });

    describe('Virtualized Tree Table', () => {
        beforeEach(() => {
            //Random dynamically generated data method
            const columns = [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'Full Name', dataField: 'name', dataType: 'string' },
                { label: 'First Name', dataField: 'firstName', dataType: 'string' },
                { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                { label: 'Price', dataField: 'price', dataType: 'number' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date' },
                { label: 'Reports To', dataField: 'reportsTo', dataType: 'number' }
            ] as TableColumn[];

            hostComponent.columns = columns;

            component.dataSource = tools.getTreeDataSourceAdapter({
                count: 20,
                dataFields: columns,
                keyDataField: 'id',
                parentDataField: 'reportsTo'
            });
            fixture.detectChanges();
        });

        it('to show only root items when nothing is expanded', () => {
            const tableRows = tools.getRows();

            for (let i = 0, max = tableRows.length; i < max; i += 1) {
                expect(tools.getCellText(tableRows[i] as HTMLElement, 'reportsTo')).toEqual('-1');
            }

            expect(tableRows.length).toBeLessThan(20);
        });

        it('to expand all items via the expandAllRows and collapse them via collapseAllRows', fakeAsync(() => {
            const tableRows = Array.from(tools.getRows()),
                //Deeply nested groups do not have 'expanded' property set,yet
                parentItems = component.dataSource.toArray().filter(i => i.children.length && i.expanded !== undefined);

            //Expect all items to be collapsed
            for (let i = 0, max = parentItems.length; i < max; i += 1) {
                expect(parentItems[i].expanded).toBe(false);
            }

            component.expandAllRows();

            tick(50);

            //Check expanded rows are present in the Table
            expect(tools.getExpandedRows().length).toBeGreaterThan(0);

            //Expect all parent items to be expanded
            for (let i = 0, max = parentItems.length; i < max; i += 1) {
                expect(parentItems[i].expanded).toBe(true);
            }

            component.collapseAllRows();

            tick(50);

            //Check if all expanded rows are collapsed
            expect(tools.getExpandedRows().length).toBe(0);
            flush();
        }));

        it('to expand the first tree item by clicking on it\'s arrow', fakeAsync(() => {
            const spy = spyOn(hostComponent, 'handleRowExpand'); //Spy on the expand event
            let firstExpandableRow = tools.getFirstExpandableRow(),
                rowById = smartTable.rowById[firstExpandableRow.getAttribute('row-id')],
                rowData, childrenRowIds;

            if (rowById) {
                rowData = rowById.data;
                childrenRowIds = rowData.children.map(i => i.$.id);
            }

            //Expect the dataSource item not to be expanded
            expect(rowData.expanded).toBe(false);

            //Expect the children rows not to be visible when their parent is not expanded
            for (let i = 0, max = childrenRowIds.length; i < max; i += 1) {
                expect(tools.getRowById(childrenRowIds[i])).toBeNull();
            }

            tools.expandRow(firstExpandableRow);

            tick(50);

            //Expect the 'expand' event to have been called once with event.detail.record equal 
            //to the dataSource item that was expanded
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0].detail.record).toEqual(rowById.data);

            //Expect the dataSource item and the corresponding row to be updated to expanded true
            expect(rowData.expanded).toBe(true);
            expect(firstExpandableRow.classList.contains('expanded')).toBeTrue();

            //Expect the rows of the parent to be visible here
            for (let i = 0, max = childrenRowIds.length; i < max; i += 1) {
                expect(tools.getRowById(childrenRowIds[i])).not.toBeNull();
            }

            flush();
        }));

        it('to select a tree item on click and validate the root item selected state', fakeAsync(() => {
            component.selection = true;
            fixture.detectChanges();

            const spyOnChange = spyOn(hostComponent, 'handleSelectionChange'), //Spy on the expand event
                spyOnCellClick = spyOn(hostComponent, 'handleCellClick'); //Spy on cell click event
            let firstExpandableRow = tools.getFirstExpandableRow(),
                rowData = smartTable.rowById[firstExpandableRow.getAttribute('row-id')].data,
                children = rowData.children;
            let childrenRows = [];

            //Expand the root item
            tools.expandRow(firstExpandableRow);
            tick(50);

            //The Table content is refreshed after expanding and the node reference is different
            firstExpandableRow = tools.getRowById(rowData.$.id);

            //Get the children rows
            for (let i = 0, max = children.length; i < max; i += 1) {
                childrenRows.push(tools.getRowById(children[i].$.id));
            }

            //Expect the children rows to be visible
            expect(childrenRows.length).toBe(children.length);

            //Expect 'cellClick' to not be fired by now
            expect(spyOnCellClick.calls.count()).toBe(0);

            tools.clickRowSelectionBox(childrenRows[0]);

            //Expect 'cellClick' to be fired once with proper details for the row
            expect(spyOnCellClick.calls.count()).toBe(1);
            expect(spyOnCellClick.calls.mostRecent().args[0].detail.id).toEqual(children[0].$.id + '');

            //Expect the row to be physically selected in the DOM
            expect(tools.isRowSelected(childrenRows[0])).toBeTrue();

            if (children.length === 1) {
                //Expect the root item to be selected if the children are only one
                expect(tools.isRowSelected(firstExpandableRow)).toBeTrue();
                expect(component.selected.includes(rowData.$.id)).toBeTrue();
            }

            //Expect the selected property of the Table to include the newly selected row id
            expect(component.selected.includes(children[0].$.id)).toBeTrue();

            //Expect the head checkbox for all rows to be indeterminate
            expect(tools.getTotalSelectionState()).toEqual('indeterminate');

            //Expect 'change' event to have been fired once
            expect(spyOnChange.calls.count()).toBe(1);

            //Expect the event.detail to indicate that the selection change was from interaction not via API
            expect(spyOnChange.calls.mostRecent().args[0].detail.type).toEqual('interaction');

            flush();
        }));
    });
});
