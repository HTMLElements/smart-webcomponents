import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
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
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

    dataSource: Array<object> = [
        {
            label: 'Project 1',
            synchronized: true,
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
                    dateStart: '2020-06-10',
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
                    dateStart: '2021-2-31',
                    dateEnd: '2021-6-1',
                    expanded: true,
                    type: 'project',
                    connections: [
                        {
                            target: 4,
                            type: 0
                        }
                    ],
                    tasks: [
                        {
                            label: 'Task 1.1.1',
                            dateStart: '2021-3-10',
                            dateEnd: '2021-4-1',
                            type: 'task',
                            connections: [
                                {
                                    target: 6,
                                    type: 1
                                }
                            ]
                        },
                        {
                            label: 'Task 1.1.2',
                            dateStart: '2021-4-2',
                            dateEnd: '2021-6-1',
                            type: 'task',
                            connections: []
                        },
                        {
                            label: 'Project 1.1.1',
                            dateStart: '2021-06-1T12:30:00',
                            dateEnd: '2021-9-1',
                            expanded: true,
                            type: 'project',
                            connections: [],
                            tasks: [
                                {
                                    label: 'Task 1.1.1.1',
                                    dateStart: '2021-07-10',
                                    dateEnd: '2021-08-30',
                                    type: 'task',
                                    connections: [
                                        {
                                            target: 8,
                                            type: 1
                                        }
                                    ]
                                },
                                {
                                    label: 'Task 1.1.1.2',
                                    dateStart: '2021-08-30',
                                    dateEnd: '2021-10-1',
                                    type: 'task'
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
            type: 'task',
            connections: [
                {
                    target: 10,
                    type: 1
                }
            ]
        },
        {
            label: 'Milestone 1',
            dateEnd: '2021-05-24',
            type: 'milestone',
            connections: [
                {
                    target: 11,
                    type: 1
                }
            ]
        },
        {
            label: 'Task 3',
            dateStart: '2021-02-05',
            dateEnd: '2021-07-08',
            progress: 50
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
            ganttChart = that.ganttchart,
            log = that.log.nativeElement,
            indexSelector = that.dropdownlist;

        that.button.addEventListener('click', function (): void {
            ganttChart.collapse(indexSelector.selectedValues[0]);
        });

        that.button2.addEventListener('click', function (): void {
            ganttChart.expand(indexSelector.selectedValues[0]);
        });

        ganttChart.addEventListener('collapse', function (event: CustomEvent): void {
            ganttChart.getTaskIndex(event.detail.item).then(index => log.innerHTML += '<br />' + event.type + 'Task # ' + index);
        });

        ganttChart.addEventListener('expand', function (event: CustomEvent): void {
            ganttChart.getTaskIndex(event.detail.item).then(index => log.innerHTML += '<br />' + event.type + 'Task # ' + index);
        });
    }
}