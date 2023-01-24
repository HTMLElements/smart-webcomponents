import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	});

	keyboardNavigation = true;

	paging = true;

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
		},
		{
			label: 'Price',
			dataField: 'price',
			dataType: 'number',
			formatFunction(settings) {
				settings.template = '$' + settings.value;
			}
		},
		{
			label: 'Total',
			dataField: 'total',
			dataType: 'number'
		}
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <div className="demo-description">This demo showcases the paging functionality of Table.</div>
			    <Table id="table" dataSource={this.dataSource} keyboardNavigation={this.keyboardNavigation} paging={this.paging} columns={this.columns} ></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
