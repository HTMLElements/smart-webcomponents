import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    data: Object[] = [{
        firstName: 'Jorge',
        lastName: 'Payne',
        age: 18,
        gender: 'male'
    },
    {
        firstName: 'Amanda',
        lastName: 'Burton',
        age: 23,
        gender: 'female'
    },
    {
        firstName: 'Dolores',
        lastName: 'Moore',
        age: 45,
        gender: 'female'
    },
    {
        firstName: 'Tanya',
        lastName: 'Stone',
        age: 76,
        gender: 'female'
    },
    {
        firstName: 'Byron',
        lastName: 'Ramirez',
        age: 32,
        gender: 'male'
    },
    {
        firstName: 'Felix',
        lastName: 'Romero',
        age: 12,
        gender: 'male'
    },
    {
        firstName: 'Brianna',
        lastName: 'Ford',
        age: 50,
        gender: 'female'
    },
    {
        firstName: 'Priscilla',
        lastName: 'Williams',
        age: 18,
        gender: 'female'
    },
    {
        firstName: 'Elaine',
        lastName: 'Medina',
        age: 33,
        gender: 'female'
    },
    {
        firstName: 'Addison',
        lastName: 'Armstrong',
        age: 33,
        gender: 'nonbinary'
    },
    {
        firstName: 'Pedro',
        lastName: 'Curtis',
        age: 23,
        gender: 'male'
    },
    ];

    dataSource = new window.Smart.DataAdapter({
        dataSource: this.data,
        dataFields: [
            'firstName: string',
            'lastName: string',
            'age: number',
            'gender: string'
        ]
    });

    filterTemplate: String = 'customFilterTemplate';

    filtering: Boolean = true;

    columns: TableColumn[] = [{
        label: 'First Name',
        dataField: 'firstName',
        dataType: 'string'
    },
    {
        label: 'Last Name',
        dataField: 'lastName',
        dataType: 'string'
    },
    {
        label: 'Age',
        dataField: 'age',
        dataType: 'number'
    },
    {
        label: 'Gender',
        dataField: 'gender',
        dataType: 'string'
    }
    ];

    handleReady(event: Event) {
        const table = this.table;

        document.getElementById('filterCheckboxesContainer').addEventListener('change', function () {
            const maleChecked = (<CheckBox>document.getElementById('male')).checked,
                femaleChecked = (<CheckBox>document.getElementById('female')).checked;

            if (maleChecked && femaleChecked) {
                table.clearFilters();
                return;
            }

            const filterGroup = new window.Smart.Utilities.FilterGroup();

            if (!maleChecked) {
                const filterObject1 = filterGroup.createFilter('string', 'male', 'NOT_EQUAL');

                filterGroup.addFilter('and', filterObject1);
            }

            if (!femaleChecked) {
                const filterObject2 = filterGroup.createFilter('string', 'female', 'NOT_EQUAL');

                filterGroup.addFilter('and', filterObject2);
            }

            table.addFilter('gender', filterGroup);
        });
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }
}