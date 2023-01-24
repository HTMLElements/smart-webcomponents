import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Button } from 'smart-webcomponents-angular/button';
import { GanttChartComponent, GanttChart, GanttChartView } from 'smart-webcomponents-angular/ganttchart';


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
            label: 'Summer Camp',
            dateStart: '2021-06-01',
            dateEnd: '2021-06-20',
            type: "task" /* Task */,
            resources: [{ id: 'jack', label: 'Jack', type: 'conditioner' }]
        },
        {
            label: 'Stadium Maintenance',
            dateStart: '2021-06-01',
            dateEnd: '2021-07-30',
            type: "task" /* Task */,
            resources: [{ id: 'silvio', label: 'Silvio', type: 'director' }],
            connections: [
                {
                    target: 0,
                    type: 0
                }
            ]
        },
        {
            label: 'Managing',
            synchronized: true,
            expanded: true,
            disableResources: true,
            type: "project" /* Project */,
            connections: [
                {
                    target: 4,
                    type: 2
                }
            ],
            tasks: [
                {
                    label: 'Contracts Handling',
                    dateStart: '2021-06-01',
                    dateEnd: '2021-08-01',
                    resources: [{ id: 'yana', label: 'Yana', type: 'manager' }],
                    connections: [
                        {
                            target: 5,
                            type: 0
                        }
                    ]
                },
                {
                    label: 'Fans and Merchandise',
                    dateStart: '2021-07-01',
                    dateEnd: '2021-08-31',
                    resources: [{ id: 'tina', label: 'Tina', type: 'manager' }]
                },
                {
                    label: 'Transfers',
                    dateStart: '2021-06-01',
                    dateEnd: '2021-08-01',
                    type: "task" /* Task */,
                    resources: [
                        { id: 'michael', label: 'Michael', type: 'manager' },
                        { id: 'antony', label: 'Antony', type: 'manager' }
                    ]
                },
            ],
            resources: [{ id: 'silvio', label: 'Silvio', type: 'owner' }]
        },
        {
            label: 'Medical Treatment',
            dateStart: '2021-06-21',
            dateEnd: '2022-05-26',
            type: "task" /* Task */,
            resources: [
                { id: 'oliver', label: 'Oliver', type: 'medic' },
                { id: 'melany', label: 'Melany', type: 'medic' }
            ],
            connections: [
                {
                    target: 7,
                    type: 0
                }
            ]
        },
        {
            label: 'Pre-season Training',
            dateStart: '2021-06-21',
            dateEnd: '2021-07-31',
            type: "task" /* Task */,
            resources: [
                { id: 'michael', label: 'Michael', type: 'coach' },
                { id: 'antony', label: 'Antony', type: 'assistent' }
            ],
            connections: [
                {
                    target: 8,
                    type: 1
                }
            ]
        },
        {
            label: 'Winter Season',
            dateStart: '2021-08-10',
            dateEnd: '2021-12-31',
            type: "task" /* Task */,
            resources: [{ id: 'gigi', label: 'Gianluigi', type: 'defender' }],
            connections: [
                {
                    target: 9,
                    type: 1
                }
            ]
        },
        {
            label: 'Mid-season Vacation',
            dateStart: '2022-01-01',
            dateEnd: '2022-01-20',
            type: "task" /* Task */,
            resources: [{ id: 'gigi', label: 'Gianluigi', type: 'defender' }],
            connections: [
                {
                    target: 10,
                    type: 1
                }
            ]
        },
        {
            label: 'Spring Season',
            dateStart: '2022-01-21',
            dateEnd: '2022-05-24',
            type: "task" /* Task */,
            resources: [{ id: 'gigi', label: 'Gianluigi', type: 'defender' }],
            connections: [
                {
                    target: 11,
                    type: 1
                }
            ]
        },
        {
            label: 'End Of Season',
            dateStart: '2022-05-26',
            disableResources: true,
            type: "milestone" /* Milestone */
        }
    ];

    taskColumns: Array<object> = [
        {
            label: 'Labels',
            value: 'label',
            //Column min size
            size: '30%',
            //Custom format function
            formatFunction: function (label) {
                if (label === 'Learn') {
                    return ' <i class="material-icons">&#xE80C;</i>' + label;
                }
                else if (label === 'Work') {
                    return ' <i class="material-icons">&#xE30A;</i>' + label;
                }
                else if (label === 'Travel') {
                    return ' <i class="material-icons">&#xE53D;</i>' + label;
                }
                else if (label === 'Eat') {
                    return ' <i class="material-icons">&#xE56C;</i>' + label;
                }
                else if (label === 'Shop') {
                    return ' <i class="material-icons">&#xE25C;</i>' + label;
                }
                else if (label === 'Train') {
                    return ' <i class="material-icons">&#xE52F;</i>' + label;
                }
                else {
                    return label;
                }
            }
        },
        {
            label: 'Date Start',
            value: 'dateStart',
            //Custom format function
            formatFunction: (date) => {
                const ganttChart = document.querySelector('smart-gantt-chart');

                return new Date(date).toLocaleDateString(ganttChart.locale, {});
            },
            size: '25%'
        },
        {
            label: 'Date End',
            value: 'dateEnd',
            size: '25%'
        }
    ];

    dateStart: string = '2021-05-26';

    view: string = 'month';

    treeSize: string = '30%';

    headerTemplate: string = 'headerTemplate';

    hideResourcePanel: boolean = true;

    onReady(event: any): void {
        const ganttChart = document.querySelector('smart-gantt-chart') as GanttChart,
            views = ["day" /* Day */, "week" /* Week */, "month" /* Month */, "year" /* Year */];
        let view = ganttChart.view, stateId = 0, states = { 0: ganttChart.getState() };

        function storeState() {
            stateId++;
            states[stateId] = ganttChart.getState();
            (<Button>document.getElementById('undo')).disabled = false;
        }

        ganttChart.addEventListener('change', storeState);
        ganttChart.addEventListener('dragEnd', storeState);
        ganttChart.addEventListener('resizeEnd', storeState);
        ganttChart.addEventListener('progressChangeEnd', storeState);
        ganttChart.addEventListener('connectionEnd', storeState);

        document.querySelector('.header-controls').addEventListener('click', function (event: CustomEvent): void {
            const button = (<HTMLElement>event.target)!.closest('smart-button') as Button;

            if (!button) {
                return;
            }

            switch (button.id) {
                case 'view':
                    if (ganttChart.groupByResources) {
                        ganttChart.groupByResources = false;
                        button.innerHTML = 'show resource view';
                    }
                    else {
                        ganttChart.groupByResources = true;
                        button.innerHTML = 'hide resource view';
                    }
                    break;
                case 'zoomIn':
                case 'zoomOut': {
                    const isZoomIn = button.id === 'zoomIn',
                        maxValue = isZoomIn ? views[views.length - 1] : views[0];

                    ganttChart.view = view = (views[views.indexOf(view) + (isZoomIn ? -1 : 1) * 1] || maxValue) as GanttChartView;

                    (<Button>document.getElementById(isZoomIn ? 'zoomOut' : 'zoomIn'))!.disabled = false;

                    if ((isZoomIn && view === 'day') || (!isZoomIn && view === 'year')) {
                        button.disabled = true;
                    }

                    break;
                }
                case 'undo':
                case 'redo':
                    if (button.id === 'undo') {
                        stateId -= 1;

                        if (states[stateId]) {
                            ganttChart.loadState(states[stateId]);
                            (<Button>document.getElementById('redo'))!.disabled = false;
                        }

                        if (!states[stateId] || !states[stateId - 1]) {
                            button.disabled = true;
                        }
                    }
                    else {
                        stateId += 1;

                        if (states[stateId]) {
                            ganttChart.loadState(states[stateId]);
                            (<Button>document.getElementById('undo'))!.disabled = false;
                        }

                        if (!states[stateId] || !states[stateId + 1]) {
                            button.disabled = true;
                        }
                    }

                    stateId = Math.max(0, Math.min(Object.keys(states).length - 1, stateId));
                    return;
            }
            
            ganttChart.ensureVisible(0);
        });
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