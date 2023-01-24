import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {

	view = 'month';

	dateCurrent = new Date(2021, 0, 20);

	dataSource = new window.Smart.DataAdapter({
		dataSource: 'https://calendar.google.com/calendar/ical/jqwidgetstest%40gmail.com/private-d980817fc2fd252df41420619aeeddbb/basic.ics',
		dataSourceType: 'ics',
		dataFields: [{
			name: 'dateStart',
			map: 'DTSTART',
			dataType: 'date'
		},
		{
			name: 'dateEnd',
			map: 'DTEND',
			dataType: 'date'
		},
		{
			name: 'label',
			map: 'SUMMARY',
			dataType: 'string'
		},
		{
			name: 'location',
			map: 'LOCATION',
			dataType: 'string'
		},
		{
			name: 'description',
			map: 'DESCRIPTION',
			dataType: 'string'
		},
		{
			name: 'rrule',
			map: 'RRULE',
			dataType: 'string'
		},
		{
			name: 'extdate',
			map: 'EXDATE',
			dataType: 'string'
		},
		{
			name: 'status',
			map: 'STATUS',
			dataType: 'string'
		},
		{
			name: 'reccurenceId',
			map: 'RECURRENCEID',
			dataType: 'string'
		},
		{
			name: 'uid',
			map: 'UID',
			dataType: 'string'
		},
		{
			name: 'categories',
			map: 'CATEGORIES',
			dataType: 'string'
		},
		{
			name: 'alarm',
			map: 'ALARM',
			dataType: 'any'
		}
		]
	});

	views = ['day', 'week', 'month', 'agenda'];

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Scheduler id="scheduler" view={this.view} dateCurrent={this.dateCurrent} dataSource={this.dataSource} views={this.views}></Scheduler>
				<div class="options">
					<div class="description">
						<h4>Description</h4>
						<p>The demos shows how to load Google Calendar tasks directly via URL.</p>
						<p>Thanks to the Smart.DataAdapter utility it is possible to load Google
			                Calendar events to the Smart.Scheduler via the <b>dataSource</b> property.</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
