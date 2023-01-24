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
            label: 'Project 1',
            dateStart: '2020-3-10',
            dateEnd: '2021-6-10',
            type: 'project',
            expanded: true,
            tasks: [
                {
                    label: 'Task 1.1',
                    dateStart: '2020-5-10',
                    dateEnd: '2021-4-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    dateStart: '2020-3-27',
                    dateEnd: '2021-6-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2021-3-15',
                    type: 'milestone'
                }
            ]
        },
        {
            label: 'Task 2',
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