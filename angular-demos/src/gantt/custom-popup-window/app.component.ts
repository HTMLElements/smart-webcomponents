import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, RepeatButton, Button } from 'smart-webcomponents-angular/button';
import { GanttChartComponent, GanttChartTask } from 'smart-webcomponents-angular/ganttchart';
import { MultilineTextBoxComponent, MultilineTextBox } from 'smart-webcomponents-angular/multilinetextbox';
import { RepeatButtonComponent } from 'smart-webcomponents-angular/button';
import { TextBoxComponent, TextBox } from 'smart-webcomponents-angular/textbox';
import { Window, TabPosition, WindowFooterPosition } from 'smart-webcomponents-angular/window';


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
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
    @ViewChild('repeatbutton', { read: RepeatButtonComponent, static: false }) repeatbutton!: RepeatButtonComponent;
    @ViewChild('repeatbutton2', { read: RepeatButtonComponent, static: false }) repeatbutton2!: RepeatButtonComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;

    durationUnit: string = 'day';

    view: string = 'week';

    treeSize: string = '30%';

    dateStart: string = '2021-04-01';

    timelineHeaderFormatFunction: Function = function (date: Date, type: string, isHeaderDetailsContainer: boolean): string {
        if (isHeaderDetailsContainer) {
            let startDate = new Date(date),
                endDate = new Date(date),
                formatDate = (date: Date) => date.toLocaleDateString(this.locale, { day: '2-digit', month: 'short' }).toUpperCase();

            //the view is set to 'week' so add 6 days to the first to get the last
            endDate.setDate(endDate.getDate() + 6);

            //Validate the endDate according to timeline end
            endDate = new Date(Math.min(this.dateEnd.getTime(), endDate.getTime()));

            return formatDate(startDate) + ' - ' + formatDate(endDate);
        }
        else {
            return new Date(date).toLocaleDateString(this.locale, { weekday: 'short' }).toUpperCase();
        }
    };

    taskColumns: Array<object> = [
        {
            label: 'TASK NAME',
            value: 'label',
            size: '50%'
        },
        {
            label: 'START TIME',
            value: 'dateStart',
            size: '30%',
            formatFunction: function (dateString: string) {
                const date = new Date(dateString),
                    formatNumber = (number: number) => ('0' + number).slice(-2);

                return date.getFullYear() + '-' + formatNumber(date.getMonth() + 1) + '-' + formatNumber(date.getDate());
            }
        },
        {
            label: 'DURATION',
            value: 'duration',
            formatFunction: (duration: any) => parseInt(duration)
        }
    ];

    dataSource: Array<object> = [
        {
            type: 'project',
            label: 'Office Preparation',
            synchronized: true,
            expanded: true,
            progress: 35,
            tasks: [
                {
                    label: 'Office Inspection',
                    synchronized: true,
                    expanded: true,
                    progress: 55,
                    type: 'project',
                    connections: [
                        {
                            target: 'furnitureInArrangement',
                            type: 1
                        }
                    ],
                    tasks: [
                        {
                            label: 'Interior Arrangement',
                            dateStart: '2021-04-02',
                            duration: 3,
                            type: 'task'
                        },
                        {
                            label: 'Climate Control Installation',
                            dateStart: '2021-04-05',
                            duration: 2,
                            type: 'task'
                        }
                    ]
                },
                {
                    id: 'furnitureInArrangement',
                    label: 'Furniture Arrangement',
                    synchronized: true,
                    progress: 55,
                    type: 'project',
                    connections: [
                        {
                            target: 'employeePositioning',
                            type: 1
                        }
                    ],
                    tasks: [
                        {
                            label: 'Workstations Positioning',
                            dateStart: '2021-04-08',
                            duration: 2,
                            type: 'task'
                        }
                    ]
                },
                {
                    id: 'employeePositioning',
                    label: 'Employee Positioning',
                    synchronized: true,
                    expanded: true,
                    progress: 50,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Workplaces Allocation',
                            dateStart: '2021-04-10',
                            duration: 3,
                            progress: 50,
                            connections: [
                                {
                                    target: 'workstationsAssembly',
                                    type: 1
                                }
                            ],
                            type: 'task'
                        },
                        {
                            id: 'workstationsAssembly',
                            label: 'Workstations Assembly',
                            dateStart: '2021-04-13',
                            duration: 3,
                            progress: 50,
                            connections: [
                                {
                                    target: 'workstationsInspection',
                                    type: 1
                                }
                            ],
                            type: 'task'
                        },
                        {
                            id: 'workstationsInspection',
                            label: 'Workstations Inspection',
                            dateStart: '2021-04-16',
                            duration: 3,
                            progress: 50,
                            type: 'task'
                        }
                    ]
                }
            ]
        },
        {
            type: 'project',
            label: 'Product Release',
            synchronized: true,
            expanded: true,
            progress: 65,
            tasks: [
                {
                    label: 'Planning',
                    dateStart: '2021-04-02',
                    duration: 5,
                    progress: 100,
                    type: 'task'
                },
                {
                    label: 'Development',
                    synchronized: true,
                    expanded: true,
                    progress: 50,
                    type: 'project',
                    connections: [
                        {
                            target: 'releasev1',
                            type: 1
                        }
                    ],
                    tasks: [
                        {
                            label: 'Developing/Coding',
                            dateStart: '2021-04-03',
                            duration: 5,
                            type: 'task',
                            progress: 100,
                            connections: [
                                {
                                    target: 'betaRelease',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'betaRelease',
                            label: 'Beta Release',
                            dateStart: '2021-04-08',
                            type: 'milestone',
                            connections: [
                                {
                                    target: 'integrateSystem',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'integrateSystem',
                            label: 'Integration',
                            dateStart: '2021-04-08',
                            duration: 4,
                            type: 'task',
                            progress: 100,
                            connections: [
                                {
                                    target: 'test',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'test',
                            label: 'Testing',
                            dateStart: '2021-04-12',
                            duration: 3,
                            type: 'task',
                            progress: 15,
                            connections: [
                                {
                                    target: 'marketing',
                                    type: 1
                                }
                            ]
                        },
                        {
                            id: 'marketing',
                            label: 'Marketing and Sales',
                            dateStart: '2021-04-15',
                            duration: 4,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Feedback Analysis and QA',
                    dateStart: '2021-04-02',
                    duration: 4,
                    type: 'task',
                    progress: 75,
                    connections: [
                        {
                            target: 'design',
                            type: 1
                        }
                    ]
                },
                {
                    id: 'design',
                    label: 'Design',
                    synchronized: true,
                    expanded: true,
                    progress: 25,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Database',
                            dateStart: '2021-04-06',
                            duration: 4,
                            progress: 50,
                            type: 'task'
                        },
                        {
                            label: 'User Interface',
                            dateStart: '2021-04-08',
                            duration: 4,
                            progress: 10,
                            type: 'task'
                        }
                    ]
                },
                {
                    label: 'Documentation',
                    dateStart: '2021-04-11',
                    duration: 5,
                    type: 'task',
                    connections: [
                        {
                            target: 'releasev1',
                            type: 1
                        }
                    ]
                },
                {
                    id: 'releasev1',
                    label: 'Release v1',
                    dateStart: '2021-04-19',
                    type: 'milestone'
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


        const gantt = document.querySelector('smart-gantt-chart');
        let task: GanttChartTask | undefined,
            taskLabel: HTMLLabelElement,
            description: MultilineTextBox,
            dayPicker: HTMLSelectElement,
            monthPicker: HTMLSelectElement,
            yearPicker: HTMLSelectElement,
            dayIncrementBtn: RepeatButton,
            dayDecrementBtn: RepeatButton,
            dayInput: TextBox,
            totalDate: HTMLLabelElement,
            deleteBtn: Button,
            cancelBtn: Button,
            saveBtn: Button;

        gantt.popupWindowCustomizationFunction = function (target: any, type: string, targetTask: GanttChartTask) {
            function deleteTask() {
                gantt.removeTask(task);
                gantt.closeWindow();
                task = undefined;
            }
    
            function cancelTask() {
                gantt.closeWindow();
            }
    
            function saveTask() {
                let dateStart = new Date(parseInt(yearPicker.value),
                    parseInt(monthPicker.value),
                    parseInt(dayPicker.value)),
                    duration = parseInt(dayInput.value);
                    
                gantt.updateTask(task, { label: description.value, dateStart: dateStart, duration: duration });
                gantt.closeWindow();
                task = targetTask;
            }

            function updateTotalDate() {
                let newDateEnd = new Date(parseInt(yearPicker.value), parseInt(monthPicker.value), parseInt(dayPicker.value));
                newDateEnd.setDate(newDateEnd.getDate() + parseInt(dayInput.value));
                if (isNaN(newDateEnd.getTime())) {
                    totalDate.innerHTML = '';
                    return;
                }
                totalDate.innerHTML = newDateEnd.toDateString();
            }

            if (type === 'task' && targetTask) {
                let addListeners: boolean;

                //Hide the header
                target.headerPosition = 'none' as TabPosition;
                target.footerPosition = 'none' as WindowFooterPosition;

                //Create the content
                if (!document.getElementById('taskLabel')) {
                    addListeners = true;
                    target.clear();

                    const template: HTMLTemplateElement = document.getElementById('myTemplate') as HTMLTemplateElement;

                    target.appendChild(template.content);
                }

                taskLabel = document.getElementById('taskLabel') as HTMLLabelElement;
                description = document.getElementById('description') as MultilineTextBox;
                dayPicker = document.getElementById('dayPicker') as HTMLSelectElement;
                monthPicker = document.getElementById('monthPicker') as HTMLSelectElement;
                yearPicker = document.getElementById('yearPicker') as HTMLSelectElement;
                dayIncrementBtn = document.getElementById('dayIncrementBtn') as RepeatButton;
                dayDecrementBtn = document.getElementById('dayDecrementBtn') as RepeatButton;
                dayInput = document.getElementById('dayInput') as TextBox;
                totalDate = document.getElementById('totalDate') as HTMLLabelElement;
                deleteBtn = document.getElementById('deleteBtn') as Button;
                cancelBtn = document.getElementById('cancelBtn') as Button;
                saveBtn = document.getElementById('saveBtn') as Button;

                //Configure the content
                const dateStart: Date = targetTask.dateStart as Date,
                    dateEnd: Date = targetTask.dateEnd as Date;

                if (!dateStart || !dateEnd) {
                    taskLabel.innerHTML = '';
                }
                else {
                    const dayFormat = ['2-digit', 'numeric'] || 'numeric';

                    taskLabel.innerHTML = dateStart.toLocaleDateString(gantt.locale) + ' - ' +
                        dateEnd.toLocaleDateString(gantt.locale);
                }
                description.value = targetTask.label;
                dayPicker.value = dateStart.getDate().toString();
                monthPicker.value = dateStart.getMonth().toString();
                yearPicker.value = dateStart.getFullYear().toString();
                dayInput.value = targetTask.duration.toString();
                totalDate.innerHTML = (<Date>targetTask.dateEnd).toDateString();

                task = targetTask;

                if (addListeners) {
                    dayIncrementBtn.addEventListener('click', function () {
                        dayInput.value = (Math.min(31, (parseInt(dayInput.value) || 0) + 1)).toString();
                        updateTotalDate();
                    });

                    dayDecrementBtn.addEventListener('click', function () {
                        dayInput.value = Math.max(1, (parseInt(dayInput.value) || 0) - 1).toString();
                        updateTotalDate();
                    });

                    deleteBtn.addEventListener('click', deleteTask);
                    cancelBtn.addEventListener('click', cancelTask);
                    saveBtn.addEventListener('click', saveTask);
                }

                const dateControls = target.querySelector('.custom-window-content-section.date-controls');

                if (dateControls) {
                    if (targetTask.type === 'project' && targetTask.synchronized) {
                        dateControls.setAttribute('disabled', true);
                    }
                    else {
                        dateControls.removeAttribute('disabled');
                    }
                }
            }
        };
    }
}