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
            //Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
            label: 'Project 1',
            expanded: true,
            synchronized: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    minDateStart: '2020-02-10',
                    maxDateEnd: '2021-08-10',
                    dateStart: '2020-05-10',
                    dateEnd: '2021-04-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    minDateStart: '2020-03-10',
                    maxDateEnd: '2020-11-10',
                    dateStart: '2020-03-27',
                    dateEnd: '2020-06-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2021-03-15',
                    type: 'milestone'
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

    }
}