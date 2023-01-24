import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToggleButtonComponent } from 'smart-webcomponents-angular/button';
import { PivotTableComponent } from 'smart-webcomponents-angular/pivottable';
import { GeneratePivotData } from './../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton: ToggleButtonComponent;
    @ViewChild('pivottable', { read: PivotTableComponent, static: false }) pivottable!: PivotTableComponent;

    dataSource = GeneratePivotData(300, 2);
    drillDown = true;
    freezeHeader = true;
    grandTotal = true;
    keyboardNavigation = true;
    selection = true;
    selectionMode = 'cell';
    toolbar = true;
    columns = [
        { label: 'Continent', dataField: 'continent', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'City', dataField: 'city', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Year', dataField: 'year', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Quarter', dataField: 'quarter', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Revenue', dataField: 'revenue', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', negativesInBrackets: true } },
        { label: 'Expenses', dataField: 'expense', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', negativesInBrackets: true } }
    ];

    readyHandler = () => {
        const pivotTable = this.pivottable,
            rows = pivotTable.nativeElement.rows;

        pivotTable.getDynamicColumns().then((dynamicColumns) => {
            pivotTable.select(rows[0].$.id, dynamicColumns[1].id);
            pivotTable.select(rows[0].$.id, dynamicColumns[2].id);
        });
    }

    changeHandler = (event: CustomEvent) => {
        this.pivottable.hideCellSelectionTooltip = event.detail.value;
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