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
            [filtering]="filtering"
            [columns]="columns"
            [dataSource]="dataSource"
            [virtualization]="virtualization"
            (onChange)="handleChange($event)"></smart-table>`
})

class TableHostComponent implements OnInit {
    @ViewChild('table', { read: TableComponent, static: true }) table!: TableComponent;

    filtering = false;
    dataSource = [];
    columns = [];
    virtualization: boolean = true;

    ngOnInit(): void { }

    handleChange(event: CustomEvent): void { }
}

describe('Table HostComponent', () => {
    let hostComponent: TableHostComponent;
    let component: TableComponent;
    let fixture: ComponentFixture<TableHostComponent>;
    let tools: TableTestHarness;
    let smartTable: Table;
    let tableMockData = [
        { name: 'Walter Stewart', email: 'walter.stewart@example.com', permission: 'Owner' },
        { name: 'Manuel Smith', email: 'manuel.smith@example.com', permission: 'Owner' },
        { name: 'Annette Gray', email: 'annette.gray@example.com', permission: 'Restricted' },
        { name: 'Candice Murphy', email: 'candice.murphy@example.com', permission: 'Owner' },
        { name: 'Theresa Reynolds', email: 'theresa.reynolds@example.com', permission: 'Restricted' },
        { name: 'Wyatt Silva', email: 'wyatt.silva@example.com', permission: 'Restricted' },
        { name: 'April Hayes', email: 'april.hayes@example.com', permission: 'Owner' },
        { name: 'Brayden Henry', email: 'brayden.henry@example.com', permission: 'Restricted' },
        { name: 'Clayton Rice', email: 'clayton.rice@example.com', permission: 'Restricted' },
        { name: 'Alberto Day', email: 'alberto.day@example.com', permission: 'Restricted' },
        { name: 'Jeremy Marshall', email: 'jeremy.marshall@example.com', permission: 'Owner' },
        { name: 'Ivan Kennedy', email: 'ivan.kennedy@example.com', permission: 'Restricted' },
        { name: 'Sofia Grant', email: 'sofia.grant@example.com', permission: 'Restricted' },
        { name: 'Felicia Moore', email: 'felicia.moore@example.com', permission: 'Restricted' },
        { name: 'Carolyn White', email: 'carolyn.white@example.com', permission: 'Restricted' },
        { name: 'Leo Austin', email: 'leo.austin@example.com', permission: 'Restricted' },
        { name: 'Derrick Larson', email: 'derrick.larson@example.com', permission: 'Restricted' },
        { name: 'Carla James', email: 'carla.james@example.com', permission: 'Restricted' },
        { name: 'Vickie Cruz', email: 'vickie.cruz@example.com', permission: 'Owner' },
        { name: 'Brianna Torres', email: 'brianna.torres@example.com', permission: 'Restricted' },
        { name: 'Kristen Cruz', email: 'kristen.cruz@example.com', permission: 'Restricted' },
        { name: 'Terrance Holt', email: 'terrance.holt@example.com', permission: 'Restricted' },
        { name: 'Marlene Reed', email: 'marlene.reed@example.com', permission: 'Restricted' },
        { name: 'Beatrice Nichols', email: 'beatrice.nichols@example.com', permission: 'Restricted' },
        { name: 'Scarlett Walker', email: 'scarlett.walker@example.com', permission: 'Restricted' },
        { name: 'Scott Oliver', email: 'scott.oliver@example.com', permission: 'Restricted' },
        { name: 'Joe Castillo', email: 'joe.castillo@example.com', permission: 'Restricted' },
        { name: 'Florence Sanders', email: 'florence.sanders@example.com', permission: 'Owner' },
    ];
    let tableMockColumns = [
        { label: 'Name', dataField: 'name', dataType: 'string' },
        { label: 'Email', dataField: 'email', dataType: 'string' },
        { label: 'Permission', dataField: 'permission', dataType: 'string' }
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

    describe('Virtualized Table with Advanced Filtering', () => {
        beforeEach(() => {
            hostComponent.columns = tableMockColumns;
            hostComponent.dataSource = tableMockData;
            fixture.detectChanges();
        });

        it('to filter the data by name dataField', () => {
            expect(tools.getRows().length).toBeGreaterThan(1);

            const filterGroup = new window.Smart.Utilities.FilterGroup();
            let filterObject = filterGroup.createFilter('string', 'April', 'STARTS_WITH');

            filterGroup.addFilter('and', filterObject);
            component.addFilter('name', filterGroup);

            expect(tools.getRows().length).toBe(1);
            expect(tools.getCellText(0, 0)).toEqual('April Hayes');
            expect(tools.getCellText(0, 1)).toContain('april.hayes@example.com');
            expect(tools.getCellText(0, 2)).toContain('Owner');

            component.removeFilter('name');

            expect(tools.getRows().length).toBeGreaterThan(1);
            expect(tools.getCellText(0, 0)).toEqual('Walter Stewart');
            expect(tools.getCellText(0, 1)).toContain('walter.stewart@example.com');
            expect(tools.getCellText(0, 2)).toContain('Owner');

            filterObject = filterGroup.createFilter('string', 'q', 'ENDS_WITH');

            filterGroup.removeFilter(filterObject);
            filterGroup.addFilter('and', filterObject);
            component.addFilter('name', filterGroup);

            expect(tools.getRows().length).toBe(0);
        });

        it('to filter the data by permission dataField when grouping is applied', fakeAsync(() => {
            component.grouping = true;
            fixture.detectChanges();

            //Group the Table data by 'permission' dataField
            component.addGroup('permission');

            //Expect group rows to be 2
            expect(tools.getRowGroups().length).toBe(2);

            //Expect all rows to be grouped
            expect(tools.isGrouped()).toBe(true);

            //Expand rows
            tools.clickRowArrowByIndex(0);
            tools.clickRowArrowByIndex(1);

            tick(50);

            //Expect the rows to be expanded
            expect(tools.isRowExpanded(0)).toBe(true);
            expect(tools.isRowExpanded(1)).toBe(true);

            //Expect the rows to be more than 1
            expect(tools.getRows().length).toBeGreaterThan(1);

            const filterGroup = new window.Smart.Utilities.FilterGroup();
            let filterObject = filterGroup.createFilter('string', 'es', 'ENDS_WITH');

            filterGroup.addFilter('and', filterObject);
            component.addFilter('name', filterGroup);

            //3 items + 2 groups gives 5 in total
            expect(tools.getRows().length).toBe(5);

            expect(tools.getCellText(1, 0)).toEqual('April Hayes');
            expect(tools.getCellText(1, 1)).toContain('april.hayes@example.com');
            expect(tools.getCellText(1, 2)).toContain('Owner');

            expect(tools.getCellText(3, 0)).toEqual('Carla James');
            expect(tools.getCellText(3, 1)).toContain('carla.james@example.com');
            expect(tools.getCellText(3, 2)).toContain('Restricted');

            expect(tools.getCellText(4, 0)).toEqual('Brianna Torres');
            expect(tools.getCellText(4, 1)).toContain('brianna.torres@example.com');
            expect(tools.getCellText(4, 2)).toContain('Restricted');

            //Remove filter
            component.removeFilter('name');

            expect(tools.getRows().length).toBeGreaterThan(1);

            //Apply incorect filter
            filterGroup.removeFilter(filterObject);

            filterObject = filterGroup.createFilter('string', 'q', 'ENDS_WITH');
            filterGroup.addFilter('and', filterObject);
            component.addFilter('name', filterGroup);

            expect(tools.getRows().length).toBe(0);

            //Remove filter
            component.removeFilter('name');

            //Apply new correct filter
            filterGroup.removeFilter(filterObject);
            filterObject = filterGroup.createFilter('string', 'carla.james@example.com', 'EQUAL');
            filterGroup.addFilter('and', filterObject);
            component.addFilter('email', filterGroup);

            //1 item + 1 groups gives 5 in total
            expect(tools.getRows().length).toBe(2);

            expect(tools.getCellText(1, 0)).toEqual('Carla James');
            expect(tools.getCellText(1, 1)).toContain('carla.james@example.com');
            expect(tools.getCellText(1, 2)).toContain('Restricted');
        }));


        describe('Virtualized Table with Basic Filtering', () => {
            beforeEach(() => {
                hostComponent.columns = tableMockColumns;
                hostComponent.dataSource = tableMockData;
                hostComponent.filtering = true;
                fixture.detectChanges();
            });

            it('to filter data via the filter input', fakeAsync(() => {
                expect(tools.isFilterInputVisible()).toBe(true);
                expect(tools.getRows().length).toBeGreaterThan(1);

                //Set the Filter input value to 'Leo'
                tools.setFilterInputValue('Leo');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRows().length).toBe(1);

                //Reset the filter input value
                tools.setFilterInputValue('');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRows().length).toBeGreaterThan(1);
            }));

            it('to filter data via the filter input when grouping is enabled', fakeAsync(() => {
                component.grouping = true;
                fixture.detectChanges();

                //Group the Table data by 'permission' dataField
                component.addGroup('permission');

                //Expect all rows to be grouped
                expect(tools.isGrouped()).toBe(true);

                //Expect group rows to be 2
                expect(tools.getRowGroups().length).toBe(2);
                expect(tools.isFilterInputVisible()).toBe(true);
                expect(tools.getRows().length).toBe(2);

                //Set the Filter input value to 'Leo'
                tools.setFilterInputValue('Carolyn');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRowGroups().length).toBe(1);
                expect(tools.getRows().length).toBe(1);

                //Expand the target group
                tools.clickRowArrowByIndex(0);

                tick(50);

                //Expect the rows to be expanded
                expect(tools.isRowExpanded(0)).toBe(true);
                expect(tools.getRows().length).toBe(2);

                //Reset the filter input value
                tools.setFilterInputValue('');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRows().length).toBeGreaterThan(1);
                expect(tools.getRowGroups().length).toBe(2);
            }));

            it('to keep selection when filtering is applied to data via the filter input', fakeAsync(() => {
                const dataSource = component.dataSource.toArray(),
                    spy = spyOn(hostComponent, 'handleChange'),
                    itemA = dataSource.find(i => i.name.indexOf('Theresa Reynolds') > -1),
                    itemB = dataSource.find(i => i.name.indexOf('Leo Austin') > -1);
                component.selection = true;
                fixture.detectChanges();

                expect(tools.isFilterInputVisible()).toBe(true);
                expect(tools.getRows().length).toBeGreaterThan(1);
                expect(component.selected.length).toBe(0);

                tools.clickRowSelectionBox(itemA.$.id + '');

                expect(component.selected.length).toBe(1);
                expect(component.selected.includes(itemA.$.id)).toBeTrue();

                tick();

                //Expected 1 'change' event to be fired
                expect(spy).toHaveBeenCalled();
                expect(spy.calls.count()).toBe(1);
                expect(spy.calls.mostRecent().args[0].detail).not.toBeNull();

                //Set the Filter input value to 'Leo'
                tools.setFilterInputValue('Leo Austin');

                //The Table waits 500ms before filtering is applied
                tick(500);

                //Select 
                tools.clickRowSelectionBox(itemB.$.id + '');

                expect(tools.getRows().length).toBe(1);
                expect(component.selected.length).toBe(2);
                expect(component.selected.includes(itemA.$.id)).toBeTrue();
                expect(component.selected.includes(itemB.$.id)).toBeTrue();

                //Expected 1 more 'change' event to be fired here
                expect(spy.calls.count()).toBe(2);
                expect(spy.calls.mostRecent().args[0].detail).not.toBeNull();

                //Reset the filter input value
                tools.setFilterInputValue('');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRows().length).toBeGreaterThan(1);
                expect(component.selected.length).toBe(2);
                expect(component.selected.includes(itemA.$.id)).toBeTrue();
                expect(component.selected.includes(itemB.$.id)).toBeTrue();

                //Checks if the number of 'change' events fired hasn't increased
                expect(spy.calls.count()).toBe(2);
            }));

            it('to refresh the filtering results when the dataSource is updated after filtering has been applied', fakeAsync(() => {
                expect(tools.isFilterInputVisible()).toBe(true);
                expect(tools.getRows().length).toBeGreaterThan(1);

                //Set the Filter input value to 'Joe'
                tools.setFilterInputValue('Joe');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRows().length).toBe(1);

                const updatedData = tableMockData.slice();

                updatedData.push({ name: 'Joe Franco', email: 'joe.franco@example.com', permission: 'Restricted' });
                updatedData.push({ name: 'Joe Budden', email: 'joe.budden@example.com', permission: 'Owner' });

                component.dataSource = updatedData;
                fixture.detectChanges();

                expect(tools.getRows().length).toBe(3);

                //Remove the 'Joe' items and expect the Table to be refreshed
                component.dataSource = updatedData.filter(i => i.name.indexOf('Joe') < 0);
                fixture.detectChanges();

                expect(tools.getRows().length).toBe(0);

                //Clear the filter input
                tools.setFilterInputValue('');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRows().length).toBeGreaterThan(1);

                //Clear the fakeAsync timers
                flush();
            }));

            it('to preserve selection when table is in tree mode and filtering input is changed', fakeAsync(() => {
                component.dataSource = new window.Smart.DataAdapter({
                    dataSource: [
                        { id: 0, name: 'Walter Stewart', email: 'walter.stewart@example.com', permission: 'Owner', parentid: -1 },
                        { id: 1, name: 'Manuel Smith', email: 'manuel.smith@example.com', permission: 'Owner', parentid: -1 },
                        { id: 2, name: 'Annette Gray', email: 'annette.gray@example.com', permission: 'Restricted', parentid: -1 },
                        { id: 3, name: 'Candice Murphy', email: 'candice.murphy@example.com', permission: 'Owner', parentid: -1 },
                        { id: 4, name: 'Theresa Reynolds', email: 'theresa.reynolds@example.com', permission: 'Restricted', parentid: 0 },
                        { id: 5, name: 'Wyatt Silva', email: 'wyatt.silva@example.com', permission: 'Restricted', parentid: 0 },
                        { id: 6, name: 'April Hayes', email: 'april.hayes@example.com', permission: 'Owner', parentid: 1 },
                        { id: 7, name: 'Brayden Henry', email: 'brayden.henry@example.com', permission: 'Restricted', parentid: 1 },
                        { id: 11, name: 'Ivan Kennedy', email: 'ivan.kennedy@example.com', permission: 'Restricted', parentid: 2 },
                        { id: 12, name: 'Sofia Grant', email: 'sofia.grant@example.com', permission: 'Restricted', parentid: 2 },
                        { id: 16, name: 'Derrick Larson', email: 'derrick.larson@example.com', permission: 'Restricted', parentid: 3 },
                        { id: 17, name: 'Carla James', email: 'carla.james@example.com', permission: 'Restricted', parentid: 3 }
                    ],
                    dataSourceType: 'array',
                    dataFields: [
                        'id: number',
                        'name: string',
                        'email: string',
                        'permission: string'
                    ],
                    id: 'id',
                    keyDataField: 'id',
                    parentDataField: 'parentid',
                });

                component.selection = true;
                fixture.detectChanges();

                tools.clickRowArrowByIndex(0);
                tools.clickRowArrowByIndex(1)

                tick(50);

                //Expect the rows to be expanded
                expect(tools.isRowExpanded('0')).toBe(true);
                expect(tools.isRowExpanded('1')).toBe(true);

                //Set the Filter input value to 'Wyatt'
                tools.setFilterInputValue('Wyatt');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRowById('0')).not.toBeNull();
                expect(tools.getRowById('1')).toBeNull();
                expect(tools.getRowById('2')).toBeNull();
                expect(tools.getRowById('3')).toBeNull();
                expect(tools.getRowById('5')).not.toBeNull();

                tools.clickRowSelectionBox('5');

                //Since 'selectionByHierarchy' is true by default, the expected selection is 2 - the target item and it's hierarhical parent
                expect(component.selected.length).toBe(2);
                expect(component.selected.indexOf(5) > -1).toBeTrue();
                expect(component.selected.indexOf(0) > -1).toBeTrue();

                //Clear the filtering
                tools.setFilterInputValue('');

                //The Table waits 500ms before filtering is applied
                tick(500);

                //Check if the selection is preserved
                expect(component.selected.length).toBe(1);
                expect(component.selected.indexOf(5) > -1).toBeTrue();

                //Clear the fakeAsync timers
                flush();
            }));

            it('to filter tree items property when table is in tree mode and filtering input is changed', fakeAsync(() => {
                component.dataSource = new window.Smart.DataAdapter({
                    dataSource: [
                        { id: 0, name: 'Walter Stewart', email: 'walter.stewart@example.com', permission: 'Owner', parentid: -1 },
                        { id: 1, name: 'Manuel Smith', email: 'manuel.smith@example.com', permission: 'Owner', parentid: -1 },
                        { id: 2, name: 'Annette Gray', email: 'annette.gray@example.com', permission: 'Restricted', parentid: -1 },
                        { id: 4, name: 'Theresa Reynolds', email: 'theresa.reynolds@example.com', permission: 'Restricted', parentid: 0 },
                        { id: 5, name: 'Wyatt Silva', email: 'wyatt.silva@example.com', permission: 'Restricted', parentid: 0 },
                        { id: 6, name: 'April Hayes', email: 'april.hayes@example.com', permission: 'Owner', parentid: 1 },
                        { id: 7, name: 'Brayden Henry', email: 'brayden.henry@example.com', permission: 'Restricted', parentid: 1 },
                        { id: 11, name: 'Ivan Kennedy', email: 'ivan.kennedy@example.com', permission: 'Restricted', parentid: 2 },
                        { id: 12, name: 'Sofia Grant', email: 'sofia.grant@example.com', permission: 'Restricted', parentid: 2 }
                    ],
                    dataSourceType: 'array',
                    dataFields: [
                        'id: number',
                        'name: string',
                        'email: string',
                        'permission: string'
                    ],
                    id: 'id',
                    keyDataField: 'id',
                    parentDataField: 'parentid',
                });

                component.selection = true;
                fixture.detectChanges();

                //Expand all three groups
                tools.clickRowArrowById('0');
                tools.clickRowArrowById('1');
                tools.clickRowArrowById('2');

                tick(50);

                //Expect the rows to be expanded
                expect(tools.isRowExpanded('0')).toBe(true);
                expect(tools.isRowExpanded('1')).toBe(true);
                expect(tools.isRowExpanded('2')).toBe(true);

                //Set the Filter input value to 'April Hayes'
                tools.setFilterInputValue('April Hayes');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRowById('0')).toBeNull();
                expect(tools.getRowById('1')).not.toBeNull();
                expect(tools.getRowById('2')).toBeNull();
                expect(tools.getRowById('6')).not.toBeNull();
                expect(tools.getRowById('4')).toBeNull();
                expect(tools.getRowById('5')).toBeNull();
                expect(tools.getRowById('7')).toBeNull();
                expect(tools.getRowById('11')).toBeNull();
                expect(tools.getRowById('12')).toBeNull();

                //Expect only the Row with id '1' to be expandable
                expect(tools.isRowExpandable('1')).toBeTrue();

                //Set the Filter input value to 'Sofia'
                tools.setFilterInputValue('Sofia');

                //The Table waits 500ms before filtering is applied
                tick(500);

                expect(tools.getRowById('0')).toBeNull();
                expect(tools.getRowById('1')).toBeNull();
                expect(tools.getRowById('2')).not.toBeNull();
                expect(tools.getRowById('6')).toBeNull();
                expect(tools.getRowById('4')).toBeNull();
                expect(tools.getRowById('5')).toBeNull();
                expect(tools.getRowById('7')).toBeNull();
                expect(tools.getRowById('11')).toBeNull();
                expect(tools.getRowById('12')).not.toBeNull();

                //Expect only the Row with id '2' to be expandable
                expect(tools.isRowExpandable('2')).toBeTrue();

                //Clear the filter input
                tools.setFilterInputValue('');

                //The Table waits 500ms before filtering is applied
                tick(500);

                //Expect all items to be visible
                expect(tools.getRowById('0')).not.toBeNull();
                expect(tools.getRowById('1')).not.toBeNull();
                expect(tools.getRowById('2')).not.toBeNull();
                expect(tools.getRowById('6')).not.toBeNull();
                expect(tools.getRowById('4')).not.toBeNull();
                expect(tools.getRowById('5')).not.toBeNull();
                expect(tools.getRowById('7')).not.toBeNull();
                expect(tools.getRowById('11')).not.toBeNull();
                expect(tools.getRowById('12')).not.toBeNull();

                 //Expect all rows to be exapndable since filter input is empty
                 expect(tools.isRowExpandable('0')).toBeTrue();
                 expect(tools.isRowExpandable('1')).toBeTrue();
                 expect(tools.isRowExpandable('2')).toBeTrue();

                //Clear the fakeAsync timers
                flush();
            }));
        });
    });
});
