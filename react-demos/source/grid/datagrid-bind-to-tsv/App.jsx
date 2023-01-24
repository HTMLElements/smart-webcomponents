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
		dataSource: './common/homeprices.tsv',
		dataFields: [
			{ name: 'Year', dataType: 'int' },
			{ name: 'HPI', dataType: 'float' },
			{ name: 'BuildCost', dataType: 'float' },
			{ name: 'Population', dataType: 'float' },
			{ name: 'Rate', dataType: 'float' }
		]
	})
	
	columns = [
	  { label: 'Year', dataField: 'Year', width: 200},
	  { label: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
	  { label: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
	  { label: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
	  { label: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
	]

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        	<h1>DataGrid Data binding to TSV data</h1>
			        <p>The DataGrid component in this demo, displays data records imported from
			            a TSV file.</p>
			    </div>
			    <Grid appearance={this.appearance} selection={this.selection} sorting={this.sorting} dataSource={this.dataSource} columns={this.columns} ref="grid"></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
