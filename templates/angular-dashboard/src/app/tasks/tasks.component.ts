import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {

  constructor(private dataService: DataService) { }

  appearance = {
		allowRowDetailToggleAnimation: true
  }

  rowDetail = {
		enabled: true,
		visible: true,
		template: `
      <div><span class="label">Text</span>: {{text}}</div>
      <div><span class="label">Tags</span>: {{tags}}</div>
      <div><span class="label">Status</span>: {{status}}</div>
      <div><span class="label">Start date</span>: {{startDate}}</div>
      <div><span class="label">Due date</span>: {{dueDate}}</div>
      <div><span class="label">Progress</span>: {{progress}}%</div>`
	}

	dataSource = new Smart.DataAdapter({
		dataSource: this.dataService.getTasksData(),
		dataFields: [
      'id: number',
			'text: string',
			'tags: string',
			'status: string',
			'startDate: date',
			'dueDate: date',
			'progress: number'
		]
  });
  
  columns = [
		{ label: 'Text', dataField: 'text' },
    { label: 'Tags', dataField:'tags',
      template: (formatObject) => {
        const tags = formatObject.row.data['tags'].split(', ');
        let innerHTML = '';
        for (let i = 0; i < tags.length; i++) {
          innerHTML += '<span style="margin-left: 10px; padding: 4px 10px; border-radius: 10px; color: #fff; background: ' + this.getChipColor() + '";>' + tags[i] + '</span>';
        }
        formatObject.template = innerHTML;      
      }
    },
    { label: 'Status', dataField: 'status' },
    { label: 'Start data', dataField: 'startDate', cellsFormat: 'dd/MM/yyyy' },
    { label: 'Due date', dataField: 'dueDate', cellsFormat: 'dd/MM/yyyy' },
    { label: 'Progress', dataField: 'progress', 
      template: formatObject => {
        formatObject.template = formatObject.value + ' %';      
      } 
    }
  ];
  
  getChipColor() {
    const colorIndex = Math.floor((Math.random() * 5) + 1);
    const colors = [
      '#18BFFF',
      '#F82B60',
      '#6B1CB0',
      '#1283DA',
      '#FCB400',
      '#20C933'
    ];

    const color = colors[colorIndex];
    return color;
  }
  
  ngOnInit(): void {
  }
}
