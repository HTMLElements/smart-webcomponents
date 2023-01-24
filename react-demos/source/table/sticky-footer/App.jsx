import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	data = GetData(50);

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
		const template = document.createElement('template');

		template.id = 'customFooterRow';
		template.innerHTML = `
			<tr>
			<td id="totalLabel" colspan="4">Total</td>
			<td id="totalQuantity"></td>
			</tr>
		`;

		document.body.appendChild(template);

		this.table.current.footerRow = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows how to enable sticky footer in Table.</div>
				<Table ref={this.table} id="table" dataSource={this.dataSource} freezeFooter={this.freezeFooter} columns={this.columns} onReady={this.handleReady.bind(this)}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
