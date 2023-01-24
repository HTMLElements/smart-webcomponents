import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { SchedulerComponent, SchedulerViewType, SchedulerViews, SchedulerResource } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: any[] = (() => {
        const today = new Date(),
            currentDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        return [
            {
                label: 'Website Re-Design Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate, 9, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30)
            }, {
                label: 'Book Flights to San Fran for Sales Trip',
                priorityId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate + 3, today.getHours() + 1, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 3, today.getHours() + 3, 0),
                notifications: [
                    {
                        interval: 0,
                        type: 'days',
                        time: [today.getHours(), today.getMinutes() + 4],
                        message: 'Book Flights to San Fran for Sales Trip Early'
                    },
                    {
                        interval: 0,
                        type: 'weeks',
                        time: [today.getHours(), today.getMinutes() + 5],
                        message: 'Book Flights to San Fran for Sales Trip Late'
                    }
                ]
            }, {
                label: 'Install New Router in Dev Room',
                priorityId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate, 13),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
                repeat: {
                    repeatFreq: 'monthly',
                    repeatInterval: 1,
                    repeatOn: today.getDate()
                }
            }, {
                label: 'Google AdWords Strategy',
                dateStart: new Date(currentYear, currentMonth, 10),
                dateEnd: new Date(currentYear, currentMonth, 11),
                allDay: true,
                backgroundColor: '#F57F17',
                repeat: {
                    repeatFreq: 'weekly',
                    repeatInterval: 5,
                    repeatOn: [0, 2, 5],
                    repeatEnd: new Date(currentYear, currentMonth + 2, 24),
                    exceptions: [
                        {
                            date: new Date(currentYear, currentMonth, 13),
                            dateStart: new Date(currentYear, currentMonth, 14),
                            label: 'Google AdWords Strategy',
                            backgroundColor: '#F57F17'
                        },
                        {
                            date: new Date(currentYear, currentMonth + 1, 12),
                            label: 'Google AdWords Strategy',
                            backgroundColor: '#F57F17'
                        },
                    ]
                }
            },
            {
                label: 'Approve Personal Computer Upgrade Plan',
                priorityId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0)
            }, {
                label: 'Final Budget Review',
                priorityId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35)
            }, {
                label: 'New Brochures',
                priorityId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 15)
            }, {
                label: 'Install New Database',
                priorityId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15)
            }, {
                label: 'Approve New Online Marketing Strategy',
                priorityId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0)
            }, {
                label: 'Upgrade Personal Computers',
                priorityId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30)
            }
        ];

    })();

    view: SchedulerViewType = 'week';

    views: SchedulerViews[] = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth', 'agenda'];

    hourStart: number = 7;

    hourEnd: number = 19;

    firstDayOfWeek: number = 1;

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
    ];

    handleExport(dataType: string) {
        this.scheduler.exportData(dataType);
    }

    handlePrint() {
        this.scheduler.print();
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
    };
}