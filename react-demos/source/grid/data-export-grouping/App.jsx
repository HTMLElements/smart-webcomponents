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
		groupBy: ['productName'],
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
	grouping = {
		enabled: true
	};
	columns = [{
		label: '#',
		width: 200,
		dataField: 'id'
	},
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
				<div className="demo-description">Grouping Data Export. The Grid component supports Grouped Data Export.
			        The data records in Excel(.xlsx) can be expanded/collapsed.</div>
				<Grid ref={this.grid} id="grid"
					dataSource={this.dataSource}
					grouping={this.grouping}
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
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
