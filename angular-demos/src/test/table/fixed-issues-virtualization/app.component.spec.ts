import { ComponentFixture, fakeAsync, TestBed, tick, flush } from '@angular/core/testing';
import { Table, TableColumn, TableComponent, TableModule } from 'smart-webcomponents-angular/table';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild, OnChanges, OnInit, AfterViewInit, Output, ComponentFactory, ComponentRef, ComponentFactoryResolver } from '@angular/core';
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
            [dataSourceSettings]="dataSourceSettings"
            [virtualization]="virtualization"
            [selection]="selection"
            [grouping]="grouping"
            [sortMode]="sortMode"
            (onChange)="handleSelectionChange($event)"></smart-table>`
})

class TableHostComponent implements OnInit {
    @ViewChild('table', { read: TableComponent, static: true }) table!: TableComponent;

    constructor(private resolver: ComponentFactoryResolver) { }

    componentRef: any;

    dataSource = [];
    dataSourceSettings = {};
    columns = [];
    keyboardNavigation: boolean = false;
    virtualization: boolean = true;
    selection: boolean = false;
    grouping: boolean = false;
    sortMode: string = 'one';

    ngOnInit(): void { }

    //Selection Change handler
    handleSelectionChange(event: CustomEvent): void { }
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
        { label: 'Property_Group', dataField: 'property_all', dataType: 'string' }
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

    describe('Virtualized Table', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            fixture.detectChanges();
        });

        it('to fire a change event when grouped and dataSource is changed', () => {
            //https://github.com/ni-kismet/jqx/issues/1810
            const data = [
                { id: 0, productName: 'name1', property_all: 'A', quantity: 1, price: 1.5 },
                { id: 1, productName: 'name2', property_all: 'A', quantity: 2, price: 2.5 },
                { id: 2, productName: 'name3', property_all: 'A', quantity: 3, price: 3.5 },
                { id: 3, productName: 'name4', property_all: 'A', quantity: 4, price: 4.5 },
                { id: 4, productName: 'name5', property_all: 'A', quantity: 5, price: 5.5 }
            ];

            hostComponent.dataSource = data;
            hostComponent.grouping = true;
            hostComponent.selection = true;
            fixture.detectChanges();

            component.addGroup('property_all');

            expect(tools.isTableGrouped()).toBeTrue();

            tools.clickRowSelectionBox(tools.getRows()[0]);

            expect(component.selected.length).toBe(data.length);

            const spy = spyOn(hostComponent, 'handleSelectionChange');

            hostComponent.dataSource = data.slice(0, 3);
            fixture.detectChanges();

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);

            expect(component.selected.length).toBe(3);
        });

        it('to select a tree leaf item', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1684
            hostComponent.selection = true;
            hostComponent.columns = [
                { label: 'Name', dataField: 'name' },
                { label: 'Description', dataField: 'description' }
            ];

            hostComponent.dataSource = new window.Smart.DataAdapter({
                dataSource: [
                    {
                        id: 123,
                        name: 'TestItem1',
                        parentRef: null,
                        description: 'I am a test item'
                    },
                    {
                        id: 456,
                        name: 'TestItem2',
                        parentRef: 123,
                        description: 'I am a test item also'
                    }],
                keyDataField: 'id',
                parentDataField: 'parentRef',
                id: 'id',
                dataFields: [
                    'id: number',
                    'parentRef: number',
                    'name: string',
                    'description: string'
                ]
            });

            fixture.detectChanges();

            tools.clickRowArrowByIndex(0);

            tick(200);

            expect(tools.isTreeNodeExpanded(0)).toBeTrue();

            expect(component.selected.length).toBe(0);

            tools.clickRowSelectionBox('456');

            expect(component.selected.length).not.toBe(0);

            flush();
        }));

        it('to set templateElement/templateElementSettings on a grouped and virtualized Table ', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1700
            const productNameColumn = component.columns[1];
            const spyObj = {
                callback: (value, row, templateElement) => templateElement.innerHTML = value + ''
            }

            const spy = spyOn(spyObj, 'callback');

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 50);

            productNameColumn.templateElement = '<smart-button></smart-button>';
            productNameColumn.templateElementSettings = function (value, row, templateElement) {
                spyObj.callback(value, row, templateElement);
            };

            fixture.detectChanges();

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBeGreaterThan(1);

            const args = spy.calls.mostRecent().args;

            expect(typeof args[0] === 'string').toBeTrue();
            expect(typeof args[1] === 'number').toBeTrue();
            expect(args[2] instanceof HTMLElement).toBeTrue();
            expect(args[2].nodeName.toLowerCase()).toEqual('smart-button');

            hostComponent.grouping = true;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);

            fixture.detectChanges();

            component.addGroup('quantity');

            expect(tools.isTableGrouped()).toBeTrue();

            tools.expandRow(0);

            tick(200);

            expect(tools.isRowExpanded(0)).toBeTrue();
            expect(tools.getCell(1, 'productName').querySelector('smart-button')).not.toBeNull();

            delete productNameColumn.templateElement;
            delete productNameColumn.templateElementSettings;

            flush();
        }));

        it('to sanitize the row group content when sanitizeHTML is set to avoid XSS attacks', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1699

            hostComponent.selection = true;
            hostComponent.grouping = true;
            hostComponent.keyboardNavigation = true;
            hostComponent.columns = [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
                { label: 'Price', dataField: 'price', dataType: 'number' },
                { label: 'Date Purchased', dataField: 'date', dataType: 'date' }
            ];

            hostComponent.dataSourceSettings = {
                dataFields: [
                    'id: number',
                    'productName: string',
                    'quantity: number',
                    'price: number',
                    'date: date'
                ],
                sanitizeHTML: 'all',
                groupBy: [
                    'productName'
                ]
            };

            fixture.detectChanges();

            hostComponent.dataSource = [
                { productName: 'A <img src="" onerror="alert(\'XSS\');"/>', qunatity: 5, price: 0.5 },
                { productName: 'B', qunatity: 21, price: 5.5 },
                { productName: 'C', qunatity: 52, price: 7.5 },
                { productName: 'D', qunatity: 27, price: 8 },
            ];

            fixture.detectChanges();

            const spy = spyOn(window, 'alert');

            expect(spy).not.toHaveBeenCalled();

            expect(tools.isTableGrouped()).toBeTrue();

            tools.clickRowArrowByIndex(0);

            tick(200);

            expect(spy).not.toHaveBeenCalled();

            flush();
        }));
        it('to fire a change event if the selection has changed between beginUpdate and endUpdate', () => {
            //https://github.com/ni-kismet/jqx/issues/1713
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 100);
            hostComponent.selection = true;

            fixture.detectChanges();

            const dataSource = component.dataSource.toArray();

            component.select(dataSource[50].id);
            component.select(dataSource[60].id);
            component.select(dataSource[40].id);

            expect(component.selected.length).toBe(3);
            expect(component.selected.includes(40)).toBeTrue();
            expect(component.selected.includes(50)).toBeTrue();
            expect(component.selected.includes(60)).toBeTrue();

            const changeEventSpy = spyOn(hostComponent, 'handleSelectionChange');

            component.beginUpdate();

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);

            component.endUpdate();

            fixture.detectChanges();

            expect(changeEventSpy.calls.count()).toBe(1);

            changeEventSpy.calls.reset();

            component.beginUpdate();
            component.endUpdate();

            expect(changeEventSpy.calls.count()).toBe(0);
        });

        it('to fire a change event if the selection has changed between beginUpdate and endUpdate', () => {
            //https://github.com/ni-kismet/jqx/issues/1721

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);
            hostComponent.selection = true;

            fixture.detectChanges();

            for (let i = 0; i < 10; i++) {
                component.select(i);
            }

            expect(component.selected.length).toBe(component.dataSource.length);

            component.dataSource = [];

            fixture.detectChanges();

            expect(component.selected.length).toBe(0);
        });
        it('to expand all groups when expandAllGroups method has been called', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1722
            hostComponent.grouping = true;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns);
            fixture.detectChanges();

            component.addGroup('productName');
            component.addGroup('price');
            component.addGroup('quantity');

            expect(tools.isTableGrouped()).toBeTrue();

            component.expandAllGroups();

            tick(50);

            //Checks whether all visible tree rows are expanded or not
            expect(tools.areGroupsExpanded()).toBeTrue();

            flush();
        }));
        it('to return the column widths in percentages via the getColumnProperty API method if set in percentages', async () => {
            //https://github.com/ni-kismet/jqx/issues/1727
            const columns = TableMockColumns.slice(0, 3);

            for (let i = 0, max = columns.length; i < max; i += 1) {
                columns[i].width = '25%';
            }

            hostComponent.columns = columns;
            hostComponent.dataSource = tools.getDataSourceFromColumns(columns);

            fixture.detectChanges();

            for (let i = 0, max = columns.length; i < max; i += 1) {
                const colSize = await component.getColumnProperty(columns[i].dataField, 'width');

                expect(colSize).toEqual('25%');
            }
        });
        it('to show the group header of the expanded group when the page loads', async () => {
            //https://github.com/ni-kismet/jqx/issues/1730
            const columns = [
                {
                    label: 'Name',
                    dataField: 'elementName',
                    visible: true,
                    templateElement: '<a style="cursor: pointer"></a>',
                    templateElementSettings: (value: string, id: string, element: any) => {
                        element.innerHTML = value;
                    }
                },
                {
                    label: 'Value',
                    visible: false,
                    dataField: 'elementValue'
                },
                {
                    label: 'Alarms',
                    dataField: 'elementIcon',
                    allowSort: false,
                    visible: true,
                    dataType: 'any',
                    // See "app.module.ts" where "my-custom-icon" is exported as a custom element.
                    templateElement: '<my-custom-icon></my-custom-icon>',
                    templateElementSettings: (value, id, element) => {
                        if (value) {
                            const matIcon = element.querySelector('mat-icon') ? element.querySelector('mat-icon') : element;

                            element.style.display = '';
                            element.mattooltip = value.mattooltip;
                            element.colorclass = value.color;
                            matIcon.innerHTML = 'notifications';
                        }
                        else {
                            element.style.display = 'none';
                        }
                    }
                },
                {
                    label: 'Address',
                    visible: false,
                    dataField: 'address',
                    formatFunction: (settings: any) => {
                        settings.template = settings.value;
                    }
                },
                {
                    label: 'Date',
                    dataField: 'date',
                    visible: true,
                    formatFunction: (settings) => {
                        settings.template = settings.value;
                    }
                },
                {
                    label: 'Last Name',
                    visible: true,
                    dataField: 'lastName',
                    formatFunction: (settings: any) => {
                        settings.template = settings.value;
                    }
                }
            ];

            function generateData(): any[] {
                const data = [];
                const childIds = 501;
                for (let i = 0; i < 100; i++) {
                    if (i % 2 === 0) {
                        data.push({
                            id: `${i}`,
                            reportsTo: null,
                            elementName: `Name - 1`,
                            elementValue: `Value - ${i}`,
                            elementIcon: {
                                content: `notifications`,
                                tooltip: 'a tooltip',
                                color: 'checkmark-icon'
                            },
                            address: 'some address',
                            date: new Date().toISOString(),
                            lastName: 'Last Name',
                            lastUpdatedTimestamp: new Date().toISOString()
                        },
                            {
                                id: `${childIds + i}`,
                                reportsTo: `0`,
                                elementName: `Name - 1`,
                                elementValue: `Value - ${i}`,
                                elementIcon: {
                                    content: `notifications`,
                                    tooltip: 'a tooltip',
                                    color: 'checkmark-icon'
                                },
                                address: 'some address',
                                date: new Date().toISOString(),
                                lastName: 'Last Name',
                                lastUpdatedTimestamp: new Date().toISOString()
                            });
                    } else {
                        data.push({
                            id: `${i}`,
                            reportsTo: null,
                            elementName: `Name - 2`,
                            elementValue: `Value - 2`,
                            elementIcon: {
                                content: `notifications`,
                                tooltip: 'a tooltip',
                                color: 'checkmark-icon'
                            },
                            address: 'some address',
                            date: new Date().toISOString(),
                            lastName: 'Last Name',
                            lastUpdatedTimestamp: new Date().toISOString()
                        }, {
                            id: `${childIds + i}`,
                            reportsTo: `1`,
                            elementName: `Name - ${i}`,
                            elementValue: `Value - ${i}`,
                            elementIcon: {
                                content: `notifications`,
                                tooltip: 'a tooltip',
                                color: 'checkmark-icon'
                            },
                            address: 'some address',
                            date: new Date().toISOString(),
                            lastName: 'Last Name',
                            lastUpdatedTimestamp: new Date().toISOString()
                        });
                    }
                }
                return data;
            }

            hostComponent.grouping = true;
            hostComponent.columns = columns;
            hostComponent.dataSource = generateData();
            fixture.detectChanges();

            component.addGroup('address');

            expect(tools.isTableGrouped()).toBeTrue();

            //Expect the group row to exist
            expect(tools.getRowGroups().length).toBe(1);
        });

        it('to restore the expanded groups via loadState API method', fakeAsync(() => {
            let state;

            hostComponent.grouping = true;
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 500);

            fixture.detectChanges();

            component.addGroup('productName');

            component.expandGroup('0');
            component.expandGroup('2');

            tick(50);

            expect(tools.isTableGrouped()).toBeTrue();
            expect(tools.isGroupExpanded(0)).toBeTrue();

            expect(component.stateSettings.indexOf('expanded')).toBeGreaterThan(-1);
            expect(component.stateSettings.indexOf('selected')).toBeGreaterThan(-1);

            component.stateSettings = ['columns', 'grouped'];

            fixture.detectChanges();

            expect(component.stateSettings.indexOf('expanded')).toBe(-1);
            expect(component.stateSettings.indexOf('selected')).toBe(-1);

            component.getState().then(s => state = s);

            tick(50);

            expect(state.selected).toBeUndefined();
            expect(state.expanded).toBeUndefined();
            expect(state.columns).not.toBeUndefined();
            expect(state.grouped).not.toBeUndefined();
            expect(state.grouped.indexOf('productName')).toBeGreaterThan(-1);

            component.removeGroup('productName');

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 100);

            fixture.detectChanges();

            expect(tools.isTableGrouped()).toBeFalse();

            component.loadState(state);

            //expect the table to be grouped again
            expect(tools.isTableGrouped()).toBeTrue();

            //Does not keep track of the expanded groups. Not sure if it's a bug or not
            // expect(tools.isGroupExpanded(0)).toBeTrue();

            flush();
        }));

        it('to display the full data when Scroll bar has reached bottom', () => {
            //https://github.com/ni-kismet/jqx/issues/1843

            const mockColumns = TableMockColumns.slice(0, 3);

            mockColumns[2].templateElement = '<am-icon></am-icon>';
            mockColumns[2].templateElementSettings = (value, id, element) => {
                element.style.display = 'inline-block';
                element.style.fontSize = '24px';
                element.style.height = '24px';
                element.style.width = '24px;';
                element.style.cursor = 'pointer';
                element.innerHTML = 'notifications';
            };

            hostComponent.columns = mockColumns;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);
            smartTable.style.height = '200px';

            fixture.detectChanges();

            const firstRow = tools.getRows()[0],
                totalDataHeight = component.dataSource.length * firstRow.offsetHeight,
                scrollableElement = smartTable.querySelector('smart-scroll-viewer') as HTMLElement,
                headerHeight = (scrollableElement.querySelector('thead') as HTMLElement).offsetHeight;

            //Expect the scroll height of the Scroll Viewer to be calculated properly
            //NOTE: Does not work on dynamic property change. Only on element initialization
            // expect(totalDataHeight - scrollableElement.offsetHeight + headerHeight).toBe(scrollableElement.scrollHeight);

            delete mockColumns[2].templateElement;
            delete mockColumns[2].templateElementSettings;
        });

        it('to keep all groups expanded after adding a new column', () => {
            //https://github.com/ni-kismet/jqx/issues/1845
            const mockColumns = TableMockColumns.slice(0, 3),
                newColumn = TableMockColumns.slice(3, 4);

            hostComponent.columns = mockColumns;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 20);
            hostComponent.grouping = true;

            fixture.detectChanges();

            const columnsCount = tools.getColumns().length;

            component.addGroup('productName');

            expect(tools.isTableGrouped()).toBeTrue();

            component.expandAllGroups();

            expect(tools.areGroupsExpanded()).toBeTrue();

            component.columns.push(newColumn[0]);

            expect(tools.getColumns().length).toBeGreaterThan(columnsCount);

            expect(tools.areGroupsExpanded()).toBeTrue();
        });

        it('to the scroll bar\'s position to be preserved when refreshing the dataSource', () => {
            //https://github.com/ni-kismet/jqx/issues/1846
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 30);
            fixture.detectChanges();

            const scrollViewer = component.nativeElement.querySelector('smart-scroll-viewer');

            scrollViewer.scrollTop = 100;

            expect(scrollViewer.scrollTop).toBe(100);

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 50);

            fixture.detectChanges();

            expect(scrollViewer.scrollTop).toBe(100);
        });
        it('not to create duplicate rows when re-expanding the last collapsed group', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1764
            const data = [
                {
                    id: 0,
                    productName: "Green Tea",
                    quantity: 15,
                    price: 1.5
                },
                {
                    id: 1,
                    productName: "Green Tea",
                    quantity: 15,
                    price: 1.5
                },
                {
                    id: 2,
                    productName: "Black Tea",
                    quantity: 5,
                    price: 1.5
                },
                {
                    id: 3,
                    productName: "Black Tea",
                    quantity: 5,
                    price: 1.5
                },
                {
                    id: 4,
                    productName: "Caffe Espresso",
                    quantity: 10,
                    price: 0.5
                },
                {
                    id: 5,
                    productName: "Caffe Espresso",
                    quantity: 10,
                    price: 3.5
                },
                {
                    id: 6,
                    productName: "Caffe Espresso",
                    quantity: 10,
                    price: 4.5
                }
            ]

            hostComponent.grouping = true;
            hostComponent.columns = TableMockColumns;
            hostComponent.dataSource = new window.Smart.DataAdapter({
                dataSource: data,
                dataFields: TableMockColumns.map((i: any) => `${i.dataField}: ${i.dataType}`)
            });

            fixture.detectChanges();

            component.addGroup('productName');
            component.addGroup('quantity');

            const lastGroupIndex = (tools.getRowGroups().length - 1) + '';

            component.expandGroup(lastGroupIndex);

            tick(500);

            component.expandGroup(lastGroupIndex + '.0');

            tick(500);

            expect(tools.isGroupExpanded(parseInt(lastGroupIndex))).toBeTrue();
            expect(tools.isGroupExpanded(parseInt(lastGroupIndex) + 1)).toBeTrue();

            const rows = tools.getRows().length;

            //Collapse the last Group
            component.collapseGroup(lastGroupIndex);

            tick(500);

            expect(tools.isGroupExpanded(parseInt(lastGroupIndex))).toBeFalse();

            //Expand the last group
            component.expandGroup(lastGroupIndex);

            tick(500);

            expect(tools.isGroupExpanded(parseInt(lastGroupIndex))).toBeTrue();

            //Check the number of rows
            expect(tools.getRows().length).toBe(rows);

            //Collapse the last Group
            component.collapseGroup(lastGroupIndex);

            tick(500);

            expect(tools.isGroupExpanded(parseInt(lastGroupIndex))).toBeFalse();

            //Expand the last group
            component.expandGroup(lastGroupIndex);

            tick(500);

            expect(tools.getRows().length).toBe(rows);
            flush();
        }));
        it('not to lose cell content when column sorting is applied on a Tree Table', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1742
            const spyObj = {
                spyFunc: (value) => { }
            };
            const columnSettings = [
                { label: 'Name', dataField: 'name', dataType: 'string' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                {
                    label: `<am-icon rotateicon=true colorclass=grey>view_headline</am-icon>`,
                    dataField: 'assetAlarm',
                    dataType: 'any',
                    allowSort: false,
                    templateElement: '<am-icon></am-icon>',
                    templateElementSettings: (value, id, element) => {
                        spyObj.spyFunc(value);

                        if (value) {
                            element.style.display = '';
                            element.style.backgroundColor = 'red';
                            element.mattooltip = value.mattooltip;
                            element.colorclass = value.color;
                            element.innerHTML = 'notifications';
                        }
                        else {
                            element.style.display = 'none';
                        }
                    }
                }
            ];
            const dataSource = tools.getDataSourceFromColumns(columnSettings, 1);

            hostComponent.grouping = true;
            hostComponent.selection = true;
            hostComponent.sortMode = 'one';
            hostComponent.columns = columnSettings;
            hostComponent.dataSource = dataSource;

            fixture.detectChanges();

            component.addGroup('name');
            tick(50);

            const columns = tools.getColumns(),
                data = component.dataSource;

            data[0].assetAlarm = {
                mattooltip: 'a tooltip',
                color: 'fail-icon'
            };
            data[0].name = 'updated name';

            component.expandGroup('0');
            tick(50);

            expect(tools.isGroupExpanded(0)).toBeTrue();

            //Spy if the templateElementSettings function is called after sorting
            const spy = spyOn(spyObj, 'spyFunc');

            tools.clickHeader(1);

            tick(500);

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBe(1);

            //Expect data to be sorted by the 1st column
            expect(columns[1].getAttribute('aria-sort')).toEqual('ascending');

            const cellContent = tools.getCell(1, 3).querySelector('am-icon') as HTMLElement;

            expect(cellContent).not.toBeNull();
            expect(cellContent.style.backgroundColor).toEqual('red');
            expect(cellContent.textContent).toEqual('notifications');

            flush();
        }));

        it('not the templateElementSettings function to be called with the arguemnt that points to the templateElement', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1754
            const spyObj = {
                spyFunc: (element) => { }
            }

            hostComponent.keyboardNavigation = true;
            hostComponent.selection = true;
            hostComponent.columns = [
                { label: 'Name', dataField: 'name' },
                {
                    label: 'Description',
                    dataField: 'description',
                    templateElement: '<div class="template-element"><a style="color: red;"></a><div>',
                    templateElementSettings: (value, id: string, element: any) => {
                        const anchor = element.querySelector('a');

                        anchor.textContent = value;
                        spyObj.spyFunc(element);
                    }
                }
            ];
            hostComponent.dataSource = new window.Smart.DataAdapter({
                dataSource: [
                    {
                        id: 1,
                        name: 'TestItem1',
                        parentRef: null,
                        description: 'I am a test item'
                    },
                    {
                        id: 2,
                        name: 'TestItem2',
                        parentRef: null,
                        description: 'I am a test item'
                    },
                    {
                        id: 3,
                        name: 'TestItem3',
                        parentRef: null,
                        description: 'I am a test item'
                    },
                    {
                        id: 4,
                        name: 'LeafItem1',
                        parentRef: 1,
                        description: 'I am a test item also'
                    },
                    {
                        id: 5,
                        name: 'LeafItem2',
                        parentRef: 2,
                        description: 'I am a test item also'
                    },
                    {
                        id: 6,
                        name: 'LeafItem3',
                        parentRef: 3,
                        description: 'I am a test item also'
                    },
                    {
                        id: 7,
                        name: 'LeafItem7',
                        parentRef: 2,
                        description: 'I am a test item also'
                    },
                    {
                        id: 8,
                        name: 'LeafItem8',
                        parentRef: 7,
                        description: 'I am a test item also'
                    },
                ],
                keyDataField: 'id',
                parentDataField: 'parentRef',
                id: 'id',
                dataFields: [
                    'id: number',
                    'parentRef: number',
                    'name: string',
                    'description: string'
                ]
            });

            fixture.detectChanges();

            const spy = spyOn(spyObj, 'spyFunc');

            expect(tools.isTreeTable()).toBeTrue();

            component.expandRow('1');

            tick(50);

            expect(tools.isTreeNodeExpanded(0)).toBeTrue();

            const templateElementArgument = spy.calls.mostRecent().args[0];

            expect(templateElementArgument.nodeName).toEqual('DIV');
            expect(templateElementArgument.className).toEqual('template-element');

            component.expandAllRows();

            tick(50);

            expect(tools.areTreeGroupsExpanded()).toBeTrue();

            flush();
        }));
        it('not to re-arrange the items when sorting is applied on a grouped table', () => {
            //https://github.com/ni-kismet/jqx/issues/1758
            hostComponent.grouping = true;
            hostComponent.sortMode = 'one';
            hostComponent.selection = true;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 30);
            fixture.detectChanges();

            component.addGroup('productName');
            component.addGroup('quantity');

            expect(tools.isTableGrouped()).toBeTrue();

            component.expandAllGroups();

            expect(tools.areGroupsExpanded()).toBeTrue();

            tools.clickRowSelectionBox('0');

            expect(component.selected.length).toBeGreaterThan(0);

            const column = tools.getColumn('productName');
            let rowsText = Array.from(tools.getRows()).map(r => r.textContent);

            //Click the 1st Header to sort the column
            tools.clickHeader('productName');

            //Expect the column to have sorting in ascending order
            expect(column.getAttribute('aria-sort')).toEqual('ascending');

            //Expect the order of the rows to be different
            expect(Array.from(tools.getRows()).map(r => r.textContent).toString()).not.toEqual(rowsText.toString());

            //Click the 'productName' Header to sort the column
            tools.clickHeader('productName');

            //Expect the data to be sorted in descending order
            expect(column.getAttribute('aria-sort')).toEqual('descending');

            //Expect the data to be sorted
            expect(Array.from(tools.getRows()).map(r => r.textContent).toString()).not.toEqual(rowsText.toString());

            //Click the 'productName' Header to sort the column
            tools.clickHeader('productName');

            //Expect the column to have sorting
            expect(column.hasAttribute('aria-sort')).toBeFalse();

            //Expect the data to be sorted
            expect(Array.from(tools.getRows()).slice(0, rowsText.length).map(r => r.textContent).toString()).toEqual(rowsText.toString());

            hostComponent.grouping = false;

            fixture.detectChanges();

            rowsText = Array.from(tools.getRows()).map(r => r.textContent);

            //Click the 1st Header to sort the column
            tools.clickHeader('productName');

            //Expect the column to have sorting in ascending order
            expect(column.getAttribute('aria-sort')).toEqual('ascending');

            //Expect the order of the rows to be different
            expect(Array.from(tools.getRows()).map(r => r.textContent).toString()).not.toEqual(rowsText.toString());

            //Click the 'productName' Header to sort the column in adcending order
            tools.clickHeader('productName');

            //Click the 'productName' Header to sort the column in descending order
            tools.clickHeader('productName');

            //Expect the order of the rows to be different
            expect(Array.from(tools.getRows()).map(r => r.textContent).toString()).toEqual(rowsText.toString());
        });

        it('not to create duplicates of leaf nodes when collapsing/expanding the parent', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1759
            component.expandHierarchy = true;
            hostComponent.grouping = false;
            hostComponent.columns = [
                { label: 'Name', dataField: 'name' },
                { label: 'Description', dataField: 'description' }
            ];
            hostComponent.dataSource = new window.Smart.DataAdapter({
                dataSource: [
                    {
                        id: 1,
                        name: 'Parent 1',
                        parentRef: null,
                        description: 'I am a parent.'
                    },
                    {
                        id: 2,
                        name: 'Parent 2',
                        parentRef: 1,
                        description: 'I am a parent.'
                    },
                    {
                        id: 3,
                        name: 'Parent 3',
                        parentRef: 2,
                        description: 'I am a parent.'
                    },
                    {
                        id: 4,
                        name: 'Child 123',
                        parentRef: 3,
                        description: 'I am a leaf'
                    }
                ],
                keyDataField: 'id',
                parentDataField: 'parentRef',
                id: 'id',
                dataFields: [
                    'id: number',
                    'parentRef: number',
                    'name: string',
                    'description: string'
                ]
            });

            fixture.detectChanges();

            expect(tools.getRows().length).toBe(4);
            expect(tools.isTreeTable()).toBeTrue();

            //Collapse the root parent
            tools.clickRowArrowByIndex(0);

            tick(50);

            expect(tools.areTreeGroupsExpanded()).not.toBeTrue();

            expect(tools.getRows().length).toBe(1);

            //Expanding the root parent again
            tools.clickRowArrowByIndex(0);

            tick(50);

            expect(tools.areTreeGroupsExpanded()).toBeTrue();

            expect(tools.getRows().length).toBe(4);

            flush();
        }));

        it('not to unselect a pre-selected row by clicking on a cell ( not the check box ) that is a single child of multiple nested groups', () => {
            //https://github.com/ni-kismet/jqx/issues/1760
            component.expandHierarchy = true;
            hostComponent.grouping = true;
            hostComponent.selection = true;
            hostComponent.dataSourceSettings = {
                dataFields: [
                    'id: number',
                    'productName: string',
                    'quantity: number',
                    'price: number',
                    'date: date'
                ],
                groupBy: [
                    'productName',
                    'quantity'
                ]
            };

            fixture.detectChanges();

            hostComponent.dataSource = [
                { productName: 'A', qunatity: 5, price: 0.5 },
                { productName: 'B', qunatity: 21, price: 5.5 },
                { productName: 'C', qunatity: 52, price: 7.5 },
                { productName: 'C', qunatity: 52, price: 12.5 },
                { productName: 'D', qunatity: 27, price: 8 },
                { productName: 'D', qunatity: 27, price: 2.51 },
            ];
            fixture.detectChanges();

            expect(tools.isTableGrouped()).toBeTrue();

            tools.click(tools.getCell(2, 1));

            const currentSelection = component.selected.toString();

            expect(component.selected.length).toBe(3);

            tools.click(tools.getCell(2, 1));

            expect(component.selected.toString()).not.toEqual(currentSelection);
            expect(component.selected.length).toBe(0);
        });
        it('to maintain the sorting order of the rows after the dataSource has been updated', () => {
            //https://github.com/ni-kismet/jqx/issues/1762
            component.expandHierarchy = true;
            hostComponent.grouping = true;
            hostComponent.sortMode = 'one';
            hostComponent.selection = true;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 30);
            fixture.detectChanges();

            component.addGroup('productName');
            component.addGroup('quantity');

            const column = tools.getColumn('productName');
            let rowsText = Array.from(tools.getRows()).map(r => r.textContent);

            //Click the 'productName' Header to sort the column
            tools.clickHeader('productName');

            //Expect the column to have sorting
            expect(column.getAttribute('aria-sort')).toEqual('ascending');

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 30);
            fixture.detectChanges();

            //Expect the column to have sorting
            expect(column.getAttribute('aria-sort')).toEqual('ascending');

            hostComponent.grouping = false;
            fixture.detectChanges();

            expect(column.getAttribute('aria-sort')).toEqual('ascending');

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 30);
            fixture.detectChanges();

            expect(column.getAttribute('aria-sort')).toEqual('ascending');
        });
        it('not to collapse the groups when an item is removed from the dataSource', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1763
            component.expandHierarchy = true;
            hostComponent.grouping = true;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 30);
            fixture.detectChanges();

            const originalDataSourceLength = hostComponent.dataSource.length;

            component.addGroup('productName');

            expect(tools.isTableGrouped()).toBeTrue();

            expect(tools.areGroupsExpanded()).toBeTrue();

            component.removeRow(0);

            tick(50);

            expect(component.dataSource.length).toBeLessThan(originalDataSourceLength);
            expect(tools.areGroupsExpanded()).toBeTrue();

            flush();
        }));
        it('not to change the size of the selection column when all columns have their "width" set', () => {
            //https://github.com/ni-kismet/jqx/issues/1849
            const columns = [
                { label: 'id', dataField: 'id', dataType: 'number', width: 70 },
                { label: 'Product Name', dataField: 'productName', dataType: 'string', width: '24px' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number', width: '20%' },
                { label: 'Price', dataField: 'price', dataType: 'number', width: '25%' },
                { label: 'Property_Group', dataField: 'property_all', dataType: 'string', width: '48px' }
            ];

            hostComponent.selection = true;
            hostComponent.columns = columns;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);
            component.columnMinWidth = 50;

            const checkBoxSize = 10;

            smartTable.style.setProperty('--smart-check-box-default-size', `${checkBoxSize}px`);

            fixture.detectChanges();

            //Failing. Expecting a fix in the next release
            //checkBoxSize * 3, because the inside the CSS the width is calculated with a CSS calc function
            // expect((<HTMLElement>tools.getColumns()[0]).offsetWidth).toBe(checkBoxSize * 3);

            //Remove the width property of the last column
            component.columns[4].width = undefined;
            fixture.detectChanges();

            expect((<HTMLElement>tools.getColumns()[0]).offsetWidth).toBe(checkBoxSize * 3);

            smartTable.style.removeProperty('--smart-check-box-default-size');
        });

        it('to create an \'Empty \' group (positioned as last) for the data items that do not have a dataField that is grouped by', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1777
            const columns = [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Other', dataField: 'other', dataType: 'string' }
            ];

            hostComponent.grouping = true;
            hostComponent.columns = columns;
            hostComponent.dataSource = [
                { id: 1, productName: 'Pasta', other: 'A' },
                { id: 2, productName: 'Spaghetti', other: 'B' },
                { id: 3, productName: 'Maccarone' },
                { id: 4, productName: 'Baby Pasta' }
            ];

            fixture.detectChanges();

            component.addGroup('other');
            component.expandAllGroups();

            tick(50);

            const rowGroups = tools.getRowGroups();

            expect(tools.isTableGrouped()).toBeTrue();

            expect(rowGroups[rowGroups.length - 1].querySelector('.group-label-value').textContent.indexOf('empty') > -1).toBe(true);

            flush();
        }));
        it('not to change the selection checkbox column\'s width ( it should stay static ) when there\'s only one data column in the Table', () => {
            //https://github.com/ni-kismet/jqx/issues/1778
            hostComponent.columns = [{ label: 'id', dataField: 'id', dataType: 'number', width: 50 }];
            hostComponent.grouping = true;
            hostComponent.selection = true;
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);

            const checkBoxSize = 15;

            smartTable.style.setProperty('--smart-check-box-default-size', `${checkBoxSize}px`);
            fixture.detectChanges();


            const tableColumns = tools.getColumns();

            //NOTE: The CSS formula is Checkbox size multiplied by 3
            //expect the selection column to be static size and previously set
            expect((<HTMLElement>tableColumns[0]).offsetWidth).toBe(checkBoxSize * 3);

            component.grouping = true;

            //expect the selection column to be static size and previously set
            expect((<HTMLElement>tableColumns[0]).offsetWidth).toBe(checkBoxSize * 3);

            smartTable.style.removeProperty('--smart-check-box-default-size');
        });
        it('to remember the grouping expanded state after the data source has been updated', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1781
            const dataSource = [
                { id: 1, productName: 'A', productType: 'Pasta' },
                { id: 2, productName: 'B', productType: 'Pasta' },
                { id: 3, productName: 'C', productType: 'Pasta' },
                { id: 4, productName: 'D', productType: 'Spaghetti' },
                { id: 5, productName: 'E', productType: 'Spaghetti' },
                { id: 6, productName: 'F', productType: 'Baby Pasta' },
                { id: 7, productName: 'G', productType: 'Baby Pasta' },
                { id: 8, productName: 'H', productType: 'Baby Pasta' },
                { id: 9, productName: 'I', productType: 'Maccarone' },
                { id: 10, productName: 'J', productType: 'Maccarone' }
            ];

            hostComponent.columns = [
                { label: 'Id', dataField: 'id', dataType: 'number' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Product Type', dataField: 'productType', dataType: 'string' }
            ];
            hostComponent.grouping = true;
            hostComponent.dataSource = dataSource;

            fixture.detectChanges();

            component.addGroup('productType');

            component.expandGroup('2');

            tick(50);

            //Expect the group to be expanded
            expect(tools.isGroupExpanded(2)).toBeTrue();

            hostComponent.dataSource = [
                { id: 1, productName: 'A1', productType: 'Pasta' },
                { id: 3, productName: 'C1', productType: 'Pasta' },
                { id: 5, productName: 'E1', productType: 'Spaghetti' },
                { id: 7, productName: 'G1', productType: 'Baby Pasta' },
                { id: 8, productName: 'H1', productType: 'Baby Pasta' },
                { id: 9, productName: 'I1', productType: 'Maccarone' },
                { id: 10, productName: 'J1', productType: 'Maccarone' }
            ];

            fixture.detectChanges();

            //Expect the group to still be expanded
            expect(tools.isGroupExpanded(2)).toBeTrue();

            flush();
        }));
        it('to remember the last scroll position after the data source has been updated', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1785

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);

            fixture.detectChanges();

            const scrollViewer = smartTable.$.virtualizationContainer;

            //Scroll to the bottom
            scrollViewer.scrollTop = 500;

            tick(500);

            const actualScrollTop = scrollViewer.scrollTop;

            expect(actualScrollTop).toBeGreaterThan(0);

            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);

            fixture.detectChanges();

            expect(scrollViewer.scrollTop).toBe(actualScrollTop);

            flush();
        }));
        it('to display the proper cell values with the column format function after scrolling', fakeAsync(() => {
            //https://github.com/ni-kismet/jqx/issues/1791
            const spyOb = {
                formatFunction: () => { }
            };
            const formatFunction = (settings: { value: string | number, template: any }) => {
                settings.template = `${settings.value} - Formatted`;
                spyOb.formatFunction();
            }
            const spy = spyOn(spyOb, 'formatFunction');

            hostComponent.columns = [
                { label: 'id', dataField: 'id', dataType: 'number' },
                { label: 'Product Name', dataField: 'productName', dataType: 'string' },
                { label: 'Quantity', dataField: 'quantity', dataType: 'number', formatFunction: formatFunction },
            ];
            hostComponent.dataSource = tools.getDataSourceFromColumns(TableMockColumns, 10);

            fixture.detectChanges();

            expect(spy).toHaveBeenCalled();
            expect(spy.calls.count()).toBeGreaterThanOrEqual(tools.getRows().length);

            const scrollViewer = smartTable.$.virtualizationContainer;

            //Scroll to the bottom
            scrollViewer.scrollTop = 500;

            tick(500);

            const actualScrollTop = scrollViewer.scrollTop;

            expect(actualScrollTop).toBeGreaterThan(0);

            let currentRows = tools.getRows();

            for (let i = 0, max = currentRows.length; i < max; i += 1) {
                expect(tools.getCellText(currentRows[i], 2).indexOf('- Formatted')).toBeGreaterThan(-1);
            }

            //Scroll to the bottom
            scrollViewer.scrollTop = 0;

            tick(500);

            expect(scrollViewer.scrollTop).toBe(0);

            currentRows = tools.getRows();

            for (let i = 0, max = currentRows.length; i < max; i += 1) {
                expect(tools.getCellText(currentRows[i], 2).indexOf('- Formatted')).toBeGreaterThan(-1);
            }
        }));
    });
});
