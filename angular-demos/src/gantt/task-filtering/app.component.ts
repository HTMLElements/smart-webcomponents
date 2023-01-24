import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DropDownList } from 'smart-webcomponents-angular';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GanttChartComponent, GanttChartTaskColumn, GanttChartView } from 'smart-webcomponents-angular/ganttchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    view: GanttChartView = 'week';

    durationUnit: string = 'day';

    treeMin: number = 300;

    taskFiltering: boolean = true;

    hideTimelineHeaderDetails: boolean = true;

    taskColumns: GanttChartTaskColumn[] = [
        {
            label: 'Tasks',
            value: 'label',
            size: '40%'
        },
        {
            label: 'Start Time',
            value: 'dateStart',
            size: '30%'
        },
        {
            label: 'Priority',
            value: 'value',
            customEditor: function (label: string, value: number) {
                const container = document.createDocumentFragment(),
                    labelElement = document.createElement('label'),
                    dropDownList = document.createElement('smart-drop-down-list') as DropDownList;

                labelElement.textContent = 'Priority';
                dropDownList.dropDownAppendTo = 'body';
                dropDownList.selectedIndexes = [value];
                dropDownList.dataSource = [
                    { label: 'Low', value: 0 },
                    { label: 'Medium', value: 1 },
                    { label: 'High', value: 2 }
                ];

                container.appendChild(labelElement);
                container.appendChild(dropDownList);

                return container;
            },
            getCustomEditorValue: function (editor: HTMLElement) {
                return (<DropDownList>editor.querySelector('smart-drop-down-list')).selectedIndexes[0];
            },
            formatFunction: (value: string) => ['Low', 'Medium', 'High'][value]
        }
    ];

    dataSource = [
        {
            label: 'Project A',
            value: 1,
            class: 'priority-medium',
            dateStart: '2021-05-01',
            duration: 20,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task A',
                    value: 2,
                    class: 'priority-high',
                    dateStart: '2021-05-03',
                    duration: 5,
                    connections: [{
                        target: 5,
                        type: 1
                    }],
                },
                {
                    label: 'Project A-1',
                    value: 2,
                    class: 'priority-high',
                    dateStart: '2021-05-02',
                    duration: 10,
                    expanded: true,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Task B',
                            value: 1,
                            class: 'priority-medium',
                            dateStart: '2021-05-05',
                            duration: 3
                        },
                        {
                            label: 'Task B-1',
                            value: 0,
                            class: 'priority-low',
                            dateStart: '2021-05-06',
                            duration: 2
                        },
                        {
                            label: 'Task B-2',
                            value: 2,
                            class: 'priority-high',
                            dateStart: '2021-05-8',
                            duration: 3
                        },
                        {
                            label: 'Task B-3',
                            value: 2,
                            class: 'priority-high',
                            dateStart: '2021-05-10',
                            duration: 4
                        },
                        {
                            label: 'Task B-4',
                            value: 1,
                            class: 'priority-medium',
                            dateStart: '2021-05-10',
                            duration: 4
                        }
                    ]
                },
                {
                    label: 'Project A-2',
                    value: 0,
                    class: 'priority-low',
                    dateStart: '2021-05-05',
                    duration: 8,
                    expanded: true,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Task C',
                            value: 0,
                            class: 'priority-low',
                            dateStart: '2021-05-05',
                            duration: 4,
                            connections: [{
                                target: 10,
                                type: 1
                            },
                            {
                                target: 11,
                                type: 1
                            }]
                        },
                        {
                            label: 'Task C-1',
                            value: 0,
                            class: 'priority-low',
                            dateStart: '2021-05-10',
                            duration: 4
                        },
                        {
                            label: 'Task C-2',
                            value: 1,
                            class: 'priority-medium',
                            dateStart: '2021-05-11',
                            duration: 3,
                            connections: [{
                                target: 12,
                                type: 1
                            }]
                        },
                        {
                            label: 'Task C-3',
                            value: 1,
                            class: 'priority-medium',
                            dateStart: '2021-05-12',
                            duration: 2
                        }
                    ]
                }
            ]
        }
    ]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const ganttChart = document.querySelector('smart-gantt-chart'),
            button = document.getElementById('filterRow');

        button.addEventListener('click', function (event: CustomEvent) {
            ganttChart.filterRow = !ganttChart.filterRow;
            button.innerHTML = ganttChart.filterRow ? 'Disable' : 'Enable';
        });
    };
}