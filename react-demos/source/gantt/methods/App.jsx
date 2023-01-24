import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
	}

	treeSize = '45%';

	dataSource = [{
		label: 'Project 1',
		dateStart: '2020-03-10T12:30:00',
		dateEnd: '2021-06-10T3:59:00',
		expanded: true,
		type: 'project',
		connections: [{
			target: 1,
			type: 0
		}],
		tasks: [{
			label: 'Task 1.1',
			dateStart: '2020-02-10',
			dateEnd: '2021-01-10',
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
			dateStart: '2020-10-10',
			dateEnd: '2021-2-31',
			type: 'task',
			connections: [{
				target: 3,
				type: 1
			}]
		},
		{
			label: 'Project 1.1',
			dateStart: '2020-03-10T12:30:00',
			dateEnd: '2021-06-10T3:59:00',
			expanded: true,
			type: 'project',
			connections: [{
				target: 1,
				type: 0
			}],
			tasks: [{
				label: 'Task 1.1.1',
				dateStart: '2020-02-10',
				dateEnd: '2021-01-10',
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
				label: 'Task 1.1.2',
				dateStart: '2020-10-10',
				dateEnd: '2021-2-31',
				type: 'task',
				connections: [{
					target: 3,
					type: 1
				}]
			}
			]
		}
		]
	},
	{
		label: 'Task 2',
		dateStart: '2020-03-10T15:30:00',
		dateEnd: '2021-08-10',
		type: 'task'
	},
	{
		label: 'Milestone 1',
		dateEnd: '2021-05-24',
		type: 'milestone',
		connections: [{
			target: 5,
			type: 1
		}]
	},
	{
		label: 'Task 3',
		dateStart: '2021-02-05',
		dateEnd: '2021-07-08',
		progress: 50,
		type: 'task'
	},
	{
		label: 'Task 4',
		dateStart: '2020-03-10T15:30:00',
		dateEnd: '2021-08-10',
	}];

	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '40%'
	},
	{
		label: 'Date Start',
		value: 'dateStart',
		//Custom format function
		formatFunction: (date) => new Date(date).toLocaleDateString(this.ganttchart.current.locale, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		})
	},
	{
		label: 'Date End',
		value: 'dateEnd',
		size: '30%'
	}];

	handleUpdate(event) {
		const ganttChart = this.ganttchart.current;
		const taskDetails = {
			label: 'Task Updated Successfully',
			dateEnd: '2021-1-1'
		};
		const targetTask = ganttChart.tasks[0];

		if (!targetTask) {
			return;
		}

		ganttChart.updateTask(0, taskDetails);
		this.button.current.disabled = true;
	}

	handleInsert(event) {
		const tasks = {
			label: 'Inserted Task 1',
			dateStart: '2020-08-10',
			dateEnd: '2020-12-23',
			tasks: [{
				label: 'Inserted Sub-Task 1.1',
				dateStart: '2020-09-01',
				dateEnd: '2020-10-30',
			},
			{
				label: 'Inserted Sub-Task 1.2',
				dateStart: '2020-11-01',
				dateEnd: '2020-12-23',
			}
			]
		};

		this.ganttchart.current.insertTask(0, tasks);
		this.button2.current.disabled = true;
	}

	handleRemove(event) {
		this.ganttchart.current.removeTask(0);
		this.button.current.disabled = false;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description"> <b>Description:</b>  <b>Update</b> method updates the task with index 9 (
			        if there's one). <b>Insert</b> method insert's a Project Task with two sub-tasks
			        at position 8. <b>Remove</b> method removes the first Task.</div>
				<GanttChart	ref={this.ganttchart} treeSize={this.treeSize} dataSource={this.dataSource} taskColumns={this.taskColumns}></GanttChart>
				<div className="options">
					<div className="captions">Settings</div>
					<div className="option">
						<Button ref={this.button} id="updateButton" onClick={this.handleUpdate.bind(this)}>Update</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="insertButton" onClick={this.handleInsert.bind(this)}>Insert</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="removeButton" onClick={this.handleRemove.bind(this)}>Remove</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
