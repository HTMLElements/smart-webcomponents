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
	    dataSource: './common/beverages.json',
		dataFields: [
			{ name: 'name', dataType: 'string' },
			{ name: 'type', dataType: 'string' },
			{ name: 'calories',dataType: 'int' },
			{ name: 'totalfat', dataType: 'string' },
			{ name: 'protein', dataType: 'string' }
		]
	})
	
	columns = [
	  { label: 'Name', dataField: 'name', width: 250 },
	  { label: 'Beverage Type', dataField: 'type', width: 250 },
	  { label: 'Calories', dataField: 'calories', width: 180 },
	  { label: 'Total Fat', dataField: 'totalfat', width: 120 },
	  { label: 'Protein', dataField: 'protein' }
	]

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        	<h1>DataGrid Data binding to JSON data</h1>
			        <p>The DataGrid component in this demo, displays data records imported from
			            a JSON file.</p>
			    </div>
			    <Grid appearance={this.appearance} selection={this.selection} sorting={this.sorting} dataSource={this.dataSource} columns={this.columns} ref="grid"></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
