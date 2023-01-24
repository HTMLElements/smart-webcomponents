import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { GanttChartComponent, GanttChartTask, GanttChart, GanttChartResource } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            label: 'Office Configuration',
            synchronized: true,
            expanded: true,
            type: "task" /* Task */,
            disableResources: true,
            tasks: [
                {
                    label: 'Office Setup',
                    synchronized: true,
                    expanded: true,
                    disableResources: true,
                    type: "project" /* Project */,
                    tasks: [
                        {
                            label: 'Office Acquiring',
                            dateStart: '2020-01-02',
                            dateEnd: '2020-01-05',
                            type: "task" /* Task */,
                            connections: [{ target: 3, type: 1 }],
                            resources: [{ id: 'taylor', label: 'Taylor' }, { id: 'michael', label: 'Michael' }]
                        },
                        {
                            label: 'Office Interior',
                            dateStart: '2020-01-05',
                            dateEnd: '2020-01-15',
                            type: "task" /* Task */,
                            connections: [{ target: 4, type: 0 }],
                            resources: [{ id: 'anna', label: 'Anna' }, { id: 'samantha', label: 'Samantha' }, { id: 'christina', label: 'Christina' }]
                        },
                        {
                            label: 'Office Security',
                            dateStart: '2020-01-05',
                            dateEnd: '2020-01-10',
                            type: "task" /* Task */,
                            connections: [{ target: 5, type: 1 }],
                            resources: { id: 'tommy', label: 'Tommy' }
                        }
                    ]
                },
                {
                    label: 'Employee Positioning',
                    dateStart: '2020-01-11',
                    dateEnd: '2020-01-15',
                    type: "task" /* Task */,
                    resources: { id: 'carol', label: 'Carol' }
                },
                {
                    label: 'Cleaners',
                    dateStart: '2020-01-10',
                    dateEnd: '2020-01-15',
                    type: "task" /* Task */,
                    resources: { id: 'rachel', label: 'Rachel' }
                },
                {
                    label: 'Catering',
                    dateStart: '2020-01-11',
                    dateEnd: '2020-01-16',
                    type: 'task'
                },
                {
                    label: 'Transport',
                    dateStart: '2020-01-12',
                    dateEnd: '2020-01-17',
                    type: 'task'
                },
                {
                    label: 'Human Resources',
                    dateStart: '2020-01-10',
                    dateEnd: '2020-01-20',
                    type: "task" /* Task */,
                    resources: [{ id: 'annabell', label: 'Annabell' }, { id: 'monica', label: 'Monica' }]
                }
            ]
        },
        {
            label: 'Operations',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            tasks: [
                {
                    label: 'Development',
                    dateStart: '2020-01-20',
                    dateEnd: '2020-02-01',
                    type: "task" /* Task */,
                    resources: [{ id: 'jason', label: 'Jason' }, { id: 'aaron', label: 'Aaron' }]
                },
                {
                    label: 'Marketing',
                    dateStart: '2020-01-10',
                    dateEnd: '2020-01-31',
                    type: "task" /* Task */,
                    resources: { id: 'sonya', label: 'Sonya' }
                },
                {
                    label: 'Quality Assurance',
                    dateStart: '2020-02-01',
                    dateEnd: '2020-02-05',
                    type: "task" /* Task */,
                    resources: { id: 'rick', label: 'Rick' }
                },
                {
                    label: 'Market Researchers',
                    dateStart: '2020-01-01',
                    dateEnd: '2020-01-05',
                    type: "task" /* Task */,
                    resources: ['jason', 'sonya']
                },
                {
                    label: 'Managers',
                    dateStart: '2020-01-20',
                    dateEnd: '2020-01-31',
                    type: "task" /* Task */,
                    resources: { id: 'ryan', label: 'Ryan' }
                }
            ]
        },
        {
            label: 'Production',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            progress: 50,
            resources: 4,
            tasks: [
                {
                    label: 'Technology',
                    synchronized: true,
                    expanded: true,
                    disableResources: true,
                    type: "project" /* Project */,
                    tasks: [
                        {
                            label: 'Updates',
                            dateStart: '2020-01-16',
                            dateEnd: '2020-01-20',
                            type: "task" /* Task */,
                            connections: [{ target: 19, type: 0 }],
                            resources: { id: 'oliver', label: 'Oliver' }
                        },
                        {
                            label: 'Lifecycle',
                            dateStart: '2020-01-16',
                            dateEnd: '2020-01-18',
                            type: "task" /* Task */,
                            connections: [{ target: 20, type: 1 }],
                        },
                        {
                            label: 'Testing',
                            dateStart: '2020-01-20',
                            dateEnd: '2020-01-25',
                            type: "task" /* Task */,
                            resources: { id: 'jessica', label: 'Jessica' }
                        }
                    ]
                },
                {
                    label: 'Servers and Backup',
                    dateStart: '2020-01-10',
                    dateEnd: '2020-01-12',
                    type: "task" /* Task */,
                    resources: 'oliver'
                },
                {
                    label: 'Meetings',
                    dateStart: '2020-01-12',
                    dateEnd: '2020-01-15',
                    type: "task" /* Task */,
                    resources: 'ryan'
                },
                {
                    label: 'Feedback and Improvements',
                    dateStart: '2020-02-01',
                    dateEnd: '2020-02-10',
                    type: 'task'
                }
            ]
        }
    ];

    taskColumns: Array<object> = [
        {
            label: 'Task Name',
            value: 'label',
            size: '40%'
        },
        {
            label: 'Start Time',
            value: 'dateStart',
            size: '25%'
        },
        {
            label: 'Assignee',
            value: 'resources',
            size: '20%',
            formatFunction: function (value: string, item: GanttChartTask): string {
                const gantt = document.querySelector('smart-gantt-chart')!,
                    resources = gantt.resources!,
                    getResource = (d: any) => resources.find((res: any) => res.id.toString() === d.toString());

                if (!item || item.disableResources) {
                    return ''
                }

                const itemResources = item.resources;

                if (!itemResources.length) {
                    return '<span class="gantt-chart-task-assignee unassigned">?</span>';
                }
                else if (itemResources.length === 1) {
                    return `<span>${getResource(itemResources[0])!.label!}</span>`;
                }
                else {
                    let result = '';

                    for (let i = 0; i < itemResources.length; i++) {
                        const resource = getResource(itemResources[i]);

                        if (resource) {
                            result += `<span class="gantt-chart-task-assignee ${resource.id!.toLowerCase()}">${resource.label!.charAt(0)}</span>`;
                        }
                    }

                    return result;
                }
            }
        },
        {
            label: 'Duration',
            value: 'duration'
        },
    ];

    treeSize: string = '30%';

    durationUnit: string = 'day';

    hideResourcePanel: boolean = true;

    groupByResources: boolean = true;

    view: string = 'week';

    timelineHeaderFormatFunction = function (date: Date, type: string): any {
        const gantt = document.querySelector('smart-gantt-chart')!,
            monthFormat = (gantt.monthFormat as "numeric" | "2-digit" | "narrow" | "long" | "short" | undefined);

        if (type === 'week') {
            const startDayOfWeek = new Date(date),
                endDateOfWeek = new Date(date);

            endDateOfWeek.setDate(date.getDate() + 6);

            return startDayOfWeek.toLocaleDateString(gantt.locale, { day: 'numeric', month: monthFormat, year: gantt.yearFormat }) + ' - ' +
                endDateOfWeek.toLocaleDateString(gantt.locale, { day: 'numeric', month: monthFormat, year: gantt.yearFormat });
        }

        if (type === 'day') {
            return date.toLocaleDateString(gantt.locale, { day: 'numeric', month: monthFormat });
        }
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

        const that = this,
            ganttChart = that.ganttChart;

        that.checkBox.addEventListener('change', function (event: CustomEvent): void {
            ganttChart.groupByResources = event.detail.value;
        });
    }
}