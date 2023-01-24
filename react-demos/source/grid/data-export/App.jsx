import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(100),
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
	columns = [
		'id',
		{
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

	handleXlsxBtnClick() {
		this.grid.current.exportData('xlsx');
	}

	handlePdfBtnClick() {
		this.grid.current.exportData('pdf');
	}

	handleCsvBtnClick() {
		this.grid.current.exportData('csv');
	}

	handleTsvBtnClick() {
		this.grid.current.exportData('tsv');
	}

	handleXmlBtnClick() {
		this.grid.current.exportData('xml');
	}

	handleHtmlBtnClick() {
		this.grid.current.exportData('html');
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption"></div>
					<div className="option">
						<Button id="xlsxBtn" onClick={this.handleXlsxBtnClick.bind(this)}>Export to Excel</Button>
					</div>
					<div className="option">
						<Button id="pdfBtn" onClick={this.handlePdfBtnClick.bind(this)}>Export to PDF</Button>
					</div>
					<div className="option">
						<Button id="htmlBtn" onClick={this.handleHtmlBtnClick.bind(this)}>Export to HTML</Button>
					</div>
					<div className="option">
						<Button id="csvBtn" onClick={this.handleCsvBtnClick.bind(this)}>Export to CSV</Button>
					</div>
					<div className="option">
						<Button id="tsvBtn" onClick={this.handleTsvBtnClick.bind(this)}>Export to TSV</Button>
					</div>
					<div className="option">
						<Button id="xmlBtn" onClick={this.handleXmlBtnClick.bind(this)}>Export to XML</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
