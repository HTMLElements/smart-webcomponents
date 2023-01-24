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
		summarySettings: {
			prefix: '$'
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
				<div className="demo-description">This demo showcases a Pivot Table bound to a simple array.</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					columnTotals={this.columnTotals}
					columnTotalsPosition={this.columnTotalsPosition}
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					grandTotal={this.grandTotal}
					keyboardNavigation={this.keyboardNavigation}
					rowTotals={this.rowTotals}
					sortMode={this.sortMode}
					columns={this.columns}></PivotTable>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
