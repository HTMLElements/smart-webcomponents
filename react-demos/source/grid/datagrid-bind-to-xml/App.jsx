import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {

   appearance = {
		alternationStart: 0,
		alternationCount: 2
	}
	
	selection = {
		enabled: true,
		checkBoxes: {
			enabled: true
		}
	}
	
	filtering = {
		enabled: true
	}
	
	sorting = {
		enabled: true
	}
	
	dataSource = new window.Smart.DataAdapter({
	    dataSource: './common/customers.xml',
		root: 'entry',
		record: 'content',
		id: 'CustomerID',
		dataFields: [
			{ name: 'CompanyName', dataType: 'string' },
			{ name: 'ContactName', dataType: 'string' },
			{ name: 'ContactTitle', dataType: 'string' },
			{ name: 'City', dataType: 'string' },
			{ name: 'PostalCode',dataType: 'string' },
			{ name: 'Country', dataType: 'string' }
		]
	})
	
	columns = [
		{ label: 'Company Name', dataField: 'CompanyName', width: 250 },
		{ label: 'Contact Name', dataField: 'ContactName', width: 150 },
		{ label: 'Contact Title', dataField: 'ContactTitle', width: 180 },
		{ label: 'City', dataField: 'City', width: 120 },
		{ label: 'Postal Code', dataField: 'PostalCode', width: 90 },
		{ label: 'Country', dataField: 'Country' }
	]

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        	<h1>DataGrid Data binding to XML data</h1>
			        <p>The DataGrid component in this demo, displays data records imported from
			            a XML file.</p>
			    </div>
			    <Grid appearance={this.appearance} selection={this.selection} sorting={this.sorting} dataSource={this.dataSource} columns={this.columns} ref="grid"></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
