import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	scrolling = 'virtual';
	dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 100000,
		virtualDataSourceCache: true,
		virtualDataSource: function (resultCallbackFunction, details) {
			setTimeout(function () {
				resultCallbackFunction({
					dataSource: window.Data.slice(details.first, details.last)
				});
			}, 100);
		},
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
	columns = [
		'id',
		{
			label: 'First Name',
			dataField: 'firstName'
		},
		{
			label: 'Last Name',
			dataField: 'lastName'
		},
		{
			label: 'Product',
			dataField: 'productName'
		},
		{
			label: 'Quantity',
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	init() {
		window.Data = GetData(1000000);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Data is loaded on demand while scrolling</div>
				<Grid id="grid"
					scrolling={this.scrolling}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
