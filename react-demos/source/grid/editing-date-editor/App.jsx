import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'available: bool',
			'quantity: number',
			'date: date',
			'price: number',
			'total: number'
		]
	});
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
		dataField: 'productName',
		editor: 'autoComplete'
	},
	{
		label: 'Order Date',
		width: 250,
		dataField: 'date',
		editor: {
			template: 'dateTimePicker',
			formatString: 'd',
			onInit(index, dataField, editor) { }
		}
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
					<h1>DateTimePicker Editor in smartGrid</h1>
					<p>Click on any cell in the 'Order Date' column to display a DateTimePicker
					column editor. When the Grid Column's 'dataType' is set to 'dateTime',
					the editor will display Calendar and TimePicker popups. When the column's
					'dataType' is 'time' the DateTimePicker displays TimePicker component for
			            editing. For 'date' column, the Calendar component is used for editing.</p>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
