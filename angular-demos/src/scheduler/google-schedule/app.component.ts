import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerViews, SchedulerViewType, SchedulerEvent } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    view: SchedulerViewType = 'month';

    dateCurrent: Date = new Date(2021, 0, 20);

    dataSource: SchedulerEvent[] = new window.Smart.DataAdapter({
        dataSource: 'https://calendar.google.com/calendar/ical/jqwidgetstest%40gmail.com/private-d980817fc2fd252df41420619aeeddbb/basic.ics',
        dataSourceType: 'ics',
        dataFields: [
            { name: 'dateStart', map: 'DTSTART', dataType: 'date' },
            { name: 'dateEnd', map: 'DTEND', dataType: 'date' },
            { name: 'label', map: 'SUMMARY', dataType: 'string' },
            { name: 'location', map: 'LOCATION', dataType: 'string' },
            { name: 'description', map: 'DESCRIPTION', dataType: 'string' },
            { name: 'rrule', map: 'RRULE', dataType: 'string' },
            { name: 'extdate', map: 'EXDATE', dataType: 'string' },
            { name: 'status', map: 'STATUS', dataType: 'string' },
            { name: 'reccurenceId', map: 'RECURRENCEID', dataType: 'string' },
            { name: 'uid', map: 'UID', dataType: 'string' },
            { name: 'categories', map: 'CATEGORIES', dataType: 'string' },
            { name: 'alarm', map: 'ALARM', dataType: 'any' }
        ]
    });

    views: SchedulerViews[] = ['day', 'week', 'month', 'agenda'];

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