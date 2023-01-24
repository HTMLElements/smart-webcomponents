import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {

	dataSource = new window.Smart.DataAdapter({
		dataSource: './../../../source/scheduler/load-from-icalendar/icalendar.ics',
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

	firstDayOfWeek = 1;

	view = 'month';

	views = ['day', 'week', 'month'];

	timelineDayScale = 'halfHour';

	resources = [{
		label: 'Priority',
		value: 'priorityId',
		dataSource: [{
			label: 'Low Priority',
			id: 1,
			backgroundColor: '#1e90ff'
		}, {
			label: 'Medium Priority',
			id: 2,
			backgroundColor: '#ff9747'
		}]
	}];

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler id="scheduler" dataSource={this.dataSource} firstDayOfWeek={this.firstDayOfWeek}
					view={this.view}
					views={this.views}
					timelineDayScale={this.timelineDayScale}
					resources={this.resources}></Scheduler>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
