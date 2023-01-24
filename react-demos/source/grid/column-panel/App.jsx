import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

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
		enabled: true,
		mode: 'many'
	};
	filtering = {
		enabled: true
	};
	header = {
		visible: true,
		buttons: ['columns']
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
		summary: ['min', 'max'],
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
		summary: ['sum'],
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<div className="demo-description">
						<h1>Column Chooser Panel - DataGrid Columns UI</h1>
						<p>
							This example shows how to use the DataGrid Column panel. Click on the "Customize columns" button in the Grid
							header to open the column panel. The column chooser panel allows you to show/hide and reorder columns interactively.
						</p>
					</div>
				</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					sorting={this.sorting}
					filtering={this.filtering}
					header={this.header}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
