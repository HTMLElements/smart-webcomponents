import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SortPanelComponent } from 'smart-webcomponents-angular/sortpanel';
import { TableComponent, Smart } from 'smart-webcomponents-angular/table';
import { GetCountriesData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('sortpanel', { read: SortPanelComponent, static: false }) sortpanel: SortPanelComponent;
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

    tableDataSource = new Smart.DataAdapter({
        dataSource: GetCountriesData(),
        dataFields: [
            'ID: number',
            'Country: string',
            'Area: number',
            'Population_Urban: number',
            'Population_Rural: number',
            'Population_Total: number',
            'GDP_Agriculture: number',
            'GDP_Industry: number',
            'GDP_Services: number',
            'GDP_Total: number'
        ]
    });
    columns = [
        'Country',
        'Area',
        'Population_Rural',
        'Population_Total',
        'GDP_Total'
    ];

    sortPanelDataSource = [
        { label: 'Country', dataField: 'Country', dataType: 'string', sortDirection: 'ascending', sortIndex: 1, icon: 'country' },
        { label: 'Area', dataField: 'Area', dataType: 'number', sortDirection: 'ascending', sortIndex: -1, icon: 'area' },
        { label: 'Population Rural', dataField: 'Population_Rural', dataType: 'number', sortDirection: 'ascending', sortIndex: -1, icon: 'rural' },
        { label: 'Population Total', dataField: 'Population_Total', dataType: 'number', sortDirection: 'ascending', sortIndex: -1, icon: 'total' },
        { label: 'GDP Total', dataField: 'GDP_Total', dataType: 'number', sortDirection: 'ascending', sortIndex: -1, icon: 'gdp' }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        that.table.sortBy('Country', 'asc');
        that.sortpanel.addEventListener('apply', function (event: CustomEvent) {
            const value = event.detail.value;
            that.table.clearSort();
            value.forEach((column: { label: string; dataField: string; dataType: string; sortDirection: string; sortIndex: number; icon: string; }) => {
                that.table.sortBy(column.dataField, column.sortDirection === 'ascending' ? 'asc' : 'desc');
            });
        });
    }
}