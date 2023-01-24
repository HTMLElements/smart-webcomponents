import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent, GanttChartTaskColumn, GanttChartResourceColumn, GanttChartView, Duration, GanttChartTooltip } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    view: GanttChartView = 'week';

    treeSize: string = '25%';

    durationUnit: Duration = 'hour';

    tooltip: GanttChartTooltip = {
        enabled: true
    };

    hideTimelineHeaderDetails: boolean = true;

    timelineHeaderFormatFunction: Function = (date: Date, type: string, isHeaderDetailsContainer: boolean, dateValue: string): string => {
        if (!isHeaderDetailsContainer && type === 'day') {
            return date.toLocaleDateString((<any>this).locale, { day: 'numeric', month: 'short' });
        }
        
        return dateValue;
    };

    taskColumns: GanttChartTaskColumn[] = [
        {
            label: 'Employee',
            value: 'label'
        },
        {
            label: 'From',
            value: 'dateStart',
            formatFunction: (value, item) => {
                return item.dateStart.toLocaleDateString('en', { hour: '2-digit', minute: '2-digit' });
            }
        }
    ];

    resourceColumns: GanttChartResourceColumn[] = [
        {
            label: 'Name',
            value: 'label',
            size: '50%'
        },
        {
            label: 'Workload',
            value: 'workload',
            formatFunction: (data) => data + 'h'
        }
    ];

    dataSource: any = [
        {
            label: 'Stage 1',
            synchronized: true,
            expanded: true,
            tooltip: '<b>Custom Tooltip Content</b>',
            tasks: [
                {
                    label: 'Repairs',
                    dateStart: '2021-11-1T02:30:00',
                    duration: 9.5,
                    progress: 45,
                    connections: [
                        {
                            target: 2,
                            type: 1
                        }
                    ],
                    resources: [{
                        id: 'david',
                        label: 'David'
                    }]
                },
                {
                    label: 'Rally',
                    dateStart: '2021-11-1T13:30:00',
                    duration: 12,
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ],
                    resources: [{
                        id: 'mike',
                        label: 'Mike'
                    }]
                },
                {
                    label: 'Rankings Update',
                    dateStart: '2021-11-02T07:30:00',
                    duration: 8
                }
            ]
        },
        {
            label: 'Stage 2',
            synchronized: true,
            expanded: true,
            tasks: [
                {
                    label: 'Repairs & Optimizations',
                    dateStart: '2021-11-03T07:30:00',
                    duration: 6,
                    connections: [
                        {
                            target: 6,
                            type: 1
                        }
                    ],
                    resources: ['david', {
                        id: 'alex',
                        label: 'David'
                    }]
                },
                {
                    label: 'Stastics',
                    dateStart: '2021-11-04T07:30:00',
                    duration: 8
                }
            ]
        },
        {
            label: 'Stage 3',
            synchronized: true,
            expanded: true,
            tasks: [
                {
                    label: 'Preparation',
                    dateStart: '2021-11-05T06:30:00',
                    duration: 6,
                    connections: [
                        {
                            target: 9,
                            type: 1
                        }
                    ],
                    resources: ['david', 'mike']
                },
                {
                    label: 'Rally',
                    dateStart: '2021-11-05T013:00:00',
                    duration: 13,
                    connections: [
                        {
                            target: 10,
                            type: 1
                        }
                    ],
                    resources: ['mike']
                },
                {
                    label: 'Final Rankings',
                    dateStart: '2021-11-06T7:30:00',
                    duration: 12,
                    connections: [
                        {
                            target: 11,
                            type: 1
                        }
                    ],
                },
                {
                    label: 'Awards',
                    dateStart: '2021-11-07T06:00:00',
                    duration: 12
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
    }
}