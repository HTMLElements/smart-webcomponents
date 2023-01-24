import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { GanttChartComponent, GanttChartTask, GanttChart } from 'smart-webcomponents-angular/ganttchart';
import { DropDownList } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    headerTemplate = 'headerTemplate';

    view = 'week';

    durationUnit = 'day';

    treeMin = 300;

    hideTimelineHeaderDetails = true;

    timelineHeaderFormatFunction = function (date, type, isHeaderDetailsContainer) {
        const ganttChart = document.querySelector('smart-gantt-chart') as GanttChart;

        if (isHeaderDetailsContainer) {
            return '';
        }
        return date.toLocaleDateString(ganttChart.locale, { day: '2-digit', month: 'short' });
    };

    taskColumns = [
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
            hideResizeBar: true,
            customEditor: function (label: string, value: number): DocumentFragment {
                const container = document.createDocumentFragment();
                const labelElement = document.createElement('label');
                const dropDownList = document.createElement('smart-drop-down-list') as DropDownList;

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
                return (editor.querySelector('smart-drop-down-list') as DropDownList).selectedIndexes[0];
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
                            duration: 3,
                            hidden: true
                        },
                        {
                            label: 'Task B-1',
                            value: 0,
                            class: 'priority-low',
                            dateStart: '2021-05-06',
                            duration: 2,
                            hidden: true
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
                            duration: 4,
                            hidden: true
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
                    hidden: true,
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

        const ganttChart = this.ganttchart;

        ganttChart.addEventListener('change', function (event) {
            const target = event.target as HTMLElement;

            if (target.classList.contains('priority')) {
                function getPriority(label: String) {
                    switch (label) {
                        case 'high':
                            return 2;
                        case 'medium':
                            return 1;
                        default:
                            return 0;
                    }
                }
                const checkBoxes = document.getElementsByClassName('priority');
                let priority = [];
                for (let i = 0; i < checkBoxes.length; i++) {
                    const checkBox = checkBoxes[i] as CheckBox;

                    if (checkBox.checked) {
                        priority.push(getPriority(checkBox.id));
                    }
                }
                //Important Note: Begins a batch update
                ganttChart.beginUpdate();
                const tasks = ganttChart.tasks;
                for (let i = 0; i < tasks.length; i++) {
                    const task = tasks[i] as GanttChartTask;

                    ganttChart.updateTask(task, { hidden: !priority.includes(task.value) });
                }
                //Important Note: Ends the batch update
                ganttChart.endUpdate();
            }
        });


    }
}