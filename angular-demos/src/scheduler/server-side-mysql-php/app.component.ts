import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SchedulerComponent, DataAdapter, SchedulerViewType, SchedulerViews } from 'smart-webcomponents-angular/scheduler';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;
	
    dataSource: DataAdapter = new window.Smart.DataAdapter({
        beforeLoadComplete: (data) => {
            //Handle Data from the Server before the DataAdapter handles it
            return JSON.parse(data);
        },
        onBindingComplete: (boundSource) => {
            //Modify the DataAdapter data before it is handled by the Scheduler
            const today = new Date(), year = today.getFullYear(), month = today.getMonth(), data = boundSource.data;
            for (let i = 0; i < data.length; i++) {
                const dateStart = data[i].dateStart;
                data[i].dateStart = new Date(year, month, dateStart.getDate(), dateStart.getHours(), dateStart.getMinutes());
            }
        },
        dataSource: 'scheduler_data.php',
        dataSourceType: 'json',
        dataFields: [
            { name: 'id', map: 'EmployeeId', dataType: 'number' },
            { name: 'dateStart', map: 'HireDate', dataType: 'date' },
            { name: 'label', map: 'FirstName', dataType: 'string' },
            { name: 'description', map: 'Title', dataType: 'string' }
        ]
    });

    view: SchedulerViewType = 'month';

    views: SchedulerViews[] = ['day', 'week', 'month'];
 
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