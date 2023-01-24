import React from "react";
import ReactDOM from "react-dom";
import { FilterBuilder } from 'smart-webcomponents-react/filterbuilder';

class App extends React.Component {

	init() {
	
	
	    const filterBuilder = document.querySelector('smart-filter-builder'),
	        filterQueryBox = document.getElementById('filterQueryBox');
	    filterBuilder.customOperations = [{
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
	    filterBuilder.fields = [{
	            label: 'Start Date',
	            dataField: 'startDate',
	            dataType: 'dateTime',
	            filterOperations: ["isBefore", "isAfter", "isOnOrBefore", "isOnOrAfter"]
	        },
	        {
	            label: 'End Date',
	            dataField: 'endDate',
	            dataType: 'dateTime',
	            filterOperations: ["isBefore", "isAfter", "isOnOrBefore", "isOnOrAfter"]
	        },
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
