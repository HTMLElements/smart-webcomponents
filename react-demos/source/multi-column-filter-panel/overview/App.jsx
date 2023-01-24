import React from "react";
import ReactDOM from "react-dom";
import { MultiColumnFilterPanel } from 'smart-webcomponents-react/multicolumnfilterpanel';

class App extends React.Component {

	dataSource = [{
		label: 'First Name',
		dataField: 'firstName',
		icon: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		icon: 'lastName',
		dataType: 'string'
	},
	{
		label: 'Birthday',
		dataField: 'birthday',
		icon: 'birthday',
		dataType: 'date'
	},
	{
		label: 'Pet Name',
		dataField: 'petName',
		icon: 'petName',
		dataType: 'string'
	},
	{
		label: 'Country',
		dataField: 'country',
		icon: 'country',
		dataType: 'string'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		icon: 'productName',
		dataType: 'string'
	},
	{
		label: 'Price',
		dataField: 'price',
		icon: 'price',
		dataType: 'number'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		icon: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Time of Purchase',
		dataField: 'timeOfPurchase',
		icon: 'timeOfPurchase',
		dataType: 'date'
	},
	{
		label: 'Expired',
		dataField: 'expired',
		icon: 'expired',
		dataType: 'boolean'
	}
	];
	operator = 'or';
	value = [
		['firstName', 'EQUAL', 'Peter'],
		['birthday', 'LESS_THAN_OR_EQUAL', new Date(2015, 0, 1)],
		['expired', 'EQUAL', false],
		['expired', 'NULL'],
		['price', 'LESS_THAN', 500],
		['productName', 'DOES_NOT_CONTAIN_CASE_SENSITIVE', 'oa']
	]

	componentDidMount() {

	}

	render() {
		return (<MultiColumnFilterPanel  id="multiColumnFilterPanel" dataSource={this.dataSource} operator={this.operator} value={this.value}></MultiColumnFilterPanel>);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
