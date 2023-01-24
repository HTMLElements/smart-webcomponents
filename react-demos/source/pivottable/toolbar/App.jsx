import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

class App extends React.Component {
	conditionalFormatting = [{
		column: 'quantity',
		condition: 'greaterThan',
		firstValue: 7,
		text: '#FFFFFF',
		highlight: '#6AA84F'
	},
	{
		column: 'quantity',
		condition: 'between',
		firstValue: 1,
		secondValue: 3,
		fontSize: '10px',
		text: '#FFFFFF',
		highlight: '#CC0000'
	}
	];
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(25),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});
	freezeHeader = true;
	keyboardNavigation = true;
	toolbar = true;
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		allowPivot: true,
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number',
		summary: 'sum'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			prefix: '$',
			decimalPlaces: 2
		}
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	} // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
	];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows a PivotTable with toolbar. The toolbar features drag-drop
				areas for manipulating the row group and pivot columns as well as the "Conditional
				formatting" and "Fields" buttons which open a dialog with further customization
			        options.</div>
				<PivotTable id="pivotTable"
					conditionalFormatting={this.conditionalFormatting}
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					keyboardNavigation={this.keyboardNavigation}
					toolbar={this.toolbar}
					columns={this.columns}></PivotTable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
