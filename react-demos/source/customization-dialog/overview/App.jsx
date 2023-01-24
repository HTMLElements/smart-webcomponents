import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CustomizationDialog } from 'smart-webcomponents-react/customizationdialog';

class App extends React.Component {

	init() {
	
	
	    const customizationDialog = document.querySelector('smart-customization-dialog'),
	        showCustomizationdialog = document.getElementById('showCustomizationdialog');
	    showCustomizationdialog.addEventListener('click', () => customizationDialog.open());
	    customizationDialog.addEventListener('change', console.log(customizationDialog.value));
	    const columns = [{
	            text: 'Name',
	            datafield: 'firstname',
	            width: 120
	        },
	        {
	            text: 'Last Name',
	            datafield: 'lastname',
	            width: 120
	        },
	        {
	            text: 'Product',
	            datafield: 'productname',
	            width: 180
	        },
	        {
	            text: 'Quantity',
	            datafield: 'quantity',
	            width: 80,
	            cellsalign: 'right'
	        },
	        {
	            text: 'Unit Price',
	            datafield: 'price',
	            width: 90,
	            cellsalign: 'right',
	            cellsformat: 'c2'
	        },
	        {
	            text: 'Total',
	            datafield: 'total',
	            cellsalign: 'right',
	            cellsformat: 'c2'
	        }
	    ];
	    customizationDialog.dataSource = columns;
	    customizationDialog.valueMember = 'datafield';
	    customizationDialog.displayMember = 'text';
	    customizationDialog.value = {
	        sorting: [{
	                'field': 'lastname',
	                'sortDirection': 'desc'
	            },
	            {
	                'field': 'firstname',
	                'sortDirection': 'asc'
	            },
	            {
	                'field': 'price',
	                'sortDirection': 'desc'
	            }
	        ],
	        grouping: ['lastname', 'firstname'],
	        filtering: [],
	        order: ['lastname', 'firstname'],
	        hidden: ['firstname', 'lastname']
	    };
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Button ref="button" id="showCustomizationdialog">Show Customization Dialog</Button>
			    <CustomizationDialog ref="customizationdialog"
			    id="customizationDialog"></CustomizationDialog>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
