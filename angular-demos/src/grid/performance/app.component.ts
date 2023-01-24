import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


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

        that.grid.dataSource = new Smart.DataAdapter({
            dataSource: 20
        });

        that.grid.columns = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J'
        ];

        that.grid.nativeElement.whenRendered(() => {
            const rows = that.grid.rows;
            const updateValues = function () {
                that.grid.beginUpdate();
                for (let i = 0; i < rows.length; i++) {
                    const row = rows[i];
                    for (let j = 0; j < row.cells.length; j++) {
                        const randomNum = Math.random();
                        const value = randomNum;
                        const cell = rows[i].cells[j];
                        cell.value = value;
                        if (value < 0.2) {
                            cell.background = "#27A2FC";
                            cell.color = "#fff";
                        }
                        else if (value > 0.8) {
                            cell.background = "#6C01FF";
                            cell.color = "#000";
                        }
                        else {
                            cell.background = "#FC27A2";
                            cell.color = "#fff";
                        }
                    }
                }

                that.grid.endUpdate();
            };
            updateValues();
            setInterval(function () {
                updateValues();
            }, 30);
        });
    }
}