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
    <smart-table #table id="table" (onInit)="handleInit($event)" [dataSource]="dataSource"
    [keyboardNavigation]="keyboardNavigation" [grouping]="grouping" [columns]="columns"></smart-table>`
})
class TableHostComponent implements OnInit {
    @ViewChild('table', { read: TableComponent, static: true }) table!: TableComponent;

    @Input() dataSource: TableDataSource[] = [];
    @Input() columns: TableColumn[] = [];
    @Input() keyboardNavigation: boolean = true;
    @Input() grouping: boolean = true;
    @Input() handleInit: (event: Event) => void;

    ngOnInit(): void { }
}

describe('Table HostComponent', () => {
    let hostComponent: TableHostComponent;
    let component: TableComponent;
    let fixture: ComponentFixture<TableHostComponent>;
    let tools: TableTestHarness;
    let smartTable: Table;
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

    describe('Table grouping-tree mode', () => {
        beforeEach(() => {
            hostComponent.columns = TableMockColumns;
            data =  [{
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

        it('should not duplicate items on collapse and expand', async () => {
            component.addGroup('FirstName');
            component.addGroup('Country');
            component.dataSource = data;

            const rowsCount = component.dataSource.length;

            component.expandAllGroups();
            component.collapseAllGroups();

            tools.expandRow(8);

            expect(rowsCount).toBe(component.dataSource.length);
        });
    });
});
