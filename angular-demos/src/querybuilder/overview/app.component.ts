import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QueryBuilderComponent } from 'smart-webcomponents-angular/querybuilder';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('querybuilder', { read: QueryBuilderComponent, static: false }) querybuilder!: QueryBuilderComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    window.Smart('#queryBuilder', class {
        get properties() {
            return {
                allowDrag: true,
                fields: [
                    { label: 'Id', dataField: 'id', dataType: 'number' },
                    { label: 'Product', dataField: 'productName', dataType: 'string' },
                    { label: 'Unit Price', dataField: 'price', dataType: 'number' },
                    { label: 'Purchased', dataField: 'purchased', dataType: 'datetime' },
                    { label: 'Available', dataField: 'available', dataType: 'boolean' }
                ]
            };
        }
    });

	}	
}