import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	}
	];

	init() {
		const table = this.table.current,
			data = [],
			columns = [];

		for (let i = 65; i < 91; i++) {
			const letter = String.fromCharCode(i);

			columns.push({ label: letter, dataField: letter, width: 100 });
		}

		for (let i = 0; i < 10000; i++) {
			const dataPoint = {};

			for (let j = 65; j < 91; j++) {
				const letter = String.fromCharCode(j);
				dataPoint[String.fromCharCode(j)] = letter + i;
			}

			data.push(dataPoint);
		}

		table.dataSource = data;
		table.columns = columns;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases a smart-table with enabled HTML virtualization. This functionality allows for only visible rows to be rendered resulting in an increased Table performance.</div>
				<Table ref={this.table} id="table" freezeHeader keyboardNavigation virtualization></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
