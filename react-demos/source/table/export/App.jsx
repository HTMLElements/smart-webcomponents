import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.table = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'id: number',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number'
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	}
	];

	handleEvent(type) {
		this.table.current.exportData(type, 'table');
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to export the data of Table.</div>
				<Table ref={this.table} id="table" dataSource={this.dataSource} columns={this.columns}></Table>
				<div className="options">
					<Button onClick={this.handleEvent.bind(this, 'csv')} id="csv">Export to CSV</Button>
					<Button onClick={this.handleEvent.bind(this, 'html')} id="html">Export to HTML</Button>
					<Button onClick={this.handleEvent.bind(this, 'json')} id="json">Export to JSON</Button>
					<Button onClick={this.handleEvent.bind(this, 'pdf')} id="pdf">Export to PDF</Button>
					<Button onClick={this.handleEvent.bind(this, 'tsv')} id="tsv">Export to TSV</Button>
					<Button onClick={this.handleEvent.bind(this, 'xlsx')} id="xlsx">Export to XLSX</Button>
					<Button onClick={this.handleEvent.bind(this, 'xml')} id="xml">Export to XML</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
