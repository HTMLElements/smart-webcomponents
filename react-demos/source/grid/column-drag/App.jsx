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

	behavior = {
		allowColumnReorder: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(20),
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
	});

	columns1 = [{
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
	];

	onColumnDragging(event) {
		event.detail.data.data();
		event.detail.data.feedbackLine.style.display = 'none';
		event.detail.data.feedback.innerHTML = event.detail.column.label;
	}

	onColumnDragEnd(event) {
		const grid = this.grid.current,
			grid2 = this.grid2.current;
		const column = event.detail.column;
		const pointerEvent = event.detail.originalEvent;
		if (pointerEvent.pageY >= grid2.nativeElement.offsetTop && pointerEvent.pageY <= grid2.nativeElement.offsetTop + grid2.nativeElement.offsetHeight) {
			if (pointerEvent.pageX >= grid2.nativeElement.offsetLeft && pointerEvent.pageX <= grid2.nativeElement.offsetLeft + grid2.nativeElement.offsetWidth) {
				grid.columns.splice(grid.columns.indexOf(column), 1);
				grid2.columns.push({
					label: column.label,
					dataField: column.dataField
				});;
			}
		}
	}

	columns2 = [];

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Drag a column from Grid A and drop it into Grid B. Dragging of 'Product'
				column is disabled. Column Reorder in Grid A is disabled. Column Reorder
			        in Grid B is enabled.</div>
				<h3>Grid A</h3>
				<br />
				<br />
				<Grid ref={this.grid} id="grid"
					behavior={this.behavior}
					dataSource={this.dataSource}
					columns={this.columns1}
					onColumnDragging={this.onColumnDragging}
					onColumnDragEnd={this.onColumnDragEnd.bind(this)}></Grid>
				<br />
				<br />
				<h3>Grid B</h3>
				<Grid ref={this.grid2} id="grid2"
					behavior={this.behavior}
					dataSource={this.dataSource}
					columns={this.columns2}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
