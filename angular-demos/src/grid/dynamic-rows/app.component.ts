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
    @ViewChild('button', { read: ButtonComponent, static: false }) addRow!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) removeLastRow!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) removeFirstRow!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) updateFirstRow!: ButtonComponent;
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

        const updateButtonsDisabledState = function () {
            that.removeLastRow.disabled = that.grid.rows.length === 0;
            that.removeFirstRow.disabled = that.grid.rows.length === 0;
            that.updateFirstRow.disabled = that.grid.rows.length === 0;
        };

        const createRow = () => {
            const countries = ['Bulgaria', 'Germany', 'France', 'Japan', 'China', 'Italy', 'Spain', 'Portugal', 'India', 'Romania', 'Russia', 'Serbia', 'Turkey', 'Israel'];
            const newRow = new window.Smart.Grid.Row({
                data: {
                    ID: Math.random(),
                    Country: countries[parseInt('' + 10 * (Math.random()))],
                    Area: parseInt('' + Math.random() * 1000000),
                    Population_Rural: new Number('' + Math.random()).toFixed(2),
                    Population_Total: parseInt('' + Math.random() * 10000000),
                    GDP_Total: parseInt('' + Math.random() * 1000000)
                }
            });

            return newRow;
        };

        that.addRow.addEventListener('click', function (event) {
            that.grid.rows.push(createRow());
            updateButtonsDisabledState();
        });

        that.removeLastRow.addEventListener('click', function (event) {
            that.grid.rows.pop();
            updateButtonsDisabledState();
        });

        that.removeFirstRow.addEventListener('click', function (event) {
            that.grid.rows.splice(0, 1);
            updateButtonsDisabledState();
        });

        that.updateFirstRow.addEventListener('click', function (event) {
            if (that.grid.rows.length > 0) {
                that.grid.rows[0] = createRow();
            }
        });
    }
}