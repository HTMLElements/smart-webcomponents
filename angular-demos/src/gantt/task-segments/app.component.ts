import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChart, GanttChartComponent, GanttChartView, Duration, GanttChartTaskColumn } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    view: GanttChartView = 'day';

    treeSize: string = '25%';

    durationUnit: Duration = 'hour';

    taskColumns: GanttChartTaskColumn[] = [
        {
            label: 'Employee',
            value: 'id'
        },
        {
            label: 'Job Name',
            value: 'job'
        }
    ];

    timelineHeaderFormatFunction: Function = function (date, type, isHeaderDetailsContainer) {
        const ganttChart = document.querySelector('smart-gantt-chart') as GanttChart;

        if (isHeaderDetailsContainer) {
            return 'Project Timeline';
        }
        else {
            return date.toLocaleTimeString(ganttChart.locale, { hour: 'numeric', minute: 'numeric', hour12: true });
        }
    };

    dataSource = [
        {
            id: 'John',
            dateStart: '2021-01-15T05:00:00',
            dateEnd: '2021-01-15T05:00:00',
            job: 'Milesone',
            type: 'milestone'
        },
        {
            id: 'Betty',
            label: 'Design',
            dateStart: '2021-01-15T07:30:00',
            dateEnd: '2021-01-15T016:30:00',
            class: 'front-end',
            job: 'Designer',
            progress: 45,
            segments: [
                {
                    label: 'Structure',
                    dateStart: '2021-01-15T7:45:00',
                    dateEnd: '2021-01-15T010:30:00'
                },
                {
                    label: 'Pages',
                    dateStart: '2021-01-15T11:00:00',
                    dateEnd: '2021-01-15T013:30:00',
                },
                {
                    label: 'Downloads',
                    dateStart: '2021-01-15T14:15:00',
                    dateEnd: '2021-01-15T016:30:00'
                }
            ]
        },
        {
            id: 'William',
            label: 'Project Development',
            dateStart: '2021-01-15T12:30:00',
            dateEnd: '2021-01-15T20:30:00',
            class: 'back-end',
            progress: 25,
            job: 'Developer',
            segments: [
                {
                    label: 'Code Basics',
                    dateStart: '2021-01-15T12:30:00',
                    duration: 2.5
                },
                {
                    label: 'Code Advanced',
                    dateStart: '2021-01-15T16:30:00',
                    duration: 4
                },
            ]
        },
        {
            id: 'Emma',
            label: 'Additional Design',
            dateStart: '2021-01-15T9:30:00',
            dateEnd: '2021-01-15T18:00:00',
            class: 'front-end',
            progress: 50,
            job: 'Designer',
            segments: [
                {
                    label: 'Payment Methods',
                    dateStart: '2021-01-15T09:30:00',
                    dateEnd: '2021-01-15T12:30:00'
                },
                {
                    label: 'Feel and Appeal',
                    dateStart: '2021-01-15T13:00:00',
                    dateEnd: '2021-01-15T015:00:00',
                },
                {
                    label: 'Extras',
                    dateStart: '2021-01-15T15:30:00',
                    dateEnd: '2021-01-15T016:30:00'
                },
                {
                    label: 'Support',
                    dateStart: '2021-01-15T16:45:00',
                    dateEnd: '2021-01-15T018:00:00'
                }
            ]
        },
        {
            id: 'Oliver',
            label: 'Handle Code Logic',
            dateStart: '2021-01-15T05:30:00',
            dateEnd: '2021-01-15T12:30:00',
            class: 'back-end',
            progress: 75,
            job: 'Developer',
        },
        {
            id: 'Jason',
            label: 'Validate Project',
            dateStart: '2021-01-15T10:30:00',
            dateEnd: '2021-01-15T19:00:00',
            class: 'qa',
            progress: 15,
            job: 'Quality Assurance',
            segments: [
                {
                    label: 'Test Input',
                    dateStart: '2021-01-15T10:30:00',
                    dateEnd: '2021-01-15T13:30:00'
                },
                {
                    label: 'Test Output',
                    dateStart: '2021-01-15T14:45:00',
                    dateEnd: '2021-01-15T019:00:00',
                }
            ]
        },
        {
            id: 'Alex',
            label: 'Improve project',
            dateStart: '2021-01-15T15:00:00',
            dateEnd: '2021-01-15T22:30:00',
            class: 'qa',
            progress: 15,
            job: 'Quality Assurance',
            segments: [
                {
                    label: 'Test UI',
                    dateStart: '2021-01-15T15:00:00',
                    dateEnd: '2021-01-15T16:30:00'
                },
                {
                    label: 'Test Data',
                    dateStart: '2021-01-15T17:15:00',
                    dateEnd: '2021-01-15T20:00:00',
                },
                {
                    label: 'Test Overall',
                    dateStart: '2021-01-15T20:30:00',
                    dateEnd: '2021-01-15T22:30:00'
                }
            ]
        },
        {
            id: 'Lucas',
            label: 'Manage',
            dateStart: '2021-01-15T06:00:00',
            dateEnd: '2021-01-15T12:00:00',
            class: 'backbone',
            job: 'Manager'
        },
        {
            id: 'Michael',
            label: 'Prepare and Maintain',
            dateStart: '2021-01-15T8:30:00',
            dateEnd: '2021-01-15T17:00:00',
            class: 'main',
            job: 'Team Leader',
            segments: [
                {
                    label: 'Configure Team',
                    dateStart: '2021-01-15T08:30:00',
                    dateEnd: '2021-01-15T09:30:00'
                },
                {
                    label: 'Teamwork Environment',
                    dateStart: '2021-01-15T09:45:00',
                    dateEnd: '2021-01-15T10:30:00',
                },
                {
                    label: 'Review Code',
                    dateStart: '2021-01-15T10:45:00',
                    dateEnd: '2021-01-15T12:00:00'
                },
                {
                    label: 'Confirm Project',
                    dateStart: '2021-01-15T13:30:00',
                    dateEnd: '2021-01-15T17:00:00'
                }
            ]
        },
        {
            id: 'Trevor',
            dateStart: '2021-01-15T23:00:00',
            dateEnd: '2021-01-15T23:00:00',
            job: 'Milesone',
            type: 'milestone'
        },
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
    }
}