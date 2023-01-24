import React from "react";
import ReactDOM from "react-dom";
import { PivotTable } from 'smart-webcomponents-react/pivottable';
import { ToggleButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.pivottable = React.createRef();
		this.toggleButtonLabel = React.createRef();
	}

	generateData(rowscount) {
		const data = new Array();
		const firstNames = [
			'Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi'
		];
		const lastNames = [
			'Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase'
		];
		const productNames = [
			'Black Tea', 'Green Tea', 'Caffe Espresso'
		];
		const priceValues = [
			'2.25', '1.5', '3.0', '3.3', '4.5', '3.6', '3.8', '2.5', '5.0', '1.75', '3.25', '4.0'
		];
		for (let i = 0; i < rowscount; i++) {
			const row = {};
			const productindex = Math.floor(Math.random() * productNames.length);
			const price = parseFloat(priceValues[productindex]);
			const quantity = 1 + Math.round(Math.random() * 10);
			row['id'] = i;
			row['reportsto'] = Math.floor(Math.random() * firstNames.length);
			if (i % Math.floor(Math.random() * firstNames.length) === 0) {
				row['reportsto'] = null;
			}
			row['available'] = productindex % 2 === 0;
			row['firstName'] = firstNames[Math.floor(Math.random() * firstNames.length)];
			row['lastName'] = lastNames[Math.floor(Math.random() * lastNames.length)];
			row['name'] = row['firstName'] + ' ' + row['lastName'];
			row['productName'] = productNames[productindex];
			row['price'] = price;
			row['quantity'] = quantity;
			row['total'] = price * quantity;
			const date = new Date();
			date.setFullYear(2016, Math.floor(Math.random() * 11), Math.floor(Math.random() * 27));
			date.setHours(0, 0, 0, 0);
			row['date'] = date;
			data[i] = row;
		}
		return data;
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.generateData(100),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'available: boolean',
			'date: date'
		]
	});
	freezeHeader = true;
	groupLayout = 'classic';
	keyboardNavigation = true;
	onInit = () => {
		this.pivottable.current.nativeElement.rows[0].expanded = true;
		this.pivottable.current.nativeElement.rows[1].expanded = true;
	};
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
		label: 'Available',
		dataField: 'available',
		dataType: 'boolean',
		allowRowGroup: true,
		rowGroup: true
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	} // column is not rendered, because it is neither "pivot", "rowGroup", nor it has "summary"
	];

	handleChange(event) {
		if (event.detail.value) {
			this.pivottable.current.groupLayout = 'default';
			this.toggleButtonLabel.current.innerHTML = 'classic';
		} else {
			this.pivottable.current.groupLayout = 'classic';
			this.toggleButtonLabel.current.innerHTML = 'default';
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
				<div className="demo-description">This demo shows how to display PivotTable row nesting (based on <strong>rowGroup</strong> columns)
			        in a classic, OLAP, layout. In this layout, there is a separate column
			        for each level of nesting. Clicking the toggle button will change to the
			        default, tree grid-like, style with a separate row for each record in the
			        hierarchy.</div>
				<PivotTable ref={this.pivottable} id="pivotTable"
					dataSource={this.dataSource}
					freezeHeader={this.freezeHeader}
					groupLayout={this.groupLayout}
					keyboardNavigation={this.keyboardNavigation}
					onInit={this.onInit}
					columns={this.columns}></PivotTable>
				<div className="options">
					<div className="option">
						<ToggleButton id="toggleButton" onChange={this.handleChange.bind(this)}>Change <strong>groupLayout</strong> to '<span ref={this.toggleButtonLabel} id="toggleButtonLabel">default</span>'</ToggleButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
