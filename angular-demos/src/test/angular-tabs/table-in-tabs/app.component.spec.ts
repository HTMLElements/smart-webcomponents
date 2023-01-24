import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    <mat-tab-group #tabGroup [(selectedIndex)]="selectedIndex">
        <mat-tab label="TAB 1">
            <smart-table #table1 id="table1" (onInit)="handleInit($event)" [dataSource]="dataSource"
                [keyboardNavigation]="keyboardNavigation" [grouping]="grouping" [columns]="columns" [selection]="true" [sortMode]="'many'" [filtering]="true">
            </smart-table>
        </mat-tab>
        <mat-tab label="TAB 2">
            <smart-table #table2 id="table2" (onInit)="handleInit($event)" [dataSource]="dataSource"
                [keyboardNavigation]="keyboardNavigation" [grouping]="grouping" [columns]="columns" [selection]="true" [sortMode]="'many'" [filtering]="true">
            </smart-table>
        </mat-tab>
        <mat-tab label="TAB 3">
            <smart-table #table3 id="table3" (onInit)="handleInit($event)" [dataSource]="dataSource"
                [keyboardNavigation]="keyboardNavigation" [grouping]="grouping" [columns]="columns" [selection]="true" [sortMode]="'many'" [filtering]="true">
            </smart-table> 
        </mat-tab>
    </mat-tab-group>`
})
class TableHostComponent implements OnInit {
    @ViewChild('tabGroup', { static: false }) tabs!: MatTabGroup; 
    @ViewChild('table1', { read: TableComponent, static: true }) table1!: TableComponent;
    @ViewChild('table2', { read: TableComponent, static: true }) table2!: TableComponent;
    @ViewChild('table3', { read: TableComponent, static: true }) table3!: TableComponent;

    @Input() dataSource: TableDataSource[] = [];
    @Input() columns: TableColumn[] = [];
    @Input() keyboardNavigation: boolean = true;
    @Input() grouping: boolean = true;
    @Input() handleInit: (event: Event) => void;
    selectedIndex: number = 0;

    ngOnInit(): void { }

    setTab(index: number) {
        // maybe add some bounds and null checking
        this.selectedIndex = index;
      }
}

describe('Table HostComponent', () => {
    let hostComponent: TableHostComponent;
    let component1: TableComponent;
    let component2: TableComponent;
    let component3: TableComponent;
    let fixture: ComponentFixture<TableHostComponent>;
    let tools: TableTestHarness;
    let smartTable1: Table;
    let smartTable2: Table;
    let smartTable3: Table;
    let TableMockColumns = [{
        label: 'First Name',
        dataField: 'FirstName'
    },
    {
        label: 'Last Name',
        dataField: 'LastName'
    },
    {
        label: 'Title',
        dataField: 'Title'
    },
    {
        label: 'Birth Date',
        dataField: 'BirthDate',
        dataType: 'date'
    },
    {
        label: 'Hire Date',
        dataField: 'HireDate',
        dataType: 'date'
    },
    {
        label: 'Address',
        dataField: 'Address'
    },
    {
        label: 'City',
        dataField: 'City'
    },
    {
        label: 'Country',
        dataField: 'Country'
    }
    ] as TableColumn[];
    let data;

    async function refreshComponent(): Promise<void> {
        fixture.detectChanges();
        await fixture.whenStable();
        fixture.detectChanges();
        // console.log('Promise resolved');
    }

    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [TableHostComponent, TableComponent],
            imports: [BrowserAnimationsModule, MatTabsModule, TableModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableHostComponent);
        hostComponent = fixture.componentInstance;
        component1 = hostComponent.table1;
        component2 = hostComponent.table2;
        component3 = hostComponent.table3;
        smartTable1 = component1.nativeElement as Table;
        smartTable2 = component2.nativeElement as Table;
        smartTable3 = component3.nativeElement as Table;
        tools = new TableTestHarness(smartTable1);
        fixture.detectChanges();
    });

    afterEach(() => {
        //Destroy the fixture to make sure that everything is clean
        fixture.destroy();
    });

    describe('Table inside material tabs', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            data = [{
                "EmployeeID": 1,
                "FirstName": "Nancy",
                "LastName": "Davolio",
                "ReportsTo": 2,
                "Country": "USA",
                "Title": "Sales Representative",
                "HireDate": "1992-05-01 00:00:00",
                "BirthDate": "1948-12-08 00:00:00",
                "City": "Seattle",
                "Address": "507 - 20th Ave. E.Apt. 2A"
            },
            {
                "EmployeeID": 2,
                "FirstName": "Andrew",
                "LastName": "Fuller",
                "ReportsTo": null,
                "Country": "USA",
                "Title": "Vice President, Sales",
                "HireDate": "1992-08-14 00:00:00",
                "BirthDate": "1952-02-19 00:00:00",
                "City": "Tacoma",
                "Address": "908 W. Capital Way"
            },
            {
                "EmployeeID": 3,
                "FirstName": "Janet",
                "LastName": "Leverling",
                "ReportsTo": 2,
                "Country": "USA",
                "Title": "Sales Representative",
                "HireDate": "1992-04-01 00:00:00",
                "BirthDate": "1963-08-30 00:00:00",
                "City": "Kirkland",
                "Address": "722 Moss Bay Blvd."
            },
            {
                "EmployeeID": 4,
                "FirstName": "Margaret",
                "LastName": "Peacock",
                "ReportsTo": 2,
                "Country": "USA",
                "Title": "Sales Representative",
                "HireDate": "1993-05-03 00:00:00",
                "BirthDate": "1937-09-19 00:00:00",
                "City": "Redmond",
                "Address": "4110 Old Redmond Rd."
            },
            {
                "EmployeeID": 5,
                "FirstName": "Steven",
                "LastName": "Buchanan",
                "ReportsTo": 2,
                "Country": "UK",
                "Title": "Sales Manager",
                "HireDate": "1993-10-17 00:00:00",
                "BirthDate": "1955-03-04 00:00:00",
                "City": "London",
                "Address": "14 Garrett Hill"
            },
            {
                "EmployeeID": 6,
                "FirstName": "Michael",
                "LastName": "Suyama",
                "ReportsTo": 5,
                "Country": "UK",
                "Title": "Sales Representative",
                "HireDate": "1993-10-17 00:00:00",
                "BirthDate": "1963-07-02 00:00:00",
                "City": "London",
                "Address": "Coventry House Miner Rd."
            },
            {
                "EmployeeID": 7,
                "FirstName": "Robert",
                "LastName": "King",
                "ReportsTo": 5,
                "Country": "UK",
                "Title": "Sales Representative",
                "HireDate": "1994-01-02 00:00:00",
                "BirthDate": "1960-05-29 00:00:00",
                "City": "London",
                "Address": "Edgeham Hollow Winchester Way"
            },
            {
                "EmployeeID": 8,
                "FirstName": "Laura",
                "LastName": "Callahan",
                "ReportsTo": 2,
                "Country": "USA",
                "Title": "Inside Sales Coordinator",
                "HireDate": "1994-03-05 00:00:00",
                "BirthDate": "1958-01-09 00:00:00",
                "City": "Seattle",
                "Address": "4726 - 11th Ave. N.E."
            },
            {
                "EmployeeID": 9,
                "FirstName": "Anne",
                "LastName": "Dodsworth",
                "ReportsTo": 5,
                "Country": "UK",
                "Title": "Sales Representative",
                "HireDate": "1994-11-15 00:00:00",
                "BirthDate": "1966-01-27 00:00:00",
                "City": "London",
                "Address": "7 Houndstooth Rd."
            }
            ];
            hostComponent.dataSource = data;
            fixture.detectChanges();
        });

        it('tabs element should exist', fakeAsync(() => {
            const tabsElement = hostComponent.tabs;

            expect(tabsElement).toBeTruthy();
        }));

        it('tables elements should exist', fakeAsync(() => {
            const table1Element = hostComponent.table1.nativeElement;
            const table2Element = hostComponent.table2.nativeElement;
            const table3Element = hostComponent.table3.nativeElement;

            expect(table1Element).toBeTruthy();
            expect(table2Element).toBeTruthy();
            expect(table3Element).toBeTruthy();
        }));



        // selection 
        it('selection should be preserved when tabs are switched', fakeAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            let table1Selection: any = table1Component.selected;
            let table2Selection: any = table2Component.selected;
            let table3Selection: any = table3Component.selected;

            expect(table1Selection.length).toBe(0);
            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);

            table1Component.select(1);

            table1Selection = table1Component.selected;
            table2Selection = table2Component.selected;
            table3Selection = table3Component.selected;

            expect(table1Selection.length).toBe(1);
            expect(table1Selection[0]).toEqual(1);

            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);

            hostComponent.setTab(1);
            fixture.detectChanges();
            tick(50);

            table1Selection = table1Component.selected;
            table2Selection = table2Component.selected;
            table3Selection = table3Component.selected;

            expect(table1Selection.length).toBe(1);
            expect(table1Selection[0]).toEqual(1);

            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);

            hostComponent.setTab(0);
            fixture.detectChanges();
            tick(50);

            table1Selection = table1Component.selected;
            table2Selection = table2Component.selected;
            table3Selection = table3Component.selected;

            expect(table1Selection.length).toBe(1);
            expect(table1Selection[0]).toEqual(1);

            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);
        }));

        it('selection should be removed from correct table', fakeAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            let table1Selection: any = table1Component.selected;
            let table2Selection: any = table2Component.selected;
            let table3Selection: any = table3Component.selected;

            expect(table1Selection.length).toBe(0);
            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);

            table1Component.select(1);

            table1Selection = table1Component.selected;
            table2Selection = table2Component.selected;
            table3Selection = table3Component.selected;

            expect(table1Selection.length).toBe(1);
            expect(table1Selection[0]).toEqual(1);

            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);

            table1Component.unselect(1);

            table1Selection = table1Component.selected;
            table2Selection = table2Component.selected;
            table3Selection = table3Component.selected;

            expect(table1Selection.length).toBe(0);
            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);
        }));

        it('row should be selected correctly in table that is not in active tab', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            let table1Selection: any = table1Component.selected;
            let table2Selection: any = table2Component.selected;
            let table3Selection: any = table3Component.selected;

            expect(table1Selection.length).toBe(0);
            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);

            hostComponent.setTab(1);
            fixture.detectChanges();
            fixture.whenStable().then(() => {

                hostComponent.setTab(0);
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    table2Component.select(1);

                    table1Selection = table1Component.selected;
                    table2Selection = table2Component.selected;
                    table3Selection = table3Component.selected;

                    expect(table1Selection.length).toBe(0);

                    expect(table2Selection.length).toBe(1);
                    expect(table2Selection[0]).toEqual(1);
                    
                    expect(table3Selection.length).toBe(0);

                    hostComponent.setTab(1);
                    fixture.detectChanges();
                    fixture.whenStable().then(() => {
                        table1Selection = table1Component.selected;
                        table2Selection = table2Component.selected;
                        table3Selection = table3Component.selected;

                        expect(table1Selection.length).toBe(0);

                        expect(table2Selection.length).toBe(1);
                        expect(table2Selection[0]).toEqual(1);
                        
                        expect(table3Selection.length).toBe(0);
                    });
                });
            });        
        }));

        it('selection should be removed correctly from table that is not in active tab', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;            

            let table1Selection: any = table1Component.selected;
            let table2Selection: any = table2Component.selected;
            let table3Selection: any = table3Component.selected;

            expect(table1Selection.length).toBe(0);
            expect(table2Selection.length).toBe(0);
            expect(table3Selection.length).toBe(0);

            hostComponent.setTab(1);
            fixture.detectChanges();
            fixture.whenStable().then(() => {

                hostComponent.setTab(0);
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    table2Component.select(1);

                    table1Selection = table1Component.selected;
                    table2Selection = table2Component.selected;
                    table3Selection = table3Component.selected;

                    expect(table1Selection.length).toBe(0);

                    expect(table2Selection.length).toBe(1);
                    expect(table2Selection[0]).toEqual(1);
                    
                    expect(table3Selection.length).toBe(0);

                    table2Component.unselect(1);

                    table1Selection = table1Component.selected;
                    table2Selection = table2Component.selected;
                    table3Selection = table3Component.selected;

                    expect(table1Selection.length).toBe(0);
                    expect(table2Selection.length).toBe(0);
                    expect(table3Selection.length).toBe(0);
                });
            });        
        }));

        // selection with user interaction
        it('correct table row should be selected when a checkbox is clicked', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            hostComponent.setTab(1);
            fixture.detectChanges();
            fixture.whenStable().then(() => {

                hostComponent.setTab(2);
                fixture.detectChanges();
                fixture.whenStable().then(() => {

                    hostComponent.setTab(0);
                    fixture.detectChanges();
                    fixture.whenStable().then(() => {  

                        let table1Selection: any = table1Component.selected;
                        let table2Selection: any = table2Component.selected;
                        let table3Selection: any = table3Component.selected;

                        expect(table1Selection.length).toBe(0);
                        expect(table2Selection.length).toBe(0);
                        expect(table3Selection.length).toBe(0);

                        tools.clickRowSelectionBox('1');

                        table1Selection = table1Component.selected;
                        table2Selection = table2Component.selected;
                        table3Selection = table3Component.selected;

                        expect(table1Selection.length).toBe(1);
                        expect(table1Selection[0]).toEqual(1);

                        expect(table2Selection.length).toBe(0);
                        expect(table3Selection.length).toBe(0);

                        hostComponent.setTab(1);
                        fixture.detectChanges();
                        fixture.whenStable().then(() => {
                            table1Selection = table1Component.selected;
                            table2Selection = table2Component.selected;
                            table3Selection = table3Component.selected;

                            expect(table1Selection.length).toBe(1);
                            expect(table1Selection[0]).toEqual(1);

                            expect(table2Selection.length).toBe(0);
                            expect(table3Selection.length).toBe(0);

                            hostComponent.setTab(0);
                            fixture.detectChanges();
                            fixture.whenStable().then(() => {
                                table1Selection = table1Component.selected;
                                table2Selection = table2Component.selected;
                                table3Selection = table3Component.selected;

                                expect(table1Selection.length).toBe(1);
                                expect(table1Selection[0]).toEqual(1);

                                expect(table2Selection.length).toBe(0);
                                expect(table3Selection.length).toBe(0);                            
                            });
                        });
                    });
                });
            });
        }));

        it('selection should be removed correctly when a selected row checkbox is clicked', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            hostComponent.setTab(1);
            fixture.detectChanges();
            fixture.whenStable().then(() => {

                hostComponent.setTab(2);
                fixture.detectChanges();
                fixture.whenStable().then(() => {

                    hostComponent.setTab(0);
                    fixture.detectChanges();
                    fixture.whenStable().then(() => {  

                        let table1Selection: any = table1Component.selected;
                        let table2Selection: any = table2Component.selected;
                        let table3Selection: any = table3Component.selected;

                        expect(table1Selection.length).toBe(0);
                        expect(table2Selection.length).toBe(0);
                        expect(table3Selection.length).toBe(0);

                        tools.clickRowSelectionBox('1');

                        table1Selection = table1Component.selected;
                        table2Selection = table2Component.selected;
                        table3Selection = table3Component.selected;

                        expect(table1Selection.length).toBe(1);
                        expect(table1Selection[0]).toEqual(1);

                        expect(table2Selection.length).toBe(0);
                        expect(table3Selection.length).toBe(0);

                        tools.clickRowSelectionBox('1');

                        table1Selection = table1Component.selected;
                        table2Selection = table2Component.selected;
                        table3Selection = table3Component.selected;

                        expect(table1Selection.length).toBe(0);
                        expect(table2Selection.length).toBe(0);
                        expect(table3Selection.length).toBe(0);
                    });
                });
            });
        }));



        // sorting         
        it('sorting should be preserved when tabs are switched', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            hostComponent.setTab(1);
            fixture.detectChanges();
            fixture.whenStable().then(() => {

                hostComponent.setTab(2);
                fixture.detectChanges();
                fixture.whenStable().then(() => {

                    hostComponent.setTab(0);
                    fixture.detectChanges();
                    fixture.whenStable().then(async() => {  
                        let table1SortedColumns = (await table1Component.getState()).sorted;
                        let table2SortedColumns = (await table2Component.getState()).sorted;
                        let table3SortedColumns = (await table3Component.getState()).sorted;

                        expect(table1SortedColumns.length).toBe(0);
                        expect(table2SortedColumns.length).toBe(0);
                        expect(table3SortedColumns.length).toBe(0);

                        table1Component.sortBy('FirstName', 'asc');

                        table1SortedColumns = (await table1Component.getState()).sorted;
                        table2SortedColumns = (await table2Component.getState()).sorted;
                        table3SortedColumns = (await table3Component.getState()).sorted;
                                
                        expect(table1SortedColumns.length).toBe(1);
                        expect(table1SortedColumns[0].dataField).toEqual('FirstName');
                        expect(table1SortedColumns[0].direction).toEqual('asc');
                                
                        expect(table2SortedColumns.length).toBe(0);
                        expect(table3SortedColumns.length).toBe(0);

                        hostComponent.setTab(1);
                        fixture.detectChanges();
                        fixture.whenStable().then(async () => {
                            table1SortedColumns = (await table1Component.getState()).sorted;
                            table2SortedColumns = (await table2Component.getState()).sorted;
                            table3SortedColumns = (await table3Component.getState()).sorted;
                                    
                            expect(table1SortedColumns.length).toBe(1);
                            expect(table1SortedColumns[0].dataField).toEqual('FirstName');
                            expect(table1SortedColumns[0].direction).toEqual('asc');
                                    
                            expect(table2SortedColumns.length).toBe(0);
                            expect(table3SortedColumns.length).toBe(0);
                        });
                    });
                });
            });
        }));

        it('sorting should be removed from correct table', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            fixture.whenStable().then(async() => {  
                let table1SortedColumns = (await table1Component.getState()).sorted;
                let table2SortedColumns = (await table2Component.getState()).sorted;
                let table3SortedColumns = (await table3Component.getState()).sorted;

                expect(table1SortedColumns.length).toBe(0);
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);

                table1Component.sortBy('FirstName', 'asc');

                table1SortedColumns = (await table1Component.getState()).sorted;
                table2SortedColumns = (await table2Component.getState()).sorted;
                table3SortedColumns = (await table3Component.getState()).sorted;
                        
                expect(table1SortedColumns.length).toBe(1);
                expect(table1SortedColumns[0].dataField).toEqual('FirstName');
                expect(table1SortedColumns[0].direction).toEqual('asc');
                        
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);

                table1Component.clearSort();

                table1SortedColumns = (await table1Component.getState()).sorted;
                table2SortedColumns = (await table2Component.getState()).sorted;
                table3SortedColumns = (await table3Component.getState()).sorted;
                        
                //TODO: Uncomment when issue 274 is fixed.
                // expect(table1SortedColumns.length).toBe(0);   
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);                       
            });
        }));       

        it('multi column sorting should be preserved when tabs are switched', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            fixture.whenStable().then(async() => {  
                let table1SortedColumns = (await table1Component.getState()).sorted;
                let table2SortedColumns = (await table2Component.getState()).sorted;
                let table3SortedColumns = (await table3Component.getState()).sorted;

                expect(table1SortedColumns.length).toBe(0);
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);

                table1Component.sortBy('FirstName', 'asc');
                table1Component.sortBy('LastName', 'desc');

                table1SortedColumns = (await table1Component.getState()).sorted;
                table2SortedColumns = (await table2Component.getState()).sorted;
                table3SortedColumns = (await table3Component.getState()).sorted;
                        
                expect(table1SortedColumns.length).toBe(2);
                expect(table1SortedColumns[0].dataField).toEqual('FirstName');
                expect(table1SortedColumns[1].dataField).toEqual('LastName');
                expect(table1SortedColumns[0].direction).toEqual('asc');
                expect(table1SortedColumns[1].direction).toEqual('desc');
                        
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);

                hostComponent.setTab(1);
                fixture.detectChanges();
                fixture.whenStable().then(async () => {
                    table1SortedColumns = (await table1Component.getState()).sorted;
                    table2SortedColumns = (await table2Component.getState()).sorted;
                    table3SortedColumns = (await table3Component.getState()).sorted;
                            
                    expect(table1SortedColumns.length).toBe(2);
                    expect(table1SortedColumns[0].dataField).toEqual('FirstName');
                    expect(table1SortedColumns[1].dataField).toEqual('LastName');
                    expect(table1SortedColumns[0].direction).toEqual('asc');
                    expect(table1SortedColumns[1].direction).toEqual('desc');

                    expect(table2SortedColumns.length).toBe(0);
                    expect(table3SortedColumns.length).toBe(0);

                });
            });
        }));

        it('multi column sorting should be removed from correct table', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            fixture.whenStable().then(async() => {        
                let table1SortedColumns = (await table1Component.getState()).sorted;
                let table2SortedColumns = (await table2Component.getState()).sorted;
                let table3SortedColumns = (await table3Component.getState()).sorted;

                expect(table1SortedColumns.length).toBe(0);
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);

                table1Component.sortBy('FirstName', 'asc');
                table1Component.sortBy('LastName', 'desc');

                table1SortedColumns = (await table1Component.getState()).sorted;
                table2SortedColumns = (await table2Component.getState()).sorted;
                table3SortedColumns = (await table3Component.getState()).sorted;
                        
                expect(table1SortedColumns.length).toBe(2);
                expect(table1SortedColumns[0].dataField).toEqual('FirstName');
                expect(table1SortedColumns[1].dataField).toEqual('LastName');
                expect(table1SortedColumns[0].direction).toEqual('asc');
                expect(table1SortedColumns[1].direction).toEqual('desc');
                        
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);

                table1Component.clearSort();

                table1SortedColumns = (await table1Component.getState()).sorted;
                table2SortedColumns = (await table2Component.getState()).sorted;
                table3SortedColumns = (await table3Component.getState()).sorted;
                        
                //TODO: Uncomment when issue 274 is fixed.
                // expect(table1SortedColumns.length).toBe(0);   
                expect(table2SortedColumns.length).toBe(0);
                expect(table3SortedColumns.length).toBe(0);  
            });                     
        }));      



        // filtering 
        it('filtering should be preserved when tabs are switched', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            hostComponent.setTab(1);
            fixture.detectChanges();
            fixture.whenStable().then(() => {

                hostComponent.setTab(2);
                fixture.detectChanges();
                fixture.whenStable().then(() => {

                    hostComponent.setTab(0);
                    fixture.detectChanges();
                    fixture.whenStable().then(async() => {  
                        let table1FilteredColumns = (await table1Component.getState()).filtered;
                        let table2FilteredColumns = (await table2Component.getState()).filtered;
                        let table3FilteredColumns = (await table3Component.getState()).filtered;

                        expect(table1FilteredColumns).toBeUndefined();
                        expect(table2FilteredColumns).toBeUndefined();
                        expect(table3FilteredColumns).toBeUndefined();

                        const fg = new window.Smart.Utilities.FilterGroup();
                        const fo = fg.createFilter('string', 'Andr', 'CONTAINS');
                        fg.addFilter('and', fo);        

                        table1Component.addFilter('FirstName', fg);

                        table1FilteredColumns = (await table1Component.getState()).filtered;
                        table2FilteredColumns = (await table2Component.getState()).filtered;
                        table3FilteredColumns = (await table3Component.getState()).filtered;
                                
                        expect(table1FilteredColumns.appliedFilters).not.toBeUndefined();
                        expect(table1FilteredColumns.appliedFilters.FirstName).not.toBeUndefined();
                        expect(table1FilteredColumns.appliedFilters.FirstName.filters.length).toBe(1);
                        expect(table1FilteredColumns.appliedFilters.FirstName.filters[0].condition).toEqual('CONTAINS');
                        expect(table1FilteredColumns.appliedFilters.FirstName.filters[0].value).toEqual('Andr');

                        expect(table2FilteredColumns).toBeUndefined();
                        expect(table3FilteredColumns).toBeUndefined();

                        hostComponent.setTab(1);
                        fixture.detectChanges();
                        fixture.whenStable().then(async () => {
                            table1FilteredColumns = (await table1Component.getState()).filtered;
                            table2FilteredColumns = (await table2Component.getState()).filtered;
                            table3FilteredColumns = (await table3Component.getState()).filtered;
                                    
                            expect(table1FilteredColumns.appliedFilters).not.toBeUndefined();
                            expect(table1FilteredColumns.appliedFilters.FirstName).not.toBeUndefined();
                            expect(table1FilteredColumns.appliedFilters.FirstName.filters.length).toBe(1);
                            expect(table1FilteredColumns.appliedFilters.FirstName.filters[0].condition).toEqual('CONTAINS');
                            expect(table1FilteredColumns.appliedFilters.FirstName.filters[0].value).toEqual('Andr');

                            expect(table2FilteredColumns).toBeUndefined();
                            expect(table3FilteredColumns).toBeUndefined();
                        });
                    });
                });
            });
        }));

        it('filtering should be removed from correct table', waitForAsync(() => {
            const table1Component = hostComponent.table1;
            const table2Component = hostComponent.table2;
            const table3Component = hostComponent.table3;

            hostComponent.setTab(1);
            fixture.detectChanges();
            fixture.whenStable().then(() => {

                hostComponent.setTab(2);
                fixture.detectChanges();
                fixture.whenStable().then(() => {

                    hostComponent.setTab(0);
                    fixture.detectChanges();
                    fixture.whenStable().then(async() => {  
                        let table1FilteredColumns = (await table1Component.getState()).filtered;
                        let table2FilteredColumns = (await table2Component.getState()).filtered;
                        let table3FilteredColumns = (await table3Component.getState()).filtered;

                        expect(table1FilteredColumns).toBeUndefined();
                        expect(table2FilteredColumns).toBeUndefined();
                        expect(table3FilteredColumns).toBeUndefined();

                        const fg = new window.Smart.Utilities.FilterGroup();
                        const fo = fg.createFilter('string', 'Andr', 'CONTAINS');
                        fg.addFilter('and', fo);        

                        table1Component.addFilter('FirstName', fg);

                        table1FilteredColumns = (await table1Component.getState()).filtered;
                        table2FilteredColumns = (await table2Component.getState()).filtered;
                        table3FilteredColumns = (await table3Component.getState()).filtered;
                                
                        expect(table1FilteredColumns.appliedFilters).not.toBeUndefined();
                        expect(table1FilteredColumns.appliedFilters.FirstName).not.toBeUndefined();
                        expect(table1FilteredColumns.appliedFilters.FirstName.filters.length).toBe(1);
                        expect(table1FilteredColumns.appliedFilters.FirstName.filters[0].condition).toEqual('CONTAINS');
                        expect(table1FilteredColumns.appliedFilters.FirstName.filters[0].value).toEqual('Andr');

                        expect(table2FilteredColumns).toBeUndefined();
                        expect(table3FilteredColumns).toBeUndefined();

                        table1Component.removeFilter('FirstName');

                        table1FilteredColumns = (await table1Component.getState()).filtered;
                        table2FilteredColumns = (await table2Component.getState()).filtered;
                        table3FilteredColumns = (await table3Component.getState()).filtered;

                        expect(table1FilteredColumns.appliedFilters).toBeUndefined();
                        expect(table2FilteredColumns).toBeUndefined();
                        expect(table3FilteredColumns).toBeUndefined();                       
                    });
                });
            });
        }));
    });
});
