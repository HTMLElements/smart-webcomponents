import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});
	editing = {
		enabled: true,
		mode: 'cell'
	};
	onCellUpdate(cell, oldValue, value, confirm) {
		if (cell.column.dataField === 'quantity' && value) {
			if (value > 10) {
				setTimeout(() => {
					confirm(true);
				}, 500);
			} else {
				setTimeout(() => {
					confirm(false);
				}, 500);
			}
		} else {
			confirm(true);
		}
	}
	selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};
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
		label: 'Available',
		dataField: 'available',
		template: 'checkBox',
		editor: 'checkBox'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: 'numberInput'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: 'numberInput',
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
					<h1>Grid Cells Editing Confirm</h1>
We implement the 'onCellUpdate' Grid function. When a cell value is edited,
			        'onCellUpdate' is called. That callback can be used for Client-Server validation
			        of the Cell Editing. The function is implemented for the 'Quantity' column
			        and we simulate Ajax call to a Web Server by using setTimeout and confirm
			        the changes by calling the 4th argument of 'onCellUpdate', which is a function.
			        When we call it with 'true', changes are confirmed. Otherwise, they are
			        canceled. In this example, when the 'Quantity' is > 10, changes are confirmed.</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					onCellUpdate={this.onCellUpdate}
					selection={this.selection}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
