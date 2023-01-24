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
		dataSource: './common/employees.csv',
		dataFields: [{
				name: 'EmployeeKey',
				dataType: 'number'
			},
			{
				name: 'ParentEmployeeKey',
				dataType: 'number'
			},
			{
				name: 'FirstName',
				dataType: 'string'
			},
			{
				name: 'LastName',
				dataType: 'string'
			},
			{
				name: 'Title',
				dataType: 'string'
			},
			{
				name: 'HireDate',
				dataType: 'date'
			},
			{
				name: 'BirthDate',
				dataType: 'date'
			},
			{
				name: 'Phone',
				dataType: 'string'
			},
			{
				name: 'Gender',
				dataType: 'string'
			},
			{
				name: 'DepartmentName',
				dataType: 'string'
			}
		]
	})
	
	columns = [{
			label: 'FirstName',
			dataField: 'FirstName',
			width: 200
		},
		{
			label: 'LastName',
			dataField: 'LastName',
			width: 200
		},
		{
			label: 'Department Name',
			dataField: 'DepartmentName',
			width: 150
		},
		{
			label: 'Title',
			dataField: 'Title',
			width: 300
		},
		{
			label: 'Birth Date',
			dataField: 'BirthDate',
			cellsFormat: 'd',
			width: 120
		},
		{
			label: 'Hire Date',
			dataField: 'HireDate',
			cellsFormat: 'd',
			width: 120
		},
		{
			label: 'Phone',
			dataField: 'Phone',
			width: 120
		}
	]

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        	<h1>DataGrid Data binding to CSV data</h1>
			        <p>The DataGrid component in this demo, displays data records imported from
			            a CSV file.</p>
			    </div>
			    <Grid appearance={this.appearance} selection={this.selection} sorting={this.sorting} dataSource={this.dataSource} columns={this.columns} ref="grid"></Grid>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
