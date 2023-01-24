import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            label: 'Project 1',
            dateStart: '2020-03-10T12:30:00',
            dateEnd: '2021-06-10T3:59:00',
            expanded: true,
            type: 'project',
            connections: [
                {
                    target: 1,
                    type: 0
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
                            type: 1
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
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Project 1.1',
                    dateStart: '2020-03-10T12:30:00',
                    dateEnd: '2021-06-10T3:59:00',
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 1,
                            type: 0
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 1.1.1',
                            dateStart: '2020-02-10',
                            dateEnd: '2021-01-10',
                            type: 'task',
                            connections: [
                                {
                                    target: 2,
                                    type: 1
                                },
                                {
                                    target: 4,
                                    type: 1
                                }
                            ]
                        },
                        {
                            label: 'Task 1.1.2',
                            dateStart: '2020-10-10',
                            dateEnd: '2021-2-31',
                            type: 'task',
                            connections: [
                                {
                                    target: 3,
                                    type: 1
                                }
                            ]
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
                    type: 1
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2021-02-05',
            dateEnd: '2021-07-08',
            progress: 50,
            type: 'task'
        },
        {
            label: 'Task 4',
            dateStart: '2020-03-10T15:30:00',
            dateEnd: '2021-08-10',
        }
    ];

    treeSize = '45%';

    taskColumns = [
        {
            label: 'Tasks',
            value: 'label',
            size: '40%'
        },
        {
            label: 'Date Start',
            value: 'dateStart',
            //Custom format function
            formatFunction: (date: Date) => new Date(date).toLocaleDateString(this.ganttChart.locale, { year: 'numeric', month: 'short', day: 'numeric' })
        },
        {
            label: 'Date End',
            value: 'dateEnd',
            size: '30%'
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
        const that = this,
            ganttChart = that.ganttChart,
            getNewTask = function (label: string) {
                return {
                    label: `${label} 1`,
                    dateStart: '2020-08-10',
                    dateEnd: '2020-12-23',
                    expanded: true,
                    tasks: [
                        {
                            label: `${label} 1.1`,
                            dateStart: '2020-09-01',
                            dateEnd: '2020-10-30',
                        },
                        {
                            label: `${label} 1.2`,
                            dateStart: '2020-11-01',
                            dateEnd: '2020-12-23',
                        }
                    ]
                };
            },
            updateButtons = function () {
                const currentTasks = ganttChart.tasks!;

                if (currentTasks.length) {
                    that.button6.disabled = false;
                    that.button.disabled = false;
                }
                else {
                    that.button6.disabled = true;
                    that.button.disabled = true;
                }
            };

        that.button.addEventListener('click', function (): void {
            const taskDetails = {
                label: 'Task Updated Successfully',
                dateEnd: '2020-1-1'
            };

            const targetTask = ganttChart.tasks[0];

            if (!targetTask) {
                return;
            }

            ganttChart.updateTask(0, taskDetails);

            this.disabled = true;
        });

        that.button2.addEventListener('click', function (): void {
            ganttChart.insertTask(getNewTask('Inserted Task'));
            this.disabled = true;
            updateButtons();
        });

        that.button3.addEventListener('click', function (): void {
            ganttChart.insertTask(getNewTask('Inserted Task At Position'), null, 2);
            this.disabled = true;
            updateButtons();
        });

        that.button4.addEventListener('click', function (): void {
            ganttChart.insertTask(getNewTask('Inserted Task Into Project'), '0.2');
            this.disabled = true;
            updateButtons();
        });

        that.button5.addEventListener('click', function (): void {
            ganttChart.insertTask(getNewTask('Inserted Task Into Project At position'), 0, 3);
            this.disabled = true;
            updateButtons();
        });

        that.button6.addEventListener('click', function (): void {
            ganttChart.removeTask(0);
            updateButtons();
        });
    }
}