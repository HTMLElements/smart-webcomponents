import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { FilterBuilder } from 'smart-webcomponents-react/filterbuilder';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {

	init() {
	
	
	    const filterBuilder = document.querySelector('smart-filter-builder'),
	        addPosition = document.getElementById('addPosition'),
	        addGroupRule = document.getElementById('addGroupRule'),
	        addGroupButton = document.getElementById('addGroupButton'),
	        updateGroupButton = document.getElementById('updateGroupButton'),
	        removeGroupButton = document.getElementById('removeGroupButton'),
	        addConditionField = document.getElementById('addConditionField'),
	        addConditionRule = document.getElementById('addConditionRule'),
	        addConditionValue = document.getElementById('addConditionValue'),
	        addConditionButton = document.getElementById('addConditionButton'),
	        updateConditionButton = document.getElementById('updateConditionButton'),
	        removeConditionButton = document.getElementById('removeConditionButton'),
	        valueToString = document.getElementById('valueToString'),
	        toStringButton = document.getElementById('toStringButton');
	    filterBuilder.fields = [{
	            label: 'id',
	            dataField: 'id',
	            dataType: 'number',
	            filterOperations: ["=", ">", "<"]
	        },
	        {
	            label: 'Product',
	            dataField: 'productName',
	            dataType: 'string'
	        },
	        {
	            label: 'Unit Price',
	            dataField: 'price',
	            dataType: 'string'
	        },
	        {
	            label: 'Total',
	            dataField: 'total',
	            dataType: 'number'
	        },
	        {
	            label: 'Active',
	            dataField: 'active',
	            dataType: 'boolean',
	            filterOperations: ["=", ">", "<"]
	        }
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
	    addConditionField.dataSource = [{
	            "label": "id",
	            "value": "id"
	        },
	        {
	            "label": "Product",
	            "value": "productName"
	        },
	        {
	            "label": "Unit Price",
	            "value": "price"
	        },
	        {
	            "label": "Total",
	            "value": "total"
	        },
	        {
	            "label": "Active",
	            "value": "active"
	        }
	    ];
	    addConditionRule.dataSource = [{
	            "label": "Equals",
	            "value": "="
	        },
	        {
	            "label": "Does not equal",
	            "value": "<>"
	        },
	        {
	            "label": "Greater than",
	            "value": ">"
	        },
	        {
	            "label": "Greater than or equal to",
	            "value": ">="
	        },
	        {
	            "label": "Less than",
	            "value": "<"
	        },
	        {
	            "label": "Less than or equal to",
	            "value": "<="
	        },
	        {
	            "label": "Between",
	            "value": "between"
	        },
	        {
	            "label": "Starts with",
	            "value": "startswith"
	        },
	        {
	            "label": "Ends with",
	            "value": "endswith"
	        },
	        {
	            "label": "Contains",
	            "value": "contains"
	        },
	        {
	            "label": "Does not contain",
	            "value": "notcontains"
	        },
	        {
	            "label": "Is blank",
	            "value": "isblank"
	        },
	        {
	            "label": "Is not blank",
	            "value": "isnotblank"
	        }
	    ];
	    toStringButton.addEventListener('click', function() {
	        valueToString.innerHTML = filterBuilder.toString();
	        valueToString.open();
	    });
	    addGroupButton.addEventListener('click', function() {
	        const position = addPosition.value,
	            rule = addGroupRule.value;
	        filterBuilder.addGroup(position, rule);
	    });
	    updateGroupButton.addEventListener('click', function() {
	        const position = addPosition.value,
	            rule = addGroupRule.value;
	        filterBuilder.updateGroup(position, rule);
	    });
	    removeGroupButton.addEventListener('click', function() {
	        const position = addPosition.value;
	        filterBuilder.removeGroup(position);
	    });
	    addConditionButton.addEventListener('click', function() {
	        const position = addPosition.value,
	            conditionSettings = getConditionSettings();
	        filterBuilder.addCondition(position, conditionSettings);
	    });
	    updateConditionButton.addEventListener('click', function() {
	        const position = addPosition.value,
	            conditionSettings = getConditionSettings();
	        filterBuilder.updateCondition(position, conditionSettings);
	    });
	    removeConditionButton.addEventListener('click', function() {
	        const position = addPosition.value;
	        filterBuilder.removeCondition(position);
	    });
	
	    function getConditionSettings() {
	        const field = addConditionField.selectedValues[0],
	            rule = addConditionRule.selectedValues[0],
	            value = addConditionValue.value;
	        return [field, rule, value];
	    }
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <FilterBuilder ref="filterbuilder"></FilterBuilder>
			    <Window ref="window" id="valueToString"></Window>
			    <div id="filterQueryBox">
			        <TextBox ref="textbox" id="addPosition" placeholder="Item id"></TextBox>
			        <br />
			         <h3>Group</h3>
			        <TextBox ref="textbox2" id="addGroupRule" placeholder="Group Rule"></TextBox>
			        <br />
			        <Button ref="button" id="addGroupButton">Add Group</Button>
			        <br />
			        <Button ref="button2" id="updateGroupButton">Update Group</Button>
			        <br />
			        <Button ref="button3" id="removeGroupButton">Remove Group</Button>
			        <hr />
			         <h3>Condition</h3>
			        <DropDownList ref="dropdownlist" id="addConditionField" placeholder="Field Name"
			        selection-mode="zeroOrOne"></DropDownList>
			        <br />
			        <DropDownList ref="dropdownlist2" id="addConditionRule" placeholder="Rule"
			        selection-mode="zeroOrOne"></DropDownList>
			        <br />
			        <TextBox ref="textbox3" id="addConditionValue" placeholder="Value"></TextBox>
			        <br />
			        <Button ref="button4" id="addConditionButton">Add Condition</Button>
			        <br />
			        <Button ref="button5" id="updateConditionButton">Update Condition</Button>
			        <br />
			        <Button ref="button6" id="removeConditionButton">Remove Condition</Button>
			        <br />
			        <Button ref="button7" id="toStringButton">Value To String</Button>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
