import React from "react";
import ReactDOM from "react-dom";
import { FilterBuilder } from 'smart-webcomponents-react/filterbuilder';

class App extends React.Component {

	init() {
	
	
	    const filterBuilder = document.querySelector('smart-filter-builder'),
	        filterEventBox = document.getElementById('filterEventBox');
	    filterBuilder.value = ["and",
	        ["shippedDate", "=", "2017/12/1"],
	        ["shippedDate", "=", "2017/12/2"],
	        ["or",
	            ["productName", "=", "Monitor"],
	            ["productName", "=", "Projector"],
	            ["and",
	                ["shippedDate", "=", "2017/12/1"]
	            ]
	        ]
	    ];
	    filterBuilder.fields = [{
	            label: 'Product',
	            dataField: 'productName',
	            dataType: 'string',
	            lookup: {
	                dataSource: ["TV", "Monitor", "Projector"]
	            }
	        },
	        {
	            label: 'ShippedDate',
	            dataField: 'shippedDate',
	            dataType: 'date'
	        }
	    ];
	    filterBuilder.addEventListener('itemClick', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />itemClick';
	    });
	    filterBuilder.addEventListener('opening', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />menuOpening';
	    });
	    filterBuilder.addEventListener('open', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />menuOpen';
	    });
	    filterBuilder.addEventListener('closing', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />menuClosing';
	    });
	    filterBuilder.addEventListener('close', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />menuClose';
	    });
	    filterBuilder.addEventListener('editorOpening', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />editorOpening';
	    });
	    filterBuilder.addEventListener('editorOpen', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />editorOpen';
	    });
	    filterBuilder.addEventListener('editorClosing', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />editorClosing';
	    });
	    filterBuilder.addEventListener('editorClose', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />editorClose';
	    });
	    filterBuilder.addEventListener('change', function() {
	        filterEventBox.innerHTML = filterEventBox.innerHTML + '<br />change';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <FilterBuilder ref="filterbuilder"></FilterBuilder>
			    <div id="filterEventBox"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
