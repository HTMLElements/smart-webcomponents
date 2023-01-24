import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;

    dataSource: Array<object> = [
        {
            label: 'Project 1',
            dateStart: '2020-03-10T12:30:00',
            dateEnd: '2021-06-10T3:59:00',
            type: 'project',
            expanded: true,
            connections: [
                {
                    target: 1,
                    type: 0,
                    lag: 2 * 24 * 60 * 60 * 1000 //2 days lag
                }
            ],
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2020-02-10',
                    dateEnd: '2021-01-10',
                    type: 'task',
                    connections: [
                        {
                            target: 2,
                            type: 1,
                            lag: -5 * 24 * 60 * 60 * 1000 // -5 days lag
                        },
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2020-10-10',
                    dateEnd: '2021-2-31',
                    type: 'task',
                    connections: [
                        {
                            target: 3,
                            type: 1,
                            lag: 15 * 24 * 60 * 60 * 1000 // 15 days lag
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2020-03-10T15:30:00',
            dateEnd: '2021-08-10',
            type: 'task'
        },
        {
            label: 'Milestone 1',
            dateEnd: '2021-05-24',
            type: 'milestone',
            connections: [
                {
                    target: 5,
                    type: 1,
                    lag: 5 * 24 * 60 * 60 * 1000 //5 days lag
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2021-02-05',
            dateEnd: '2021-07-08',
            progress: 50,
            type: 'task'
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

        const ganttChart = this.ganttchart;

        this.checkBox.addEventListener('change', function (event: CustomEvent): void {
            ganttChart.autoScheduleStrictMode = event.detail.value;
        });
    }
}