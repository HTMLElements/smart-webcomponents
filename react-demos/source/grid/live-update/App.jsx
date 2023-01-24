import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetStockData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetStockData(),
		dataFields: [
			'symbol: string',
			'name: string',
			'region: string',
			'matchScore: number'
		]
	});
	columns = [{
		label: 'Symbol',
		dataField: 'symbol'
	},
	{
		label: 'Name',
		dataField: 'name'
	},
	{
		label: 'Region',
		dataField: 'region'
	},
	{
		label: 'Match Score',
		dataField: 'matchScore'
	}
	];

	updateValues() {
		const grid = this.grid.current,
			rows = grid.rows;

		grid.beginUpdate();
		for (let i = 0; i < rows.length; i++) {
			const value = new Number(Math.random()).toFixed(2);
			const cell = rows[i].cells[3];
			if (value < 0.2) {
				cell.background = "#FC3752";
				cell.color = "#fff";
			} else if (value > 0.8) {
				cell.background = "#95FF00";
				cell.color = "#000";
			} else {
				cell.background = "#FF6800";
				cell.color = "#fff";
			}
			cell.value = value;
		}
		grid.endUpdate();
	}

	init() {
		const that = this;

		that.grid.current.nativeElement.addEventListener('afterInit', function () {
			that.updateValues();
			setInterval(function () {
				that.updateValues();
			}, 1000);
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Data is updated every 1 second. To update the data, we use the DataGrid's
			        'rows' array. Row object has 'cells' array and we set the cell's value.</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
