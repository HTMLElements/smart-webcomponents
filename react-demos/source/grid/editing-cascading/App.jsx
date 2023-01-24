import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	data = [{
		"Country": "Belgium",
		"City": "Brussels"
	}, {
		"Country": "France",
		"City": "Paris"
	}, {
		"Country": "USA",
		"City": "Washington"
	}, {
		"Country": "Lebanon",
		"City": "Beirut"
	}];
	cities = {
		Belgium: ["Bruges", "Brussels", "Ghent"],
		France: ["Bordeaux", "Lille", "Paris"],
		USA: ["Los Angeles", "Minneapolis", "Washington"],
		Lebanon: ["Beirut", "Sidon", "Byblos"]
	};

	change = false;

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'Country: string',
			'City: string'
		]
	});
	editing = {
		enabled: true,
		mode: 'cell'
	};
	columns = [{
		label: 'Country',
		dataField: 'Country',
		editor: {
			template: '<smart-drop-down-list></smart-drop-down-list>',
			onInit: (row, column, editor) => {
				const that = this,
					dropDownList = editor.firstElementChild;

				dropDownList.dataSource = ['Belgium', 'France', 'USA', 'Lebanon'];
				dropDownList.dropDownAppendTo = 'body';
				dropDownList.selectedValues = [that.grid.current.rows[row].cells[0].value];
				dropDownList.addEventListener('change', function () {
					that.change = true;
				});
			},
			onRender: (row, column, editor) => {
				editor.firstElementChild.selectedValues = [this.grid.current.rows[row].cells[0].value];
			},
			getValue() {
				return this.firstElementChild.selectedValues[0];
			}
		}
	},
	{
		label: 'City',
		dataField: 'City',
		editor: {
			template: '<smart-drop-down-list></smart-drop-down-list>',
			onInit(row, column, editor) {
				const dropDownList = editor.firstElementChild;
				dropDownList.dropDownAppendTo = 'body';
				dropDownList.placeholder = 'Select a city...';
			},
			onRender: (row, column, editor) => {
				const grid = this.grid.current,
					countryValue = grid.rows[row].cells[0].value,
					citiesSource = this.cities[countryValue],
					dropDownList = editor.firstElementChild;
				dropDownList.dataSource = citiesSource;
				dropDownList.selectedValues = [grid.rows[row].cells[1].value];
			},
			getValue() {
				return this.firstElementChild.selectedValues[0] || 'Select a city...';
			}
		}
	}
	];

	handleEndEdit(event) {
		const detail = event.detail;
		if (detail.column.dataField === 'Country' && this.change) {
			detail.row.cells[1].value = 'Select a city...';
		}
		this.change = false;
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>Grid Cascading Cell Editors</h1>
					<p>This example demonstrates how to implement cascading cell editors in Grid
			            using custom column editors.</p>
				</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					editing={this.editing}
					columns={this.columns}
					onEndEdit={this.handleEndEdit.bind(this)}></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
