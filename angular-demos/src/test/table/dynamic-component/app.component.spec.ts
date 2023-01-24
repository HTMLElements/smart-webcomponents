import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Table, TableColumn, TableComponent, TableModule } from 'smart-webcomponents-angular/table';

import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild, OnChanges, OnInit, AfterViewInit } from '@angular/core';
import { TestHarness, TableTestHarness, TableGroupingFormatFuncion } from './../../scripts/test.tools';

/**
 * This class defines mock data for the component's table to render
 * for the purposes of testing table component features.
 */
// tslint:disable-next-line: max-classes-per-file
interface TableDataSourceMock {
    id: string;
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
    styleUrls: ['./app.component.scss'],
    template: `
        <smart-table #table [dataSource]="dataSource" [columns]="columns" [locale]="language"
            [virtualization]="virtualization" [grouping]="grouping" [selection]="selection"
            [treeMode]="treeMode" [parentDataField]="parentDataField" [groupFormatFunction]="groupFormatFunction" 
            [dataSourceSettings]="dataSourceSettings"
            (change)="onSelectionChange($event)"
            (columnClick)="onTableColumnClick($event)"
            (onCellClick)="onCellClick($event)"></smart-table>`
})
class TableHostComponent implements OnInit {
    @Input() dataSource: TableDataSourceMock[] = [];
    @Input() columns: TableColumn[] = [];
    @Input() virtualization = false;
    @Input() grouping: boolean = false;
    @Input() treeMode: boolean = false;
    @Input() parentDataField: string;
    @Input() language: string = 'en';
    @Input() selection: boolean = false;
    @Input() dataSourceSettings: DataSourceSettings = {};
    @Input() groupFormatFunction: (settings: TableGroupingFormatFuncion) => void;

    @ViewChild('table', { read: TableComponent, static: true }) table!: TableComponent;

    ngOnInit(): void {
    }

    //Selection Change handler
    onSelectionChange(event: CustomEvent): void {

    }

    //Table column click handler
    onTableColumnClick(event: CustomEvent): void {

    }

    //Cell click handler
    onCellClick(event: CustomEvent): void {
    }
}

describe('Table HostComponent', () => {
    let hostComponent: TableHostComponent;
    let component: TableComponent;
    let fixture: ComponentFixture<TableHostComponent>;
    let tools: TableTestHarness;
    let smartTable: Table;

    const TableMockColumns = [
        { label: 'Id', dataField: 'id' },
        { label: 'Name', dataField: 'name' },
        { label: 'Description', dataField: 'description' }
    ] as TableColumn[];

    const TableMockDataSource = [
        {
            id: '123',
            name: 'TestItem1',
            description: 'I am a test item',
            lastUpdatedTimestamp: new Date(2010, 1, 2).toISOString(),
            reportsTo: null
        },
        {
            id: '456',
            name: 'TestItem2',
            description: 'I am a test item also',
            lastUpdatedTimestamp: new Date(2010, 1, 2).toISOString(),
            reportsTo: '123'
        }
    ] as TableDataSourceMock[];

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
        // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

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

    describe('Basic', () => {
        beforeEach((async () => {
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = TableMockDataSource;
            fixture.detectChanges();
        }));

        it('should render rows', () => {
            expect(tools.getRows().length).toEqual(2);
        });

        it('should render item property cell', () => {
            expect(tools.getCellText(0, 1)).toEqual(TableMockDataSource[0].name);
        });

        it('should render header cell', () => {
            // Header with index 0 is the checkbox header
            expect(tools.getHeaderText(1)).toEqual('Name');
        });

        it('should add rows when data source is updated with new data', () => {
            hostComponent.dataSource = [
                TableMockDataSource[0],
                TableMockDataSource[1],
                {
                    id: '789',
                    name: 'new data item',
                    description: 'wow, what a neat description',
                    lastUpdatedTimestamp: new Date().toISOString()
                }
            ];

            fixture.detectChanges();

            expect(tools.getRows().length).toEqual(hostComponent.dataSource.length);
        });

        it('should remove rows when data source is updated without existing data', () => {
            hostComponent.dataSource = hostComponent.dataSource = [
                TableMockDataSource[0],
                TableMockDataSource[1],
                {
                    id: '789',
                    name: 'new data item',
                    description: 'wow, what a neat description',
                    lastUpdatedTimestamp: new Date().toISOString()
                }
            ];
            fixture.detectChanges();
            // Remove the middle row
            hostComponent.dataSource = hostComponent.dataSource = [
                TableMockDataSource[0],
                {
                    id: '789',
                    name: 'new data item',
                    description: 'wow, what a neat description',
                    lastUpdatedTimestamp: new Date().toISOString()
                }
            ];
            fixture.detectChanges();

            expect(tools.getRows().length).toEqual(hostComponent.dataSource.length);
            expect(tools.getCellText(0, 1)).toEqual(TableMockDataSource[0].name);
            expect(tools.getCellText(1, 1)).toEqual('new data item');
        });

        it('should not update rows if fingerprint has not changed', () => {
            const dataSource = [
                {
                    id: TableMockDataSource[0].id,
                    name: 'An updated test item',
                    description: 'This should not be updated',
                    lastUpdatedTimestamp: TableMockDataSource[0].lastUpdatedTimestamp
                }
            ];

            hostComponent.dataSource = dataSource;
            fixture.detectChanges();

            expect(tools.getCellText(0, 1)).toEqual(dataSource[0].name);
        });

        it('should always update rows if fingerprint was not set', () => {
            hostComponent.dataSource = [
                {
                    id: TableMockDataSource[0].id,
                    name: 'An updated test item',
                    description: 'This should be updated even if it has the same timestamp',
                    lastUpdatedTimestamp: TableMockDataSource[0].lastUpdatedTimestamp
                }
            ];
            fixture.detectChanges();

            expect(tools.getCellText(0, 1)).toEqual('An updated test item');
        });

        it('should update rows if fingerprint has changed', async () => {
            const updatedName = 'An updated test item';

            hostComponent.dataSource = [
                {
                    id: TableMockDataSource[0].id,
                    name: updatedName,
                    description: 'This should be updated',
                    lastUpdatedTimestamp: new Date().toISOString()
                }
            ];
            fixture.detectChanges();

            expect(tools.getCellText(0, 1)).toEqual(updatedName);
        });
    });

    describe('table settings', () => {
        it('should not display data if columns are not configured', () => {
            hostComponent.dataSource = TableMockDataSource;
            fixture.detectChanges();

            expect(component.dataSource.length).toBe(2);

            // no columns yet, so data is not visible
            expect(tools.getHeaderText(1)).not.toContain(TableMockColumns[1].label);
            expect(tools.getHeaderText(2)).not.toContain(TableMockColumns[2].label);

            hostComponent.columns = TableMockColumns;
            fixture.detectChanges();

            // data becomes visible
            expect(tools.getHeaderText(1)).toContain(TableMockColumns[1].label);
            expect(tools.getHeaderText(2)).toContain(TableMockColumns[2].label);
        });

        it('headers should be visible even if no data is configured', () => {
            hostComponent.columns = TableMockColumns;
            fixture.detectChanges();

            expect(tools.getHeaderText(1)).toContain(TableMockColumns[1].label);
            expect(tools.getHeaderText(2)).toContain(TableMockColumns[2].label);
        });

        it('should display data if virtualization is enabled', () => {
            hostComponent.dataSource = TableMockDataSource;
            hostComponent.columns = TableMockColumns;
            hostComponent.virtualization = true;
            fixture.detectChanges();

            expect(tools.getHeaderText(1)).toContain(TableMockColumns[1].label);
            expect(tools.getHeaderText(2)).toContain(TableMockColumns[2].label);
        });
    });

    describe('table events', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = TableMockDataSource;
            hostComponent.selection = true;
            fixture.detectChanges();
        });

        it('should fire onSelectionChange event when selection changes', fakeAsync(() => {
            const spy = spyOn(hostComponent, 'onSelectionChange');

            component.select(0);
            tick();

            const selected = component.selected;

            // console.log(spy.calls.first());

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);
            expect(spy.calls.mostRecent().args[0].detail).not.toBeNull();
            expect(selected[0]).toBe(0);
        }));

        it('should fire onSelectionChange event when a selected item is removed', fakeAsync(() => {
            const spy = spyOn(hostComponent, 'onSelectionChange');

            component.select([0, 1]);
            tick();

            const dataSource = component.dataSource,
                selected = component.selected;

            expect(spy).toHaveBeenCalled();
            expect(selected.length).toBe(2);
            expect(dataSource[selected[0]].id).toEqual(TableMockDataSource[0].id);
            expect(dataSource[selected[1]].id).toEqual(TableMockDataSource[1].id);

            spy.calls.reset();

            hostComponent.dataSource = [TableMockDataSource[0]];
            fixture.detectChanges();

            expect(spy).toHaveBeenCalled();
            expect(selected.length).toBe(2);
            expect(dataSource[selected[0]].id).toEqual(TableMockDataSource[0].id);
        }));

        it('should not fire onSelectionChange event when a selected item is changed', fakeAsync(() => {
            component.select([0, 1]);
            tick();

            const spy = spyOn(hostComponent, 'onSelectionChange');

            const updatedItem = {
                id: TableMockDataSource[0].id,
                name: 'updated name',
                description: 'updatedDescription',
                lastUpdatedTimestamp: new Date().toISOString()
            };

            hostComponent.dataSource = [updatedItem, TableMockDataSource[1]];
            fixture.detectChanges();
            tick();

            expect(spy).not.toHaveBeenCalled();
        }));

        it('should not fire onSelectionChange event when an item is added', fakeAsync(() => {
            component.select([0, 1]);
            tick();

            const spy = spyOn(hostComponent, 'onSelectionChange');

            hostComponent.dataSource = [
                TableMockDataSource[0],
                TableMockDataSource[1],
                {
                    id: '789',
                    name: 'new data item',
                    description: 'wow, what a neat description',
                    lastUpdatedTimestamp: new Date().toISOString()
                }
            ];

            fixture.detectChanges();
            tick();

            expect(spy).not.toHaveBeenCalled();
        }));

        it('should output (headerClick) event when clicking a header', () => {
            const spy = spyOn(hostComponent, 'onTableColumnClick');

            tools.clickHeader(1);

            expect(spy.calls.mostRecent().args[0].detail.dataField).toEqual(TableMockColumns[0].dataField);
        });

        it('should fire (onCellClick) event when clicking a cell', () => {
            const spy = spyOn(hostComponent, 'onCellClick');

            tools.clickCell(0, 1);

            const spyDetails = spy.calls.mostRecent().args[0].detail;

            expect(spyDetails.dataField).toEqual(TableMockColumns[0].dataField);
            expect(spyDetails.value).toEqual(TableMockDataSource[0][spyDetails.dataField]);
        });
    });

    describe('tableState methods', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = TableMockDataSource;
            fixture.detectChanges();
        });

        it('should return tableState object from getTableState method with all columns from configuration', async () => {
            const expectedColumns = TableMockColumns.map(column => column.dataField);

            const tableState = await component.getState();

            const receivedColumns = tableState.columns.map(column => column.dataField);
            expect(receivedColumns).toEqual(expectedColumns);
        });

        it('should display columns from the tableState object used on setTableState method', async () => {
            component.loadColumnStateBehavior = 'stateOnly';
            const tableState = await component.getState();
            tableState.columns = [TableMockColumns[0]];
            fixture.detectChanges();

            component.loadState(tableState);
            fixture.detectChanges();

            const allHeaders = tools.getAllHeadersText();
            const expectedColumns = [TableMockColumns[0].label];
            expect(allHeaders).toEqual(expectedColumns);
        });
    });

    describe('grouping support', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = [
                { id: 'id-1', name: 'Name 1', description: 'Description 1' },
                { id: 'id-2', name: 'Name 2', description: 'Description 2' },
                { id: 'id-3', name: 'Name 1', description: 'Description 3' }];
            hostComponent.grouping = true;
            hostComponent.selection = true;
            fixture.detectChanges();
        });

        it('should group by property name', () => {
            tools.setTableGrouping(['name'], false);
            // await refreshComponent();

            // Verify the group header to validate that there are 2 items in the group as well as the group name.
            expect(tools.isGroupExpanded(0)).toBeFalse();
            expect(tools.getGroupHeader(0)).toEqual('Name: Name 1(2)');

            // Table header is considered a row
            // Each group name is considered a row
            // Collapsed groups are still present in the DOM -> Cannot test collapse/expand behavior
            expect(tools.getRows().length).toEqual(5);
        });

        it('should display the given name as group header', () => {
            // Set the group title of one property
            hostComponent.groupFormatFunction = (settings: TableGroupingFormatFuncion) => {
                if (settings.column === 'name') {
                    settings.value = 'Given Name';
                }
            };

            fixture.detectChanges();

            tools.setTableGrouping(['name', 'description'], false);
            // await refreshComponent();

            expect(tools.isGroupExpanded(0)).toBeFalse();
            expect(tools.getGroupHeader(0)).toEqual('Name: Given Name(2)');
            expect(tools.getGroupHeader(1)).toEqual('Description: Description 1(1)');
            expect(tools.getGroupHeader(2)).toEqual('Description: Description 3(1)');
            expect(tools.getGroupHeader(3)).toEqual('Name: Given Name(1)');
            expect(tools.getGroupHeader(4)).toEqual('Description: Description 2(1)');
            expect(tools.getRows().length).toEqual(8);
        });

        it('should expand group when clicking the expand button', () => {
            tools.setTableGrouping(['name'], false);
            // await refreshComponent();

            tools.clickGroupExpandButton(0);

            expect(tools.isGroupExpanded(0)).toBeTrue();
        });

        it('should collapse group when clicking the collapse button', () => {
            tools.setTableGrouping(['name'], false);
            // await refreshComponent();

            tools.clickGroupExpandButton(0);

            expect(tools.isGroupExpanded(0)).toBeTrue();

            tools.clickGroupExpandButton(0);

            expect(tools.isGroupExpanded(0)).toBeFalse();
        });

        it('should select all items from within the group when selecting the group', () => {
            const spy = spyOn(hostComponent, 'onSelectionChange');

            tools.setTableGrouping(['name'], false);
            // await refreshComponent();

            tools.clickGroupExpandButton(0);
            tools.clickCell(0, 0);

            const dataSource = component.dataSource,
                selected = component.selected;

            expect(spy).toHaveBeenCalled();
            expect(dataSource[selected[0]].id).toEqual(dataSource[0].id);
            expect(dataSource[selected[1]].id).toEqual(dataSource[2].id);
        });

        it('should expand groups by default when setting grouping properties', () => {
            tools.setTableGrouping(['name']);
            // await refreshComponent();

            // Verify the group header to validate that there are 2 items in the group as well as the group name.
            expect(tools.isGroupExpanded(0)).toBeTrue();
            expect(tools.getGroupHeader(0)).toEqual('Name: Name 1(2)');
            // Table header is considered a row
            // Each group name is considered a row
            // Collapsed groups are still present in the DOM -> Cannot test collapse/expand behavior
            expect(tools.getRows().length).toEqual(5);
        });
    });

    describe('Tree Mode', () => {
        it('should render rows when treeMode is true', () => {
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = [
                TableMockDataSource[0],
                TableMockDataSource[1],
                {
                    id: '554',
                    name: 'TestItem3',
                    description: 'I am a test item',
                    lastUpdatedTimestamp: new Date(2010, 1, 2).toISOString(),
                    reportsTo: TableMockDataSource[1].id
                }
            ];
            hostComponent.dataSourceSettings = {
                keyDataField: 'id',
                parentDataField: 'reportsTo',
                id: 'id',
                dataFields: [
                    'id: number',
                    'name: string',
                    'description: string',
                    'lastUpdatedTimestamp: string',
                    'reportsTo: string'
                ]
            };

            fixture.detectChanges();

            expect(tools.isTreeNodeExpanded(0)).toBeFalse();

            tools.clickGroupExpandButton(0);

            expect(tools.isTreeNodeExpanded(0)).toBeTrue();
            expect(tools.isTreeNodeExpanded(1)).toBeFalse();

            tools.clickGroupExpandButton(1);

            expect(tools.isTreeNodeExpanded(1)).toBeTrue();
        });

        it('should disable grouping when treeMode changes to false', () => {
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = TableMockDataSource;
            hostComponent.treeMode = true;
            hostComponent.parentDataField = 'reportsTo';
            hostComponent.treeMode = false;
            fixture.detectChanges();

            expect(tools.getGroupExpandButton(0)).toBeFalsy();
            expect(tools.getGroupExpandButton(1)).toBeFalsy();
        });
    });
});
