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
	selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	};
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		validationRules: [{
			type: 'required'
		}, {
			type: 'minLength',
			value: 5
		}]
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		validationRules: [{
			type: 'required'
		}, {
			type: 'minLength',
			value: 5
		}]
	},
	{
		label: 'Product',
		dataField: 'productName',
		validationRules: [{
			type: 'required'
		}, {
			type: 'minLength',
			value: 5
		}]
	},
	{
		label: 'Available',
		dataField: 'available',
		template: 'checkBox',
		editor: 'checkBox',
		validationRules: [{
			type: 'requiredTrue'
		}]
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		editor: 'numberInput',
		validationRules: [{
			type: 'max',
			value: 20
		}, {
			type: 'min',
			value: 1
		}]
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		editor: 'numberInput',
		cellsFormat: 'c2',
		validationRules: [{
			type: 'max',
			value: 20
		}, {
			type: 'min',
			value: 1
		}]
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
					<h1>Grid Cells Editing Validation</h1>
The 'validationRules' property determines the validation rules of the
			        column values. The available set of rules are: 'min', 'max', 'minLength',
			        'maxLength', 'minDate', 'maxDate', 'null', 'email', 'required', 'requiredTrue'
			        and 'pattern'. A cell editor is active until a valid value is entered by
			        the user. In this demo, 'First Name', 'Last Name' and 'Product Name' are
			        with 'required' and 'minLength' validation rules. The 'Quantity' and 'Unit
			        Price' columns are with 'min' and 'max' set to '1' and '20'. validation
			        rules.</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					selection={this.selection}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
