import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GroupPanelComponent } from 'smart-webcomponents-angular/grouppanel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grouppanel', { read: GroupPanelComponent, static: false }) grouppanel!: GroupPanelComponent;

    dataSource = [
        { label: 'Name', dataField: 'Name', dataType: 'string', sortDirection: 'descending', groupIndex: 1, icon: 'name' },
        { label: 'Age', dataField: 'Age', dataType: 'number', sortDirection: 'ascending', groupIndex: -1, icon: 'age' },
        { label: 'Married', dataField: 'Married', dataType: 'boolean', sortDirection: 'ascending', groupIndex: 2, icon: 'married' },
        { label: 'Arrival date', dataField: 'Arrival', dataType: 'date', sortDirection: 'descending', groupIndex: 3, icon: 'arrival' },
        { label: 'Departure date', dataField: 'Departure', dataType: 'date', sortDirection: 'ascending', groupIndex: -1, icon: 'departure' },
        { label: 'Luggage', dataField: 'Luggage', dataType: 'string', sortDirection: 'descending', groupIndex: -1, icon: 'luggage' }
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