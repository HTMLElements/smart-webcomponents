import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GroupPanel, Smart } from 'smart-webcomponents-react/grouppanel';
import { Chart } from 'smart-webcomponents-react/chart';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.data = React.createRef();
	}

	theme = {
		border: '1px solid black',
		borderCollapse: 'collapse',
		header: {
			height: '90px',
			backgroundColor: '#00137F',
			color: '#FFFFFF',
			border: '1px solid black',
			fontSize: '14px',
			fontWeight: 'bold',
			firstName: {
				width: '300px'
			},
			lastName: {
				width: '300px',
				backgroundColor: '#DDDDDD',
				color: '#555555'
			},
			quantity: {
				textAlign: 'right'
			}
		},
		columns: {
			border: '1px solid black',
			lastName: {
				backgroundColor: '#DDDDDD',
				color: '#555555'
			},
			quantity: {
				textAlign: 'right'
			}
		},
		rows: {
			backgroundColor: '#EEEAEA',
			height: '50px',
			alternationCount: 2,
			alternationIndex0Color: '#FFFFFF',
			alternationIndex0BackgroundColor: '#0078CE'
		}
	};

	sampleData = [{
		firstName: 'First name',
		lastName: 'Last name',
		quantity: 'Quantity'
	}];

	groupBy = ['lastName', 'firstName', 'quantity'];

	dataSource = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string',
		sortDirection: 'ascending',
		groupIndex: 2,
		icon: 'firstname'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		sortDirection: 'ascending',
		groupIndex: 1,
		icon: 'lastname'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number',
		sortDirection: 'ascending',
		groupIndex: 3,
		icon: 'quantity'
	}]

	init() {
		const firstNames = ['Samuel', 'Peter', 'Lilly'],
			lastNames = ['Jackson', 'Shelly'],
			quantities = [1, 2, 7, 17];

		for (let i = 1; i < 50; i++) {
			const row = {};

			row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			row.quantity = quantities[Math.floor(Math.random() * quantities.length)];

			this.sampleData[i] = row;
		}

		this.data.current.innerHTML = JSON.stringify(this.sampleData.slice(0, 5));
	}

	handleApply(event) {
		this.groupBy = event.detail.value.map(column => column.dataField);
	}

	handleExport(type) {
		const dataExporter = new Smart.Utilities.DataExporter({
			style: this.theme,
			exportHeader: true
		}, this.groupBy);
		dataExporter.exportData(this.sampleData, type, 'sampleData');
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<p>Data (first 5 rows of 50):</p>
				<p ref={this.data} id="data"></p>
				<br />
				<GroupPanel dataSource={this.dataSource} onApply={this.handleApply.bind(this)} id="groupPanel"></GroupPanel>
				<br />
				<Button onClick={this.handleExport.bind(this, 'html')} id="html">Export to HTML</Button>
				<Button onClick={this.handleExport.bind(this, 'pdf')} id="pdf">Export to PDF</Button>
				<Button onClick={this.handleExport.bind(this, 'xlsx')} id="xlsx">Export to XLSX</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
