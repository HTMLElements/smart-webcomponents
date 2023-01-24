import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
	@ViewChild('dropdownlist2', { read: DropDownListComponent, static: false }) dropdownlist2!: DropDownListComponent;
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
	@ViewChild('textbox2', { read: TextBoxComponent, static: false }) textbox2: TextBoxComponent;
	@ViewChild('textbox3', { read: TextBoxComponent, static: false }) textbox3: TextBoxComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const filterBuilder = document.querySelector('smart-filter-builder'), addPosition = document.getElementById('addPosition'), addGroupRule = document.getElementById('addGroupRule'), addGroupButton = document.getElementById('addGroupButton'), updateGroupButton = document.getElementById('updateGroupButton'), removeGroupButton = document.getElementById('removeGroupButton'), addConditionField = document.getElementById('addConditionField'), addConditionRule = document.getElementById('addConditionRule'), addConditionValue = document.getElementById('addConditionValue'), addConditionButton = document.getElementById('addConditionButton'), updateConditionButton = document.getElementById('updateConditionButton'), removeConditionButton = document.getElementById('removeConditionButton'), valueToString = document.getElementById('valueToString'), toStringButton = document.getElementById('toStringButton');
        filterBuilder.fields = [
            { label: 'id', dataField: 'id', dataType: 'number', filterOperations: ["=", ">", "<"] },
            { label: 'Product', dataField: 'productName', dataType: 'string' },
            { label: 'Unit Price', dataField: 'price', dataType: 'string' },
            { label: 'Total', dataField: 'total', dataType: 'number' },
            { label: 'Active', dataField: 'active', dataType: 'boolean', filterOperations: ["=", ">", "<"] }
        ];
        valueToString.label = 'Value To String';
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
        addConditionField.dataSource = [
            { "label": "id", "value": "id" },
            { "label": "Product", "value": "productName" },
            { "label": "Unit Price", "value": "price" },
            { "label": "Total", "value": "total" },
            { "label": "Active", "value": "active" }
        ];
        addConditionRule.dataSource = [
            { "label": "Equals", "value": "=" },
            { "label": "Does not equal", "value": "<>" },
            { "label": "Greater than", "value": ">" },
            { "label": "Greater than or equal to", "value": ">=" },
            { "label": "Less than", "value": "<" },
            { "label": "Less than or equal to", "value": "<=" },
            { "label": "Between", "value": "between" },
            { "label": "Starts with", "value": "startswith" },
            { "label": "Ends with", "value": "endswith" },
            { "label": "Contains", "value": "contains" },
            { "label": "Does not contain", "value": "notcontains" },
            { "label": "Is blank", "value": "isblank" },
            { "label": "Is not blank", "value": "isnotblank" }
        ];
        toStringButton.addEventListener('click', function () {
            valueToString.innerHTML = filterBuilder.toString();
            valueToString.open();
        });
        addGroupButton.addEventListener('click', function () {
            const position = addPosition.value, rule = addGroupRule.value;
            filterBuilder.addGroup(position, rule);
        });
        updateGroupButton.addEventListener('click', function () {
            const position = addPosition.value, rule = addGroupRule.value;
            filterBuilder.updateGroup(position, rule);
        });
        removeGroupButton.addEventListener('click', function () {
            const position = addPosition.value;
            filterBuilder.removeGroup(position);
        });
        addConditionButton.addEventListener('click', function () {
            const position = addPosition.value, conditionSettings = getConditionSettings();
            filterBuilder.addCondition(position, conditionSettings);
        });
        updateConditionButton.addEventListener('click', function () {
            const position = addPosition.value, conditionSettings = getConditionSettings();
            filterBuilder.updateCondition(position, conditionSettings);
        });
        removeConditionButton.addEventListener('click', function () {
            const position = addPosition.value;
            filterBuilder.removeCondition(position);
        });
        function getConditionSettings() {
            const field = addConditionField.selectedValues[0], rule = addConditionRule.selectedValues[0], value = addConditionValue.value;
            return [field, rule, value];
        }
    

	}	
}