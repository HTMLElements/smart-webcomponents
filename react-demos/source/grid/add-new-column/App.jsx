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
	behavior = {
		columnResizeMode: 'split'
	};
	sorting = {
		enabled: true
	};
	filtering = {
		enabled: true
	};
	editing = {
		enabled: true,
		addNewColumn: {
			visible: true
		},
		mode: 'cell'
	};
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		editor: {
			required: true,
			template: 'input'
		}
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		editor: {
			required: true,
			template: 'input'
		}
	},
	{
		label: 'Product',
		width: 200,
		dataField: 'productName',
		editor: {
			required: true,
			template: 'dropDownList'
		}
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
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>DataGrid Add New Column</h1>
DataGrid has built-in UI for Dynamically Adding a New Column. To enable
			        it, you need to set the 'editing.addNewColumn.visible' property to true.
			        <br />Press the '+' button to open the 'New Column Dialog'. On open and close,
			        the 'openColumnDialog' and 'closeColumnDialog' events are fired.</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					selection={this.selection}
					behavior={this.behavior}
					sorting={this.sorting}
					filtering={this.filtering}
					editing={this.editing}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
