import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {

	dataSource = new window.Smart.DataAdapter({
		beforeLoadComplete: (data) => {
			//Handle Data from the Server before the DataAdapter handles it
			return JSON.parse(data);
		},
		onBindingComplete: (boundSource) => {
			//Modify the DataAdapter data before it is handled by the Scheduler
			const today = new Date(),
				year = today.getFullYear(),
				month = today.getMonth(),
				data = boundSource.data;

			for (let i = 0; i < data.length; i++) {
				const dateStart = data[i].dateStart;
				data[i].dateStart = new Date(year, month, dateStart.getDate(), dateStart.getHours(), dateStart.getMinutes());
			}
		},
		dataSource: 'scheduler_data.php',
		dataSourceType: 'json',
		dataFields: [{
			name: 'id',
			map: 'EmployeeId',
			dataType: 'number'
		},
		{
			name: 'dateStart',
			map: 'HireDate',
			dataType: 'date'
		},
		{
			name: 'label',
			map: 'FirstName',
			dataType: 'string'
		},
		{
			name: 'description',
			map: 'Title',
			dataType: 'string'
		}
		]
	});

	view = 'month';

	views = ['day', 'week', 'month'];

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.dataSource} views={this.views} view={this.view}></Scheduler>
				<div className="options">
					<div className="description">
						<h3>Server-Side Events Loading with MySql and PHP</h3>
						Data in this demo is loaded on demand from MySql Database and especially
			            the 'Employees' table of the Northwind Database. Server request is made
			            when you refresh the page. This is achieved by using the Smart.DataAdapter
			            by setting it to the <b>dataSource</b> property of the Smart.Scheduler. The
			            Server reponse represents a JSON array which contains the records for the
			            Employees table.</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
