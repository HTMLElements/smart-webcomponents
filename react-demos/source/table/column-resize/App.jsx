import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(15),
		dataFields: [
			'id: number',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});
	columnResize = true;
	columnResizeFeedback = true;
	tooltip = true;
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number',
		width: 50
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

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases column resizing in smart-table. Please note that column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based.</div>
				<Table ref="table" id="table" dataSource={this.dataSource} columnResize={this.columnResize} columnResizeFeedback={this.columnResizeFeedback} tooltip={this.tooltip} columns={this.columns}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
