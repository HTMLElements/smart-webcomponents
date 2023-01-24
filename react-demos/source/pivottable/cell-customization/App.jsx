import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { GeneratePivotData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
	}

	columnTotals = true;
	columnTotalsPosition = 'far';
	dataSource = GeneratePivotData(300, 3);
	freezeHeader = true;
	grandTotal = true;
	groupLayout = 'classic';
	keyboardNavigation = true;
	rowTotals = true;
	sortMode = 'one';
	columns = [{
		label: 'Continent',
		dataField: 'continent',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'City',
		dataField: 'city',
		dataType: 'string',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Year',
		dataField: 'year',
		dataType: 'number',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Quarter',
		dataField: 'quarter',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Month',
		dataField: 'month',
		dataType: 'string',
		allowPivot: true,
		pivot: true
	},
	{
		label: 'Revenue',
		dataField: 'revenue',
		dataType: 'number',
		summary: 'sum',
		formatFunction(settings) {
			settings.cell.classList.remove('small', 'medium', 'large');
			if (settings.value < 100000 / 3) {
				settings.cell.classList.add('small');
			} else if (settings.value < 2 * 100000 / 3) {
				settings.cell.classList.add('medium');
			} else {
				settings.cell.classList.add('large');
			}
			if (!isNaN(settings.value) && settings.value !== null) {
				settings.template = '$' + settings.value;
			}
		}
	}
	];

	init() {
		const pivotTable = this.pivottable.current,
			messagesEn = Object.assign({}, pivotTable.messages.en, {
				total: 'Revenue'
			});

		pivotTable.messages = Object.assign({}, pivotTable.messages, {
			en: messagesEn
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases how to customize and style cells in Pivot Table based
			        on their values.</div>
				<PivotTable ref={this.pivottable} id="pivotTable" columnTotals={this.columnTotals} columnTotalsPosition={this.columnTotalsPosition} dataSource={this.dataSource} freezeHeader={this.freezeHeader} grandTotal={this.grandTotal} groupLayout={this.groupLayout} keyboardNavigation={this.keyboardNavigation} rowTotals={this.rowTotals} sortMode={this.sortMode} columns={this.columns}></PivotTable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
