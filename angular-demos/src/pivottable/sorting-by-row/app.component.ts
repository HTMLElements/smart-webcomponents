import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
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
    @ViewChild('toggleButtonLabel', { read: ElementRef, static: false }) toggleButtonLabel: ElementRef;

    columnTotals = true;
    dataSource = GeneratePivotData(300, 1);
    freezeHeader = true;
    grandTotal = true;
    keyboardNavigation = true;
    onInit = function () {
        this.rows[0].expanded = true;
    };
    rowSort = true;
    columns = [
        { label: 'Continent', dataField: 'continent', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'City', dataField: 'city', dataType: 'string', allowRowGroup: true, rowGroup: true },
        { label: 'Quarter', dataField: 'quarter', dataType: 'string', allowPivot: true, pivot: true },
        { label: 'Revenue', dataField: 'revenue', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', negativesInBrackets: true } },
        { label: 'Expenses', dataField: 'expense', dataType: 'number', summary: 'sum', summarySettings: { prefix: '$', negativesInBrackets: true } }
    ];

    changeHandler = (event: CustomEvent) => {
        const that = this;

        if (event.detail.value) {
            that.pivottable.groupLayout = 'classic';
            that.toggleButtonLabel.nativeElement.innerHTML = 'default';
        }
        else {
            that.pivottable.groupLayout = 'default';
            that.toggleButtonLabel.nativeElement.innerHTML = 'classic';
        }
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