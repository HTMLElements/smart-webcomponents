import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import { GetData } from './common/data'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.grid = React.createRef();
	}
	
	behavior = {
		columnResizeMode: 'growAndShrink'
	}

	appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true
	}

	paging = {
		enabled: true
	}

	pager = {
		visible: true
	}

	sorting = {
		enabled: true
	}

	selection = {
		enabled: true,
		allowCellSelection: true,
		allowRowHeaderSelection: true,
		allowColumnHeaderSelection: true,
		mode: 'extended'
	}

	dataSource = new Smart.DataAdapter({
		dataSource: GetData(500),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'productName: string',
			'quantity: number',
			'price: number',
			'total: number'
		]
	})

	columns = [{
		label: 'First Name',
		dataField: 'firstName',
		columnGroup: 'name'
	},
	{
		label: 'Last Name',
		dataField: 'lastName',
		columnGroup: 'name'
	},
	{
		label: 'Product',
		dataField: 'productName',
		columnGroup: 'order'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		columnGroup: 'order'
	},
	{
		label: 'Unit Price',
		dataField: 'price',
		cellsFormat: 'c2',
		columnGroup: 'order'
	},
	{
		label: 'Total',
		dataField: 'total',
		cellsFormat: 'c2',
		columnGroup: 'order'
	}
	]

	update() {
		this.grid.current.dataSource = new Smart.DataAdapter({
			dataSource: GetData(500),
			dataFields: [
				'id: number',
				'firstName: string',
				'lastName: string',
				'productName: string',
				'quantity: number',
				'price: number',
				'total: number'
			]
		})
	}
	
	updateFirstRow() {
		this.grid.current.dataSource.update(0, GetData(1)[0]);
	}

	updateFirstCell() {
		this.grid.current.dataSource[0].firstName = "Johny";
	}
	
	clear() {
		this.grid.current.dataSource = null;
	}
		
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div>The Grid in this demo displays data in a series of rows and columns. This
			        is the simplest case when the Grid is bound to a local data source.</div>
				<Grid ref={this.grid}
					dataSource={this.dataSource}
					columns={this.columns}
					appearance={this.appearance}
					behavior={this.behavior}
					selection={this.selection}
					paging={this.paging}
					pager={this.pager}
					sorting={this.sorting}
					>
				</Grid>
				  <div className="options">
			        <div className="option">
			            <Button onClick={this.update.bind(this)} id="updateBtn">Update New DataSource</Button>
			        </div>
			        <div className="option">
			            <Button onClick={this.updateFirstRow.bind(this)} id="updateRowBtn">Update First Row Data</Button>
			        </div>
			        <div className="option">
			            <Button onClick={this.updateFirstCell.bind(this)}>Update First Cell</Button>
			        </div>
			        <div className="option">
			            <Button onClick={this.clear.bind(this)} id="clearBtn">Clear Data</Button>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
