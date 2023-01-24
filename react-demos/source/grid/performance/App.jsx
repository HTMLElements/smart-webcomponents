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
		dataSource: 20
	});
	columns = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J'
	];

	updateValues() {
		const grid = this.grid.current,
			rows = grid.rows;

		grid.beginUpdate();
		for (let i = 0; i < rows.length; i++) {
			const row = rows[i];
			for (let j = 0; j < row.cells.length; j++) {
				const randomNum = Math.random();
				const value = new Number(randomNum).toFixed(2);
				const cell = rows[i].cells[j];
				cell.value = value;
				if (value < 0.2) {
					cell.background = "#27A2FC";
					cell.color = "#fff";
				} else if (value > 0.8) {
					cell.background = "#6C01FF";
					cell.color = "#000";
				} else {
					cell.background = "#FC27A2";
					cell.color = "#fff";
				}
			}
		}
		grid.endUpdate();
	}

	init() {
		const that = this;

		that.grid.current.nativeElement.addEventListener('afterInit', function () {
			that.updateValues();
			setInterval(function () {
				that.updateValues();
			}, 10);
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">DataGrid's Data is updated every 10ms. The View is with 10 columns and
			        20 rows.</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
