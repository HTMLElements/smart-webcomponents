import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerResource, SchedulerViews, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';


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
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        return [
            {
                label: 'Michael',
                dateStart: new Date(currentYear, currentMonth, 21, 9, 30),
                dateEnd: new Date(currentYear, currentMonth, 21, 11, 30)
            }, {
                label: 'Bobby',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 24, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, 24, 12, 0),
            }, {
                label: 'Steven',
                clientId: 3,
                dateStart: new Date(currentYear, currentMonth, 21, 13),
                dateEnd: new Date(currentYear, currentMonth, 21, 15, 30)
            }, {
                label: 'Natally',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 22, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, 22, 11, 0)
            }, {
                label: 'Monica',
                clientId: 3,
                dateStart: new Date(currentYear, currentMonth, 22, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, 22, 13, 35)
            }, {
                label: 'George',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 21, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, 21, 15, 15)
            }, {
                label: 'Anna',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 22, 9),
                dateEnd: new Date(currentYear, currentMonth, 22, 12, 15)
            }, {
                label: 'Yoanna',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 23, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, 23, 14, 0)
            }, {
                label: 'Michael',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 21, 9),
                dateEnd: new Date(currentYear, currentMonth, 21, 11, 30)
            }, {
                label: 'Steven',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 24, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, 24, 13, 30)
            }, {
                label: 'Bobby',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 23, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, 23, 13, 30)
            }, {
                label: 'Monica',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 25, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, 25, 11, 30)
            }, {
                label: 'George',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 25, 9, 0),
                dateEnd: new Date(currentYear, currentMonth, 25, 15, 0)
            }, {
                label: 'Yoanna',
                clientId: 3,
                dateStart: new Date(currentYear, currentMonth, 12, 16, 30),
                dateEnd: new Date(currentYear, currentMonth, 13, 18, 0)
            }, {
                label: 'Anna',
                clientId: 3,
                dateStart: new Date(currentYear, currentMonth, 25, 12, 20),
                dateEnd: new Date(currentYear, currentMonth, 25, 14, 0)
            }, {
                label: 'Natally',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 28, 9, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 28, 12, 0, 0)
            }, {
                label: 'Steven',
                clientId: 3,
                dateStart: new Date(currentYear, currentMonth, 28, 13, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 28, 15, 30, 0)
            }, {
                label: 'Yoanna',
                clientId: 3,
                dateStart: new Date(currentYear, currentMonth, 29, 13, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 29, 15, 45, 0)
            }, {
                label: 'Michael',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 29, 9, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 29, 12, 0, 0)
            }, {
                label: 'Monica',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 29, 11, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 29, 14, 15, 0)
            }, {
                label: 'Natally',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth - 1, 1, 9, 0, 0),
                dateEnd: new Date(currentYear, currentMonth - 1, 1, 11, 45, 0)
            }, {
                label: 'Bobby',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 30, 10, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 30, 11, 30, 0)
            }, {
                label: 'Steven',
                clientId: 3,
                dateStart: new Date(currentYear, currentMonth, 30, 13, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 30, 15, 0, 0)
            }, {
                label: 'Monica',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 30, 11, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 30, 14, 0, 0)
            }, {
                label: 'George',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 28, 10, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 28, 13, 0, 0)
            }, {
                label: 'Anna',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth - 1, 1, 12, 0, 0),
                dateEnd: new Date(currentYear, currentMonth - 1, 1, 15, 0, 0)
            }, {
                label: 'Yoanna',
                clientId: 2,
                dateStart: new Date(currentYear, currentMonth, 31, 9, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 31, 13, 0, 0)
            }, {
                label: 'Michael',
                clientId: 1,
                dateStart: new Date(currentYear, currentMonth, 31, 11, 0, 0),
                dateEnd: new Date(currentYear, currentMonth, 31, 14, 0, 0)
            }
        ];
    })();

    view: SchedulerViewType = 'week';

    views: SchedulerViews[] = ['day', 'week', 'month'];

    groupTemplate: string = 'groupTemplate';

    cellTemplate: Function = function (cell: HTMLElement, date: Date) {
        if (cell.classList.contains('all-day')) {
            return;
        }

        const newContent = document.createElement('span');

        newContent.classList.add('gym');
        newContent.setAttribute('date', date.getDate().toString());

        if (this.view === 'day' || this.view === 'week') {
            newContent.setAttribute('hour', date.getHours().toString());
        }

        cell.appendChild(newContent);
    };

    hourStart: number = 6;

    hourEnd: number = 22;

    firstDayOfWeek: number = 1;

    groups: string[] = ['clientId'];

    resources: SchedulerResource[] = [
        {
            value: 'clientId',
            dataSource: [
                {
                    label: 'Andrew White',
                    id: 1,
                    age: 34,
                    discipline: 'Cross Fit'
                }, {
                    label: 'Nancy Smith',
                    id: 2,
                    age: 21,
                    discipline: 'Zumba'
                },
                {
                    label: 'Kate Johnson',
                    id: 3,
                    age: 35,
                    discipline: 'Yoga'
                }
            ],
            label: 'Client'
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