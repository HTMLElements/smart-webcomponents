import React from "react";
import ReactDOM from "react-dom";
import { FilterBuilder } from 'smart-webcomponents-react/filterbuilder';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {

	init() {
	
	
	    const filterBuilder = document.querySelector('smart-filter-builder'),
	        customFilterBuilderMenu = document.getElementById('customFilterBuilderMenu');
	    let handledItem = null;
	    filterBuilder.fields = [{
	            label: 'id',
	            dataField: 'id',
	            dataType: 'number',
	            filterOperations: ["=", "anyof"]
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
	            filterOperations: ["="]
	        }
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
	    filterBuilder.addEventListener('itemClick', function(event) {
	        if (handledItem && (handledItem.target !== event.target)) {
	            customFilterBuilderMenu.close();
	        }
	    });
	    filterBuilder.addEventListener('menuOpen', function(event) {
	        const details = event.detail,
	            x = details.targetX,
	            y = details.targetY + details.target.getBoundingClientRect().height;
	        handledItem = details;
	        if (details.targetType === 'buttonAdd') {
	            filterBuilder.addCondition(details.id);
	        } else {
	            customFilterBuilderMenu.open(x, y);
	        }
	    });
	    customFilterBuilderMenu.addEventListener('itemClick', function(event) {
	        const details = event.detail,
	            value = details.value;
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


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <FilterBuilder ref="filterbuilder" disable-context-menu></FilterBuilder>
			    <Menu ref="menu" id="customFilterBuilderMenu" mode="dropDown">
			        <MenuItem label="Add Group" value="addGroup"></MenuItem>
			        <MenuItem label="Add Condition" value="addCondition" separator></MenuItem>
			        <MenuItem label="Delete" value="delete" separator></MenuItem>
			        <MenuItem label="And" value="and"></MenuItem>
			        <MenuItem label="Or" value="or" separator></MenuItem>
			        <MenuItem label="Equals" value="="></MenuItem>
			        <MenuItem label="Does not equal" value="<>" separator></MenuItem>
			        <MenuItem label="id" value="id"></MenuItem>
			        <MenuItem label="Product" value="productName"></MenuItem>
			        <MenuItem label="Unit Price" value="price"></MenuItem>
			        <MenuItem label="Total" value="total"></MenuItem>
			        <MenuItem label="Active" value="active"></MenuItem>
			    </Menu>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
