import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent, GanttChartTask, GanttChart, GanttChartResource } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            label: 'Building Construction',
            synchronized: true,
            expanded: true,
            type: "project",
            disableResources: true,
            tasks: [
                {
                    label: 'Architectural Stage',
                    synchronized: true,
                    expanded: true,
                    disableResources: true,
                    type: "project" /* Project */,
                    tasks: [
                        {
                            label: 'Architectural Draft',
                            dateStart: '2021-09-01',
                            dateEnd: '2021-09-11',
                            type: "task" /* Task */,
                            connections: [{ target: 3, type: 1 }],
                            resources: [{ id: 'maya', label: 'Maya, Architect', maxCapacity: 8 }],
                        },
                        {
                            label: 'Investor Agreement',
                            dateStart: '2021-09-12',
                            dateEnd: '2021-09-20',
                            type: "task" /* Task */,
                            connections: [{ target: 4, type: 0 }],
                            resources: 'maya'
                        },
                        {
                            label: 'Client Agreement',
                            dateStart: '2021-09-21',
                            dateEnd: '2021-09-25',
                            type: "task" /* Task */,
                            connections: [{ target: 5, type: 0 }],
                            resources: 'maya'
                        },
                        {
                            label: 'Hiring a Construction Contractor',
                            dateStart: '2021-09-28',
                            dateEnd: '2021-09-31',
                            type: "task" /* Task */,
                            resources: [{ id: 'sean', label: 'Sean, Manager', maxCapacity: 8 }]
                        }
                    ]
                },
                {
                    label: 'Exterior Construction Stage',
                    synchronized: true,
                    expanded: true,
                    disableResources: true,
                    type: "project" /* Project */,
                    tasks: [
                        {
                            label: 'Underground Parking',
                            synchronized: true,
                            expanded: true,
                            disableResources: true,
                            type: "project" /* Project */,
                            tasks: [
                                {
                                    label: 'Excavation',
                                    dateStart: '2021-10-04',
                                    dateEnd: '2021-10-07',
                                    type: "task" /* Task */,
                                    connections: [{ target: 9, type: 1 }],
                                    resources: [
                                        { id: 'mike', label: 'Mike, Construction Worker', maxCapacity: 8 },
                                        { id: 'concrete', label: 'Concrete, Material', value: 150, type: 'material' }
                                    ]
                                },
                                {
                                    label: 'Foundation',
                                    dateStart: '2021-10-08',
                                    dateEnd: '2021-10-10',
                                    type: "task" /* Task */,
                                    resources: ['mike', 'concrete']
                                }
                            ]
                        },
                        {
                            label: 'Ground Level',
                            synchronized: true,
                            expanded: true,
                            disableResources: true,
                            type: "project" /* Project */,
                            tasks: [
                                {
                                    label: 'Building Entrance',
                                    dateStart: '2021-10-13',
                                    dateEnd: '2021-10-20',
                                    type: "task" /* Task */,
                                    connections: [{ target: 12, type: 0 }],
                                    resources: [{ id: 'joe', label: 'Joe, Construction Worker', maxCapacity: 8 }, 'mike']
                                },
                                {
                                    label: 'Garages',
                                    dateStart: '2021-10-14',
                                    dateEnd: '2021-10-18',
                                    type: "task" /* Task */,
                                    resources: ['joe', 'mike']
                                }
                            ]
                        },
                        {
                            label: 'Floors',
                            synchronized: true,
                            expanded: true,
                            disableResources: true,
                            type: "project" /* Project */,
                            tasks: [
                                {
                                    label: 'Walls',
                                    dateStart: '2021-10-22',
                                    dateEnd: '2021-10-25',
                                    type: "task" /* Task */,
                                    connections: [{ target: 15, type: 1 }],
                                    resources: ['joe', { id: 'bricks', label: 'Brick, Material', value: 1000, type: 'material' }]
                                },
                                {
                                    label: 'Windows',
                                    dateStart: '2021-10-26',
                                    dateEnd: '2021-10-30',
                                    type: "task" /* Task */,
                                    resources: ['joe', 'bricks']
                                }
                            ]
                        },
                        {
                            label: 'General Works',
                            synchronized: true,
                            expanded: true,
                            disableResources: true,
                            type: "project" /* Project */,
                            tasks: [
                                {
                                    label: 'Stairs',
                                    dateStart: '2021-11-01',
                                    dateEnd: '2021-11-03',
                                    connections: [{ target: 18, type: 1 }],
                                    type: "task" /* Task */,
                                },
                                {
                                    label: 'Emergency plan',
                                    dateStart: '2021-11-04',
                                    dateEnd: '2021-11-06',
                                    connections: [{ target: 19, type: 1 }],
                                    type: "task" /* Task */
                                },
                                {
                                    label: 'Electricity',
                                    dateStart: '2021-11-07',
                                    dateEnd: '2021-11-10',
                                    type: "task" /* Task */,
                                    connections: [{ target: 20, type: 1 }],
                                    resources: [
                                        { id: 'wires', label: 'Wires, Material', value: 100, type: 'material' },
                                        { id: 'airConditioners', label: 'Air Conditioners', value: 2, type: 'material' },
                                        { id: 'jake', label: 'Jake, Electrician' }
                                    ]
                                },
                                {
                                    label: 'Water Supply',
                                    dateStart: '2021-11-11',
                                    dateEnd: '2021-11-15',
                                    type: "task" /* Task */,
                                    connections: [{ target: 21, type: 1 }],
                                    resources: [
                                        { id: 'pipes', label: 'Pipes, Material', value: 50, type: 'material' },
                                        { id: 'tom', label: 'Tom, Plumber', maxCapacity: 8 }
                                    ]
                                },
                                {
                                    label: 'Sanitary Supply',
                                    dateStart: '2021-11-16',
                                    dateEnd: '2021-11-20',
                                    type: "task" /* Task */,
                                    resources: ['tom', 'pipes']
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Interior Construction Stage',
                    synchronized: true,
                    expanded: true,
                    disableResources: true,
                    type: "project" /* Project */,
                    connections: [{ target: 27, type: 1 }],
                    progress: 50,
                    resources: 4,
                    tasks: [
                        {
                            label: 'Floor and Ceiling',
                            dateStart: '2021-11-21',
                            dateEnd: '2021-11-23',
                            connections: [{ target: 24, type: 1 }],
                            type: "task" /* Task */,
                        },
                        {
                            label: 'Walls and Columns',
                            dateStart: '2021-11-24',
                            dateEnd: '2021-11-30',
                            connections: [{ target: 25, type: 1 }],
                            type: "task" /* Task */,
                        },
                        {
                            label: 'Isolation',
                            dateStart: '2021-12-01',
                            dateEnd: '2021-12-03',
                            connections: [{ target: 26, type: 1 }],
                            type: "task" /* Task */,
                        },
                        {
                            label: 'Doors',
                            dateStart: '2021-12-04',
                            dateEnd: '2021-12-05',
                            type: "task" /* Task */
                        }
                    ]
                },
                {
                    label: 'Finishing Stage',
                    dateStart: '2021-12-05',
                    type: "milestone" /* Milestone */
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
            label: 'Resource',
            value: 'resources',
            size: '20%',
            formatFunction: function (data: Array<string>, itemObj: GanttChartTask): string {
                const gantt = document.querySelector('smart-gantt-chart') as GanttChart,
                    resources = gantt.resources as Array<GanttChartResource>,
                    getResource = (d: string): GanttChartResource => resources.find((res) => res.id.toString() === d.toString());

                if (!itemObj || itemObj.disableResources || !data.length) {
                    return ''
                }

                if (data.length === 1) {
                    return `<span>${getResource(data[0]).label.split(',')[0]}</span>`;
                }
                else {
                    let result = '<div class="gantt-chart-task-assignees">';

                    for (let i = 0; i < data.length; i++) {
                        const resource = getResource(data[i]);

                        if (resource) {
                            result += `<span class="gantt-chart-task-assignee ${resource.id.toLowerCase()}">${resource.label.charAt(0)}</span>`;
                        }
                    }

                    return result + '</div>';
                }
            }
        },
        {
            label: 'Duration',
            value: 'duration'
        },
    ];

    resourceColumns: Array<object> = [
        {
            label: 'Name',
            value: 'label',
            size: '60%'
        },
        {
            label: 'Allocated',
            value: 'value',
            formatFunction: (data: Array<string>, resource: GanttChartResource): any => {
                const ganttChart = document.querySelector('smart-gantt-chart') as GanttChart;

                if (resource) {
                    const assignedTasks = ganttChart.getResourceTasks(resource) as Array<GanttChartTask>;
                    let allocated = 0;

                    for (let i = 0; i < assignedTasks.length; i++) {
                        const assignedTask = assignedTasks[i];

                        allocated += assignedTask.duration * resource.capacity!;
                    }

                    switch (resource.id) {
                        case 'bricks':
                        case 'airConditioners':
                            return `<b>${data}</b>&nbsp;units`;
                        case 'pipes':
                        case 'wires':
                            return `<b>${data}</b>&nbspm`;
                        case 'concrete':
                            return `<b>${data}</b>&nbsp;m3`;
                        default:
                            if (!resource.value) {
                                return `<b>${Math.round(allocated)}</b>&nbsp;hours`;
                            }
                            return data;
                    }
                }
            }
        }
    ];

    treeSize: string = '30%';

    nonworkingDays: Array<number> = [0, 6];

    resourcePanelSize: string = '30%';

    durationUnit: string = 'day';

    snapToNearest: boolean = true;

    view: string = 'week';

    timelineHeaderFormatFunction: Function = function (date: Date, type: string): string {
        const ganttChart = document.querySelector('smart-gantt-chart') as GanttChart,
            monthFormat = ganttChart.month as "numeric" | "2-digit" | "narrow" | "long" | "short";

        if (type === 'week') {
            const startDayOfWeek = new Date(date),
                endDateOfWeek = new Date(date);

            endDateOfWeek.setDate(date.getDate() + 6);
            return startDayOfWeek.toLocaleDateString(ganttChart.locale, { day: 'numeric', month: monthFormat, year: ganttChart.yearFormat }) + ' - ' +
                endDateOfWeek.toLocaleDateString(ganttChart.locale, { day: 'numeric', month: monthFormat, year: ganttChart.yearFormat });
        }

        if (type === 'day') {
            return date.toLocaleDateString(ganttChart.locale, { day: 'numeric', month: monthFormat });
        }
    };

    resourceTimelineView: string = 'custom';

    resourceTimelineFormatFunction: Function = function (taskIndexes: Array<number>, resourceIndex: number, cellDate: Date): any {
        const ganttChart = document.querySelector('smart-gantt-chart') as GanttChart,
            resource = ganttChart.resources[resourceIndex] as GanttChartResource,
            tasks = ganttChart.tasks as Array<GanttChartTask>;

        if (ganttChart.nonworkingDays.includes(cellDate.getDay())) {
            return;
        }

        let total = 0;

        for (let i = 0; i < taskIndexes.length; i++) {
            const task = tasks[taskIndexes[i]];

            if (resource.type === 'material') {
                total += Math.round(resource.value / (task.duration || 1));
            }
            else {
                total += resource.capacity;
            }
        }
        return total;
    };

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

    }
}