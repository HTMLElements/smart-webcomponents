import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
		groupBy: ['productName'],
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
	pager = {
		visible: true
	};
	paging = {
		enabled: true,
		pageSize: 2
	};
	filtering = {
		enabled: false
	};
	sorting = {
		enabled: false
	};
	behavior = {
		allowColumnReorder: true
	};
	grouping = {
		enabled: true,
		renderMode: 'basic',
		groupBar: {
			visible: true
		}
	};
	onAfterInit = () => {
		this.grid.current.getVisibleRows().then(function (rows) {
			rows[0].expand();
		});
	};
	columns = [{
		label: '#',
		width: 200,
		dataField: 'id'
	},
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
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>DataGrid Paging with Grouping</h1>
					<p>The example demonstrates how to combine Grouping and Paging. The 'pageSize'
					property, when grouping is enabled determines the root groups size displayed
			            per page.</p>
				</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					pager={this.pager}
					paging={this.paging}
					filtering={this.filtering}
					sorting={this.sorting}
					behavior={this.behavior}
					grouping={this.grouping}
					onAfterInit={this.onAfterInit}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
