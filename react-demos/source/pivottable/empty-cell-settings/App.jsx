import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { ToggleButton } from 'smart-webcomponents-react/button';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
		this.toggleButtonLabel = React.createRef();
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
	nullDefaultValue = 0;
	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		dataType: 'string'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
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
		summary: 'sum'
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

	changeHandler(event) {
		const pivotTable = this.pivottable.current,
			toggleButtonLabel = this.toggleButtonLabel.current;

		if (event.detail.value) {
			pivotTable.nullDefaultValue = null;
			toggleButtonLabel.innerHTML = '0';
		} else {
			pivotTable.nullDefaultValue = 0;
			toggleButtonLabel.innerHTML = 'null';
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
				<div className="demo-description">This demo shows how to change the value shown in cells that do not have
			        aggregated data to display. This behavior is controlled by the property <strong>nullDefaultValue</strong> which
			        is <em>null</em> by default and displays empty cells. In this example, the
			        property is set to <em>0</em>.</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					keyboardNavigation={this.keyboardNavigation}
					nullDefaultValue={this.nullDefaultValue}
					columns={this.columns}></PivotTable>
				<div className="options">
					<div className="option">
						<ToggleButton id="toggleButton" onChange={this.changeHandler.bind(this)}>Change <strong>nullDefaultValue</strong> to <span ref={this.toggleButtonLabel} id="toggleButtonLabel">null</span>
						</ToggleButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
