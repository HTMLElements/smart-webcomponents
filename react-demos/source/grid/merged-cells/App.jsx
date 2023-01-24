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
		dataSource: 15,
		dataFields: [
			'A: string',
			'B: string',
			'C: string',
			'D: string',
			'E: string'
		]
	});
	columns = [
		'A',
		'B',
		'C',
		'D',
		'E'
	];

	init() {
		const grid = this.grid.current

		grid.nativeElement.addEventListener('afterInit', function () {
			const rows = grid.rows;
			grid.beginUpdate();
			const firstCell = rows[0].cells[0];
			firstCell.value = "Monthly Housing and Transportation Expenses";
			firstCell.background = "#FFCB20";
			firstCell.fontWeight = "bold";
			firstCell.fontSize = "20px";
			firstCell.colSpan = 5;
			firstCell.align = "center";
			rows[0].height = 50;
			rows[1].cells[0].value = "Primary Residence";
			rows[1].cells[0].colSpan = 2;
			rows[1].cells[0].rowSpan = 2;
			rows[1].cells[0].align = "center";
			rows[1].cells[0].verticalAlign = "middle";
			rows[1].cells[0].background = "#95FF00";
			rows[1].cells[0].color = "#000";
			rows[1].cells[3].value = "Transportation Expenses";
			rows[1].cells[3].colSpan = 2;
			rows[1].cells[3].rowSpan = 2;
			rows[1].cells[3].align = "center";
			rows[1].cells[3].verticalAlign = "middle";
			rows[1].cells[3].background = "#95FF00";
			rows[1].cells[3].color = "#000";
			rows[3].cells[0].value = "Mortgage Payment";
			rows[3].cells[1].value = "$1,459.76";
			rows[3].cells[3].value = "Vehicle 1 Payment";
			rows[3].cells[4].value = "$351.34";
			rows[4].cells[0].value = "Property tax";
			rows[4].cells[1].value = "$212.76";
			rows[4].cells[3].value = "Vehicle 1 Insurance";
			rows[4].cells[4].value = "$55.12";
			rows[5].cells[0].value = "Insurance";
			rows[5].cells[1].value = "$49.21";
			rows[5].cells[3].value = "Vehicle 1 Gas";
			rows[5].cells[4].value = "$129.21";
			rows[6].cells[0].value = "Electricity";
			rows[6].cells[1].value = "$73.44";
			rows[6].cells[3].value = "Vehicle 1 Maintenance";
			rows[6].cells[4].value = "$55.17";
			rows[7].cells[0].value = "Water";
			rows[7].cells[1].value = "$41.48";
			rows[7].cells[3].value = "Vehicle 2 Lease";
			rows[7].cells[4].value = "$55.17";
			rows[8].cells[0].value = "Cabel TV Service";
			rows[8].cells[1].value = "$22.14";
			rows[8].cells[3].value = "Vehicle 2 Insurance";
			rows[8].cells[4].value = "$109.35";
			rows[9].cells[0].value = "High Speed Internet";
			rows[9].cells[1].value = "$24.99";
			rows[9].cells[3].value = "Vehicle 2 Gas";
			rows[9].cells[4].value = "$114.99";
			rows[10].cells[3].value = "Vehicle 2 Maintenance";
			rows[10].cells[4].value = "$35.19";
			grid.endUpdate();
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo page shows how to merge cells in the data grid. This is achieved
				by setting the Grid Cell's 'rowSpan' and 'colSpan' properties. With the
				API of the web component, you can access the Columns, Rows and Cells of
			        the Grid and modify them.</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
