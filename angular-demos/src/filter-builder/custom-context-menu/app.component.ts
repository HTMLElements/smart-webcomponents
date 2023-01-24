import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FilterBuilderComponent } from 'smart-webcomponents-angular/filterbuilder';
import { MenuComponent } from 'smart-webcomponents-angular/menu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('filterbuilder', { read: FilterBuilderComponent, static: false }) filterbuilder: FilterBuilderComponent;
	@ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const filterBuilder = document.querySelector('smart-filter-builder'), customFilterBuilderMenu = document.getElementById('customFilterBuilderMenu');
        let handledItem = null;
        filterBuilder.fields = [
            { label: 'id', dataField: 'id', dataType: 'number', filterOperations: ["=", "anyof"] },
            { label: 'Product', dataField: 'productName', dataType: 'string' },
            { label: 'Unit Price', dataField: 'price', dataType: 'string' },
            { label: 'Total', dataField: 'total', dataType: 'number' },
            { label: 'Active', dataField: 'active', dataType: 'boolean', filterOperations: ["="] }
        ];
        filterBuilder.value = [
            ["productName", "=", "Projector PlusHD"],
            "or",
            [
                ["productName", "=", "Monitors"],
                "and",
                ["price", "<", 1300]
            ],
            [
                ["productName", "=", "Televisions"],
                "and",
                ["price", "<", 4000]
            ]
        ];
        filterBuilder.addEventListener('itemClick', function (event) {
            if (handledItem && (handledItem.target !== event.target)) {
                customFilterBuilderMenu.close();
            }
        });
        filterBuilder.addEventListener('menuOpen', function (event) {
            const details = event.detail, x = details.targetX, y = details.targetY + details.target.getBoundingClientRect().height;
            handledItem = details;
            if (details.targetType === 'buttonAdd') {
                filterBuilder.addCondition(details.id);
            }
            else {
                customFilterBuilderMenu.open(x, y);
            }
        });
        customFilterBuilderMenu.addEventListener('itemClick', function (event) {
            const details = event.detail, value = details.value;
            switch (value) {
                case 'addGroup':
                    handledItem.type === 'condition' ? filterBuilder.addGroup(handledItem.parentGroupId) : filterBuilder.addGroup(handledItem.id);
                    break;
                case 'addCondition':
                    handledItem.type === 'condition' ? filterBuilder.addCondition(handledItem.parentGroupId) : filterBuilder.addCondition(handledItem.id);
                    break;
                case 'delete':
                    handledItem.type === 'condition' ? filterBuilder.removeCondition(handledItem.id) : filterBuilder.removeGroup(handledItem.id);
                    break;
                case 'and':
                case 'notand':
                case 'or':
                case 'notor':
                    handledItem.type === 'condition' ? filterBuilder.updateGroup(handledItem.parentGroupId, value) : filterBuilder.updateGroup(handledItem.id, value);
                    break;
                case '=':
                case '<>':
                case '>':
                case '>=':
                case '<':
                case '<=':
                case 'between':
                case 'startswith':
                case 'endswith':
                case 'contains':
                case 'notcontains':
                case 'isblank':
                case 'isnotblank':
                    if (handledItem.type === 'condition') {
                        filterBuilder.updateCondition(handledItem.id, [handledItem.data[0], value, handledItem.data[2]]);
                    }
                    break;
                case 'id':
                case 'productName':
                case 'price':
                case 'total':
                case 'active':
                    if (handledItem.type === 'condition') {
                        filterBuilder.updateCondition(handledItem.id, [value, handledItem.data[1], null]);
                    }
            }
        });
    

	}	
}