import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';
import { GetOrdersData } from './common/data';

class App extends React.Component {

    dataSource = new window.Smart.DataAdapter({
		dataSource: GetOrdersData(50),
		id: 'id',
		keyDataField: 'id',
		parentDataField: 'parentid',
		dataFields: [
			'id: string',
			'name: string',
			'customer: string',
			'price: number',
			'date: date'
		]
	});

	keyboardNavigation = true;

	paging = true;

	columns = [{
			label: 'Order Name',
			dataField: "name"
		},
		{
			label: 'Customer',
			dataField: "customer"
		},
		{
			label: 'Price',
			dataField: "price",
			dataType: 'number',
			formatFunction(settings) {
				settings.template = '$' + settings.value.toFixed(2);
			}
		},
		{
			label: 'Order Date',
			dataField: "date",
			dataType: 'date'
		}
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
			    <div className="demo-description">This demo showcases the tree mode functionality of Table with paging.</div>
			    <Table id="table" dataSource={this.dataSource} keyboardNavigation={this.keyboardNavigation} paging={this.paging} columns={this.columns} ></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
