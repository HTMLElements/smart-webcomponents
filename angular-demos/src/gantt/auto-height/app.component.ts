import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            id: 'Betty',
            label: 'Morning Shift',
            dateStart: '2021-01-15T04:00:00',
            dateEnd: '2021-01-15T012:30:00',
            class: 'morning-shift',
            type: 'task'
        },
        {
            id: 'William',
            label: 'Afternoon-shift',
            dateStart: '2021-01-15T12:30:00',
            dateEnd: '2021-01-15T20:00:00',
            class: 'afternoon-shift',
            type: 'task'
        },
        {
            id: 'Emma',
            label: 'Half-day',
            dateStart: '2021-01-15T12:30:00',
            dateEnd: '2021-01-15T16:30:00',
            class: 'half-day',
            type: 'task'
        },
        {
            id: 'Oliver',
            label: 'Morning-shift',
            dateStart: '2021-01-15T04:00:00',
            dateEnd: '2021-01-15T12:30:00',
            class: 'morning-shift',
            type: 'task'
        },
        {
            id: 'Jason',
            label: 'Afternoon-shift',
            dateStart: '2021-01-15T12:30:00',
            dateEnd: '2021-01-15T20:00:00',
            class: 'afternoon-shift',
            type: 'task'
        },
        {
            id: 'Alex',
            label: 'Early-morning-support',
            dateStart: '2021-01-15T00:00:00',
            dateEnd: '2021-01-15T08:30:00',
            class: 'early-morning-support',
            type: 'task'
        },
        {
            id: 'Lucas',
            label: 'Half-day',
            dateStart: '2021-01-15T04:00:00',
            dateEnd: '2021-01-15T08:00:00',
            class: 'half-day',
            type: 'task'
        },
        {
            id: 'Michael',
            label: 'Early-morning-support',
            dateStart: '2021-01-15T00:00:00',
            dateEnd: '2021-01-15T08:30:00',
            class: 'early-morning-support',
            type: 'task'
        }
    ];

    durationUnit: string = 'hour';

    taskColumns: Array<object> = [
        {
            label: 'Employee',
            value: 'id'
        }
    ];

    timelineHeaderFormatFunction: Function = function (date: Date, type: string, isHeaderDetailsContainer: boolean) {
        if (isHeaderDetailsContainer) {
            return 'Time';
        }
        else {
            return date.toLocaleTimeString(this.locale, { hour: 'numeric', minute: 'numeric', hour12: true });
        }
    };

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