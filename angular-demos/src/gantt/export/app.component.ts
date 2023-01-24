import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';

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
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    treeSize: string = '30%';

    durationUnit: string = 'hour';

    nonworkingHours: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23];

    nonworkingDays: Array<number> = [0, 6];

    taskColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            size: '50%'
        },
        {
            label: 'Date Start',
            value: 'dateStart',
            size: '25%'
        },
        {
            label: 'Date End',
            value: 'dateEnd'
        }
    ];

    dataSource: Array<object> = [
        {
            label: 'Market Research',
            dateStart: '2021-01-10',
            dateEnd: '2021-03-10',
            class: 'product-team',
            type: 'project',
            expanded: true,
            tasks: [
                {
                    label: 'Questions and Answers',
                    dateStart: '2021-01-10',
                    dateEnd: '2021-02-10',
                    type: 'task'
                },
                {
                    label: 'Data Analysis',
                    dateStart: '2021-02-11',
                    dateEnd: '2021-03-09',
                    type: 'task'
                }
            ]
        },
        {
            label: 'Architecture & Planning',
            dateStart: '2021-03-10',
            dateEnd: '2021-03-31',
            class: 'marketing-team',
            type: 'task'
        },
        {
            label: 'Developing',
            dateStart: '2021-04-01',
            dateEnd: '2021-10-31',
            class: 'product-team',
            type: 'project',
            expanded: true,
            tasks: [
                {
                    label: 'UI Designing',
                    dateStart: '2021-04-01',
                    dateEnd: '2021-08-31',
                    type: 'task'
                },
                {
                    label: 'Business Logic Coding',
                    dateStart: '2021-04-01',
                    dateEnd: '2021-10-01',
                    type: 'project',
                    tasks: [
                        {
                            label: 'Data Transfer and Security',
                            duration: 200,
                            type: 'task'
                        },
                        {
                            label: 'Data Manipulation',
                            duration: 400,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Database Connectivity',
                    dateStart: '2021-04-01',
                    dateEnd: '2021-05-30',
                    type: 'task'
                }
            ]
        },
        {
            label: 'Quality Assurance',
            dateStart: '2021-11-01',
            dateEnd: '2021-12-31',
            class: 'dev-team',
            type: 'task'
        },
        {
            label: 'Release v1',
            dateStart: '2020-01-01',
            dateEnd: '2020-01-31',
            class: 'design-team',
            type: 'task'
        }
    ];

    handleExport(format: string) {
        this.ganttchart.exportData(format);
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
    }
}