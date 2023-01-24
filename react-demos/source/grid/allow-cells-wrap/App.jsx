import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	appearance = {
		alternationStart: 0,
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderFocusIcon: true,
		showRowHeaderSelectIcon: true
	};
	selection = {
		enabled: true,
		mode: 'one',
		allowRowHeaderSelection: true
	};
	pager = {
		visible: true
	};
	paging = {
		enabled: true
	};
	layout = {
		rowHeight: 'auto',
		allowCellsWrap: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
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
		cellsAlign: 'right'
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
				<div className="demo-description">
					<h1>Grid Cells Wrap enabled by setting the 'appearance.allowCellsWrap' property to <em>true</em>.</h1>
					<p>Enabling cells wrap, wraps the cell values. Row height is automatically
			            re-calculated, if the 'rowHeight' property is set to 'auto'.</p>
				</div>
				<Grid id="grid"
					appearance={this.appearance}
					selection={this.selection}
					pager={this.pager}
					paging={this.paging}
					layout={this.layout}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
