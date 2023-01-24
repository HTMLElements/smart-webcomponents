import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { SchedulerComponent, SchedulerEvent, SchedulerViewSelectorType, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            currentDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth();

        return [
            {
                label: 'Website Re-Design Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
                backgroundColor: '#2196F3'
            }, {
                label: 'Book Flights to San Fran for Sales Trip',
                dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
                backgroundColor: '#8BC34A'
            },
            {
                label: 'Install New Router in Conference Room',
                dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
                backgroundColor: '#FFAB91'
            },
            {
                label: 'Add a new desk to the Dev Room',
                dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
                backgroundColor: '#BCAAA4'
            }, {
                label: 'Install New Router in Dev Room',
                dateStart: new Date(currentYear, currentMonth, currentDate, 13),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
                backgroundColor: '#FDD835'
            }, {
                label: 'Approve Personal Computer Upgrade Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
                backgroundColor: '#4CAF50'
            }, {
                label: 'Final Budget Review',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
                backgroundColor: '#311B92'
            }, {
                label: 'Old Brochures',
                dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
                backgroundColor: '#DD2C00'
            }, {
                label: 'New Brochures',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
                backgroundColor: '#9575CD'
            }, {
                label: 'Install New Database',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
                backgroundColor: '#FF7043'
            }, {
                label: 'Approve New Online Marketing Strategy',
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
                backgroundColor: '#689F38'
            }, {
                label: 'Upgrade Personal Computers',
                dateStart: new Date(currentYear, currentMonth, currentDate, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
                backgroundColor: '#00C853'
            }, {
                label: 'Prepare current Year Marketing Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
                backgroundColor: '#7986CB'
            }, {
                label: 'Prepare current Year Marketing Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
                backgroundColor: '#CE93D8'
            }
        ]
    })();

    view: SchedulerViewType = 'day';

    views: object[] = [{
        type: 'day',
        label: 'This is the Day View Label'
    },
    {
        type: 'week',
        label: 'This is the Week View Label'
    },
    {
        type: 'month',
        label: 'This is the Month View Label'
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

        const scheduler = this.scheduler;

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent) {
            const target = (<HTMLElement>event.target).closest('smart-radio-button');

            scheduler.viewSelectorType = target.textContent.trim() as SchedulerViewSelectorType;
        });
    };
}