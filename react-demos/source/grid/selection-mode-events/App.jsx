import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.eventsLog = React.createRef();
	}

	appearance = {
		showRowHeader: true
	};
	selection = {
		enabled: true,
		mode: 'extended',
		allowCellSelection: true
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

	handleChange(event) {
		const detail = event.detail;
		const log = document.createElement('div');
		log.innerHTML = 'change - started: ' + detail.started + ', finished: ' + detail.finished;
		if (detail.started) {
			this.eventsLog.current.innerHTML = '';
		}
		this.eventsLog.current.appendChild(log);
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo demonstrates the Grid's "change" event. The "change" event occurs
				when the user selects cells, rows or columns. The "change" event has two
				boolean arguments: "started" and "finished". When the selection starts,
				the "started" boolean argument value is "true". When the selection ends,
				the "finished" boolean argument value is "true". If the selection is with
			        dragging, the values of "started" and "finished" is false.</div>
				<br />
				<Grid id="grid" onChange={this.handleChange.bind(this)}
					appearance={this.appearance}
					selection={this.selection}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Events</div>
					<div ref={this.eventsLog} className="option" id="eventsLog"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
