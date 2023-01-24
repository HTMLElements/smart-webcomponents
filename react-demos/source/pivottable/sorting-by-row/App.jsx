import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { ToggleButton } from 'smart-webcomponents-react/button';
import { GeneratePivotData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
		this.toggleButtonLabel = React.createRef();
	}

	columnTotals = true;
	dataSource = GeneratePivotData(300, 1);
	freezeHeader = true;
	grandTotal = true;
	keyboardNavigation = true;
	onInit() {
		this.rows[0].expanded = true;
	};
	rowSort = true;
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

	changeHandler(event) {
		const pivotTable = this.pivottable.current,
			toggleButtonLabel = this.toggleButtonLabel.current;

		if (event.detail.value) {
			pivotTable.groupLayout = 'classic';
			toggleButtonLabel.innerHTML = 'default';
		} else {
			pivotTable.groupLayout = 'default';
			toggleButtonLabel.innerHTML = 'classic';
		}
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo shows the sorting by row functionality of PivotTable. Click
			        on a cell from the Group column to sort by its respective row.</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					columnTotals={this.columnTotals}
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					grandTotal={this.grandTotal}
					keyboardNavigation={this.keyboardNavigation}
					onInit={this.onInit}
					expanded={this.expanded}
					rowSort={this.rowSort}
					columns={this.columns}></PivotTable>
				<div className="options">
					<div className="option">
						<ToggleButton id="toggleButton" onChange={this.changeHandler.bind(this)}>Change <strong>groupLayout</strong> to '<span ref={this.toggleButtonLabel} id="toggleButtonLabel">classic</span>'</ToggleButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
