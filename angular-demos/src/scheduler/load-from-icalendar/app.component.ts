import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerTimelineDayScale, SchedulerViews, SchedulerViewType, SchedulerResource } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource = new window.Smart.DataAdapter({
        dataSource: './../../../src/scheduler/load-from-icalendar/icalendar.ics',
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

    firstDayOfWeek: number = 1;

    view: SchedulerViewType = 'month';

    views: SchedulerViews[] = ['day', 'week', 'month'];

    timelineDayScale: SchedulerTimelineDayScale = 'halfHour';

    resources: SchedulerResource[] = [
        {
            label: 'Priority',
            value: 'priorityId',
            dataSource: [
                {
                    label: 'Low Priority',
                    id: 1,
                    backgroundColor: '#1e90ff'
                }, {
                    label: 'Medium Priority',
                    id: 2,
                    backgroundColor: '#ff9747'
                }
            ]
        }
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
    }
}