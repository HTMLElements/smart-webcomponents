import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
		this.grid2 = React.createRef();
	}

	grid1Settings = {
		behavior: {
			allowRowReorder: true
		},
		appearance: {
			showRowHeader: true,
			showRowHeaderDragIcon: true
		},
		dataSource: new window.Smart.DataAdapter({
			dataSource: GetData(10),
			autoGenerateColumns: false,
			dataFields: [
				'id: number',
				'firstName: string',
				'lastName: string',
				'productName: string',
				'quantity: number',
				'price: number',
				'total: number'
			]
		}),
		columns: [{
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
			label: 'Quantity',
			width: 100,
			dataField: 'quantity'
		},
		{
			label: 'Product',
			dataField: 'productName',
			allowReorder: false
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
		]
	}

	grid2Settings = {
		appearance: {
			showRowHeader: true
		},
		dataSource: new window.Smart.DataAdapter({
			dataSource: GetData(0),
			autoGenerateColumns: false,
			dataFields: [
				'id: number',
				'firstName: string',
				'lastName: string',
				'productName: string',
				'quantity: number',
				'price: number',
				'total: number'
			]
		}),
		columns: [{
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
			label: 'Quantity',
			width: 100,
			dataField: 'quantity'
		},
		{
			label: 'Product',
			dataField: 'productName',
			allowReorder: false
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
		]
	}

	onRowDragging(event) {
		event.detail.data.data();
		event.detail.data.feedbackLine.style.display = 'none';
	}

	onRowDragEnd(event) {
		const grid = this.grid.current,
			grid2 = this.grid2.current;

		const row = event.detail.row;
		const pointerEvent = event.detail.originalEvent;
		if (pointerEvent.pageY >= grid2.nativeElement.offsetTop && pointerEvent.pageY <= grid2.nativeElement.offsetTop + grid2.nativeElement.offsetHeight) {
			if (pointerEvent.pageX >= grid2.nativeElement.offsetLeft && pointerEvent.pageX <= grid2.nativeElement.offsetLeft + grid2.nativeElement.offsetWidth) {
				grid.rows.splice(grid.rows.indexOf(row), 1);
				grid2.rows.push(row.data);
			}
		}
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Drag a row from Grid A and drop it into Grid B. The dragged row will be
			        removed from Grid A, after the drop and will be added to Grid B.</div>
				<h3>Grid A</h3>
				<br />
				<br />
				<Grid ref={this.grid} id="grid" {...this.grid1Settings} onRowDragging={this.onRowDragging} onRowDragEnd={this.onRowDragEnd.bind(this)}></Grid>
				<br />
				<br />
				<h3>Grid B</h3>
				<Grid ref={this.grid2} id="grid2" {...this.grid2Settings}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
