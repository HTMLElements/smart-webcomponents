import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

class App extends React.Component {
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
	grandTotal = true;
	keyboardNavigation = true;
	onInit() {
		this.rows[0].expanded = true;
	};
	rowTotals = true;
	sortMode = 'one';
	columns = [{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string',
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
				<div className="demo-description">This demo shows how to display row total columns for each summary column
			        of PivotTable.</div>
				<PivotTable id="pivotTable"
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					grandTotal={this.grandTotal}
					keyboardNavigation={this.keyboardNavigation}
					onInit={this.onInit}
					rowTotals={this.rowTotals}
					sortMode={this.sortMode}
					columns={this.columns}></PivotTable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
