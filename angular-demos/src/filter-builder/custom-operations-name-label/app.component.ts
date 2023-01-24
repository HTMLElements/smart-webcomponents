import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FilterBuilderComponent } from 'smart-webcomponents-angular/filterbuilder';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('filterbuilder', { read: FilterBuilderComponent, static: false }) filterbuilder: FilterBuilderComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const filterBuilder = document.querySelector('smart-filter-builder'), filterQueryBox = document.getElementById('filterQueryBox');
        filterBuilder.customOperations = [
            {
                name: "isBefore",
                label: "Is Before"
            },
            {
                name: "isAfter",
                label: "Is After"
            },
            {
                name: "isOnOrBefore",
                label: "Is On Or Before"
            },
            {
                name: "isOnOrAfter",
                label: "Is On Or After"
            }
        ];
        filterBuilder.fields = [
            { label: 'Start Date', dataField: 'startDate', dataType: 'dateTime', filterOperations: ["isBefore", "isAfter", "isOnOrBefore", "isOnOrAfter"] },
            { label: 'End Date', dataField: 'endDate', dataType: 'dateTime', filterOperations: ["isBefore", "isAfter", "isOnOrBefore", "isOnOrAfter"] },
        ];
        filterBuilder.addEventListener('change', function () {
            filterQueryBox.innerHTML = JSON.stringify(filterBuilder.value, null, "\t\t");
        });
    

	}	
}