import React from "react";
import ReactDOM from "react-dom";
import { Grid } from 'smart-webcomponents-react/grid';

class App extends React.Component {

    appearance = {
		alternationStart: 0,
		alternationCount: 2
	}
	
	sorting = {
		enabled: true
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
	
	grouping = {
		enabled: true,
		renderMode: 'basic'
	}
	
	dataSource = new window.Smart.DataAdapter({
		dataSource: './grid_data.php',
		dataSourceType: 'json',
		dataFields: [
			'CompanyName: string',
			'ContactName: string',
			'ContactTitle: string',
			'Address: string',
			'City: string',
			'Country: string'
		]
	})
	
	columns = [
		{ label: 'Company Name', dataField: 'CompanyName' },
		{ label: 'Contact Name', dataField: 'ContactName' },
		{ label: 'Contact Title', dataField: 'ContactTitle' },
		{ label: 'Address', dataField: 'Address' },
		{ label: 'City', dataField: 'City' },
		{ label: 'Country', dataField: 'Country' }
	]

	render() {
		return (
			<div>
			    <div className="demo-description">This demo shows how to load data from MySQL Database and PHP. We will
			        obtain the data from MySql Database and especially the 'Customers' table
			        of the Northwind Database.</div>
			    <Grid dataSource={this.dataSource} columns={this.columns} selection={this.selection} appearance={this.appearance} grouping={this.grouping} ref="grid" id="grid"></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
