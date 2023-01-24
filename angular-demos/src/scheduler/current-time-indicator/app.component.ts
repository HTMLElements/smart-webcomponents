import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NumberInput, NumberInputComponent } from 'smart-webcomponents-angular/numberinput';
import { SwitchButton, SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';
import { SchedulerComponent, SchedulerEvent, SchedulerViews } from 'smart-webcomponents-angular/scheduler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('numberinput', { read: NumberInputComponent, static: false }) numberinput!: NumberInputComponent;
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('switchbutton2', { read: SwitchButtonComponent, static: false }) switchbutton2!: SwitchButtonComponent;
    @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;

    dataSource: SchedulerEvent[] = this.getData();

    currentTimeIndicator: Boolean = true;

    shadeUntilCurrentTime: Boolean = true;

    view: String = 'day';

    views: SchedulerViews[] = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth'];

    firstDayOfWeek: Number = 1;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    getData() {
        const today = new Date(),
            todayDate = today.getDate(),
            currentYear = today.getFullYear(),
            currentMonth = today.getMonth(),
            data = [
                {
                    label: 'Google AdWords Strategy',
                    dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
                    dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
                    backgroundColor: '#E67C73'
                }, {
                    label: 'New Brochures',
                    dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
                    dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
                    backgroundColor: '#8E24AA'
                }, {
                    label: 'Brochure Design Review',
                    dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
                    dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
                    backgroundColor: '#039BE5'
                }
            ]

        return data
    }

    handleViewChange() {
        this.scheduler.scrollToDate(new Date());
    }

    init(): void {
        // init code.
        const that = this,
            scheduler = that.scheduler;

        scheduler.scrollToDate(new Date());

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent): void {
            const target = event.target as HTMLElement;

            if (target.id === 'currentTimeIndicator') {
                scheduler.currentTimeIndicator = (<SwitchButton>event.target).checked;
                return
            }
    
            if (target.id === 'shadeUntilCurrentTime') {
                scheduler.shadeUntilCurrentTime = (<SwitchButton>event.target).checked;
                return
            }
            
            if (target instanceof window.Smart.NumberInput) {
                scheduler[target.id] = parseInt((<NumberInput>event.target).value);
            }
        });
    };
}