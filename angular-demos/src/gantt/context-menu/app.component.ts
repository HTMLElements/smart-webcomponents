import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent, GanttChartTaskColumn, Duration, GanttChartView } from 'smart-webcomponents-angular/ganttchart';
import { MenuComponent } from 'smart-webcomponents-angular/menu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2!: MenuComponent;

    view: GanttChartView = 'week';

    treeSize: Number = 350;

    hideTimelineHeaderDetails: Boolean = true;

    snapToNearest: Boolean = true;

    timelineHeaderFormatFunction: any = function (date: Date, type: String, isHeaderDetails: Boolean, value: String) {
        const ganttChart = document.querySelector('smart-gantt-chart');

        if (type === 'day') {
            return date.toLocaleDateString(ganttChart.locale, { day: 'numeric', month: 'short' });
        }

        return value;
    };

    durationUnit: Duration = 'day';

    taskColumns: GanttChartTaskColumn[] = [
        {
            label: 'Employee',
            value: 'label',
            size: '50%'
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

    dataSource = [
        {
            label: 'Mission A',
            dateStart: '2021-08-01',
            duration: 10,
            progress: 22,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Stage 1',
                    dateStart: '2021-08-03',
                    duration: 5,
                    progress: 100,
                    type: 'task'
                },
                {
                    label: 'Stage 2',
                    dateStart: '2021-08-02',
                    duration: 6,
                    progress: 50,
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 3,
                            type: 0
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 2.1',
                            dateStart: '2021-08-03',
                            duration: 2,
                            progress: 100,
                            type: 'task',
                            connections: [
                                {
                                    target: 4,
                                    type: 0
                                }
                            ],
                        },
                        {
                            label: 'Task 2.2',
                            dateStart: '2021-08-06',
                            duration: 3,
                            progress: 80,
                            type: 'task',
                            connections: [
                                {
                                    target: 5,
                                    type: 0
                                }
                            ],
                        },
                        {
                            label: 'Task 2.3',
                            dateStart: '2021-08-10',
                            duration: 5,
                            progress: 20,
                            type: 'task',
                            connections: [
                                {
                                    target: 6,
                                    type: 1
                                }
                            ]
                        },
                        {
                            label: 'Task 2.4',
                            dateStart: '2021-08-10',
                            duration: 4,
                            progress: 5,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Stage 3',
                    dateStart: '2021-08-02',
                    duration: 6,
                    progress: 80,
                    type: 'task'
                }
            ]
        },
        {
            label: 'Mission B',
            dateStart: '2021-08-01',
            duration: 20,
            progress: 40,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Stage 1',
                    dateStart: '2021-08-02',
                    duration: 8,
                    progress: 50,
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 10,
                            type: 2
                        },
                        {
                            target: 11,
                            type: 2
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 1.1',
                            dateStart: '2021-08-02',
                            duration: 7,
                            progress: 60,
                            type: 'task'
                        },
                        {
                            label: 'Task 1.2',
                            dateStart: '2021-08-03',
                            duration: 7,
                            progress: 60,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Stage 2',
                    dateStart: '2021-08-11',
                    duration: 8,
                    progress: 60,
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 13,
                            type: 2
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 2.1',
                            dateStart: '2021-08-11',
                            duration: 8,
                            progress: 60,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Stage 3',
                    dateStart: '2021-08-13',
                    duration: 6,
                    progress: 50,
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 15,
                            type: 2
                        },
                        {
                            target: 16,
                            type: 1
                        },
                        {
                            target: 17,
                            type: 1
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 3.1',
                            dateStart: '2021-08-14',
                            duration: 5,
                            progress: 50,
                            type: 'task'
                        },
                        {
                            label: 'Task 3.2',
                            dateStart: '2021-08-14',
                            duration: 4,
                            progress: 50,
                            type: 'task'
                        },
                        {
                            label: 'Task 3.3',
                            dateStart: '2021-08-14',
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
        // init code.
        const ganttChart = this.ganttchart,
            menu = this.menu;
        let preventDefaultContextMenu = false;

        ganttChart.addEventListener('itemClick', function (event: CustomEvent) {
            if (event.target !== ganttChart.nativeElement) {
                return;
            }

            const originalEvent = event.detail.originalEvent;

            if (originalEvent.button === 2) {
                //Open Context Menu
                menu.open(originalEvent.pageX, originalEvent.pageY);
                //Prevent Browser context menu from opening
                preventDefaultContextMenu = true;
            }
        });

        document.addEventListener('contextmenu', function (event) {
            if (preventDefaultContextMenu) {
                event.preventDefault();
                preventDefaultContextMenu = false;
            }
        });
    }
}