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
        filterBuilder.fields = [
            { label: 'id', dataField: 'id', dataType: 'number', filterOperations: ["=", "anyof"] },
            { label: 'Product', dataField: 'productName', dataType: 'string', lookup: { dataSource: ["Televisions", "Monitors", "Projectors"] } },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number' },
            { label: 'Unit Price', dataField: 'price', dataType: 'string' },
            { label: 'Total', dataField: 'total', dataType: 'number' },
            { label: 'ShippedDate', dataField: 'shippedDate', dataType: 'date' },
            { label: 'ShippedTime', dataField: 'shippedTime', dataType: 'dateTime' },
            { label: 'Ready', dataField: 'ready', dataType: 'boolean' }
        ];
        filterBuilder.value = [
            ["productName", "=", "Projector PlusHD"],
            "or",
            [
                ["productName", "=", "Monitors"],
                "and",
                ["price", "<", 1300],
                ["quantity", ">", 1],
                [
                    'and',
                    ["price", ">", 1],
                    ["quantity", ">", 1],
                    [
                        'or',
                        ["total", ">", 100],
                        ["ready", "=", true],
                    ],
                ],
            ],
            [
                ["productName", "=", "Televisions"],
                "and",
                ["price", "<", 4000],
                ["quantity", "=", 0]
            ]
        ];
        filterBuilder.addEventListener('change', function () {
            filterQueryBox.innerHTML = JSON.stringify(filterBuilder.value, null, "\t\t");
        });
    

	}	
}