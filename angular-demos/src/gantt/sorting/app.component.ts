import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('buttonSort', { read: ButtonComponent, static: false }) buttonSort!: ButtonComponent;
    @ViewChild('buttonClearSort', { read: ButtonComponent, static: false }) buttonClearSort!: ButtonComponent;

    sortMode: String = 'one';

    treeSize: String = '30%';

    durationUnit: String = 'hour';

    taskColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            sort: 'asc',
            size: '60%'
        },
        {
            label: 'Duration (hours)',
            value: 'duration',
            formatFunction: (date: number) => Math.round(date)
        }
    ];

    resourceColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            sort: 'asc',
            size: '60%'
        },
        {
            label: 'Work Time (hours)',
            value: 'workload',
            size: '20%'
        },
        {
            label: 'Progress',
            value: 'progress'
        }
    ];

    dataSource: Array<object> = [
        {
            label: 'Project A',
            dateStart: '2021-01-10',
            dateEnd: '2021-03-10',
            type: 'project',
            expanded: true,
            synchronized: true,
            tasks: [
                {
                    label: 'Task Z',
                    dateStart: '2021-03-01',
                    duration: 1500,
                    progress: 30,
                    connections: [{ target: 2, type: 1 }],
                    resources: [{ id: 'resource1', label: 'Resource 1' }, { id: 'resource2', label: 'Resource 2' }]
                },
                {
                    label: 'Task Y',
                    dateStart: '2021-04-11',
                    duration: 1500
                }
            ]
        },
        {
            label: 'Task C',
            dateStart: '2021-05-17',
            duration: 1000,
            progress: 45,
            connections: [{ target: 4, type: 1 }],
            resources: [{ id: 'resource3', label: 'Resource 3' }, { id: 'resource4', label: 'Resource 4' }]
        },
        {
            label: 'Task D',
            dateStart: '2021-07-02',
            duration: 1000,
            progress: 20,
            connections: [{ target: 5, type: 1 }]
        },
        {
            label: 'Task E',
            dateStart: '2021-08-01',
            dateEnd: '2021-09-10',
            progress: 50,
            resources: [{ id: 'resource5', label: 'Resource 5' }]
        },
        {
            label: 'Project B',
            dateStart: '2021-09-11',
            dateEnd: '2021-10-10',
            type: 'project',
            expanded: true,
            synchronized: true,
            tasks: [
                {
                    label: 'Task A',
                    dateStart: '2021-10-12',
                    dateEnd: '2021-11-11',
                    connections: [{ target: 8, type: 1 }]

                },
                {
                    label: 'Task C',
                    dateStart: '2021-10-17',
                    dateEnd: '2021-11-31',
                    connections: [{ target: 9, type: 1 }]

                },
                {
                    label: 'Task B',
                    dateStart: '2021-11-01',
                    dateEnd: '2021-12-31',
                    progress: 10,
                    resources: [{ id: 'resource6', label: 'Resource 6' }]
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

        const that = this,
            ganttChart = that.ganttChart;

        that.checkBox.addEventListener('change', function (event: CustomEvent): void {
            ganttChart.sortMode = this.checked ? 'many' : 'one';
        });

        that.buttonSort.addEventListener('click', function (): void {
            ganttChart.sort([{ value: 'duration', sortOrder: 'asc', type: 'task' }, { value: 'progress', sortOrder: 'asc', type: 'resource' }]);
        });

        that.buttonClearSort.addEventListener('click', function (): void {
            ganttChart.clearSort();
        });
    }
}