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
		dataSource: GetData(20),
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
	sorting = {
		enabled: true
	};
	behavior = {
		allowColumnReorder: true
	};
	grouping = {
		enabled: true,
		renderMode: 'compact',
		groupBar: {
			visible: true
		},
		summaryRow: {
			inline: false
		}
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
		summary: ['min', 'max'],
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
		summary: ['sum'],
		cellsAlign: 'right',
		cellsFormat: 'c2'
	}
	];

	init() {
		const that = this;

		that.grid.current.nativeElement.addEventListener('afterInit', function () {
			that.grid.current.getVisibleRows().then(function (rows) {
				rows[0].expand();
			});
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Grid Grouping with Summaries</h1>
					<p>The example demonstrates how to enable summaries with Grouping</p>
				</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					sorting={this.sorting}
					behavior={this.behavior}
					grouping={this.grouping}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
