import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent, GanttChartView, Duration, GanttChartTaskColumn } from 'smart-webcomponents-angular/ganttchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    view: GanttChartView = 'week';

    dateStart: String = '2020-07-31';

    treeSize: Number = 350;

    hideTimelineHeaderDetails: Boolean = true;

    snapToNearest: Boolean = true;

    showProgressLabel: Boolean = true;

    progressLabelFormatFunction: Function = (progress: number) => Math.round(progress) + '%';

    timelineHeaderFormatFunction: Function = function (date: Date, type: String) {
        const ganttChart = document.querySelector('smart-gantt-chart');

        if (type === 'day') {
            return date.toLocaleDateString(ganttChart.locale, {
                day: 'numeric',
                month: 'short'
            });
        }

        return date.toLocaleDateString(ganttChart.locale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    durationUnit: Duration = 'day';

    taskColumns: GanttChartTaskColumn[] = [{
        label: 'Operation',
        value: 'label',
        size: '50%',
    },
    {
        label: 'Start Time',
        value: 'dateStart'
    },
    {
        label: 'Duration',
        value: 'duration',
        size: 30
    }
    ];

    dataSource = [{
        label: 'Mission A',
        dateStart: '2020-08-01',
        duration: 10,
        progress: 22,
        expanded: true,
        type: 'project',
        connections: [{
            target: 1,
            type: 0
        },
        {
            target: 2,
            type: 0
        },
        {
            target: 7,
            type: 0
        },
        {
            target: 8,
            type: 0
        },
        {
            target: 12,
            type: 0
        }
        ],
        tasks: [{
            label: 'Stage 1',
            dateStart: '2020-08-03',
            duration: 5,
            progress: 100,
            type: 'task'
        },
        {
            label: 'Stage 2',
            dateStart: '2020-08-02',
            duration: 6,
            progress: 50,
            expanded: true,
            type: 'project',
            connections: [{
                target: 3,
                type: 0
            }],
            tasks: [{
                label: 'Task 2.1',
                dateStart: '2020-08-03',
                duration: 2,
                progress: 100,
                type: 'task',
                connections: [{
                    target: 4,
                    type: 0
                }],
            },
            {
                label: 'Task 2.2',
                dateStart: '2020-08-06',
                duration: 3,
                progress: 80,
                type: 'task',
                connections: [{
                    target: 5,
                    type: 0
                }],
            },
            {
                label: 'Task 2.3',
                dateStart: '2020-08-10',
                duration: 5,
                progress: 20,
                type: 'task',
                connections: [{
                    target: 6,
                    type: 1
                }]
            },
            {
                label: 'Task 2.4',
                dateStart: '2020-08-10',
                duration: 4,
                progress: 5,
                type: 'task'
            }
            ]
        },
        {
            label: 'Stage 3',
            dateStart: '2020-08-02',
            duration: 6,
            progress: 80,
            type: 'task'
        },
        {
            label: 'Stage 4',
            dateStart: '2020-08-02',
            duration: 5,
            progress: 20,
            expanded: true,
            type: 'project',
            connections: [{
                target: 9,
                type: 2
            },
            {
                target: 10,
                type: 2
            },
            {
                target: 11,
                type: 2
            }
            ],
            tasks: [{
                label: 'Task 4.1',
                dateStart: '2020-08-03',
                duration: 4,
                progress: 50,
                type: 'task'
            },
            {
                label: 'Task 4.2',
                dateStart: '2020-08-03',
                duration: 4,
                progress: 10,
                type: 'task'
            },
            {
                label: 'Task 4.3',
                dateStart: '2020-08-03',
                duration: 5,
                progress: 5,
                type: 'task'
            }
            ]
        },
        {
            label: 'Stage 5',
            dateStart: '2020-08-02',
            duration: 7,
            progress: 5,
            type: 'task'
        }
        ]
    },
    {
        label: 'Mission B',
        dateStart: '2020-08-01',
        duration: 20,
        progress: 40,
        expanded: true,
        type: 'project',
        connections: [{
            target: 14,
            type: 0
        }],
        tasks: [{
            label: 'Stage 1',
            dateStart: '2020-08-02',
            duration: 8,
            progress: 50,
            expanded: true,
            type: 'project',
            connections: [{
                target: 15,
                type: 2
            },
            {
                target: 16,
                type: 2
            },
            {
                target: 17,
                type: 1
            }
            ],
            tasks: [{
                label: 'Task 1.1',
                dateStart: '2020-08-02',
                duration: 7,
                progress: 60,
                type: 'task'
            },
            {
                label: 'Task 1.2',
                dateStart: '2020-08-03',
                duration: 7,
                progress: 60,
                type: 'task'
            }
            ]
        },
        {
            label: 'Stage 2',
            dateStart: '2020-08-11',
            duration: 8,
            progress: 60,
            expanded: true,
            type: 'project',
            connections: [{
                target: 18,
                type: 2
            },
            {
                target: 19,
                type: 1
            }
            ],
            tasks: [{
                label: 'Task 2.1',
                dateStart: '2020-08-11',
                duration: 8,
                progress: 60,
                type: 'task'
            }]
        },
        {
            label: 'Stage 3',
            dateStart: '2020-08-13',
            duration: 6,
            progress: 50,
            expanded: true,
            type: 'project',
            connections: [{
                target: 20,
                type: 2
            },
            {
                target: 21,
                type: 2
            },
            {
                target: 22,
                type: 2
            }
            ],
            tasks: [{
                label: 'Task 3.1',
                dateStart: '2020-08-14',
                duration: 5,
                progress: 50,
                type: 'task'
            },
            {
                label: 'Task 3.2',
                dateStart: '2020-08-14',
                duration: 4,
                progress: 50,
                type: 'task'
            },
            {
                label: 'Task 3.3',
                dateStart: '2020-08-14',
                duration: 3,
                progress: 50,
                type: 'task'
            }
            ]
        }
        ]
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
    }
}