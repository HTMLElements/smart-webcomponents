import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	sorting = {
		enabled: true,
		sortMode: 'one'
	};
	filtering = {
		enabled: true,
		filter: [
			['firstName', 'contains Andrew or contains Nancy'],
			['quantity', '>= 3 and <= 8']
		]
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(3000),
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
	columns = [{
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
		dataField: 'quantity',
		align: 'right',
		cellsAlign: 'right',
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		align: 'right',
		cellsAlign: 'right',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		align: 'right',
		cellsAlign: 'right',
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
				<div className="demo-description">The filtering feature is enabled by using the <strong>filtering</strong> property.
			        If the <strong>enabled</strong> sub-property is set to <strong>true</strong>,
			        the column's filtering menu is enabled. Filter Menu displays Inputs, Numeric
			        Inputs or Date Pickers depending on the column's type. The column's <strong>allowFilter</strong> determines
			        whether a column is filterable. The Grid has options to customize the visibility
			        of filter icons, filter column background, custom filter icons, enabled/disable
			        filter menu animations.</div>
				<Grid id="grid"
					sorting={this.sorting}
					filtering={this.filtering}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
