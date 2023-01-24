import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    appearance = {
        alternationCount: 2,
        showRowHeaderNumber: true,
        showRowHeader: true
    }

    header = {
        visible: true,
        template: '#toolbarTemplate'
    }

    sorting = {
        enabled: true
    }

    selection = {
        enabled: true,
        allowCellSelection: true,
        allowRowHeaderSelection: true,
        allowColumnHeaderSelection: true,
        mode: 'extended'
    }

    dataSource = new Smart.DataAdapter({
        dataSource: [
            { Name: 'Zavier Vargas', Income: 59039, Expenses: 13303, Debt: 15000 },
            { Name: 'Mark Beasley', Income: 22468, Expenses: 7600, Debt: 0 },
            { Name: 'Skyla Khan', Income: 111459, Expenses: 101009, Debt: 7300 },
            { Name: 'Deandre Weber', Income: 28233, Expenses: 31045, Debt: 21000 },
            { Name: 'Isla Doyle', Income: 92030, Expenses: 90581, Debt: 160000 },
            { Name: 'Jaslyn Barron', Income: 112083, Expenses: 100322, Debt: 43500 },
            { Name: 'Monserrat Mccann', Income: 92510, Expenses: 28345, Debt: 17890 },
            { Name: 'Britney Fuller', Income: 55091, Expenses: 55020, Debt: 31000 },
            { Name: 'Bernard Munoz', Income: 10030, Expenses: 43012, Debt: 30000 },
            { Name: 'Sherlyn Vincent', Income: 81209, Expenses: 14390, Debt: 3000 }
        ],
        dataFields: [
            'Name: string',
            'Income: number',
            'Expenses: number',
            'Debt: number'
        ]
    })

    columns = [
        { label: 'Name', dataField: 'Name' },
        { label: 'Income (2019)', dataField: 'Income', cellsFormat: 'c0', },
        { label: 'Expenses (2019)', dataField: 'Expenses', cellsFormat: 'c0' },
        { label: 'Remaining Debt', dataField: 'Debt', cellsFormat: 'c0' },
    ]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    onClick($event) {
        const that = this;

        switch ($event.srcElement.id) {
            case 'column': {
                that.grid.createChart('column');
                break;
            }
            case 'line': {
                that.grid.createChart('line');
                break;
            }
            case 'pie': {
                that.grid.createChart('pie');
                break;
            }
            case 'bar': {
                that.grid.createChart('bar');
                break;
            }
            case 'area': {
                that.grid.createChart('area');
                break;
            }
            case 'scatter': {
                that.grid.createChart('scatter');
                break;
            }

        }
    }

    init(): void {
        // init code.
    }
}