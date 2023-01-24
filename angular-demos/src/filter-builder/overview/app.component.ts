import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const filterBuilder = document.querySelector('smart-filter-builder');
        filterBuilder.fields = [
            { label: 'id', dataField: 'id', dataType: 'number', filterOperations: ["=", ">", "<"] },
            { label: 'Product', dataField: 'productName', dataType: 'string' },
            { label: 'Unit Price', dataField: 'price', dataType: 'number' },
            { label: 'Total', dataField: 'total', dataType: 'number' },
            { label: 'Active', dataField: 'active', dataType: 'boolean', filterOperations: ["=", ">", "<"] }
        ];
    

	}	
}