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
	columnReorder = true;
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

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <div className="demo-description">This demo showcases column reordering in Table.</div>
			    <Table ref="table" id="table" dataSource={this.dataSource} columnReorder={this.columnReorder} columns={this.columns} ></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
