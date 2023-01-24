import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
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
	onColumnRender(settings) {
		if (settings.text === 'Group') {
			settings.text = settings.column.originalColumn.label.toUpperCase();
			return;
		}
		if (settings.column.summary) {
			settings.text = 'Σ(' + settings.column.originalColumn.label + ')';
		}
		if (settings.fullDefinition.dataFields[0].label.toLowerCase().indexOf('espresso') !== -1) {
			settings.cell.classList.add('highlight');
		}
	};
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true,
		formatFunction(settings) {
			settings.template = `<strong>${settings.value}</strong>`;
		}
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
				<div className="demo-description">This demo shows how modify labels displayed in the PivotTable by implementing
			        the <strong>onColumnRender</strong> and <strong>formatFunction</strong> callback
			        functions.</div>
				<PivotTable id="pivotTable"
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					keyboardNavigation={this.keyboardNavigation}
					onColumnRender={this.onColumnRender}
					columns={this.columns}></PivotTable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
