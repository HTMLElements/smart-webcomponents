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
			'price: number',
			'total: number'
		]
	});
	editing = {
		enabled: true,
		action: 'none',
		mode: 'row',
		commandColumn: {
			visible: true,
			displayMode: 'icon',
			dataSource: {
				'commandColumnDelete': {
					visible: false
				},
				'commandColumnCustom': {
					icon: 'smart-icon-ellipsis-vert',
					command: 'commandColumnCustomCommand',
					visible: true,
					label: 'Text'
				}
			}
		}
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
		window.commandColumnCustomCommand = function (row) {
			document.querySelector('#description').innerHTML = 'Id: ' + row.id + ', First Name: ' + row.data.firstName + ', Last Name: ' + row.data.lastName;
		};
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Command Column with Custom Command in Data Grid</h1>
					<p>The command column editing option allows you to customize the built-in
					commands, but also to implement a custom command. This example shows how
			            to achieve that.</p>
				</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					columns={this.columns}></Grid>
				<div id="description"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
