import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';
import { SchedulerComponent, SchedulerEvent, SchedulerResource, SchedulerViewType } from 'smart-webcomponents-angular/scheduler';

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
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = (() => {
        const today = new Date(),
            currentDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth(),
            data = [
                {
                    label: 'Interview Job Candidaties',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
                    roomId: 3
                },
                {
                    label: 'Discuss New Project',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 3, 8, 30),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 10, 30),
                    roomId: 2
                }, {
                    label: 'Meet With Customers',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
                    roomId: 3
                },
                {
                    label: 'Organize Vacations and Team Buildings',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 4, 10, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 12, 30),
                    roomId: 1
                },
                {
                    label: 'Lunch Break',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
                    roomId: 1
                },
                {
                    label: 'Work On Task A',
                    dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
                    dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
                    roomId: 2
                }, {
                    label: 'Conduct Research On New Technologies',
                    dateStart: new Date(currentYear, currentMonth, currentDate, 13),
                    dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
                    roomId: 4
                }, {
                    label: 'Review Juniors Employees Work',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
                    roomId: 2
                }, {
                    label: 'Setup New Client Accounts',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
                    roomId: 3
                }, {
                    label: 'Perform Additional Duties',
                    dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
                    roomId: 1
                }, {
                    label: 'Prepare Weekly/Monthly Report',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
                    roomId: 2
                }, {
                    label: 'Install New Database',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
                    roomId: 1
                }, {
                    label: 'Approve New Online Marketing Strategy',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
                    roomId: 2
                }, {
                    label: 'Teach Junior Employees',
                    dateStart: new Date(currentYear, currentMonth, currentDate, 9),
                    dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
                    roomId: 3
                }, {
                    label: 'Mantain Database',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
                    roomId: 2
                }, {
                    label: 'Prepare current Year Marketing Plan',
                    dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
                    dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
                    roomId: 4
                }
            ];

        return data
    })();

    hourStart: number = 6;

    hourEnd: number = 18;

    filterable: boolean = true;

    resources: SchedulerResource[] = [
        {
            label: 'Rooms',
            value: 'roomId',
            dataSource: [{
                label: 'Common Area',
                id: 1,
                backgroundColor: '#F7B2AD'
            },
            {
                label: 'Conference Room',
                id: 2,
                backgroundColor: '#984447'
            },
            {
                label: 'Meeting Room',
                id: 3,
                backgroundColor: '#F4AC45'
            },
            {
                label: 'Brainstorming Room',
                id: 4,
                disabled: true,
                backgroundColor: '#27A195'
            }]
        }
    ];

    showLegend: boolean = true;

    view: SchedulerViewType = 'week';

    applyFiltering() {
        const that = this,
            scheduler = that.scheduler,
            applyFilterButton = that.button2,
            clearFilter = that.button3;

        scheduler.filter = [
            //Show only Events from Room's with id 2 and 3
            {
                name: 'roomId',
                value: (id: number) => ['2', '3'].indexOf(id + '') > -1
            }
        ];

        applyFilterButton.disabled = true;
        clearFilter.disabled = false;
    }

    clearFiltering() {
        const that = this,
            scheduler = that.scheduler,
            applyFilterButton = that.button2,
            clearFilter = that.button3;

        scheduler.filter = null;
        clearFilter.disabled = true;
        applyFilterButton.disabled = false;
    }

    handleFiltering() {
        const that = this,
            scheduler = that.scheduler,
            filterButton = that.button,
            applyFilterButton = that.button2,
            clearFilter = that.button3;

        scheduler.filterable = !scheduler.filterable;

        if (scheduler.filterable) {
            filterButton.innerHTML = 'Disable Filtering';
            
            if (scheduler.filter) {
                applyFilterButton.disabled = true;
                clearFilter.disabled = false;
            }
            else {
                applyFilterButton.disabled = false;
                clearFilter.disabled = true;
            }
        }
        else {
            filterButton.innerHTML = 'Enable Filtering';
            applyFilterButton.disabled = clearFilter.disabled = true;
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
            scheduler = that.scheduler;

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent) {
            const target = event.target as HTMLElement,
                detail = event.detail.value;

            if (target.closest('.legend')) {
                scheduler.showLegend = detail;
            }
            else if (target.closest('.legend-position')) {
                scheduler.legendPosition = target.textContent.toLocaleLowerCase().indexOf('near') > -1 ? 'near' : 'far';
            }
            else if (target.closest('.legend-location')) {
                scheduler.legendLocation = target.textContent.toLocaleLowerCase().indexOf('header') > -1 ? 'header' : 'footer';
            }
            else if (target.closest('.legend-item')) {
                const resources = scheduler.resources.slice(),
                    resourceItem = resources[0].dataSource.find((i: { id: number }) => i.id === 4);

                if (resourceItem) {
                    resourceItem.disabled = detail;
                }

                scheduler.resources = resources;
            }
        });
    }
}