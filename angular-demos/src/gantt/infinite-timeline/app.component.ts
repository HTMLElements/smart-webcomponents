import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent, GanttChartTaskColumn } from 'smart-webcomponents-angular/ganttchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    infiniteTimeline: boolean = true;

    infiniteTimelineStep: number = 10;

    taskColumns: GanttChartTaskColumn[] = [
        {
            label: 'Tasks',
            value: 'label',
            size: '60%'
        },
        {
            label: 'Expected End Date',
            value: 'dateEnd'
        }
    ];

    dataSource = [
        {
            label: 'PRD & User-Stories',
            dateStart: '2021-01-10',
            dateEnd: '2022-03-10'
        },
        {
            label: 'Persona & Journey',
            dateStart: '2021-02-01',
            dateEnd: '2022-03-30'
        },
        {
            label: 'Architecture',
            dateStart: '2021-02-11',
            dateEnd: '2022-05-16'
        },
        {
            label: 'Prototyping',
            dateStart: '2021-01-17',
            dateEnd: '2022-05-01'
        },
        {
            label: 'Design',
            dateStart: '2021-06-02',
            dateEnd: '2022-08-01'
        },
        {
            label: 'Development',
            dateStart: '2021-08-01',
            dateEnd: '2022-09-10'
        },
        {
            label: 'Testing & QA',
            dateStart: '2021-09-11',
            dateEnd: '2022-12-10'
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
    }
}