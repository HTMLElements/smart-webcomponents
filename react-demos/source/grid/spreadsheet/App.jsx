import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	selection = {
		enabled: true,
		allowCellSelection: true,
		mode: 'extended',
		allowColumnHeaderSelection: true,
		allowRowHeaderSelection: true
	};
	editing = {
		enabled: true
	};
	behavior = {
		rowResizeMode: 'growAndShrink',
		columnResizeMode: 'growAndShrink'
	};
	appearance = {
		showRowHeaderNumber: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: 1000,
		dataFields: [
			'A: string',
			'B: string',
			'C: string',
			'D: string',
			'E: string',
			'F: string',
			'G: string',
			'H: string',
			'I: string',
			'J: string',
			'K: string',
			'L: string',
			'M: string',
			'N: string',
			'O: string',
			'P: string',
			'Q: string',
			'R: string',
			'S: string',
			'T: string',
			'U: string',
			'V: string',
			'W: string',
			'X: string',
			'Y: string',
			'Z: string'
		]
	});
	columns = [{
		label: 'A',
		dataField: 'A',
		align: 'center',
		width: 100
	},
	{
		label: 'B',
		dataField: 'B',
		align: 'center',
		width: 100
	},
	{
		label: 'C',
		dataField: 'C',
		align: 'center',
		width: 100
	},
	{
		label: 'D',
		dataField: 'D',
		align: 'center',
		width: 100
	},
	{
		label: 'E',
		dataField: 'E',
		align: 'center',
		width: 100
	},
	{
		label: 'F',
		dataField: 'F',
		align: 'center',
		width: 100
	},
	{
		label: 'G',
		dataField: 'G',
		align: 'center',
		width: 100
	},
	{
		label: 'H',
		dataField: 'H',
		align: 'center',
		width: 100
	},
	{
		label: 'I',
		dataField: 'I',
		align: 'center',
		width: 100
	},
	{
		label: 'J',
		dataField: 'J',
		align: 'center',
		width: 100
	},
	{
		label: 'K',
		dataField: 'K',
		align: 'center',
		width: 100
	},
	{
		label: 'L',
		dataField: 'L',
		align: 'center',
		width: 100
	},
	{
		label: 'M',
		dataField: 'M',
		align: 'center',
		width: 100
	},
	{
		label: 'N',
		dataField: 'N',
		align: 'center',
		width: 100
	},
	{
		label: 'O',
		dataField: 'O',
		align: 'center',
		width: 100
	},
	{
		label: 'P',
		dataField: 'P',
		align: 'center',
		width: 100
	},
	{
		label: 'Q',
		dataField: 'Q',
		align: 'center',
		width: 100
	},
	{
		label: 'R',
		dataField: 'R',
		align: 'center',
		width: 100
	},
	{
		label: 'S',
		dataField: 'S',
		align: 'center',
		width: 100
	},
	{
		label: 'T',
		dataField: 'T',
		align: 'center',
		width: 100
	},
	{
		label: 'U',
		dataField: 'U',
		align: 'center',
		width: 100
	},
	{
		label: 'V',
		dataField: 'V',
		align: 'center',
		width: 100
	},
	{
		label: 'W',
		dataField: 'W',
		align: 'center',
		width: 100
	},
	{
		label: 'X',
		dataField: 'X',
		align: 'center',
		width: 100
	},
	{
		label: 'Y',
		dataField: 'Y',
		align: 'center',
		width: 100
	},
	{
		label: 'Z',
		dataField: 'Z',
		align: 'center',
		width: 100
	}
	];

	init() {
		const grid = this.grid.current;

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
				<div className="demo-scription">Spreadsheet can be easily achieved with smartGrid. The Grid in the demo
				is in Unbound mode. Cells and Rows values, styles and rowspan, colspan
				are set on init. Rows and Columns resize is enabled. Selection and Editing
			        in the demo is like in Excel.</div>
				<Grid ref={this.grid} id="grid"
					selection={this.selection}
					editing={this.editing}
					behavior={this.behavior}
					appearance={this.appearance}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
