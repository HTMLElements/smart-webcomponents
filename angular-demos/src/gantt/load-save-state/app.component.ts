import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';


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

    treeSize: string = '50%';

    taskColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            size: '50%'
        },
        {
            label: 'Start Date',
            value: 'dateStart',
            size: '25%'
        },
        {
            label: 'End Date',
            value: 'dateEnd'
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


        const that = this,
            gantt = that.ganttchart;

        function reset() {
            gantt.dataSource = [
                {
                    label: 'Clear Site',
                    dateStart: '2021-01-1',
                    dateEnd: '2021-01-10',
                    connections: [
                        {
                            target: 1,
                            type: 0
                        }
                    ]
                },
                {
                    label: 'Drainage & Foundation',
                    dateStart: '2021-01-11',
                    dateEnd: '2021-01-20',
                    connections: [
                        {
                            target: 2,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Ground Floor',
                    dateStart: '2021-01-21',
                    dateEnd: '2021-01-31',
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'First Floor',
                    dateStart: '2021-02-01',
                    dateEnd: '2021-02-20',
                    connections: [
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Roofing',
                    dateStart: '2021-02-25',
                    dateEnd: '2021-03-5',
                    connections: [
                        {
                            target: 5,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Connect Electricity',
                    dateStart: '2021-03-6',
                    dateEnd: '2021-03-15',
                    connections: [
                        {
                            target: 6,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Air Conditioning',
                    dateStart: '2021-03-16',
                    dateEnd: '2021-03-20',
                    connections: [
                        {
                            target: 7,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Interiors',
                    dateStart: '2021-03-21',
                    dateEnd: '2021-03-28',
                    connections: [
                        {
                            target: 8,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Racking',
                    dateStart: '2021-03-31',
                    dateEnd: '2021-04-10',
                    connections: [
                        {
                            target: 9,
                            type: 1
                        }
                    ]
                },
                {
                    label: 'Stock Shelving',
                    dateStart: '2021-04-12',
                    dateEnd: '2021-05-01'
                }
            ];
        }

        gantt.loadState();

        //Check if a state has been loaded
        if (!gantt.dataSource.length) {
            reset();
        }

        that.button.addEventListener('click', function (): void {
            gantt.saveState();
        });

        that.button2.addEventListener('click', function (): void {
            gantt.loadState();
        });

        that.button3.addEventListener('click', function (): void {
            gantt.clearState();
            gantt.dataSource = [];
            reset();
        });
    }
}