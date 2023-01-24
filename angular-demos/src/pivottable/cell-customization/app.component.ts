import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GeneratePivotData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    columnTotals = true;
    columnTotalsPosition = 'far';
    dataSource = GeneratePivotData(300, 3);
    freezeHeader = true;
    grandTotal = true;
    groupLayout = 'classic';
    keyboardNavigation = true;
    rowTotals = true;
    sortMode = 'one';
    columns = [
        { label: 'Continent', dataField: 'continent', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'City', dataField: 'city', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Year', dataField: 'year', dataType: 'number', allowPivot: true, pivot: true },
        { label: 'Quarter', dataField: 'quarter', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Month', dataField: 'month', dataType: 'string', allowPivot: true, pivot: true },
        {
            label: 'Revenue', dataField: 'revenue', dataType: 'number', summary: 'sum',
            formatFunction(settings: { value: any, row: string | number, column: string, cell: HTMLTableCellElement, template!: any }) {
                settings.cell.classList.remove('small', 'medium', 'large');

                if (settings.value < 100000 / 3) {
                    settings.cell.classList.add('small');
                }
                else if (settings.value < 2 * 100000 / 3) {
                    settings.cell.classList.add('medium');
                }
                else {
                    settings.cell.classList.add('large');
                }

                if (!isNaN(settings.value) && settings.value !== null) {
                    settings.template = '$' + settings.value;
                }
            }
        }
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
        const pivotTable = this.pivottable,
            messagesEn = Object.assign({}, pivotTable.messages.en, { total: 'Revenue' });

        pivotTable.messages = Object.assign({}, pivotTable.messages, { en: messagesEn });
    }
}