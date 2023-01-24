import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { GanttChartComponent, GanttChartTask } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
            label: 'Project 1',
            synchronized: true,
            expanded: true,
            type: 'project',
            connections: [
                {
                    target: 1,
                    type: 0
                }
            ],
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2020-05-10',
                    dateEnd: '2021-04-10',
                    type: 'task',
                    connections: [
                        {
                            target: 2,
                            type: 2
                        }
                    ]
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2020-03-27',
                    dateEnd: '2021-06-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2021-03-15',
                    type: 'milestone',
                    connections: [
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                }
            ]
        },
        {
            label: 'Task 2',
            dateStart: '2021-06-21',
            dateEnd: '2021-12-10',
            type: 'task'
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
            gantt = that.ganttChart,
            connectionSelector = that.dropdownlist;

        that.button.addEventListener('click', function (): void {
            const task = gantt.tasks[2] as GanttChartTask;

            gantt.getTaskConnections(task).then(taskConnections => {
                if (task && taskConnections.length) {
                    return;
                }
    
                gantt.createConnection(2, 3, 0);
                connectionSelector.insert(4, { value: '2-3-0', label: 'Task 1.2 - Milestone 1' });
            });
        });

        that.button2.addEventListener('click', function (): void {
            const con = connectionSelector.selectedValues[0].split('-');

            if (con) {
                gantt.removeConnection(con[0], con[1], con[2]);
                connectionSelector.removeAt(connectionSelector.selectedIndexes[0]);
            }
        });

        that.button3.addEventListener('click', function (): void {
            gantt.removeAllConnections();
            connectionSelector.clearItems();
        });
    }
}