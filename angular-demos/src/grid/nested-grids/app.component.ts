import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetCountriesData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    appearance = {
        showRowHeaderNumber: true,
        allowRowDetailToggleAnimation: true
    }

    onRowInit = (index, row) => {
        if (index === 0) {
            row.showDetail = true;
        }
    }

    onRowDetailInit = (index, row, detail) => {
        const grid = document.createElement('div');
        detail.appendChild(grid);
        const gridInstance = new Smart.Grid(grid, {
            dataSource: new Smart.DataAdapter({
                dataSource: GetCountriesData().filter((data) => data.ID === row.data.ID),
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
            }),
            columns: [
                'Population_Urban',
                'Population_Rural',
                'Population_Total',
                'GDP_Total'
            ]
        });
    }

    rowDetail = {
        enabled: true,
        visible: true,
        height: 120
    }

    dataSource = new Smart.DataAdapter({
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
    })

    columns = [
        'Country',
        'Area',
        'Population_Rural',
        'Population_Total',
        'GDP_Total'
    ]

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