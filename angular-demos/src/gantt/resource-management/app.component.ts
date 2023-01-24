import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GanttChartComponent, GanttChartTask, GanttChart } from 'smart-webcomponents-angular/ganttchart';


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

    dataSource: Array<object> = [
        {
            label: 'Research',
            synchronized: true,
            expanded: true,
            type: "project",
            disableResources: true,
            tasks: [
                {
                    label: 'Concept Formation',
                    dateStart: '2020-08-01',
                    dateEnd: '2020-08-31',
                    class: 'concept-formation',
                    type: "task" /* Task */,
                    resources: { id: 11, label: 'Will' }
                },
                {
                    label: 'Proposals',
                    synchronized: true,
                    expanded: true,
                    disableResources: true,
                    type: "project" /* Project */,
                    tasks: [
                        {
                            label: 'Proposal Development',
                            dateStart: '2020-09-01',
                            dateEnd: '2020-10-31',
                            class: 'proposal-development',
                            type: "task" /* Task */,
                            resources: { id: 12, label: 'Taylor' }
                        },
                        {
                            label: 'Proposal Review & Submission',
                            dateStart: '2020-11-1',
                            dateEnd: '2020-11-31',
                            class: 'proposal-review',
                            type: "task" /* Task */,
                            resources: { id: 13, label: 'Leo' }
                        }
                    ]
                },
                {
                    label: 'Commercialization',
                    dateStart: '2020-11-01',
                    dateEnd: '2020-11-20',
                    type: "task" /* Task */,
                    class: 'commercialization',
                    resources: { id: 14, label: 'Veronica' }
                }
            ]
        },
        {
            label: 'Planning',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            tasks: [
                {
                    label: 'Resource planning',
                    dateStart: '2020-10-01',
                    dateEnd: '2020-10-15',
                    class: 'resource-planning',
                    type: "task" /* Task */,
                    resources: { id: 8, label: 'Jessica' }
                },
                {
                    label: 'Target group & Usability',
                    dateStart: '2020-10-15',
                    dateEnd: '2020-11-31',
                    class: 'target-group-usability',
                    type: "task" /* Task */,
                    resources: [8, { id: 9, label: 'Anna' }]
                },
                {
                    label: 'Marketing Strategy',
                    dateStart: '2020-12-1',
                    dateEnd: '2020-12-31',
                    class: 'marketing-strategy',
                    type: "task" /* Task */,
                    resources: { id: 10, label: 'Christina' }
                }
            ]
        },
        {
            label: 'Development',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            class: 'development',
            progress: 50,
            resources: 4,
            tasks: [
                {
                    label: 'Design',
                    dateStart: '2021-01-01T08:30:00',
                    dateEnd: '2021-02-28',
                    type: "task" /* Task */,
                    class: 'design',
                    resources: { id: 1, label: 'Mia' }
                },
                {
                    label: 'Coding',
                    dateStart: '2021-03-01',
                    dateEnd: '2021-6-01',
                    type: "task" /* Task */,
                    class: 'coding',
                    resources: [{
                        id: 2,
                        label: 'Anthony'
                    }, 0]
                },
                {
                    label: 'Debugging',
                    dateStart: '2021-06-02',
                    dateEnd: '2021-6-31',
                    type: "task" /* Task */,
                    class: 'debugging',
                    resources: [{
                        id: 0,
                        label: 'Jonathan'
                    }, 2]
                }
            ]
        },
        {
            label: 'Dev Stage Completed',
            dateEnd: '2021-06-01',
            type: "milestone" /* Milestone */,
            resources: 3
        },
        {
            label: 'Testing',
            dateStart: '2021-06-02',
            dateEnd: '2021-6-31',
            type: "task" /* Task */,
            class: 'testing',
            resources: [{
                id: 3,
                label: 'Peter'
            },
            {
                id: 4,
                label: 'Liam'
            }, 1]
        },
        {
            label: 'Documentation',
            dateStart: '2021-7-01',
            dateEnd: '2021-7-31',
            type: "task" /* Task */,
            class: 'documentation',
            resources: [1]
        },
        {
            id: 'release',
            class: 'release',
            label: 'Release & Maintenance',
            dateEnd: '2021-08-01',
            type: "milestone" /* Milestone */
        },
        {
            label: 'Evaluation',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            tasks: [
                {
                    label: 'Development strategy',
                    dateStart: '2021-08-01',
                    dateEnd: '2021-08-31',
                    class: 'development-strategy',
                    type: "task" /* Task */,
                    resources: [{
                        id: 5,
                        label: 'Nelson'
                    }]
                },
                {
                    label: 'Productivity',
                    dateStart: '2021-09-1',
                    dateEnd: '2021-09-31',
                    class: 'productivity',
                    type: "task" /* Task */,
                    resources: [{
                        id: 6,
                        label: 'Philip'
                    }]
                },
                {
                    label: 'Completion cost',
                    dateStart: '2021-10-01',
                    dateEnd: '2021-10-31',
                    class: 'completion-cost',
                    type: "task" /* Task */,
                    resources: [{
                        id: 7,
                        label: 'Jenna'
                    }]
                }
            ]
        }
    ];

    taskColumns: Array<object> = [
        {
            label: 'Task Name',
            value: 'label'
        },
        {
            label: 'Assignee',
            value: 'resources',
            size: '35%',
            formatFunction: function (data: any, task: GanttChartTask): String {
                const ganttChart = document.querySelector('smart-gantt-chart')!,
                    resources = ganttChart.resources!;

                if (!task || task.disableResources) {
                    return ''
                }

                let result = '';

                for (let i = 0; i < data.length; i++) {
                    const resource = resources.find((res: any): Boolean => res.id.toString() === data[i].toString());

                    if (resource) {
                        result += `<span class="gantt-chart-task-assignee ${resource.label!.toLowerCase()}">${resource.label}</span>`
                    }
                }

                return result.length ? result : '<span class="gantt-chart-task-assignee unassigned">Unassigned</span>';
            }
        },
        {
            label: 'Add',
            value: 'addTask',
            min: 35,
            formatFunction: function (): string {
                return '<span class="add-task-button">+</span>';
            }
        }
    ];

    treeSize: string = '25%';

    hideResourcePanel: boolean = true;

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
            ganttChart = that.ganttchart;

        ganttChart.addEventListener('click', function (event: CustomEvent): void {
            const target = event.target as HTMLElement;

            if (target.classList.contains('add-task-button')) {
                const newTaskIndex = Array.from(ganttChart.nativeElement.querySelectorAll('.add-task-button')).indexOf(target) + 1;
                //Add a new Task
                ganttChart.insertTask(newTaskIndex, { label: 'New Task', dateStart: ganttChart.dateStart });
                //Open the Editor to configure
                ganttChart.openWindow(newTaskIndex);
            }
        });

        that.button.addEventListener('click', function (): void {
            const resource = {
                id: 'new-resource',
                label: 'New Resource',
                assignedTo: 'release'
            };

            ganttChart.insertResource(0, resource);
            this.disabled = true;
        });
        that.button2.addEventListener('click', function (): void {
            ganttChart.updateResource(0, { label: 'Updated resource' });
            this.disabled = true;
        });

        that.button3.addEventListener('click', function (): void {
            const resources = ganttChart.resources;

            ganttChart.removeResource(resources[resources.length - 1].id);
            that.button.disabled = true;
        });
    }
}