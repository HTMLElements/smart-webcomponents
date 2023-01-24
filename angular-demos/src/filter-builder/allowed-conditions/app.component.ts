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
            ],
            [
                ["productName", "=", "Televisions"],
                "and",
                ["price", "<", 4000]
            ]
        ];
        filterBuilder.addEventListener('change', function () {
            filterQueryBox.innerHTML = JSON.stringify(filterBuilder.value, null, "\t\t");
        });
    

	}	
}