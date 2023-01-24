import React from "react";
import ReactDOM from "react-dom";
import { FilterBuilder } from 'smart-webcomponents-react/filterbuilder';

class App extends React.Component {

	init() {
	
	
	    const filterBuilder = document.querySelector('smart-filter-builder');
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
	            dataType: 'number'
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
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <FilterBuilder ref="filterbuilder"></FilterBuilder>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
