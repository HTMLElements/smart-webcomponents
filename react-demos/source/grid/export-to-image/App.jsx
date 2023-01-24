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

	appearance = {
		alternationStart: 0,
		alternationCount: 2,
	};
	dataExport = {
		view: true,
		viewStart: 0,
		viewEnd: 50
	};
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
			formatFunction(formatObject) {
				formatObject.value = '$' + new Number(formatObject.cell.value).toFixed(2);
				formatObject.cell.background = '#007ACC';
				formatObject.cell.color = '#fff';
			}
		}
	];

	handlePngBtnClick() {
		this.grid.current.exportData('png');
	}

	handleJpegBtnClick() {
		this.grid.current.exportData('jpeg');
	}

	handleExportAllBtnClick() {
		const grid = this.grid.current;

		grid.dataExport.viewStart = null;
		grid.dataExport.viewEnd = null;
		grid.dataExport.view = false;
		grid.exportData('png');
		grid.dataExport.viewStart = 0;
		grid.dataExport.viewEnd = 50;
	}

	handleExportRestrictBtnClick() {
		const grid = this.grid.current;

		grid.dataExport.viewStart = 25;
		grid.dataExport.viewEnd = 50;
		grid.dataExport.view = true;
		grid.exportData('png');
		grid.dataExport.viewStart = 0;
		grid.dataExport.viewEnd = 50;
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>DataGrid Image Export</h1>
This page demonstrates the Export to Image feature of the smartGrid web
			        component. The Grid can be exported to .png or .jpeg image. You can specify
			        whether to export all records or only part of the visible data by using
			        the 'dataExport' property's 'view' boolean option.</div>
				<br />
				<br />
				<Grid ref={this.grid} id="grid"
					appearance={this.appearance}
					dataExport={this.dataExport}
					dataSource={this.dataSource}
					columns={this.columns}
					value={this.value}
					background={this.background}
					color={this.color}></Grid>
				<div className="options">
					<div className="caption"></div>
					<div className="option">
						<Button id="pngBtn" onClick={this.handlePngBtnClick.bind(this)}>Export to PNG</Button>
					</div>
					<div className="option">
						<Button id="jpegBtn" onClick={this.handleJpegBtnClick.bind(this)}>Export to JPEG</Button>
					</div>
					<div className="option">
						<Button id="exportAllBtn" onClick={this.handleExportAllBtnClick.bind(this)}>Export All</Button>
					</div>
					<div className="option">
						<Button id="exportRestrictBtn" onClick={this.handleExportRestrictBtnClick.bind(this)}>Export 25-50</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
