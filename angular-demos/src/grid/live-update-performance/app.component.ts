import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetStockData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource = new Smart.DataAdapter({
        dataSource: GetStockData(),
        dataFields: [
            'symbol: string',
            'name: string',
            'region: string',
            'matchScore: number'
        ]
    })

    columns = [
        { label: 'Symbol', dataField: 'symbol' },
        { label: 'Name', dataField: 'name' },
        { label: 'Region', dataField: 'region' },
        { label: 'Match Score', dataField: 'matchScore' }
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

        const updateValues = function () {
            const rows = that.grid.rows;
            that.grid.beginUpdate();
            for (let i = 0; i < rows.length; i++) {
                let value = Math.random();

                const cell = rows[i].cells[3];
                if (value < 0.2) {
                    cell.background = "#FC3752";
                    cell.color = "#fff";
                }
                else if (value > 0.8) {
                    cell.background = "#95FF00";
                    cell.color = "#000";
                }
                else {
                    cell.background = "#FF6800";
                    cell.color = "#fff";
                }
                cell.value = value;
            }
            that.grid.endUpdate();
        };

        that.grid.nativeElement.whenRendered(() => {

            updateValues();
            setInterval(function () {
                updateValues();
            }, 50);
        });
    }
}