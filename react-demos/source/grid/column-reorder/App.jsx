import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.log = React.createRef();
	}

	behavior = {
		allowColumnReorder: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
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
	paging = {
		enabled: true
	};
	pager = {
		visible: true
	};
	columns = [{
		label: 'First Name',
		width: 150,
		dataField: 'firstName'
	},
	{
		label: 'Last Name',
		width: 150,
		dataField: 'lastName'
	},
	{
		label: 'Product',
		width: 200,
		dataField: 'productName'
	},
	{
		label: 'Quantity',
		width: 100,
		dataField: 'quantity'
	},
	{
		label: 'Unit Price',
		width: 100,
		dataField: 'price',
		cellsFormat: 'c2'
	},
	{
		label: 'Total',
		dataField: 'total',
		cellsFormat: 'c2'
	}
	];

	onColumnDragStart(event) {
		this.log.current.innerHTML = 'columnDragStart: ' + event.detail.column.label + ', index: ' + event.detail.index + '<br/>';
	}

	onColumnDragEnd(event) {
		this.log.current.innerHTML += 'columnDragEnd: ' + event.detail.column.label + ', index: ' + event.detail.index + ', new index: ' + event.detail.newIndex + '<br/>';;
	}

	onColumnDragCancel(event) {
		this.log.current.innerHTML += 'columnDragCancel: ' + event.detail.column.label + '<br/>';;
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Grid Column Headers Reorder example. Move the pointer to a column header
				and start dragging it. When you drop it over another column header, columns
				are reordered. To enable column reorder, the behavior.allowColumnReorder
				is set to true. To disable the reorder of a column, you can set its "allowReorder"
			        property to false. To cancel dragging, pres 'Escape' while you drag.</div>
				<Grid id="grid"
					behavior={this.behavior}
					dataSource={this.dataSource}
					paging={this.paging}
					pager={this.pager}
					columns={this.columns}
					onColumnDragStart={this.onColumnDragStart.bind(this)}
					onColumnDragEnd={this.onColumnDragEnd.bind(this)}
					onColumnDragCancel={this.onColumnDragCancel.bind(this)}></Grid>
				<div className="options">
					<div className="caption">Event Log</div>
					<div ref={this.log} className="option" id="log"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
