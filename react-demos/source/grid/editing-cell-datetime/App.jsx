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
			'date: date',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});
	selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};
	editing = {
		enabled: true,
		mode: 'cell'
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
		label: 'Time',
		dataType: 'date',
		dataField: 'time',
		cellsFormat: 'hh:mm tt',
		editor: 'timeInput',
		formatFunction(settings) {
			if (!settings.value) {
				settings.value = '12:00 AM';
			}
		}
	},
	{
		label: 'Date',
		dataField: 'date',
		cellsFormat: 'd',
		editor: 'dateInput'
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
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Grid Cells Editing with TimeInput and DateInput editors</h1>
Click on any cell to begin edit its value. To confirm the changes, press
			        'Enter' or click on another cell or outside the Grid. To cancel the changes,
			        press 'Escape'.</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					selection={this.selection}
					editing={this.editing}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
