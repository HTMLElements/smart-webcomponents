import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent, GanttChart } from 'smart-webcomponents-angular/ganttchart';


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
            label: 'Preparing',
            synchronized: true,
            expanded: true,
            type: 'project',
            disableResources: true,
            tasks: [
                {
                    label: 'Plan Finances',
                    dateStart: '2020-03-01',
                    dateEnd: '2020-03-05',
                    resources: [{
                        id: 'trina',
                        label: 'Trina',
                        maxCapacity: 8
                    }]
                },
                {
                    label: 'Find an Office',
                    dateStart: '2020-03-02',
                    dateEnd: '2020-03-05',
                    progress: 50,
                    resources: [{
                        id: 'michelle',
                        label: 'Michelle',
                        capacity: 4,
                        maxCapacity: 10,
                    }]
                },
                {
                    label: 'Hire Staff',
                    dateStart: '2020-03-02',
                    dateEnd: '2020-03-10',
                    resources: [{
                        id: 'melanie',
                        label: 'Melanie',
                        capacity: 8,
                        maxCapacity: 10,
                    }]
                },
                {
                    label: 'Staff Management',
                    dateStart: '2020-03-10',
                    dateEnd: '2020-03-15'
                },
                {
                    label: 'Schedule',
                    dateStart: '2020-03-10',
                    dateEnd: '2020-03-12',
                    resources: [{
                        id: 'david',
                        label: 'David',
                        maxCapacity: 8
                    }]
                },
            ]
        },
        {
            label: 'Execution',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: 'project',
            tasks: [
                {
                    label: 'Product Vision',
                    dateStart: '2020-03-15',
                    dateEnd: '2020-03-20',
                    resources: [{
                        id: 'chris',
                        label: 'Chris',
                        maxCapacity: 12
                    }]
                },
                {
                    label: 'Product Development',
                    dateStart: '2020-03-20',
                    dateEnd: '2020-03-31',
                    resources: 'chris'
                },
                {
                    label: 'Product Release',
                    dateStart: '2020-04-01',
                    dateEnd: '2020-04-05',
                    resources: [{
                        id: 'taylor',
                        label: 'Taylor',
                        capacity: 4,
                        maxCapacity: 4
                    }]
                }
            ]
        },
        {
            label: 'Release',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: 'project',
            tasks: [
                {
                    label: 'Release Management',
                    dateStart: '2020-04-06',
                    dateEnd: '2020-04-10'
                },
                {
                    label: 'Updates',
                    dateStart: '2020-04-15',
                    dateEnd: '2020-05-01',
                    resources: 'chris'
                },
                {
                    label: 'Upgrades',
                    dateStart: '2020-05-01',
                    dateEnd: '2020-06-01',
                    resources: [{
                        id: 'brad',
                        label: 'Brad'
                    }]
                }
            ]
        },
        {
            label: 'Support',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: 'project',
            tasks: [
                {
                    label: 'QA',
                    dateStart: '2020-04-01',
                    dateEnd: '2020-05-01',
                    resources: 'chris'
                },
                {
                    label: 'Customer Service',
                    dateStart: '2020-04-01',
                    dateEnd: '2020-05-31',
                    resources: 'michelle'
                },
                {
                    label: 'Statistics and Data Analysis',
                    dateStart: '2020-04-01',
                    dateEnd: '2020-05-01'
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
            formatFunction: (data: string | number): string => data + '%',
            size: '20%'
        },
        {
            label: 'Workload',
            value: 'workload',
            formatFunction: (data: string | number): string => data + 'h',
            size: '20%'
        },
        {
            label: 'Capacity',
            value: 'capacity',
            formatFunction: (data: string | number): string => data + 'h',
            size: '20%'
        }
    ];

    treeMin: string = '25%';

    resourcePanelSize: string = '30%';

    resourceTimelineMode: string = 'histogram';

    view: string = 'week';

    timelineHeaderFormatFunction: Function = function (date: Date, type: string, isHeaderDetailsContainer: boolean): string {
        const that = document.querySelector('smart-gantt-chart') as GanttChart;

        if (isHeaderDetailsContainer) {
            return date.toLocaleDateString(that.locale, { month: 'long', year: 'numeric' });
        }
        else {
            return date.toLocaleDateString(that.locale, { day: 'numeric', weekday: 'long' });
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

    }
}