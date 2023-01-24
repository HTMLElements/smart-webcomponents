import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetCountriesData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) addColumn!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) removeLastColumn!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) removeFirstColumn!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) updateFirstColumn!: ButtonComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

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
        const that = this;

        let index = 0;
        const columnsList = [
            'ID',
            'Country',
            'Area',
            'Population_Urban',
            'Population_Rural',
            'Population_Total',
            'GDP_Agriculture',
            'GDP_Industry',
            'GDP_Services',
            'GDP_Total'
        ];
        const updateButtonsDisabledState = function () {
            that.addColumn.disabled = (that.grid.columns as GridColumn[]).length === columnsList.length;
            that.removeLastColumn.disabled = (that.grid.columns as GridColumn[]).length === 0;
            that.removeFirstColumn.disabled = (that.grid.columns as GridColumn[]).length === 0;
            that.updateFirstColumn.disabled = (that.grid.columns as GridColumn[]).length === 0 || ((that.grid.columns as GridColumn[]).length > 0 && that.grid.columns[0].label.indexOf('New') !== -1);
        };

        that.addColumn.addEventListener('click', function (event) {
            for (let i = 0; i < columnsList.length; i++) {
                let alreadyAdded = false;
                for (let j = 0; j < (that.grid.columns as GridColumn[]).length; j++) {
                    const column = (that.grid.columns as GridColumn[])[j];
                    if (column && column.label === columnsList[i]) {
                        alreadyAdded = true;
                        break;
                    }
                }
                if (alreadyAdded) {
                    continue;
                }
                const newColumn = new Smart.Grid.Column({ label: columnsList[i], dataField: columnsList[i] });
                (that.grid.columns as GridColumn[]).push(newColumn);
                break;
            }
            updateButtonsDisabledState();
        });

        that.removeLastColumn.addEventListener('click', function (event) {
            (that.grid.columns as GridColumn[]).pop();
            updateButtonsDisabledState();
        });

        that.removeFirstColumn.addEventListener('click', function (event) {
            (that.grid.columns as GridColumn[]).splice(0, 1);
            updateButtonsDisabledState();
        });

        that.updateFirstColumn.addEventListener('click', function (event) {
            if ((that.grid.columns as GridColumn[]).length > 0) {
                (that.grid.columns as GridColumn[])[0].label = "New " + that.grid.columns[0].label;
            }

            that.updateFirstColumn.disabled = true;
        });
    }
}