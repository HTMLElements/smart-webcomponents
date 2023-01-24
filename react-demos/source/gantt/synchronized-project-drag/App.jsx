import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {

	dataSource = [{
		//Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
		label: 'Project 1',
		synchronized: true,
		dragProject: true,
		expanded: true,
		type: 'project',
		tasks: [{
			label: 'Task 1.1',
			minDateStart: '2020-02-10',
			maxDateEnd: '2021-08-10',
			dateStart: '2020-05-10',
			dateEnd: '2021-04-10',
			type: 'task'
		},
		{
			label: 'Task 1.2',
			minDateStart: '2020-03-10',
			maxDateEnd: '2021-11-10',
			dateStart: '2020-03-27',
			dateEnd: '2021-06-10',
			type: 'task'
		},
		{
			label: 'Milestone 1',
			dateEnd: '2021-03-15',
			type: 'milestone'
		}
		]
	},
	{
		label: 'Task 3',
		dateStart: '2021-06-21',
		dateEnd: '2021-12-10',
		type: 'task'
	}
	];


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p> <b>Description:</b> 'Project 1' is <b>synchronized</b> and <b>dragProject</b> is
			        enabled. This means that the positioned and druation of the project depends
			        on it's sub-tasks. However the project can still be dragged along with
			        it's sub-tasks.</p>
				<GanttChart dataSource={this.dataSource}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
