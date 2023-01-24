import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	data = GetData(10000);

	paging = {
		enabled: true,
		pageSize: 10,
		pageIndex: 0
	};
	pager = {
		position: 'far',
		visible: true
	};
	dataSource = new window.Smart.DataAdapter({
		virtualDataSourceLength: 10000,
		virtualDataSourceCache: true,
		virtualDataSource: (resultCallbackFunction, details) => {
			const that = this;

			setTimeout(function () {
				resultCallbackFunction({
					dataSource: that.data.slice(details.first, details.last)
				});
			}, 300);
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

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Data is loaded on demand. The loading capacity in this demo is 1,000,000
			        records.</div>
				<Grid id="grid"
					paging={this.paging}
					pager={this.pager}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
