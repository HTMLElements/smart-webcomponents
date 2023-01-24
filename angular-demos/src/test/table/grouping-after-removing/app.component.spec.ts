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
    [selection]="true" [selectionMode]="'extended'" [grouping]="grouping" [columns]="columns"></smart-table>`
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
            }
            ];
            component.dataSource = data;
            fixture.detectChanges();
        });

        it('should not throw error when grouping after removing items', () => {           
            spyOn(console, 'error');

            component.beginUpdate();
            component.removeRow(1);           
            component.endEdit();

            component.addGroup('FirstName');

            expect(console.error).not.toHaveBeenCalled();
        });
    });
});
