import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent, SchedulerViewType, SchedulerViews, SchedulerGroupOrientation, SchedulerResource } from 'smart-webcomponents-angular/scheduler';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;
    @ViewChild('alertWindow', { read: WindowComponent, static: false }) alertWindow!: WindowComponent;

    targetEvent = null;
    eventEditors = null;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(), year = today.getFullYear(), month = today.getMonth(), date = today.getDate();
        const dataWithGroups = [
            {
                label: 'Website Re-Design Plan',
                dateStart: new Date(year, month, date, 7, 30),
                dateEnd: new Date(year, month, date, 9, 30),
                roomId: 1,
            }, {
                label: 'Book Flights to San Fran for Sales Trip',
                roomId: 2,
                dateStart: new Date(year, month, date, 8, 0),
                dateEnd: new Date(year, month, date, 10, 0),
            }, {
                label: 'Install New Router in Dev',
                roomId: 3,
                dateStart: new Date(year, month, date, 9),
                dateEnd: new Date(year, month, date, 10, 30)
            }, {
                label: 'Approve Personal Computer Upgrade Plan',
                roomId: 4,
                dateStart: new Date(year, month, date, 8),
                dateEnd: new Date(year, month, date, 9, 30)
            }, {
                label: 'Final Budget Review',
                roomId: 5,
                dateStart: new Date(year, month, date, 6, 0),
                dateEnd: new Date(year, month, date, 9, 35)
            }, {
                label: 'New Brochures',
                roomId: 6,
                dateStart: new Date(year, month, date, 7, 0),
                dateEnd: new Date(year, month, date, 10, 15)
            }, {
                label: 'New Brochures',
                roomId: 7,
                dateStart: new Date(year, month, date, 8, 0),
                dateEnd: new Date(year, month, date, 9, 45)
            }, {
                label: 'Install New Database',
                roomId: 8,
                dateStart: new Date(year, month, date, 7),
                dateEnd: new Date(year, month, date, 10, 15)
            }, {
                label: 'Approve New Online Marketing Strategy',
                roomId: 9,
                dateStart: new Date(year, month, date, 6, 0),
                dateEnd: new Date(year, month, date, 9, 30)
            }, {
                label: 'Upgrade Personal Computers',
                roomId: 10,
                dateStart: new Date(year, month, date, 7),
                dateEnd: new Date(year, month, date, 9, 30)
            }, {
                label: 'Prepare year Marketing Plan',
                roomId: 11,
                dateStart: new Date(year, month, date, 9),
                dateEnd: new Date(year, month, date, 10, 45)
            }, {
                label: 'Prepare year Marketing Plan',
                roomId: 12,
                dateStart: new Date(year, month, date, 6, 30),
                dateEnd: new Date(year, month, date, 9, 30)
            }, {
                label: 'Brochure Design Review',
                roomId: 1,
                dateStart: new Date(year, month, date, 13, 0),
                dateEnd: new Date(year, month, date, 14, 30)
            }, {
                label: 'Create Icons for Website',
                roomId: 2,
                dateStart: new Date(year, month, date, 14, 0),
                dateEnd: new Date(year, month, date, 15, 30)
            }, {
                label: 'Upgrade Server Hardware',
                roomId: 3,
                dateStart: new Date(year, month, date, 15, 0),
                dateEnd: new Date(year, month, date, 16, 0)
            }, {
                label: 'Submit New Website Design',
                roomId: 4,
                dateStart: new Date(year, month, date, 16, 30),
                dateEnd: new Date(year, month, date, 18, 0)
            }, {
                label: 'Launch New Website',
                roomId: 5,
                dateStart: new Date(year, month, date, 13, 20),
                dateEnd: new Date(year, month, date, 14, 0)
            }, {
                label: 'Google AdWords Strategy',
                roomId: 6,
                dateStart: new Date(year, month, date, 17),
                dateEnd: new Date(year, month, date, 18, 30)
            }, {
                label: 'Rollout of New Website and Marketing Brochures',
                roomId: 7,
                dateStart: new Date(year, month, date, 16),
                dateEnd: new Date(year, month, date, 18)
            }, {
                label: 'Non-Compete Agreements',
                roomId: 8,
                dateStart: new Date(year, month, date, 13, 0, 0),
                dateEnd: new Date(year, month, date, 15, 45, 0)
            }, {
                label: 'Approve Hiring of John Jeffers',
                roomId: 9,
                dateStart: new Date(year, month, date, 19, 15),
                dateEnd: new Date(year, month, date, 21, 15)
            }, {
                label: 'Update NDA Agreement',
                roomId: 10,
                dateStart: new Date(year, month, date, 14),
                dateEnd: new Date(year, month, date, 15, 15)
            }, {
                label: 'Update Employee Files with New NDA',
                roomId: 11,
                dateStart: new Date(year, month, date, 17, 30),
                dateEnd: new Date(year, month, date, 19, 45)
            }, {
                label: 'Submit Questions Regarding New NDA',
                roomId: 12,
                dateStart: new Date(year, month, date, 18, 20),
                dateEnd: new Date(year, month, date, 19, 30)
            }, {
                label: 'Submit Signed NDA',
                roomId: 1,
                dateStart: new Date(year, month, date - 1, 10, 0, 0),
                dateEnd: new Date(year, month, date - 1, 12, 0, 0)
            }, {
                label: 'Review Revenue Projections',
                roomId: 2,
                dateStart: new Date(year, month, date - 1, 8, 0, 0),
                dateEnd: new Date(year, month, date - 1, 11, 0, 0)
            }, {
                label: 'Comment on Revenue Projections',
                roomId: 3,
                dateStart: new Date(year, month, date - 1, 9, 0, 0),
                dateEnd: new Date(year, month, date - 1, 12, 0, 0)
            }, {
                label: 'Comment on Revenue Projections',
                roomId: 4,
                dateStart: new Date(year, month, date - 1, 9, 15, 0),
                dateEnd: new Date(year, month, date - 1, 11, 30, 0)
            }, {
                label: 'Provide New Health Insurance Docs',
                roomId: 5,
                dateStart: new Date(year, month, date - 1, 9, 30, 0),
                dateEnd: new Date(year, month, date - 1, 12, 0, 0)
            }, {
                label: 'Review Changes to Health Insurance Coverage',
                roomId: 6,
                dateStart: new Date(year, month, date - 1, 6, 30, 0),
                dateEnd: new Date(year, month, date - 1, 11, 0, 0)
            }, {
                label: 'Review Customers Feedback',
                roomId: 7,
                dateStart: new Date(year, month, date - 1, 11, 0, 0),
                dateEnd: new Date(year, month, date - 1, 12, 0, 0)
            },
            {
                label: 'Create Personal List',
                roomId: 8,
                dateStart: new Date(year, month, date - 1, 9, 0, 0),
                dateEnd: new Date(year, month, date - 1, 12, 0, 0)
            },
            {
                label: 'Handle Issues With Customers',
                roomId: 9,
                dateStart: new Date(year, month, date - 1, 9, 30, 0),
                dateEnd: new Date(year, month, date - 1, 11, 30, 0)
            },
            {
                label: 'Review Training Course for any Ommissions',
                roomId: 10,
                dateStart: new Date(year, month, date - 1, 7, 0, 0),
                dateEnd: new Date(year, month, date - 1, 10, 30, 0)
            },
            {
                label: 'Contact Sales Dept',
                roomId: 11,
                dateStart: new Date(year, month, date - 1, 8, 30, 0),
                dateEnd: new Date(year, month, date - 1, 11, 0, 0)
            },
            {
                label: 'Brief Emloyees On New Tasks',
                roomId: 12,
                dateStart: new Date(year, month, date - 1, 9, 0, 0),
                dateEnd: new Date(year, month, date - 1, 12, 0, 0)
            },
            {
                label: 'Review Contracts',
                roomId: 1,
                dateStart: new Date(year, month, date - 1, 14, 0, 0),
                dateEnd: new Date(year, month, date - 1, 15, 30, 0)
            }, {
                label: 'Test The New Working Process',
                roomId: 2,
                dateStart: new Date(year, month, date - 1, 14),
                dateEnd: new Date(year, month, date - 1, 15)
            }, {
                label: 'Create Working Papers',
                roomId: 3,
                dateStart: new Date(year, month, date - 1, 15),
                dateEnd: new Date(year, month, date - 1, 17)
            }, {
                label: 'Estimate Losses',
                roomId: 4,
                dateStart: new Date(year, month, date - 1, 16),
                dateEnd: new Date(year, month, date - 1, 19)
            }, {
                label: 'Meet With New Employess',
                roomId: 5,
                dateStart: new Date(year, month, date - 1, 15),
                dateEnd: new Date(year, month, date - 1, 16)
            }, {
                label: 'Update Info On Inssurances',
                roomId: 6,
                dateStart: new Date(year, month, date - 1, 17),
                dateEnd: new Date(year, month, date - 1, 18, 30)
            }, {
                label: 'Review Customers Comments',
                roomId: 7,
                dateStart: new Date(year, month, date - 1, 15, 30),
                dateEnd: new Date(year, month, date - 1, 16, 45)
            },
            {
                label: 'Present Notes To Managers',
                roomId: 8,
                dateStart: new Date(year, month, date - 1, 15, 5),
                dateEnd: new Date(year, month, date - 1, 17, 10)
            },
            {
                label: 'Debug Session',
                roomId: 9,
                dateStart: new Date(year, month, date - 1, 17, 15, 0),
                dateEnd: new Date(year, month, date - 1, 19, 45, 0)
            },
            {
                label: 'Review Results',
                roomId: 10,
                dateStart: new Date(year, month, date - 1, 13, 0, 0),
                dateEnd: new Date(year, month, date - 1, 13, 30, 0)
            },
            {
                label: 'Disscuss The Bottlenecks With Colleagues',
                roomId: 11,
                dateStart: new Date(year, month, date - 1, 15, 0, 0),
                dateEnd: new Date(year, month, date - 1, 16, 20, 0)
            },
            {
                label: 'Meditate',
                roomId: 12,
                dateStart: new Date(year, month, date - 1, 18, 0, 0),
                dateEnd: new Date(year, month, date - 1, 18, 30, 0)
            }
        ];

        return dataWithGroups
    })();

    view: SchedulerViewType = 'timelineDay';

    views: SchedulerViews[] = ['timelineDay', 'timelineWeek'];

    groupOrientation: SchedulerGroupOrientation = 'vertical';

    groups: string[] = ['roomId'];

    resources: SchedulerResource[] = [
        {
            label: 'Rooms',
            value: 'roomId',
            dataSource: [
                {
                    label: 'Playground',
                    id: 1,
                    type: 'Conference',
                    capacity: 10,
                    backgroundColor: '#919191'
                }, {
                    label: 'Liberty Square',
                    id: 2,
                    type: 'Common',
                    capacity: 20,
                    backgroundColor: '#208056'
                },
                {
                    label: 'Hall of Justice',
                    id: 3,
                    type: 'Conference',
                    capacity: 25,
                    backgroundColor: '#BFA300'
                },
                {
                    label: 'Batcave',
                    id: 4,
                    type: 'Common',
                    capacity: 10,
                    backgroundColor: '#7B60BF'
                },
                {
                    label: 'Thunderdome',
                    id: 5,
                    type: 'Common',
                    capacity: 20,
                    backgroundColor: '#800000'
                },
                {
                    label: 'Spider Island',
                    id: 6,
                    type: 'Conference',
                    capacity: 15,
                    backgroundColor: '#6097BF'
                },
                {
                    label: 'Summer',
                    id: 7,
                    type: 'Conference',
                    capacity: 4,
                    backgroundColor: '#BF00A6'
                },
                {
                    label: 'Deatch Start',
                    id: 8,
                    type: 'Common',
                    capacity: 6,
                    backgroundColor: '#0091EA'
                },
                {
                    label: 'Photogenic',
                    id: 9,
                    type: 'Common',
                    capacity: 7,
                    backgroundColor: '#43A047'
                },
                {
                    label: 'Dragonstone',
                    id: 10,
                    type: 'Conference',
                    capacity: 10,
                    backgroundColor: '#A1887F'
                },
                {
                    label: 'Riverrun',
                    id: 11,
                    type: 'Common',
                    capacity: 12,
                    backgroundColor: '#26A69A'
                },
                {
                    label: 'Appropriate',
                    id: 12,
                    type: 'Conference',
                    capacity: 15,
                    backgroundColor: '#FFAB40'
                }
            ]
        }
    ];

    groupTemplate: string = 'groupTemplate';

    cellTemplate: Function = (cell: HTMLElement, value: Date) => {
        //Set the cell Lunch Break label
        cell.textContent = value.getHours() === 12 ? 'Lunch Break' : '';
    };

    restrictedHours: number[] = [12];

    openNotification() {
        this.alertWindow.open();
    }

    notifyForRestrictions(event: CustomEvent) {
        const scheduler = this.scheduler;

        if (scheduler.isEventRestricted(event.detail.itemDateRange)) {
            this.openNotification();
        }
    }

    setEventEditDetails(event: CustomEvent) {
        const eventDetails = event.detail;

        this.targetEvent = eventDetails.item;
        this.eventEditors = eventDetails.editors;
    }

    clearEventEdit() {
        this.targetEvent = undefined;
    }

    checkEventEdit() {
        const that = this;

        if (!that.targetEvent || !that.eventEditors) {
            return
        }

        const dateStart = that.eventEditors.dateStart.querySelector('[event-editor]').value.toDate(),
            dateEnd = that.eventEditors.dateEnd.querySelector('[event-editor]').value.toDate();

        if (that.scheduler.isEventRestricted({ dateStart: dateStart, dateEnd: dateEnd })) {
            that.openNotification();
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
        const that = this,
            scheduler = that.scheduler,
            alertWindow = that.alertWindow,
            today = new Date();

        alertWindow.addEventListener('confirm', () => alertWindow.close());
        scheduler.scrollToDate(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6), true);
    };
}