import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { GetData } from '../../common/data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
	@ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
	@ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) checkbox3!: CheckBoxComponent;
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
        const that = this;

        that.grid.behavior = { columnResizeMode: 'growAndShrink' };
        that.grid.appearance = { alternationCount: 2 }; 
        that.grid.dataSource = new Smart.DataAdapter({
            dataSource: GetData(15),
            dataFields: [
                'id: number',
                'firstName: string',
                'lastName: string',
                'productName: string',
                'quantity: number',
                'price: number',
                'total: number'
            ]
        });

        that.grid.columns = [
            { label: 'Id', dataField: 'id' }, 
            { label: 'First Name', dataField: 'firstName' },
            { label: 'Last Name', dataField: 'lastName' },
            { label: 'Product', dataField: 'productName' },
            { label: 'Quantity', dataField: 'quantity' },
            { label: 'Unit Price', dataField: 'price', cellsFormat: 'c2' },
            { label: 'Total', dataField: 'total', cellsFormat: 'c2' }
        ]
    
        const checkboxes = document.querySelectorAll('smart-check-box');
        
        for (let i = 0; i < checkboxes.length; i++) {
            const checkbox = checkboxes[i];
          
            checkbox.addEventListener('change', function (event: CustomEvent) {
                const value = event.detail.value;
                const checkBox = event.target as CheckBox;

                if (value) {
                    if (checkBox.id === 'alternationStart') {
                        that.grid.appearance.alternationStart = 1;
                    }
                    else if (checkBox.id === 'alternationEnd') {
                        that.grid.appearance.alternationEnd = 10;
                    }
                    else {
                        that.grid.appearance.alternationCount = 5;
                    }
                }
                else {
                    if (checkBox.id === 'alternationStart') {
                        that.grid.appearance.alternationStart = 0;
                    }
                    else if (checkBox.id === 'alternationEnd') {
                        that.grid.appearance.alternationEnd = 0;
                    }
                    else {
                        that.grid.appearance.alternationCount = 2;
                    }
                }
            });
        }
	}	
}