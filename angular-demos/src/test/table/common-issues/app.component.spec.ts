import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Table, TableColumn, TableComponent, TableModule } from 'smart-webcomponents-angular/table';

import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild, OnChanges, OnInit, AfterViewInit, Output } from '@angular/core';
import { TestHarness, TableTestHarness, TableGroupingFormatFuncion } from './../../scripts/test.tools';

/**
 * The following Test Spec tests the Table without Virtualization
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
        <smart-table #table [dataSource]="dataSource" [columns]="columns" [locale]="language"
            [grouping]="grouping" [selection]="selection"
            [groupFormatFunction]="groupFormatFunction" 
            [dataSourceSettings]="dataSourceSettings" [loadColumnStateBehavior]="loadColumnStateBehavior"
            (onGroup)="handleCollapseExpand($event)"
            (onChange)="handleSelectionChange($event)"
            (onColumnClick)="handleTableColumnClick($event)"
            (onCellClick)="handleCellClick($event)"></smart-table>`
})
class TableHostComponent implements OnInit {
    @ViewChild('table', { read: TableComponent, static: true }) table!: TableComponent;

    @Input() dataSource: TableDataSource[] = [];
    @Input() columns: TableColumn[] = [];
    @Input() grouping: boolean = false;
    @Input() language: string = 'en';
    @Input() selection: boolean = false;
    @Input() dataSourceSettings: DataSourceSettings = {};
    @Input() loadColumnStateBehavior: string = 'implementationOnly';
    @Input() groupFormatFunction: (settings: TableGroupingFormatFuncion) => void;

    getState() {
        return this.table.getState();
    }

    saveState() {
        this.table.saveState();
    }

    loadState(state) {
        this.table.loadState(state);
    }

    ngOnInit(): void { }

    //Selection Change handler
    handleSelectionChange(event: CustomEvent): void { }

    //Table column click handler
    handleTableColumnClick(event: CustomEvent): void { }

    //Cell click handler
    handleCellClick(event: CustomEvent): void { }

    //Group Row Collapse/Expand handler
    handleCollapseExpand(event: CustomEvent): void { }
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
        {
            label: 'Quantity', dataField: 'quantity', dataType: 'number', formatFunction(settings) {
                settings.template = settings.value + ' cups';
            }
        },
        { label: 'Price', dataField: 'price', dataType: 'number' },
        { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
    ] as TableColumn[];

    async function refreshComponent(): Promise<void> {
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        // console.log('Promise resolved');
    }

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [TableHostComponent, TableComponent],
            imports: [TableModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableHostComponent);
        hostComponent = fixture.componentInstance;
        component = hostComponent.table;
        smartTable = component.nativeElement as Table;
        tools = new TableTestHarness(smartTable);
        fixture.detectChanges();
    });

    afterEach(() => {
        //Destroy the fixture to make sure that everything is clean
        fixture.destroy();
    });

    describe('Table State methods behavior ', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns);
            fixture.detectChanges();
        });

        it('expect to return the current table state accurately', async () => {
            const tableState = await hostComponent.getState(),
                columnState = tableState.columns;

            for (let i = 0, max = columnState.length; i < max; i += 1) {
                const colObj = columnState[i];

                expect(colObj.label).toEqual(TableMockColumns[i].label);
                expect(colObj.dataField).toEqual(TableMockColumns[i].dataField);
                expect(colObj.dataType).toEqual(TableMockColumns[i].dataType);
                expect(colObj.visible).toEqual(true);
                expect(colObj.allowResize).toEqual(true);
            }
        });

        it('expect the Table to be restored to the saved state', async () => {
            hostComponent.loadColumnStateBehavior = 'stateOnly';

            const tableState = await component.getState(),
                newColumn = Object.assign({}, TableMockColumns[0]);

            newColumn.label = 'New ID Label';

            hostComponent.columns = [newColumn];
            fixture.detectChanges();

            expect(tools.getAllHeadersText().length).toBe(1);

            hostComponent.loadState(tableState);

            const allHeaders = tools.getAllHeadersText();

            expect(allHeaders.length).toBe(5);

            for (let i = 0, max = allHeaders.length; i < max; i += 1) {
                expect(allHeaders[i]).toEqual(TableMockColumns[i].label);
            }
        });

        it('expect the Table to be restored to the saved implementation state', async () => {
            const tableState = await hostComponent.getState(),
                newColumn = Object.assign({}, TableMockColumns[0]);

            newColumn.label = 'New ID Label';

            hostComponent.columns = [newColumn];
            fixture.detectChanges();

            hostComponent.loadState(tableState);
            fixture.detectChanges();

            const allHeaders = tools.getAllHeadersText();

            expect(allHeaders.length).toBe(1);
            expect(allHeaders[0]).toEqual(newColumn.label);
        });
    });

    describe('Table columns properties ', () => {
        beforeEach(() => {
            const columns = [
                { label: 'id', dataField: 'id', dataType: 'number', width: '25%' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string', width: '25%' },
                { label: 'Price', dataField: 'price', dataType: 'number', width: '25%' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date', width: '25%' }
            ] as TableColumn[];

            hostComponent.columns = columns;
            hostComponent.dataSource = tools.getDataSourceFromColumns(columns);
            fixture.detectChanges();
        });

        it('expect the column width property to be applied after initialization', async () => {
            const tableState = await hostComponent.getState(),
                columnState = tableState.columns;

            for (let i = 0, max = columnState.length; i < max; i += 1) {
                const colObj = columnState[i];

                expect(colObj.width).toEqual('25%');
                expect(tools.getColumnWidthByDataField(colObj.dataField)).toEqual(colObj.width);
            }
        });

        it('expect the column width to be restored from a saved state', async () => {
            const tableState = await hostComponent.getState(),
                columnState = tableState.columns;

            hostComponent.loadColumnStateBehavior = 'stateOnly';
            hostComponent.columns = [];
            fixture.detectChanges();

            expect(tools.getColumns().length).toBe(0);
            expect(tools.getRows().length).toBe(hostComponent.dataSource.length);

            hostComponent.loadState(tableState);

            expect(tools.getColumns().length).toBe(tableState.columns.length);

            for (let i = 0, max = columnState.length; i < max; i += 1) {
                const colObj = columnState[i];

                expect(colObj.width).toEqual('25%');
                expect(tools.getColumnWidthByDataField(colObj.dataField)).toEqual(colObj.width);
            }
        });
    });

    describe('Table columns dynamic resizing ', () => {
        beforeEach(() => {
            const columns = [
                { label: 'id', dataField: 'id', dataType: 'number', width: '25%' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string', width: '25%' },
                { label: 'Price', dataField: 'price', dataType: 'number', width: '25%' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date', width: '25%' }
            ] as TableColumn[];

            hostComponent.columns = columns
            hostComponent.dataSource = tools.getDataSourceFromColumns(columns);
            component.columnResize = true;

            fixture.detectChanges();
        });

        it('expect the column width to increase after resizing', () => {
            const column = tools.getColumn(1),
                columnsWidth = column.offsetWidth;

            expect(column.style.width).toEqual('25%');

            tools.resizeColumn(1, 'right', 50);

            expect(column.style.width).not.toEqual('25%');
            expect(column.offsetWidth).toBeGreaterThan(columnsWidth);
        });

        it('expect the column width to decrease after resizing', () => {
            const column = tools.getColumn(1),
                columnsWidth = column.offsetWidth;

            expect(column.style.width).toEqual('25%');

            tools.resizeColumn(1, 'right', -50);

            expect(column.style.width).not.toEqual('25%');
            expect(column.offsetWidth).toBeLessThan(columnsWidth);
        });

        it('expect the column width to stay in percentages if initialized in percetanges', () => {
            const column = tools.getColumn(1),
                columnsWidth = column.offsetWidth;

            expect(column.style.width.indexOf('%')).toBeGreaterThan(0);

            tools.resizeColumn(1, 'right', 25);

            expect(column.style.width.indexOf('%')).toBeGreaterThan(0);
        });

        it('expect the column width to be an exact number after resizing', () => {
            //New Column definition where the last column does not have it's 'width' property set
            hostComponent.columns = [
                { label: 'id', dataField: 'id', dataType: 'number', width: '50px' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string', width: '100px' },
                { label: 'Price', dataField: 'price', dataType: 'number', width: '25%' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
            ] as TableColumn[];

            fixture.detectChanges();

            const column = tools.getColumn(1);

            expect(column.style.width).toEqual('100px');

            tools.resizeColumn(1, 'right', 100);

            expect(column.style.width).toEqual('200px');
        });
    });

    describe('table events', () => {
        let columnData: TableColumn[];

        beforeEach(() => {
            columnData = [
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                { label: 'Price', dataField: 'price', dataType: 'number' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
            ];

            hostComponent.columns = columnData;
            hostComponent.dataSource = tools.getDataSourceFromColumns(columnData, 100);
            hostComponent.selection = true;
            fixture.detectChanges();
        });

        it('should fire handleSelectionChange event when selection changes', fakeAsync(() => {
            const spy = spyOn(hostComponent, 'handleSelectionChange');

            component.select(0);
            tick();

            const selected = component.selected;

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0].detail).not.toBeNull();
            expect(selected[0]).toBe(0);
        }));

        it('Collapse and Expand events should fire when the corresponding action occurs', fakeAsync(() => {
            const spy = spyOn(hostComponent, 'handleCollapseExpand');

            component.grouping = true;

            fixture.detectChanges();

            //'group' event is fired when adding the grouping, so the spy calls should be 2
            component.addGroup(columnData[0].dataField);
            tick();

            tools.expandRow(0);

            expect(tools.isRowExpanded(0)).toBeTrue();

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(2);
            expect(spy.calls.first().args[0].detail.action).toEqual('add');
            expect(spy.calls.mostRecent().args[0].detail.action).toEqual('expand');

            spy.calls.reset();

            tools.collapseRow(0);

            expect(tools.isRowExpanded(0)).toBeFalse();

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0].detail.action).toEqual('collapse');
        }));

        it('should fire change event when dataSource is changed and previously selected items do not exist anymore', fakeAsync(() => {
            const mockData = [
                { productName: 'Cucumbers', quantity: 300, price: 6.75, date: new Date() },
                { productName: 'Tomatoes', quantity: 100, price: 14.50, date: new Date() },
                { productName: 'Potatoes', quantity: 200, price: 10.69, date: new Date() },
                { productName: 'Peppers', quantity: 120, price: 7.99, date: new Date() },
                { productName: 'Onions', quantity: 50, price: 5.29, date: new Date() }
            ];

            component.dataSource = mockData.slice();
            component.grouping = true;

            fixture.detectChanges();

            expect(tools.getRows().length).toBe(5);

            const spy = spyOn(hostComponent, 'handleSelectionChange');

            tools.clickRowSelectionBox('0');
            tools.clickRowSelectionBox('1');
            tools.clickRowSelectionBox('2');
            tools.clickRowSelectionBox('3');
            tools.clickRowSelectionBox('4');
            tick();

            //Group the Table data by 'permission' dataField
            component.addGroup('date');

            //Expect all rows to be grouped
            expect(tools.isTableGrouped()).toBe(true);

            //Expand the target group
            tools.clickRowArrowByIndex(0);

            tick(50);

            //Expect the rows to be expanded
            expect(tools.isRowExpanded(0)).toBe(true);

            let selected = component.selected;

            expect(selected.length).toBe(5);
            expect(spy).toHaveBeenCalled();

            //5 items + the group item, since all of it's children are selected
            expect(spy.calls.count()).toBe(6);
            expect(selected[0]).toBe(0);
            expect(selected[1]).toBe(1);
            expect(selected[2]).toBe(2);
            expect(selected[3]).toBe(3);
            expect(selected[4]).toBe(4);

            spy.calls.reset();
            component.dataSource = mockData.slice(0, 3);
            fixture.detectChanges();

            //3 rows + 1 group row
            expect(tools.getRows().length).toBe(4);

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);

            selected = component.selected;

            expect(selected.length).toBe(3);
            expect(selected[0]).toBe(0);
            expect(selected[1]).toBe(1);
            expect(selected[2]).toBe(2);
        }));

        it('should fire change event when Table is in Tree mode and items are selected. Testing "selectionByHierarchy" as well.', fakeAsync(() => {
            component.dataSource = new window.Smart.DataAdapter({
                dataSource: [
                    { id: 0, productName: 'Fruits', quantity: 500, price: 4.50, date: new Date(), parentid: -1 },
                    { id: 1, productName: 'Vegetables', quantity: 500, price: 3.50, date: new Date(), parentid: -1 },
                    { id: 2, productName: 'Cucumbers', quantity: 300, price: 6.75, date: new Date(), parentid: 1 },
                    { id: 3, productName: 'Tomatoes', quantity: 100, price: 14.50, date: new Date(), parentid: 1 },
                    { id: 4, productName: 'Potatoes', quantity: 200, price: 10.69, date: new Date(), parentid: 1 },
                    { id: 5, productName: 'Coconuts', quantity: 75, price: 3.99, date: new Date(), parentid: 0 },
                    { id: 6, productName: 'Banannas', quantity: 200, price: 4.99, date: new Date(), parentid: 0 },
                    { id: 7, productName: 'Jackfruits', quantity: 50, price: 12.99, date: new Date(), parentid: 0 }
                ],
                dataSourceType: 'array',
                dataFields: [
                    'id: number',
                    'productName: string',
                    'quantity: number',
                    'price: number',
                    'date: date'
                ],
                id: 'id',
                keyDataField: 'id',
                //NOTE: with 'parentId' and 'parentId' in the dataSource, tree mode grouping is not working
                parentDataField: 'parentid',
            });

            fixture.detectChanges();

            expect(tools.getRows().length).toBe(8);

            expect(tools.isRowExpanded('0')).toBeFalse();
            expect(tools.isRowExpanded('1')).toBeFalse();

            //Expand the two Tree groups
            tools.clickRowArrowById('0');
            tools.clickRowArrowById('1');

            tick(50);

            expect(tools.isRowExpanded('0')).toBeTrue();
            expect(tools.isRowExpanded('1')).toBeTrue();

            //True by default
            expect(component.selectionByHierarchy).toBeTrue();

            const spy = spyOn(hostComponent, 'handleSelectionChange');

            //Test hierarchy selection first, by selecting the tree groups
            tools.clickRowSelectionBox('0');
            tools.clickRowSelectionBox('1');

            tick(50);

            //Expet the whole tree groups to be selected along with their sub-items
            let selected = component.selected;

            expect(selected.length).toBe(8);

            //Selection should be in this order since we are simulating clicking on the tree root item's checkbox
            expect(selected).toEqual([0, 5, 6, 7, 1, 2, 3, 4]);

            //Expect 'change' event to have fired 2 times only
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(2);

            //Reset the spy calls
            spy.calls.reset();

            //Unselect the first tree groups
            tools.clickRowSelectionBox('0');

            tick(50);

            selected = component.selected;

            expect(selected.length).toBe(4);
            expect(selected).toEqual([1, 2, 3, 4]);

            //Expect 'change' event to have fired 1 times only
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);

            //Reset the spy calls
            spy.calls.reset();

            //Stop the hierarchy selection which is On by defualt
            component.selectionByHierarchy = false;

            //Should select the Tree item now
            tools.clickRowSelectionBox('0');

            tick(50);

            selected = component.selected;

            expect(selected.length).toBe(5);
            expect(selected).toEqual([1, 2, 3, 4, 0]);

            //Expect 'change' event to have fired 1 times only
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);

            //Reset the spy calls
            spy.calls.reset();

            //Unselect the Tree item now
            tools.clickRowSelectionBox('0');

            tick(50);

            selected = component.selected;

            expect(selected.length).toBe(4);
            expect(selected).toEqual([1, 2, 3, 4]);

            //Expect 'change' event to have fired 1 times only
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);

            //Reset the spy calls
            spy.calls.reset();

            //Select the items of the 'Fruits' Tree group
            tools.clickRowSelectionBox('5');
            tools.clickRowSelectionBox('6');
            tools.clickRowSelectionBox('7');

            tick(50);

            selected = component.selected;

            //Expect only the items to be selected and NOT the tree root item
            expect(selected.length).toBe(7);
            expect(selected).toEqual([1, 2, 3, 4, 5, 6, 7]);

            //Expect 'change' event to have fired 3 times, once for each tree row
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(3);

            //Reset the spy calls
            spy.calls.reset();

            //Enable the hierarchy selection again
            component.selectionByHierarchy = true;
            selected = component.selected;

            //Expect all items to be selected
            expect(selected.length).toBe(7);
            expect(selected).toEqual([1, 2, 3, 4, 5, 6, 7]);

            //Unselect the 'Vegetables' tree item group
            tools.clickRowSelectionBox('1');

            tick(50);

            selected = component.selected;

            //Expect all items to be selected
            expect(selected.length).toBe(3);
            expect(selected).toEqual([5, 6, 7]);

            //Expect 'change' event to have fired 1 time only, for the tree row
            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);

            //Reset the spy calls
            spy.calls.reset();
        }));
    });
});
