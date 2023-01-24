import React from "react";
import ReactDOM from "react-dom";
import { FilterBuilder } from 'smart-webcomponents-react/filterbuilder';

class App extends React.Component {

	init() {
	
	
	    const filterBuilder = document.querySelector('smart-filter-builder'),
	        filterQueryBox = document.getElementById('filterQueryBox');
	    filterBuilder.fields = [{
	            label: 'Product',
	            dataField: 'productName',
	            dataType: 'string'
	        },
	        {
	            label: 'Quantity',
	            dataField: 'quantity',
	            dataType: 'number'
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
	            label: 'ShippedDate',
	            dataField: 'shippedDate',
	            dataType: 'date'
	        },
	        {
	            label: 'ShippedTime',
	            dataField: 'shippedTime',
	            dataType: 'dateTime'
	        },
	        {
	            label: 'Ready',
	            dataField: 'ready',
	            dataType: 'boolean'
	        }
	    ];
	    filterBuilder.addEventListener('change', function() {
	        filterQueryBox.innerHTML = JSON.stringify(filterBuilder.value, null, "\t\t");
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <FilterBuilder ref="filterbuilder" restricted-mode></FilterBuilder>
			    <div id="filterQueryBox"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
