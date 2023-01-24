import React from "react";
import ReactDOM from "react-dom";
import { Table } from 'smart-webcomponents-react/table';

class App extends React.Component {

	data = [
		{ A: 10, C: 1, D: 'Hello' },
		{ A: '=A1+1', C: 2, D: 'world' },
		{ A: '=A2+1', C: 3, D: '=D1&" "&D2&"!"' },
		{ C: '=SUM(C1:C3)' },
		{},
		{},
		{},
		{ F: '=8+2' },
		{ F: '=PI()' },
		{ A: 10, B: 20, C: 30, D: 11, E: 21, G: '=MAX(A10:E10)' }
	];

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.data,
		dataFields: [
			'A: string',
			'B: string',
			'C: string',
			'D: string',
			'E: string',
			'F: string',
			'G: string'
		]
	});

	editing = true;

	formulas = true;

	keyboardNavigation = true;

	columns = [
		{ label: 'A', dataField: 'A' },
		{ label: 'B', dataField: 'B' },
		{ label: 'C', dataField: 'C' },
		{ label: 'D', dataField: 'D' },
		{ label: 'E', dataField: 'E' },
		{ label: 'F', dataField: 'F' },
		{ label: 'G', dataField: 'G' }
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">This demo showcases the filtering functionality of Table.</div>
				<Table id="table" dataSource={this.dataSource} editing={this.editing} formulas={this.formulas} keyboardNavigation={this.keyboardNavigation} columns={this.columns}></Table>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
