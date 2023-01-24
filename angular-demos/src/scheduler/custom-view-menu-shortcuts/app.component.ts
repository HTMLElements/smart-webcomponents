import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerViews } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            currentDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth(),
            data = [
                {
                    label: 'Website Re-Design Plan',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
                    backgroundColor: '#F9A825'
                },
                {
                    label: 'Website Performance Optimization Plan',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 3, 8, 30),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 10, 30),
                    backgroundColor: '#E67C73'
                }, {
                    label: 'Book Flights to San Fran for Sales Trip',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
                    backgroundColor: '#7986CB'
                },
                {
                    label: 'Book Flights to Los Angeles for Business Trip',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 4, 10, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 12, 30),
                    backgroundColor: '#039BE5'
                },
                {
                    label: 'Install New Router in Conference Room',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
                    backgroundColor: '#0B8043'
                },
                {
                    label: 'Add a new desk to the Dev Room',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
                    backgroundColor: '#8E24AA'
                }, {
                    label: 'Install New Router in Dev Room',
                    dateStart: new Date(currentYear, currentMonth, currentDate, 13),
                    dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
                    backgroundColor: '#F6BF26'
                }, {
                    label: 'Approve Personal Computer Upgrade Plan',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
                    backgroundColor: '#7986CB'
                }, {
                    label: 'Final Budget Review',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
                    backgroundColor: '#D50000'
                }, {
                    label: 'Old Brochures',
                    dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
                    backgroundColor: '#616161'
                }, {
                    label: 'New Brochures',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
                    backgroundColor: '#7986CB'
                }, {
                    label: 'Install New Database',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
                    backgroundColor: '#7986CB'
                }, {
                    label: 'Approve New Online Marketing Strategy',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
                    backgroundColor: '#8E24AA'
                }, {
                    label: 'Upgrade Personal Computers',
                    dateStart: new Date(currentYear, currentMonth, currentDate, 9),
                    dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
                    backgroundColor: '#D50000'
                }, {
                    label: 'Prepare current Year Marketing Plan',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
                    backgroundColor: '#F6BF26'
                }, {
                    label: 'Prepare current Year Marketing Plan',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
                    backgroundColor: '#F4511E'
                }
            ];

        return data
    })();

    view: string = 'month';

    nonworkingDays: number[] = [0, 3];
    
    views: object[] = [
        {
            type: 'month',
            label: 'Custom Month',
            hideNonworkingWeekdays: true,
            shortcutKey: 'X'
        },
        {
            type: 'week',
            label: 'Custom Week',
            shortcutKey: 'C+W'
        },
        {
            type: 'agenda',
            label: 'Custom Agenda',
            hideWeekend: true,
            shortcutKey: 'C+A'
        },
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