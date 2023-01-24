import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            //Non synchronized projects require dateStart/dateEnd like every other task
            label: 'Project 1',
            dateStart: '2020-06-25',
            dateEnd: '2021-04-28',
            dragProject: true,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2020-09-10',
                    dateEnd: '2021-08-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2020-03-27',
                    dateEnd: '2021-06-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2021-07-15',
                    type: 'milestone'
                },
                {
                    label: 'Task 1.3',
                    dateStart: '2021-04-21',
                    dateEnd: '2021-10-15',
                    type: 'task'
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