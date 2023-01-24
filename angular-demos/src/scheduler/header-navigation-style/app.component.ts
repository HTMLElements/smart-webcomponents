import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { SchedulerComponent, SchedulerEvent, SchedulerHeaderNavigationStyle, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) checkbox3!: CheckBoxComponent;
    @ViewChild('checkbox4', { read: CheckBoxComponent, static: false }) checkbox4!: CheckBoxComponent;
    @ViewChild('checkbox5', { read: CheckBoxComponent, static: false }) checkbox5!: CheckBoxComponent;
    @ViewChild('checkbox6', { read: CheckBoxComponent, static: false }) checkbox6!: CheckBoxComponent;
    @ViewChild('checkbox7', { read: CheckBoxComponent, static: false }) checkbox7!: CheckBoxComponent;
    @ViewChild('checkbox8', { read: CheckBoxComponent, static: false }) checkbox8!: CheckBoxComponent;
    @ViewChild('checkbox9', { read: CheckBoxComponent, static: false }) checkbox9!: CheckBoxComponent;
    @ViewChild('checkbox10', { read: CheckBoxComponent, static: false }) checkbox10!: CheckBoxComponent;
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
                backgroundColor: '#689F38'
            }, {
                label: 'Book Flights to San Fran for Sales Trip',
                dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
                backgroundColor: '#7986CB'
            },
            {
                label: 'Install New Router in Conference Room',
                dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
                backgroundColor: '#8D6E63'
            },
            {
                label: 'Add a new desk to the Dev Room',
                dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
                dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
                backgroundColor: '#00C853'
            }, {
                label: 'Install New Router in Dev Room',
                dateStart: new Date(currentYear, currentMonth, currentDate, 13),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
                backgroundColor: '#2196F3'
            }, {
                label: 'Approve Personal Computer Upgrade Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
                backgroundColor: '#689F38'
            }, {
                label: 'Final Budget Review',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
                backgroundColor: '#FDD835'
            },
            {
                label: 'Old Brochures',
                dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
                backgroundColor: '#FF8A65'
            },
            {
                label: 'New Brochures',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
                backgroundColor: '#0D47A1'
            }, {
                label: 'Install New Database',
                dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
                backgroundColor: '#004D40'
            }, {
                label: 'Approve New Online Marketing Strategy',
                dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
                backgroundColor: '#FF3D00'
            }, {
                label: 'Upgrade Personal Computers',
                dateStart: new Date(currentYear, currentMonth, currentDate, 9),
                dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
                backgroundColor: '#689F38'
            }, {
                label: 'Prepare current Year Marketing Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
                backgroundColor: '#2196F3'
            }, {
                label: 'Prepare current Year Marketing Plan',
                dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
                dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
                backgroundColor: '#CE93D8'
            }
        ]
    })();

    view: SchedulerViewType = 'day';

    hourStart: number = 9;

    hourEnd: number = 18;

    firstDayOfWeek: number = 1;

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
            const target = event.target as HTMLElement;

            if (target instanceof window.Smart.RadioButton) {
                scheduler.headerNavigationStyle = target.textContent.trim() as SchedulerHeaderNavigationStyle;
            }
            else if (target instanceof window.Smart.CheckBox) {
                scheduler[target.id] = event.detail.value;
            }
        });
    };
}