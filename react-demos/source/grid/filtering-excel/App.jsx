import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	appearance = {
		autoShowColumnFilterButton: false
	};
	sorting = {
		enabled: true,
		mode: 'one'
	};
	filtering = {
		enabled: true,
		filterMenu: {
			mode: 'excel'
		}
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date',
			'total: number'
		]
	});
	columns = [{
		label: 'First Name',
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		dataField: 'productName'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right',
	},
	{
		label: 'Delivery Date',
		dataField: 'date',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'd'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Excel-like filtering UI</h1>
					<p>DataGrid excel-like filtering is enabled for all columns. The feature
					can be turned on/off by using the "filtering.filterMenu.mode = 'excel'"
					property. You can also enable it per column by using the column's "filterMenuMode"
					property and set it to 'excel'. Users may click the filter icons to see
			            a drop-down where they can apply filters.</p>
				</div>
				<Grid id="grid"
					appearance={this.appearance}
					sorting={this.sorting}
					filtering={this.filtering}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
