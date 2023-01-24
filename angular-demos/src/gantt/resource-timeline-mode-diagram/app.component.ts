import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent, GanttChartTask, GanttChart } from 'smart-webcomponents-angular/ganttchart';


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
            label: 'Development',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            tasks: [
                {
                    label: 'User Interface Design',
                    dateStart: '2020-02-01',
                    dateEnd: '2020-02-10',
                    progress: 50,
                    resources: [{
                        id: 'megan',
                        label: 'Megan',
                    }]
                },
                {
                    label: 'Controllers & Event',
                    dateStart: '2020-02-10',
                    dateEnd: '2020-02-20',
                    progress: 25,
                    type: "task" /* Task */,
                    resources: 'megan'
                },
                {
                    label: 'Database Connectivity',
                    dateStart: '2020-02-20',
                    dateEnd: '2020-03-01',
                    progress: 50,
                    type: "task" /* Task */,
                    resources: [{
                        id: 'taylor',
                        label: 'Taylor'
                    }]
                },
                {
                    label: 'Request & Response',
                    dateStart: '2020-03-01',
                    dateEnd: '2020-03-10',
                    type: "task" /* Task */,
                    resources: 'taylor'
                }
            ]
        },
        {
            label: 'Quality Assurance',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            tasks: [
                {
                    label: 'User Interaction Testing',
                    dateStart: '2020-03-11',
                    dateEnd: '2020-03-20',
                    progress: 90,
                    type: "task" /* Task */,
                    resources: [{
                        id: 'chris',
                        label: 'Chris'
                    }]
                },
                {
                    label: 'Load and Stress Testing',
                    dateStart: '2020-03-21',
                    dateEnd: '2020-03-31',
                    progress: 45,
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
                    label: 'URL Acquiring',
                    dateStart: '2020-02-10',
                    dateEnd: '2020-02-20',
                    type: "task" /* Task */,
                    resources: 'chris'
                },
                {
                    label: 'Server Cost & Maintanance',
                    dateStart: '2020-02-15',
                    dateEnd: '2020-02-20',
                    progress: 75,
                    type: "task" /* Task */,
                    resources: [{
                        id: 'david',
                        label: 'David'
                    }]
                },
                {
                    label: 'Backup & Security',
                    dateStart: '2020-02-21',
                    dateEnd: '2020-03-01',
                },
                {
                    label: 'Updates',
                    dateStart: '2020-03-03',
                    dateEnd: '2020-03-10',
                    resources: [{
                        id: 'maria',
                        label: 'Maria'
                    }]
                }
            ]
        }
    ];

    taskColumns: Array<object> = [
        {
            label: 'Name',
            value: 'label',
            size: '40%'
        },
        {
            label: 'From',
            value: 'dateStart',
            size: '20%'
        },
        {
            label: 'To',
            value: 'dateEnd',
            size: '20%'
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
            size: '40%'
        },
        {
            label: 'Completion',
            value: 'progress',
            formatFunction: (data: string): string => data + '%',
            size: '20%'
        },
        {
            label: 'Workload',
            value: 'workload',
            formatFunction: (data) => data + 'h',
            size: '20%'
        }
    ];

    treeMin: string = '30%';

    resourcePanelSize: string = '10%';

    view: string = "week";

    nonworkingDays: Array<number> = [0, 6];

    timelineHeaderFormatFunction: Function = function (date: Date, type: string, isHeaderDetailsContainer: boolean): string {
        //W3C Standard function for week numbers
        function ISO8601_week_no(date: Date): number {
            let toDate = new Date(date.valueOf());
            const dayNumber = (date.getDay() + 6) % 7;
            toDate.setDate(toDate.getDate() - dayNumber + 3);
            const firstThursday = toDate.valueOf();
            toDate.setMonth(0, 1);
            if (toDate.getDay() !== 4) {
                toDate.setMonth(0, 1 + ((4 - toDate.getDay()) + 7) % 7);
            }
            return 1 + Math.ceil((firstThursday - toDate.valueOf()) / 604800000);
        }

        if (isHeaderDetailsContainer) {
            return `Week ${ISO8601_week_no(date)}, ${date.toLocaleDateString(this.locale, { year: '2-digit' })}`;
        }
        else {
            return date.toLocaleDateString(this.locale, { weekday: 'short' });
        }
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