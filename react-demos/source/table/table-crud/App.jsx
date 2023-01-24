import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetCountriesData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();

		this.counter = 0;
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetCountriesData(),
		dataFields: [
			'ID: number',
			'Country: string',
			'Area: number',
			'Population_Urban: number',
			'Population_Rural: number',
			'Population_Total: number',
			'GDP_Agriculture: number',
			'GDP_Industry: number',
			'GDP_Services: number',
			'GDP_Total: number'
		]
	});

	columns = [
		'Country',
		'Area',
		'Population_Rural',
		'Population_Total',
		'GDP_Total'
	];

	handleAdd() {
		const table = this.table.current;

		this.counter++;

		table.dataSource.add({
			Country: "Bulgaria" + this.counter,
			Area: "100000",
			Population_Rural: "8000000",
			Population_Total: "8100000",
			GDP_TOTAL: "12321321"
		});
	}

	handleUpdate() {
		const table = this.table.current;

		if (table.dataSource.length > 0) {
			this.counter++;
			table.dataSource.update(0, {
				Country: "Bulgaria" + this.counter,
				Area: "100000",
				Population_Rural: "8000000",
				Population_Total: "8100000",
				GDP_TOTAL: "12321321321"
			});
		}
	}

	handleRemove() {
		const table = this.table.current;

		if (table.dataSource.length > 0) {
			table.dataSource.removeAt(table.dataSource.length - 1);
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows how to Add, Remove and Update rows to a Table.</div>
				<Table ref={this.table} className="table-dark table-striped" id="table" dataSource={this.dataSource} columns={this.columns}></Table>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button ref={this.button} id="add" onClick={this.handleAdd.bind(this)}>Add</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="remove" onClick={this.handleRemove.bind(this)}>Remove</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="update" onClick={this.handleUpdate.bind(this)}>Update</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
