import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Smart } from 'smart-webcomponents-angular/form';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	  const template = [
		{
			dataField: 'textBoxValue',
			controlType: 'text',
			label: 'Text input',
			required: true
		},
		{
			dataField: 'passwordBoxValue',
			controlType: 'password',
			label: 'Password input',
			required: true
		},
		{
			dataField: 'nubmberBoxValue',
			label: 'Number Input',
			controlType: 'number',
			required: true
		},
		{
			dataField: 'datetimeBoxValue',
			controlType: 'datetime',
			label: 'Date & time input',
			required: true
		},
		{
			dataField: 'timeBoxValue',
			controlType: 'time',
			label: 'Time input',
			required: true
		},
		{
			dataField: 'dateBoxValue',
			controlType: 'date',
			label: 'Date input',
			required: true
		},
		{
			dataField: 'dropdownValue',
			controlType: 'dropdownlist',
			label: 'Drop down list',
			required: true,
			controlOptions: {
				dataSource: [
					{ label: 'Option 1', value: 'value1' },
					{ label: 'Option 2', value: 'value2' },
					{ label: 'Option 3', value: 'value3' }
				],
				selectedIndexes: [0]
			}
		},
		{
			dataField: 'mask',
			label: 'Mask Input',
			controlType: 'mask',
			controlOptions: {
				placeholder: 'Phone number',
				mask: '+1 (###) ### - ####',
				value: '1234567890'
			},
			required: true
		},
		{
			controlType: 'label',
			label: 'Radio buttons:',
			rowHeight: '40px',
		},
		{
			dataField: 'radiobuttonValue',
			controlType: 'option',
			label: 'Radio buttons',
			optionsLayout: 'horizontal',
			options: [
				{ label: 'Option 1', value: 'value1' },
				{ label: 'Option 2', value: 'value2' },
				{ label: 'Option 3', value: 'value3' }
			]
		},
		{
			controlType: 'submit',
			label: 'Submit'
		}
		];

		
		const form = new Smart.Form('#profileForm', {
				controls: template
			}
		);
		
		form.value = {
			'textBoxValue': 'text box value',
			'passwordBoxValue': 'password box',
			'nubmberBoxValue': 67.44,
			'datetimeBoxValue': '2020-06-01 14:05:23',
			'timeBoxValue': '2020-07-01 11:05:23',
			'dateBoxValue': '2020-07-04 15:05:23',
			'dropdownValue': 'value3',
			'radiobuttonValue': 'value2',
			'mask': '1234567890'
		};
    }
}