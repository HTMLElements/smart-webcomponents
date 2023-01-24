import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
	}

	handleCSVClick() {
		this.pivottable.current.exportData('csv', 'pivotTable');
	}

	handleHTMLClick() {
		this.pivottable.current.exportData('html', 'pivotTable');
	}

	handleJSONClick() {
		this.pivottable.current.exportData('json', 'pivotTable');
	}

	handlePDFClick() {
		this.pivottable.current.exportData('pdf', 'pivotTable');
	}

	handleTSVClick() {
		this.pivottable.current.exportData('tsv', 'pivotTable');
	}

	handleXLSXClick() {
		this.pivottable.current.exportData('xlsx', 'pivotTable');
	}

	handleXMLClick() {
		this.pivottable.current.exportData('xml', 'pivotTable');
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(50),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});
	freezeHeader = true;
	keyboardNavigation = true;
	rowTotals = true;
	columns = [{
		label: 'Last Name',
		dataField: 'lastName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			align: 'center'
		}
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			prefix: '$',
			decimalPlaces: 2
		}
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	} // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
	];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows how to export PivotTable to a variety of popular file
			        formats - CSV, HTML, JSON, PDF, TSV, XLSX, and XML.</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					keyboardNavigation={this.keyboardNavigation}
					rowTotals={this.rowTotals}
					columns={this.columns}></PivotTable>
				<div className="options">
					<div className="option">
						<Button onClick={this.handleCSVClick.bind(this)}>Export to CSV</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleHTMLClick.bind(this)}>Export to HTML</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleJSONClick.bind(this)}>Export to JSON</Button>
					</div>
					<div className="option">
						<Button onClick={this.handlePDFClick.bind(this)}>Export to PDF</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleTSVClick.bind(this)}>Export to TSV</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleXLSXClick.bind(this)}>Export to XLSX</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleXMLClick.bind(this)}>Export to XML</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
