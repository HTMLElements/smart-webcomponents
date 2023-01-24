import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Table } from 'smart-webcomponents-react/table';
import { GetData } from './common/data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.table = React.createRef();
		this.button3 = React.createRef();
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: GetData(15),
		dataFields: [
			'id: number',
			'productName: string',
			'quantity: number',
			'price: number',
			'date: date'
		]
	});
	columnReorder = true;
	selection = true;
	sortMode = 'many';
	columns = [{
		label: 'id',
		dataField: 'id',
		dataType: 'number'
	},
	{
		label: 'Product Name',
		dataField: 'productName',
		dataType: 'string'
	},
	{
		label: 'Quantity',
		dataField: 'quantity',
		dataType: 'number',
		formatFunction(settings) {
			settings.template = settings.value + ' cups';
		}
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number'
	},
	{
		label: 'Date Purchased',
		dataField: 'date',
		dataType: 'date'
	}
	];

	handleGetState() {
		this.table.current.getState().then(function (state) {
			alert(JSON.stringify(state));
		});
	}

	handleSaveState() {
		this.table.current.saveState();
		this.button3.current.disabled = false;
	}

	handleLoadState() {
		this.table.current.loadState();
	}

	init() {
		if (window.localStorage.getItem('smartTabletable')) {
			this.button3.current.disabled = false;
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases state maintenance in Table.</div>
				<Table ref={this.table} id="table"
					dataSource={this.dataSource}
					columnReorder={this.columnReorder}
					selection={this.selection}
					sortMode={this.sortMode}
					columns={this.columns}></Table>
				<div className="options">
					<Button id="getState" onClick={this.handleGetState.bind(this)}>Get state</Button>
					<Button id="saveState" onClick={this.handleSaveState.bind(this)}>Save state</Button>
					<Button ref={this.button3} id="loadState" disabled onClick={this.handleLoadState.bind(this)}>Load state</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
