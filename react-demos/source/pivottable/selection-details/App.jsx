import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { ToggleButton } from 'smart-webcomponents-react/button';
import { GeneratePivotData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
	}

	dataSource = GeneratePivotData(300, 2);
	drillDown = true;
	freezeHeader = true;
	grandTotal = true;
	keyboardNavigation = true;
	selection = true;
	selectionMode = 'cell';
	toolbar = true;
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
		dataType: 'string',
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
		label: 'Revenue',
		dataField: 'revenue',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			prefix: '$',
			negativesInBrackets: true
		}
	},
	{
		label: 'Expenses',
		dataField: 'expense',
		dataType: 'number',
		summary: 'sum',
		summarySettings: {
			prefix: '$',
			negativesInBrackets: true
		}
	}
	];

	readyHandler() {
		const pivotTable = this.pivottable.current,
			rows = pivotTable.nativeElement.rows;

		pivotTable.getDynamicColumns().then((dynamicColumns) => {
			pivotTable.select(rows[0].$.id, dynamicColumns[1].id);
			pivotTable.select(rows[0].$.id, dynamicColumns[2].id);
		});
	}

	changeHandler(event) {
		this.pivottable.current.hideCellSelectionTooltip = event.detail.value;
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases the cell selection functionality of PivotTable. Click-drag
				in order to select multiple cells. When multiple cells with non-null summary
				values are selected, a tooltip showng the Average, Count, and Sum of the
			        values is displayed.</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					dataSource={this.dataSource}
					drillDown={this.drillDown}
					freezeHeader={this.freezeHeader}
					grandTotal={this.grandTotal}
					keyboardNavigation={this.keyboardNavigation}
					selection={this.selection}
					selectionMode={this.selectionMode}
					toolbar={this.toolbar}
					columns={this.columns}
					onReady={this.readyHandler.bind(this)}></PivotTable>
				<div className="options">
					<div className="option">
						<ToggleButton id="toggleButton" onChange={this.changeHandler.bind(this)}>Hide cell selection tooltip</ToggleButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
