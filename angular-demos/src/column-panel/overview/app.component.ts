import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ColumnPanelComponent } from 'smart-webcomponents-angular/columnpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('columnpanel', { read: ColumnPanelComponent, static: false }) columnpanel!: ColumnPanelComponent;

    dataSource = [
        { label: 'Name', dataField: 'Name', visible: true, icon: 'name' },
        { label: 'Age', dataField: 'Age', visible: false, icon: 'age' },
        { label: 'Married', dataField: 'Married', visible: true, icon: 'married' },
        { label: 'Arrival date', dataField: 'Arrival', icon: 'arrival' },
        { label: 'Departure date', dataField: 'Departure', icon: 'departure' },
        { label: 'Luggage', dataField: 'Luggage', icon: 'luggage' }
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
    }
}