import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(30),
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
	columns = [{
		dataField: 'id',
		freeze: 'near',
		width: 30
	},
	{
		label: 'First Name',
		width: 200,
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		width: '25%',
		dataField: 'lastName'
	},
	{
		label: 'Product',
		width: '25%',
		dataField: 'productName'
	},
	{
		label: 'Quantity',
		width: '25%',
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		width: '25%',
		dataField: 'price',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		freeze: 'far',
		label: 'Total',
		width: '25%',
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
				<div className="demo-description">Freeze First and Last Columns Grid web component.</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
