import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
		groupBy: ['firstName', 'lastName'],
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
	grouping = {
		enabled: true,
		groupIndent: 0
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
					<h1>Grid Group Styling</h1>
					<p>The example demonstrates how to style the Group Rows. The demo removes
			            the horizontal and vertical offset by using CSS variables.</p>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					grouping={this.grouping}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
