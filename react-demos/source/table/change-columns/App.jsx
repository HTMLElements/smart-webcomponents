import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
	}

	allColumns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Reports To',
		dataField: 'reportsto',
		dataType: 'number'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Total',
		dataField: 'total',
		dataType: 'number'
	},
	{
		label: 'Date',
		dataField: 'date',
		dataType: 'date'
	},
	{
		label: 'Available',
		dataField: 'available',
		dataType: 'boolean'
	}
	];

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(15),
		dataFields: [
			'id: number',
			'reportsto: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'price: number',
			'quantity: number',
			'total: number',
			'date: date',
			'available: boolean'
		]
	});

	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Reports To',
		dataField: 'reportsto',
		dataType: 'number'
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string'
	}
	];

	handleAdd() {
		const table = this.table.current,
			add = this.button.current,
			remove = this.button2.current;

		for (let i = 0; i < this.allColumns.length; i++) {
			if (!table.columns.find(column => column.dataField === this.allColumns[i].dataField)) {
				table.columns.push(this.allColumns[i]);
				break;
			}
		}

		remove.disabled = false;

		if (table.columns.length === this.allColumns.length) {
			add.disabled = true;
		}
	}

	handleRemove() {
		const table = this.table.current,
			add = this.button.current,
			remove = this.button2.current;

		table.columns.pop();
		add.disabled = false;
		if (table.columns.length === 0) {
			remove.disabled = true;
		}
	}

	handleShuffle() {
		const table = this.table.current;

		table.columns = table.columns.sort(function () {
			return 0.5 - Math.random();
		});
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to change the columns of Table.</div>
				<Table ref={this.table} id="table" dataSource={this.dataSource} columns={this.columns}></Table>
				<div className="options">
					<Button ref={this.button} id="add" onClick={this.handleAdd.bind(this)}>Add a column</Button>
					<Button ref={this.button2} id="remove" onClick={this.handleRemove.bind(this)}>Remove last column</Button>
					<Button ref={this.button3} id="shuffle" onClick={this.handleShuffle.bind(this)}>Shuffle columns</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
