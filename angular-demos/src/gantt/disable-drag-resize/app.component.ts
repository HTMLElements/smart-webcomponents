import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {

    dataSource: Array<object> = [
        {
            label: 'Task 1',
            dateStart: '2020-3-10',
            dateEnd: '2021-6-10',
            disableDrag: true,
            disableResize: true,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    disableResize: true,
                    minDateStart: '2020-2-10',
                    maxDateEnd: '2021-8-10',
                    dateStart: '2020-2-10',
                    dateEnd: '2021-4-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    disableDrag: true,
                    minDateStart: '2020-3-10',
                    maxDateEnd: '2021-11-10',
                    dateStart: '2020-3-10',
                    dateEnd: '2021-6-10',
                    type: 'task'
                }
            ]
        },
        {
            label: 'Task 2',
            disableResize: true,
            dateStart: '2021-6-21',
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