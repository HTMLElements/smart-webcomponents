import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}

	behavior = {
		rowResizeMode: 'growAndShrink'
	};
	layout = {
		rowHeight: 40
	};
	selection = {
		enabled: true,
		mode: 'extended'
	};
	appearance = {
		showRowHeader: true
	};
	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(1000),
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
			dataField: 'quantity'
		},
		{
			label: 'Unit Price',
			dataField: 'price',
			cellsFormat: 'c2'
		},
		{
			label: 'Total',
			dataField: 'total',
			cellsFormat: 'c2'
		}
	];

	handleNoneChange() {
		this.grid.current.behavior.rowResizeMode = 'none';
	}

	handleSplitChange() {
		this.grid.current.behavior.rowResizeMode = 'split';
	}

	handleCurrentColumnChange() {
		this.grid.current.behavior.rowResizeMode = 'growAndShrink';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">The Data grid component supports row resizing in two levels - Grid's 'rowResizeMode'
				property and optionally 'allowResize' smartGrid.Row property. To enable
				row resizing, you need to set the 'rowResizeMode' property to 'split' or
				'growAndShrink'.
			        <br />
					<br />In the 'split' mode, when you resize a row, the next row's height is also
			        affected and the total height of both rows remains constant.
			        <br />In the 'growAndShrink' mode, the resized row grows or shrinks.
			        <br />Each row has 'minHeight' and 'maxHeight' properties which allow you to
			        restrict the resizing of specific rows. You can disable the resize of specific
			        row by setting its 'allowResize' property to false. Resizing requiest a
			        visible Row header which is enabled by setting the 'appearance.showRowHeaderNumber'
			        or 'appearance.showRowHeader' properties to 'true'.
			        <br />To start row's resize, move the mouse cursor over the rows header and
			        at the bottom of a header cell, the cursor is changed to a row resize cursor.
			        Press the mouse button and Drag to resize. When you release the mouse button,
			        the row is resized.</div>
				<Grid ref={this.grid} id="grid"
					behavior={this.behavior}
					layout={this.layout}
					selection={this.selection}
					appearance={this.appearance}
					dataSource={this.dataSource}
					columns={this.columns}></Grid>
				<div className="options">
					<div className="caption">Row Resize Mode</div>
					<div className="option">
						<RadioButton id="none" onChange={this.handleNoneChange.bind(this)}>None</RadioButton>
						<br />
						<br />
						<RadioButton id="split" onChange={this.handleSplitChange.bind(this)}>Split</RadioButton>
						<br />
						<br />
						<RadioButton checked id="currentColumn" onChange={this.handleCurrentColumnChange.bind(this)}>Grow and Shrink</RadioButton>
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
