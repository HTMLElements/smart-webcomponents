import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	durationUnit = 'hour';

	taskColumns = [{
		label: 'Employee',
		value: 'id'
	}];

	timelineHeaderFormatFunction(date, type, isHeaderDetailsContainer) {
		if (isHeaderDetailsContainer) {
			return 'Time';
		} 
		else {
			return date.toLocaleTimeString(this.ganttchart.current.locale, {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			});
		}
	};

	dataSource = [{
		id: 'Betty',
		label: 'Morning Shift',
		dateStart: '2021-01-15T04:00:00',
		dateEnd: '2021-01-15T012:30:00',
		class: 'morning-shift',
		type: 'task'
	},
	{
		id: 'William',
		label: 'Afternoon-shift',
		dateStart: '2021-01-15T12:30:00',
		dateEnd: '2021-01-15T20:00:00',
		class: 'afternoon-shift',
		type: 'task'
	},
	{
		id: 'Emma',
		label: 'Half-day',
		dateStart: '2021-01-15T12:30:00',
		dateEnd: '2021-01-15T16:30:00',
		class: 'half-day',
		type: 'task'
	},
	{
		id: 'Oliver',
		label: 'Morning-shift',
		dateStart: '2021-01-15T04:00:00',
		dateEnd: '2021-01-15T12:30:00',
		class: 'morning-shift',
		type: 'task'
	},
	{
		id: 'Jason',
		label: 'Afternoon-shift',
		dateStart: '2021-01-15T12:30:00',
		dateEnd: '2021-01-15T20:00:00',
		class: 'afternoon-shift',
		type: 'task'
	},
	{
		id: 'Alex',
		label: 'Early-morning-support',
		dateStart: '2021-01-15T00:00:00',
		dateEnd: '2021-01-15T08:30:00',
		class: 'early-morning-support',
		type: 'task'
	},
	{
		id: 'Lucas',
		label: 'Half-day',
		dateStart: '2021-01-15T04:00:00',
		dateEnd: '2021-01-15T08:00:00',
		class: 'half-day',
		type: 'task'
	},
	{
		id: 'Michael',
		label: 'Early-morning-support',
		dateStart: '2021-01-15T00:00:00',
		dateEnd: '2021-01-15T08:30:00',
		class: 'early-morning-support',
		type: 'task'
	}
	];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<GanttChart ref={this.ganttchart} durationUnit={this.durationUnit} taskColumns={this.taskColumns} timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)} dataSource={this.dataSource} view="day" treeSize="125"></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
