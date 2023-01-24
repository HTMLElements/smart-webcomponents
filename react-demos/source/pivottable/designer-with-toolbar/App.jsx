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
			'price: number'
		]
	});
	designer = true;
	toolbar = true;
	freezeHeader = true;
	keyboardNavigation = true;
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
		dataType: 'number'
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
	}];

	init() {

		window.Smart('#pivotTable', class {
			get properties() {
				return {

				};
			}
		});
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases a PivotTable with both designer and toolbar enabled.
				Columns can be dragged between the toolbar and the designer to change their
			        roles in the Pivot Table.</div>
				<PivotTable id="pivotTable"
					dataSource={this.dataSource}
					designer={this.designer}
					toolbar={this.toolbar}
					freezeHeader={this.freezeHeader}
					keyboardNavigation={this.keyboardNavigation}
					columns={this.columns}></PivotTable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
