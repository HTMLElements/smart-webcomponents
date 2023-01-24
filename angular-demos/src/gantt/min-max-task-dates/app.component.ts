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
            type: 'project',
            label: 'Project 1',
            minDateStart: '2021-05-05',
            maxDateStart: '2021-07-05',
            dateStart: '2021-05-10',
            dateEnd: '2021-12-10',
            minDateEnd: '2021-12-1',
            maxDateEnd: '2021-12-25',
            minDuration: 60 * 24 * 60 * 60 * 1000,
        },
        {
            type: 'task',
            label: 'Task 2',
            minDateStart: '2021-09-02',
            dateStart: '2021-11-05',
            dateEnd: '2021-12-10',
            maxDateEnd: '2021-11-15',
            minDuration: 10 * 24 * 60 * 60 * 1000,
            maxDuration: 60 * 24 * 60 * 60 * 1000 //60 days in miliseconds
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