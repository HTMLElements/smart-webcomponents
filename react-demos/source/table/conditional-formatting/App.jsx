import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	conditionalFormatting = [{
		column: 'quantity',
		condition: 'greaterThan',
		firstValue: 8,
		text: '#6AA84F'
	},
	{
		column: 'quantity',
		condition: 'lessThan',
		firstValue: 3,
		text: '#CC0000'
	},
	{
		column: 'price',
		condition: 'between',
		firstValue: 3,
		secondValue: 5,
		fontFamily: 'Courier New',
		text: '#0000FF'
	},
	{
		column: 'total',
		condition: 'greaterThan',
		firstValue: 25,
		fontSize: '14px',
		text: '#FFFFFF',
		highlight: '#6AA84F'
	},
	{
		column: 'total',
		condition: 'between',
		firstValue: 10,
		secondValue: 25,
		fontSize: '12px',
		text: '#000000',
		highlight: '#F1C232'
	},
	{
		column: 'total',
		condition: 'lessThan',
		firstValue: 10,
		fontSize: '10px',
		text: '#FFFFFF',
		highlight: '#CC0000'
	}
	];
	conditionalFormattingButton = true;
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});
	filtering = true;
	keyboardNavigation = true;
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Total',
		dataField: 'total',
		dataType: 'number'
	}
	];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows how to format table cells conditionally. Pressing the
			        "Conditional Formatting" button opens a dialog with formatting options.</div>
				<Table id="table"
					conditionalFormatting={this.conditionalFormatting}
					conditionalFormattingButton={this.conditionalFormattingButton}
					dataSource={this.dataSource}
					filtering={this.filtering}
					keyboardNavigation={this.keyboardNavigation}
					columns={this.columns}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
