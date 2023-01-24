import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	data = GetData(15);

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number'
		]
	});

	freezeFooter = true;

	freezeHeader = true;

	columns = [{
		label: 'id',
		dataField: 'id',
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
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	}
	];

	handleReady() {
		let totalQuantity = 0;

		this.data.forEach(dataPoint => totalQuantity += dataPoint.quantity);

		document.getElementById('totalQuantity').innerHTML = totalQuantity.toString();
	}

	init() {
		const template = document.createElement('template'),
			template2 = document.createElement('template');

		template.id = 'customFooterRowTemplate';
		template2.id = 'customHeaderRowTemplate';
		template.innerHTML = `
			<tr>
				<td>id</td>
				<td>First Name</td>
				<td>Last Name</td>
				<td>Product Name</td>
				<td>Quantity</td>
			</tr>
			<tr>
				<td id="totalLabel" colspan="4">Total</td>
				<td id="totalQuantity"></td>
			</tr>
		`;

		template2.innerHTML = `
			<tr id="customHeaderRow">
				<th>The user's id</th>
				<th>The user's first name</th>
				<th>The user's last name</th>
				<th>Official product name</th>
				<th>The number of purchased items</th>
			</tr>
		`;

		document.body.appendChild(template);
		document.body.appendChild(template2);

		this.table.current.footerRow = template.id;
		this.table.current.headerRow = template2.id;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to show multiple header and footer rows in Table.</div>
				<Table ref={this.table} id="table" dataSource={this.dataSource} freezeFooter={this.freezeFooter}
					freezeHeader={this.freezeHeader} columns={this.columns} onReady={this.handleReady.bind(this)}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
