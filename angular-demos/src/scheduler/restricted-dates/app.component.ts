import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DateTimePicker } from 'smart-webcomponents-angular';
import { SchedulerComponent, SchedulerEvent, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    today = new Date();
    currentDate = this.today.getDate();
    currentYear = this.today.getFullYear();
    currentMonth = this.today.getMonth();

    targetEvent: SchedulerEvent | undefined;
    eventEditors: {dateStart: HTMLElement, dateEnd: HTMLElement} | undefined;

    dataSource: SchedulerEvent[] = (() => {
        return [
            {
                label: 'Google AdWords Strategy',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 9, 0),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 10, 30),
                backgroundColor: '#FF8A80',
                allDay: true
            }, {
                label: 'New Brochures',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 11, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 2, 14, 15),
                backgroundColor: '#9C27B0'
            }, {
                label: 'Brochure Design Review',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 2, 13, 15),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 4, 16, 15),
                backgroundColor: '#E57373'
            }, {
                label: 'Customer Feedback Report Analysis',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 9, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 10, 30),
                backgroundColor: '#EF6C00'
            }, {
                label: 'Prepare Shipping Cost Analysis Report',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate - 1, 12, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate - 1, 13, 30),
                backgroundColor: '#004D40'
            }, {
                label: 'Provide Feedback on Shippers',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate, 14, 15),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 16, 0),
                backgroundColor: '#00838F'
            }, {
                label: 'Select Preferred Shipper',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 17, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 1, 20, 0),
                backgroundColor: '#9CCC65'
            }, {
                label: 'Complete Shipper Selection Form',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate - 5, 8, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate - 4, 10, 0),
                backgroundColor: '#BF360C'
            }, {
                label: 'Upgrade Server Hardware',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate - 7, 12, 0),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate - 7, 14, 15),
                backgroundColor: '#9575CD'
            }, {
                label: 'Upgrade Personal Computers',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate - 1, 14, 45),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate - 1, 16, 30),
                backgroundColor: '#00B0FF'
            }, {
                label: 'Upgrade Apps to Windows RT or stay with WinForms',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate - 2, 10, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate - 2, 13, 0),
                backgroundColor: '#689F38'
            }, {
                label: 'Estimate Time Required to Touch-Enable Apps',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 2, 14, 45),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 2, 16, 30),
                backgroundColor: '#7986CB'
            }, {
                label: 'Report on Tranistion to Touch-Based Apps',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 3, 18, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 3, 19, 0),
                backgroundColor: '#EA80FC'
            }, {
                label: 'Submit New Website Design',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 5, 8, 0),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 5, 10, 0),
                backgroundColor: '#757575'
            }, {
                label: 'Create Icons for Website',
                dateStart: new Date(this.currentYear, this.currentMonth, this.currentDate + 4, 11, 30),
                dateEnd: new Date(this.currentYear, this.currentMonth, this.currentDate + 4, 13, 15),
                backgroundColor: '#FF6E40'
            }
        ]
    })();

    view: SchedulerViewType = 'week';

    views: string[] = ['week', 'month', 'agenda'];

    hourStart: number = 9;

    hourEnd: number = 18;

    firstDayOfWeek: number = 1;

    restrictedDates: Date[] = [
        new Date(this.currentYear, this.currentMonth, this.currentDate),
        new Date(this.currentYear, this.currentMonth, this.currentDate - 2),
        new Date(this.currentYear, this.currentMonth, this.currentDate + 2),
        new Date(this.currentYear, this.currentMonth, this.currentDate - 5),
        new Date(this.currentYear, this.currentMonth, this.currentDate + 5),
        new Date(this.currentYear, this.currentMonth, this.currentDate - 10),
        new Date(this.currentYear, this.currentMonth, this.currentDate + 10)
    ];

    notifyForRestrictions(event: CustomEvent) {
        if (this.scheduler.isEventRestricted(event.detail.itemDateRange)) {
            this.openNotification();
        }
    }

    openNotification() {
        this.scheduler.openNotification('Event cannot start/end on restricted dates !',
            { autoClose: true, type: 'warning', itemClass: 'custom-notification' });
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
        if (!this.targetEvent || !this.eventEditors) {
            return;
        }

        const dateStart = (<DateTimePicker>this.eventEditors.dateStart.querySelector('[event-editor]')).value.toDate(),
            dateEnd = (<DateTimePicker>this.eventEditors.dateEnd.querySelector('[event-editor]')).value.toDate();

        if (this.scheduler.isEventRestricted({ dateStart: dateStart, dateEnd: dateEnd })) {
            this.openNotification();
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
    };
}