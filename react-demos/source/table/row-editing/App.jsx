import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(10),
		dataFields: [
			'id: number',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});

	editing = true;

	editMode = 'row';

	keyboardNavigation = true;

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
				<div className="demo-description">This demo showcases the row editing functionality of Table. Double-click
			        a row to start an edit operation.</div>
				<Table id="table" dataSource={this.dataSource} editing={this.editing} editMode={this.editMode} keyboardNavigation={this.keyboardNavigation} columns={this.columns} ></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
