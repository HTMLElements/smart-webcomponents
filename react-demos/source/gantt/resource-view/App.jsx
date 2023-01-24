import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	dataSource = [{
		label: 'Office Configuration',
		synchronized: true,
		expanded: true,
		type: 'task',
		disableResources: true,
		tasks: [{
			label: 'Office Setup',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Office Acquiring',
				dateStart: '2020-01-02',
				dateEnd: '2020-01-05',
				type: 'task',
				connections: [{
					target: 3,
					type: 1
				}],
				resources: [{
					id: 'taylor',
					label: 'Taylor'
				}, {
					id: 'michael',
					label: 'Michael'
				}]
			},
			{
				label: 'Office Interior',
				dateStart: '2020-01-05',
				dateEnd: '2020-01-15',
				type: 'task',
				connections: [{
					target: 4,
					type: 0
				}],
				resources: [{
					id: 'anna',
					label: 'Anna'
				}, {
					id: 'samantha',
					label: 'Samantha'
				}, {
					id: 'christina',
					label: 'Christina'
				}]
			},
			{
				label: 'Office Security',
				dateStart: '2020-01-05',
				dateEnd: '2020-01-10',
				type: 'task',
				connections: [{
					target: 5,
					type: 1
				}],
				resources: {
					id: 'tommy',
					label: 'Tommy'
				}
			}
			]
		},
		{
			label: 'Employee Positioning',
			dateStart: '2020-01-11',
			dateEnd: '2020-01-15',
			type: 'task',
			resources: {
				id: 'carol',
				label: 'Carol'
			}
		},
		{
			label: 'Cleaners',
			dateStart: '2020-01-10',
			dateEnd: '2020-01-15',
			type: 'task',
			resources: {
				id: 'rachel',
				label: 'Rachel'
			}
		},
		{
			label: 'Catering',
			dateStart: '2020-01-11',
			dateEnd: '2020-01-16',
			type: 'task'
		},
		{
			label: 'Transport',
			dateStart: '2020-01-12',
			dateEnd: '2020-01-17',
			type: 'task'
		},
		{
			label: 'Human Resources',
			dateStart: '2020-01-10',
			dateEnd: '2020-01-20',
			type: 'task',
			resources: [{
				id: 'annabell',
				label: 'Annabell'
			}, {
				id: 'monica',
				label: 'Monica'
			}]
		}
		]
	},
	{
		label: 'Operations',
		synchronized: true,
		expanded: true,
		disableResources: true,
		type: 'project',
		tasks: [{
			label: 'Development',
			dateStart: '2020-01-20',
			dateEnd: '2020-02-01',
			type: 'task',
			resources: [{
				id: 'jason',
				label: 'Jason'
			}, {
				id: 'aaron',
				label: 'Aaron'
			}]
		},
		{
			label: 'Marketing',
			dateStart: '2020-01-10',
			dateEnd: '2020-01-31',
			type: 'task',
			resources: {
				id: 'sonya',
				label: 'Sonya'
			}
		},
		{
			label: 'Quality Assurance',
			dateStart: '2020-02-01',
			dateEnd: '2020-02-05',
			type: 'task',
			resources: {
				id: 'rick',
				label: 'Rick'
			}
		},
		{
			label: 'Market Researchers',
			dateStart: '2020-01-01',
			dateEnd: '2020-01-05',
			type: 'task',
			resources: ['jason', 'sonya']
		},
		{
			label: 'Managers',
			dateStart: '2020-01-20',
			dateEnd: '2020-01-31',
			type: 'task',
			resources: {
				id: 'ryan',
				label: 'Ryan'
			}
		}
		]
	},
	{
		label: 'Production',
		synchronized: true,
		expanded: true,
		disableResources: true,
		type: 'project',
		progress: 50,
		resources: 4,
		tasks: [{
			label: 'Technology',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Updates',
				dateStart: '2020-01-16',
				dateEnd: '2020-01-20',
				type: 'task',
				connections: [{
					target: 19,
					type: 0
				}],
				resources: {
					id: 'oliver',
					label: 'Oliver'
				}
			},
			{
				label: 'Lifecycle',
				dateStart: '2020-01-16',
				dateEnd: '2020-01-18',
				type: 'task',
				connections: [{
					target: 20,
					type: 1
				}],
			},
			{
				label: 'Testing',
				dateStart: '2020-01-20',
				dateEnd: '2020-01-25',
				type: 'task',
				resources: {
					id: 'jessica',
					label: 'Jessica'
				}
			}
			]
		},
		{
			label: 'Servers and Backup',
			dateStart: '2020-01-10',
			dateEnd: '2020-01-12',
			type: 'task',
			resources: 'oliver'
		},
		{
			label: 'Meetings',
			dateStart: '2020-01-12',
			dateEnd: '2020-01-15',
			type: 'task',
			resources: 'ryan'
		},
		{
			label: 'Feedback and Improvements',
			dateStart: '2020-02-01',
			dateEnd: '2020-02-10',
			type: 'task'
		}
		]
	}
	];

	taskColumns = [{
		label: 'Task Name',
		value: 'label',
		size: '40%'
	},
	{
		label: 'Start Time',
		value: 'dateStart',
		size: '25%'
	},
	{
		label: 'Assignee',
		value: 'resources',
		size: '20%',
		formatFunction: function (data, taskIndex) {
			const gantt = this,
				resources = gantt.resources,
				tasks = gantt.tasks,
				getResource = (d) => resources.find((res) => res.id.toString() === d.toString());

			if (tasks[taskIndex].disableResources) {
				return '';
			}

			if (!data.length) {
				return '<span className="gantt-chart-task-assignee unassigned">?</span>';
			}
			else if (data.length === 1) {
				return `<span>${getResource(data[0]).label}</span>`;
			}
			else {
				let result = '';
				for (let i = 0; i < data.length; i++) {
					const resource = getResource(data[i]);
					if (resource) {
						result += `<span className="gantt-chart-task-assignee ${resource.id.toLowerCase()}">${resource.label.charAt(0)}</span>`;
					}
				}
				return result;
			}
		}
	},
	{
		label: 'Duration',
		value: 'duration'
	},
	];

	treeSize = '30%';

	durationUnit = 'day';

	hideResourcePanel = true;

	view = 'resource';

	timelineHeaderFormatFunction(date, type) {
		const gantt = this.ganttchart.current;
		
		if (type === 'year') {
			return date.toLocaleDateString(gantt.locale, { year: gantt.yearFormat });
		}

		if (type === 'month') {
			return date.toLocaleDateString(gantt.locale, { month: gantt.monthFormat });
		}

		if (type === 'week') {
			const startDayOfWeek = new Date(date),
				endDateOfWeek = new Date(date);
			endDateOfWeek.setDate(date.getDate() + 6);

			return startDayOfWeek.toLocaleDateString(gantt.locale, {
				day: 'numeric',
				month: gantt.monthFormat,
				year: gantt.yearFormat
			}) + ' - ' +
				endDateOfWeek.toLocaleDateString(gantt.locale, {
					day: 'numeric',
					month: gantt.monthFormat,
					year: gantt.yearFormat
				});
		}

		if (type === 'day') {
			return date.toLocaleDateString(gantt.locale, {
				day: 'numeric',
				month: gantt.monthFormat
			});
		}
	}

	handleChange(event) {
		this.ganttchart.current.view = event.detail.value ? 'resource' : 'week';
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<p> <b>Description</b>
						<br />Multiple tasks with resources assigned to some of them are displayed inside
			            the GanttChart.
			            <br />Those that do not have tasks assigned have a question mark. Projects are
			            not allowed to have resources assigned to them, thanks to the <b>disableResources</b> property.
			            <br
						/>A formatFunction is applied to the "Assignee" column which displays tasks
			            with multiple resources assigned in a different way.
			            <br />The Resource Panel is hidden in order to see only the Tasks.</p>
				</div>
				<GanttChart ref={this.ganttchart} id="ganttChart" dataSource={this.dataSource} taskColumns={this.taskColumns} treeSize={this.treeSize}
					durationUnit={this.durationUnit} hideResourcePanel={this.hideResourcePanel} view={this.view}
					timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}></GanttChart>
				<div className="options">
					<h3>Switch view:</h3>
					<div className="option">
						<CheckBox checked id="resourceView" onChange={this.handleChange.bind(this)}>Resource View</CheckBox>
					</div>
					<div className="option">Resource view displays groups the tasks according to their assigned resources.
					Tasks that do not have resources assigned are added to the "Unassigned"
			            group. Resource groups are sorted alphabetically.</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
