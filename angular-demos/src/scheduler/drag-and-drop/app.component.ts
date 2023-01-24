import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerViewType, SchedulerEvent, SchedulerViews, SchedulerTimelineDayScale } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;
    @ViewChild('scheduler2', { read: SchedulerComponent, static: false }) scheduler2: SchedulerComponent;

    getData(id: string): object[] {
        const today = new Date(),
            todayDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        if (id === 'scheduler') {
            //Scheduler data
            return [
                {
                    label: 'Google AdWords Strategy',
                    dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 30),
                    allDay: true,
                    backgroundColor: '#3F51B5'
                }, {
                    label: 'New Brochures',
                    dateStart: new Date(currentYear, currentMonth, todayDate + 1, 11, 30),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 14, 15),
                    backgroundColor: '#F4511E'
                }, {
                    label: 'Brochure Design Review',
                    dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
                    backgroundColor: '#7986CB'
                },
                {
                    label: 'Rollout of New Website and Marketing Brochures',
                    dateStart: new Date(currentYear, currentMonth, todayDate - 2, 8, 15),
                    dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 10, 45),
                    backgroundColor: '#E67C73'
                }, {
                    label: 'Update Sales Strategy Documents',
                    dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
                    dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
                    backgroundColor: '#616161'
                }, {
                    label: 'Non-Compete Agreements',
                    dateStart: new Date(currentYear, currentMonth, todayDate - 3, 8, 15),
                    dateEnd: new Date(currentYear, currentMonth, todayDate - 2, 9, 0),
                    backgroundColor: '#E67C73'
                }
            ]
        }

        //Scheduler2 data
        return [
            {
                label: 'Update Website Marketing Brochures',
                dateStart: new Date(currentYear, currentMonth, todayDate - 1, 8, 15),
                dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 45),
                backgroundColor: '#880E4F'
            }, {
                label: 'Prepare Sales Strategy Papers',
                dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
                backgroundColor: '#3F51B5'
            }, {
                label: 'Complete Agreements',
                dateStart: new Date(currentYear, currentMonth, todayDate + 1, 8, 0),
                dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 0),
                backgroundColor: '#558B2F'
            }, {
                label: 'Approve Hiring of Mark Waterberg',
                dateStart: new Date(currentYear, currentMonth, todayDate + 2, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                backgroundColor: '#00BFA5'
            }, {
                label: 'Reach NDA Agreement',
                dateStart: new Date(currentYear, currentMonth, todayDate - 2, 11, 45),
                dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 13, 45),
                backgroundColor: '#004D40'
            }
        ];
    }

    view: SchedulerViewType = 'week';

    dataSource: SchedulerEvent[] = this.getData('scheduler');

    views: SchedulerViews[] = ['day', 'week', 'month'];

    hourStart: number = 9;

    timelineDayScale: SchedulerTimelineDayScale = 'halfHour';

    dataSource2: SchedulerEvent[] = this.getData('scheduler2');

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