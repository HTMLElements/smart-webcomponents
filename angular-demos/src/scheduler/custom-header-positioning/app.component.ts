import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, SchedulerEvent } from 'smart-webcomponents-angular/scheduler';

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
            ];

        return data
    })();

    headerDatePosition: string = 'far';

    headerViewPosition: string = 'near';

    scrollButtonsPosition: string = 'far';

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