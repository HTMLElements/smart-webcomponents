import { Component, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent, GanttChartDataSource, GanttChartTaskColumn} from 'smart-webcomponents-angular/ganttchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    durationUnit = 'hour';
	taskColumns: GanttChartTaskColumn[] = 
	[
		{
			label: 'Tasks',
			value: 'label',
			size: '60%'
		},
		{
			label: 'Duration (hours)',
			value: 'duration',
			formatFunction: (date) => parseInt(date)
		}
	]
	dataSource: GanttChartDataSource = [
		{
			label: 'PRD & User-Stories',
			dateStart: '2019-01-10',
			dateEnd: '2019-02-10',
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Persona & Journey',
			dateStart: '2019-02-11',
			dateEnd: '2019-03-10',
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Architecture',
			dateStart: '2019-03-11',
			dateEnd: '2019-04-1',
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Prototyping',
			dateStart: '2019-04-02',
			dateEnd: '2019-05-01',
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Design',
			dateStart: '2019-05-02',
			dateEnd: '2019-06-31',
			class: 'design-team',
			type: 'task'
		},
		{
			label: 'Development',
			dateStart: '2019-07-01',
			dateEnd: '2019-08-10',
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Testing & QA',
			dateStart: '2019-08-11',
			dateEnd: '2019-09-10',
			class: 'qa-team',
			type: 'task'
		},
		{
			label: 'UAT Test',
			dateStart: '2019-09-12',
			dateEnd: '2019-10-01',
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Handover & Documentation',
			dateStart: '2019-10-02',
			dateEnd: '2019-11-01',
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Release',
			dateStart: '2019-11-01',
			dateEnd: '2019-12-31',
			class: 'release-team',
			type: 'task'
		}
	]
	
	ngOnInit(): void {
  
    }
}