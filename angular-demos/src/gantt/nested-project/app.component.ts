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
            //Note: min/max of syncronized projects are automatically calculated based on the tasks
            label: 'Project 1',
            synchronized: true,
            expanded: true,
            type: 'project',
            tasks: [
                {
                    label: 'Task 1.1',
                    minDateStart: '2020-02-10',
                    maxDateEnd: '2021-08-10',
                    dateStart: '2020-2-10',
                    dateEnd: '2021-4-10',
                    type: 'task'
                },
                {
                    label: 'Task 1.2',
                    minDateStart: '2020-3-10',
                    maxDateEnd: '2021-11-10',
                    dateStart: '2020-3-10',
                    dateEnd: '2021-6-10',
                    type: 'task'
                },
                {
                    label: 'Milestone 1',
                    dateEnd: '2021-3-15',
                    type: 'milestone'
                },
                {
                    label: 'Project 2',
                    dateStart: '2020-4-10',
                    dateEnd: '2021-01-15',
                    expanded: true,
                    type: 'project',
                    tasks: [
                        {
                            label: 'Task 2.1',
                            minDateStart: '2020-2-10',
                            maxDateEnd: '2021-08-10',
                            dateStart: '2020-4-10',
                            dateEnd: '2021-5-10',
                            type: 'task'
                        },
                        {
                            label: 'Task 2.2',
                            minDateStart: '2020-03-10',
                            maxDateEnd: '2021-11-10',
                            dateStart: '207-05-10',
                            dateEnd: '2021-6-10',
                            type: 'task'
                        },
                        {
                            label: 'Milestone 2',
                            dateEnd: '2021-7-20',
                            type: 'milestone'
                        }
                    ]
                }
            ]
        },
        {
            type: 'task',
            label: 'Task 3',
            dateStart: '2021-6-21',
            minDateStart: '2021-06-05',
            maxDateStart: '2021-07-05',
            dateEnd: '2021-12-10',
            minDateEnd: '2021-12-01',
            maxDateEnd: '2021-12-25'
        },
        {
            type: 'task',
            label: 'Task 4',
            dateStart: '2021-10-05',
            dateEnd: '2021-12-10',
            progress: 50,
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