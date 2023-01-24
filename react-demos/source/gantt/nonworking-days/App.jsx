import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {

	dataSource = [{
		label: 'Project 1',
		dateStart: '2020-02-10T12:30:00',
		dateEnd: '2020-02-20T3:59:00',
		type: 'project',
		expanded: true,
		connections: [{
			target: 1,
			type: 0
		}],
		tasks: [{
			label: 'Task 1.1',
			dateStart: '2020-02-24',
			dateEnd: '2020-02-27',
			type: 'task',
			connections: [{
				target: 2,
				type: 1
			},
			{
				target: 4,
				type: 1
			}
			]
		},
		{
			label: 'Task 1.2',
			dateStart: '2020-2-19',
			dateEnd: '2020-2-29',
			type: 'task',
			connections: [{
				target: 3,
				type: 1
			}]
		}
		]
	},
	{
		label: 'Task 2',
		dateStart: '2020-02-21T15:30:00',
		dateEnd: '2020-03-2T15:30:00',
		type: 'task'
	},
	{
		label: 'Milestone 1',
		dateEnd: '2020-02-24',
		type: 'milestone',
		connections: [{
			target: 5,
			type: 1
		}]
	},
	{
		label: 'Task 3',
		dateStart: '2020-02-28',
		dateEnd: '2020-03-02T18:30:00',
		progress: 50,
		type: 'task'
	}
	];


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description"> <b>nonworkingDays</b> colored in gray determine which days of the week
			        are nonworking. Nonwokring days are ignored. This means that dropping a
			        task in a nonworking day will add/remove slack time to it in order to recalculate
			        the start/end date to a working date. Weekends are always colored in light
			        blue.</div>
				<GanttChart view="week" nonworkingDays={[0,1]} dataSource={this.dataSource}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
