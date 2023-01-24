import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CustomizationDialogComponent } from 'smart-webcomponents-angular/customizationdialog';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('customizationdialog', { read: CustomizationDialogComponent, static: false }) customizationdialog: CustomizationDialogComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const customizationDialog = document.querySelector('smart-customization-dialog'), showCustomizationdialog = document.getElementById('showCustomizationdialog');
        showCustomizationdialog.addEventListener('click', () => customizationDialog.open());
        customizationDialog.addEventListener('change', console.log(customizationDialog.value));
        const columns = [
            { text: 'Name', datafield: 'firstname', width: 120 },
            { text: 'Last Name', datafield: 'lastname', width: 120 },
            { text: 'Product', datafield: 'productname', width: 180 },
            { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
            { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
            { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
        ];
        customizationDialog.dataSource = columns;
        customizationDialog.valueMember = 'datafield';
        customizationDialog.displayMember = 'text';
        customizationDialog.value = {
            sorting: [
                {
                    'field': 'lastname',
                    'sortDirection': 'desc'
                },
                {
                    'field': 'firstname',
                    'sortDirection': 'asc'
                },
                {
                    'field': 'price',
                    'sortDirection': 'desc'
                }
            ],
            grouping: ['lastname', 'firstname'],
            filtering: [],
            order: ['lastname', 'firstname'],
            hidden: ['firstname', 'lastname']
        };
    

	}	
}