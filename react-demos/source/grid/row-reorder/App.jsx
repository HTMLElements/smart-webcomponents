import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(20),
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
	sorting = {
		enabled: true
	};
	behavior = {
		allowRowReorder: true
	};
	appearance = {
		showRowHeader: true,
		showRowHeaderDragIcon: true
	};
	columns = [{
		label: '#',
		width: 200,
		dataField: 'id'
	},
	{
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
					<h1>Grid Row Reorder</h1>
					<p>The example demonstrates the row reorder feature of the grid component.
					Press the left mouse button or Tap, while you are on a row header and move
					it around to start drag. A feedback and reorder line will be shown, while
					you are in the Grid's bounds. Drop it to the position you wish to reorder
			            the rows.</p>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					sorting={this.sorting}
					behavior={this.behavior}
					appearance={this.appearance}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
