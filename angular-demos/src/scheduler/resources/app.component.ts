import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RadioButton, RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { SchedulerComponent, SchedulerEvent, SchedulerResource, SchedulerTimelineDayScale } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            currentDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        return [
            {
                label: 'Website Re-Design Plan',
                priorityId: 1,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30)
            }, {
                label: 'Book Flights to San Fran for Sales Trip',
                priorityId: 2,
                employeeId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
            },
            {
                label: 'Install New Router in Conference Room',
                priorityId: 2,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30)
            },
            {
                label: 'Add a new desk to the Dev Room',
                priorityId: 1,
                employeeId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45)
            }, {
                label: 'Install New Router in Dev Room',
                priorityId: 2,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate, 13),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30)
            }, {
                label: 'Approve Personal Computer Upgrade Plan',
                priorityId: 2,
                employeeId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0)
            }, {
                label: 'Final Budget Review',
                priorityId: 2,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35)
            }, {
                label: 'Old Brochures',
                priorityId: 2,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15)
            }, {
                label: 'New Brochures',
                priorityId: 2,
                employeeId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15)
            }, {
                label: 'Install New Database',
                priorityId: 1,
                employeeId: 2,
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15)
            }, {
                label: 'Approve New Online Marketing Strategy',
                priorityId: 2,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0)
            }, {
                label: 'Upgrade Personal Computers',
                priorityId: 1,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30)
            }, {
                label: 'Prepare current Year Marketing Plan',
                priorityId: 2,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30)
            }, {
                label: 'Prepare current Year Marketing Plan',
                priorityId: 2,
                employeeId: 1,
                dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30)
            }
        ]
    })();

    view: string = 'workWeek';

    views: object | string[] = [
        {
            label: 'Work Week',
            value: 'workWeek',
            type: 'week',
            hideWeekend: true
        },
        'month'
    ];

    timelineDayScale: SchedulerTimelineDayScale = 'quarterHour';

    hourStart: number = 7;

    hourEnd: number = 17;

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
        },
        {
            label: 'Employee',
            value: 'employeeId',
            dataSource: [
                {
                    label: 'Andrew Heart',
                    id: 1,
                    age: 28,
                    discipline: 'ABS, Fitball, StepFit',
                    backgroundColor: '#28a745'
                }, {
                    label: 'Nancy Johnson',
                    id: 2,
                    age: 31,
                    discipline: 'Tennis, Yoga, Swimming',
                    backgroundColor: '#8f73af'
                }
            ]
        }
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
        const that = this,
            scheduler = that.scheduler;

        scheduler.scrollToDate(new Date());

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent) {
            const schedulerResources = scheduler.resources,
                firstResource = (<RadioButton>event.target).value;
            let reorderedResources = [];

            //reorder the resources
            for (let i = 0; i < schedulerResources.length; i++) {
                const resource = schedulerResources[i];

                if (resource.value === firstResource) {
                    reorderedResources.splice(0, 0, resource);
                }
                else {
                    reorderedResources.push(resource);
                }
            }
            scheduler.resources = reorderedResources;
        });
    };
}