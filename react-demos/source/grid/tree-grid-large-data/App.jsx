import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetOrdersData } from './common/data';

class App extends React.Component {
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetOrdersData(),
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
	behavior = {
		columnResizeMode: 'growAndShrink'
	};
	columns = [{
		label: 'Order Name',
		dataField: "name",
		align: 'center',
		width: 200
	},
	{
		label: 'Customer',
		dataField: "customer",
		align: 'center',
		width: 200
	},
	{
		label: 'Price',
		dataField: "price",
		cellsFormat: "c2",
		align: 'center',
		cellsAlign: 'right',
		width: 80
	},
	{
		label: 'Order Date',
		dataField: "date",
		align: 'center',
		cellsFormat: "dd-MMMM-yyyy hh:mm"
	}
	];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>TreeGrid data binding to large data set</h1>
The TreeGrid in this demo is loaded with a large data set.</div>
				<Grid id="grid"
					dataSource={this.dataSource}
					behavior={this.behavior}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
