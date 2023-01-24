import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { GanttChartComponent, GanttChartTask, GanttChartResourceTimelineView, GanttChart } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            label: 'Preparation',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            tasks: [
                {
                    label: 'Identify Objective',
                    dateStart: '2020-05-01',
                    dateEnd: '2020-05-05',
                    value: 5,
                    progress: 25,
                    type: "task" /* Task */,
                    resources: [{
                        id: 'megan',
                        label: 'Megan',
                        maxCapacity: 8
                    }]
                },
                {
                    label: 'Determine Project Risks',
                    dateStart: '2020-05-05',
                    dateEnd: '2020-05-10',
                    value: 8,
                    type: "task" /* Task */,
                    resources: 'megan'
                },
                {
                    label: 'Ensure Funding',
                    dateStart: '2020-05-10',
                    dateEnd: '2020-05-15',
                    progress: 15,
                    value: 9,
                    type: "task" /* Task */,
                    resources: [{
                        id: 'taylor',
                        label: 'Taylor',
                        maxCapacity: 8
                    }]
                },
                {
                    label: 'Determine Scope',
                    dateStart: '2020-05-15',
                    dateEnd: '2020-05-18',
                    value: 7,
                    type: "task" /* Task */,
                    resources: 'taylor'
                },
                {
                    label: 'Project Documentation',
                    dateStart: '2020-05-20',
                    dateEnd: '2020-05-27',
                    progress: 10,
                    value: 5,
                    type: "task" /* Task */,
                    resources: [{
                        id: 'dave',
                        label: 'Dave',
                        maxCapacity: 8
                    }]
                },
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
                    label: 'Create Project Plan',
                    dateStart: '2020-05-26',
                    dateEnd: '2020-05-30',
                    progress: 55,
                    value: 7,
                    type: "task" /* Task */,
                    resources: [{
                        id: 'chris',
                        label: 'Chris',
                        maxCapacity: 8
                    }]
                },
                {
                    label: 'Identify Resources',
                    dateStart: '2020-06-01',
                    dateEnd: '2020-06-02',
                    value: 6,
                    type: "task" /* Task */,
                    resources: 'chris'
                },
                {
                    label: 'Determine Budget and Expenses',
                    dateStart: '2020-06-03',
                    dateEnd: '2020-06-07',
                    progress: 65,
                    value: 10,
                    type: "task" /* Task */,
                    resources: 'taylor'
                }
            ]
        },
        {
            label: 'Deployment',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            tasks: [
                {
                    label: 'Analyze Performance',
                    dateStart: '2020-08-11',
                    dateEnd: '2020-08-13',
                    progress: 100,
                    value: 7,
                    type: "task" /* Task */,
                    resources: 'chris'
                },
                {
                    label: 'Documentations and Tutorials',
                    dateStart: '2020-08-14',
                    dateEnd: '2020-08-20',
                    value: 5,
                    type: "task" /* Task */,
                    resources: 'dave'
                },
                {
                    label: 'Implementation Review',
                    dateStart: '2020-08-21',
                    dateEnd: '2020-08-25',
                    value: 7,
                    type: "task" /* Task */,
                    resources: 'megan'
                },
                {
                    label: 'Budget review',
                    dateStart: '2020-08-26',
                    dateEnd: '2020-08-31',
                    value: 8,
                    type: "task" /* Task */,
                    resources: 'taylor'
                }
            ]
        }
    ];

    taskColumns: Array<object> = [
        {
            label: 'Name',
            value: 'label',
            size: '70%'
        },
        {
            label: 'Owner',
            value: 'resources'
        }
    ];

    resourceColumns: Array<object> = [
        {
            label: 'Name',
            value: 'label',
            size: '70%'
        },
        {
            label: 'Completion',
            value: 'progress',
            formatFunction: (data) => data + '%',
        }
    ];

    treeMin: string = '20%';

    resourcePanelSize: string = '10%';

    resourceTimelineMode: string = 'histogram';

    view: string = 'week';

    resourceTimelineFormatFunction: Function = function (taskIndexes: Array<number>, resourceIndex: number, cellDate: Date): object {
        const gantt: GanttChart = document.querySelector('smart-gantt-chart') as GanttChart,
            tasks: Array<GanttChartTask> = gantt.tasks as Array<GanttChartTask>,
            dayOfWeek: number = cellDate.getDay() as number;
        let total = 0;

        for (let i = 0; i < taskIndexes.length; i++) {
            const taskValue = tasks[taskIndexes[i]].value || 0;

            //Extra bonus points for weekends
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                total += taskValue + 1;
            }
            else {
                total += taskValue;
            }
        }

        return { bonus: total, maxBonus: 10 };
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

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent): void {
            ganttChart.resourceTimelineView = (<HTMLElement>event.target).textContent.trim() as GanttChartResourceTimelineView;
        });
    }
}