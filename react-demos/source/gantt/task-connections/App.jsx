import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
		this.dropdownlist = React.createRef();
	}

	dataSource = [{
		//Note: dateStart/dateEnd and min/max of syncronized projects are automatically calculated based on the tasks
		label: 'Project 1',
		synchronized: true,
		expanded: true,
		type: 'project',
		connections: [{
			target: 1,
			type: 0
		}],
		tasks: [{
			label: 'Task 1.1',
			dateStart: '2020-05-10',
			dateEnd: '2021-04-10',
			type: 'task',
			connections: [{
				target: 2,
				type: 2
			}]
		},
		{
			label: 'Task 1.2',
			dateStart: '2020-03-27',
			dateEnd: '2021-06-10',
			type: 'task'
		},
		{
			label: 'Milestone 1',
			dateEnd: '2021-03-15',
			type: 'milestone',
			connections: [{
				target: 4,
				type: 1
			}]
		}
		]
	},
	{
		label: 'Task 2',
		dateStart: '2021-06-21',
		dateEnd: '2021-12-10',
		type: 'task'
	}];

	handleCreate() {
		const task = this.ganttchart.current.tasks[2];

		if (task && task.connections.length) {
			return;
		}

		this.ganttchart.current.createConnection('2-3-0');
		this.dropdownlist.current.insert(4, {
			value: '2-3-0',
			label: 'Task 1.2 - Milestone 1'
		});
	}

	handleRemove() {
		const con = this.dropdownlist.current.selectedValues[0];

		if (con) {
			this.ganttchart.current.removeConnection(con);
			this.dropdownlist.current.removeAt(this.dropdownlist.current.selectedIndexes[0]);
		}
	}

	handleRemoveAll() {
		this.ganttchart.current.removeAllConnections();
		this.dropdownlist.current.clearItems();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div> <b>Description:</b> Connections can be created/removed using methods as
			    well.
				<ul>
					<li>Add Connection - Create's a connection between "Task 1.2" and "Milestone
			            1" of type Start-to-Start(0).</li>
					<li>Remove Specific Connection - Removes the selected connection from the
			            Drop Down List.</li>
					<li>Remove All Connections - Removes all connections between the tasks.</li>
				</ul>
				<GanttChart ref={this.ganttchart} dataSource={this.dataSource}></GanttChart>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<DropDownList ref={this.dropdownlist} id="connectionSelector">
							<ListItem value="0-1-0">Project 1 - Task 1.1</ListItem>
							<ListItem value="1-2-2">Task 1.1 - Task 1.2</ListItem>
							<ListItem value="3-4-1">Milestone 1 - Task 2</ListItem>
						</DropDownList>
					</div>
					<div className="option">
						<Button id="createConButton" onClick={this.handleCreate.bind(this)}>Add Connection</Button>
					</div>
					<div className="option">
						<Button id="deleteConButton" onClick={this.handleRemove.bind(this)}>Remove Connection</Button>
					</div>
					<div className="option">
						<Button id="deleteAllConButton" onClick={this.handleRemoveAll.bind(this)}>Remove All</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
