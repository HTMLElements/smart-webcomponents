import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	dataSource = [{
		label: 'Building Construction',
		synchronized: true,
		expanded: true,
		type: 'task',
		disableResources: true,
		tasks: [{
			label: 'Architectural Stage',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Architectural Draft',
				dateStart: '2021-09-01',
				dateEnd: '2021-09-11',
				type: 'task',
				connections: [{
					target: 3,
					type: 1
				}],
				resources: [{
					id: 'maya',
					label: 'Maya, Architect',
					maxCapacity: 8
				}],
			},
			{
				label: 'Investor Agreement',
				dateStart: '2021-09-12',
				dateEnd: '2021-09-20',
				type: 'task',
				connections: [{
					target: 4,
					type: 0
				}],
				resources: 'maya'
			},
			{
				label: 'Client Agreement',
				dateStart: '2021-09-21',
				dateEnd: '2021-09-25',
				type: 'task',
				connections: [{
					target: 5,
					type: 0
				}],
				resources: 'maya'
			},
			{
				label: 'Hiring a Construction Contractor',
				dateStart: '2021-09-28',
				dateEnd: '2021-09-31',
				type: 'task',
				resources: [{
					id: 'sean',
					label: 'Sean, Manager',
					maxCapacity: 8
				}]
			}
			]
		},
		{
			label: 'Exterior Construction Stage',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			tasks: [{
				label: 'Underground Parking',
				synchronized: true,
				expanded: true,
				disableResources: true,
				type: 'project',
				tasks: [{
					label: 'Excavation',
					dateStart: '2021-10-04',
					dateEnd: '2021-10-07',
					type: 'task',
					connections: [{
						target: 9,
						type: 1
					}],
					resources: [{
						id: 'mike',
						label: 'Mike, Construction Worker',
						maxCapacity: 8
					},
					{
						id: 'concrete',
						label: 'Concrete, Material',
						value: 150,
						type: 'material'
					}
					]
				},
				{
					label: 'Foundation',
					dateStart: '2021-10-08',
					dateEnd: '2021-10-10',
					type: 'task',
					resources: ['mike', 'concrete']
				}
				]
			},
			{
				label: 'Ground Level',
				synchronized: true,
				expanded: true,
				disableResources: true,
				type: 'project',
				tasks: [{
					label: 'Building Entrance',
					dateStart: '2021-10-13',
					dateEnd: '2021-10-20',
					type: 'task',
					connections: [{
						target: 12,
						type: 0
					}],
					resources: [{
						id: 'joe',
						label: 'Joe, Construction Worker',
						maxCapacity: 8
					}, 'mike']
				},
				{
					label: 'Garages',
					dateStart: '2021-10-14',
					dateEnd: '2021-10-18',
					type: 'task',
					resources: ['joe', 'mike']
				}
				]
			},
			{
				label: 'Floors',
				synchronized: true,
				expanded: true,
				disableResources: true,
				type: 'project',
				tasks: [{
					label: 'Walls',
					dateStart: '2021-10-22',
					dateEnd: '2021-10-25',
					type: 'task',
					connections: [{
						target: 15,
						type: 1
					}],
					resources: ['joe', {
						id: 'bricks',
						label: 'Brick, Material',
						value: 1000,
						type: 'material'
					}]
				},
				{
					label: 'Windows',
					dateStart: '2021-10-26',
					dateEnd: '2021-10-30',
					type: 'task',
					resources: ['joe', 'bricks']
				}
				]
			},
			{
				label: 'General Works',
				synchronized: true,
				expanded: true,
				disableResources: true,
				type: 'project',
				tasks: [{
					label: 'Stairs',
					dateStart: '2021-11-01',
					dateEnd: '2021-11-03',
					connections: [{
						target: 18,
						type: 1
					}],
					type: 'task',
				},
				{
					label: 'Emergency plan',
					dateStart: '2021-11-04',
					dateEnd: '2021-11-06',
					connections: [{
						target: 19,
						type: 1
					}],
					type: 'task'
				},
				{
					label: 'Electricity',
					dateStart: '2021-11-07',
					dateEnd: '2021-11-10',
					type: 'task',
					connections: [{
						target: 20,
						type: 1
					}],
					resources: [{
						id: 'wires',
						label: 'Wires, Material',
						value: 100,
						type: 'material'
					},
					{
						id: 'airConditioners',
						label: 'Air Conditioners',
						value: 2,
						type: 'material'
					},
					{
						id: 'jake',
						label: 'Jake, Electrician'
					}
					]
				},
				{
					label: 'Water Supply',
					dateStart: '2021-11-11',
					dateEnd: '2021-11-15',
					type: 'task',
					connections: [{
						target: 21,
						type: 1
					}],
					resources: [{
						id: 'pipes',
						label: 'Pipes, Material',
						value: 50,
						type: 'material'
					},
					{
						id: 'tom',
						label: 'Tom, Plumber',
						maxCapacity: 8
					}
					]
				},
				{
					label: 'Sanitary Supply',
					dateStart: '2021-11-16',
					dateEnd: '2021-11-20',
					type: 'task',
					resources: ['tom', 'pipes']
				}
				]
			}
			]
		},
		{
			label: 'Interior Construction Stage',
			synchronized: true,
			expanded: true,
			disableResources: true,
			type: 'project',
			connections: [{
				target: 27,
				type: 1
			}],
			progress: 50,
			resources: 4,
			tasks: [{
				label: 'Floor and Ceiling',
				dateStart: '2021-11-21',
				dateEnd: '2021-11-23',
				connections: [{
					target: 24,
					type: 1
				}],
				type: 'task',
			},
			{
				label: 'Walls and Columns',
				dateStart: '2021-11-24',
				dateEnd: '2021-11-30',
				connections: [{
					target: 25,
					type: 1
				}],
				type: 'task',
			},
			{
				label: 'Isolation',
				dateStart: '2021-12-01',
				dateEnd: '2021-12-03',
				connections: [{
					target: 26,
					type: 1
				}],
				type: 'task',
			},
			{
				label: 'Doors',
				dateStart: '2021-12-04',
				dateEnd: '2021-12-05',
				type: 'task'
			}
			]
		},
		{
			label: 'Finishing Stage',
			dateStart: '2021-12-05',
			type: 'milestone'
		}
		]
	}];

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
		label: 'Resource',
		value: 'resources',
		size: '20%',
		formatFunction: function (data, taskIndex) {
			const gantt = document.querySelector('smart-gantt-chart'),
				resources = gantt.resources,
				tasks = gantt.tasks,
				getResource = function (d) {
					return resources.find((res) => res.id.toString() === d.toString()) || null;
				};
			if (tasks[taskIndex].disableResources || !data.length) {
				return '';
			}
			if (data.length === 1) {
				return `<span>${getResource(data[0]).label.split(',')[0]}</span>`;
			} else {
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

	resourceColumns = [{
		label: 'Name',
		value: 'label',
		size: '70%'
	},
	{
		label: 'Allocated',
		value: 'value',
		size: '30',
		formatFunction: (data, index) => {
			const ganttChart = this.ganttchart.current,
				resource = ganttChart.resources[index];
			if (resource) {
				const tasks = ganttChart.tasks;
				let allocated = 0;
				for (let i = 0; i < resource.assignedTo.length; i++) {
					const assignedTask = tasks[resource.assignedTo[i].index];
					allocated += assignedTask.duration * resource.capacity;
				}
				switch (resource.id) {
					case 'bricks':
					case 'airConditioners':
						return `<b>${data}</b>&nbsp;units`;
					case 'pipes':
					case 'wires':
						return `<b>${data}</b>&nbspm`;
					case 'concrete':
						return `<b>${data}</b>&nbsp;m3`;
					default:
						if (!resource.value) {
							return `<b>${Math.round(allocated)}</b>&nbsp;hours`;
						}
						return data;
				}
			}
		}
	}
	];

	treeSize = '30%';

	nonworkingDays = [0, 6];

	resourcePanelSize = '30%';

	durationUnit = 'day';

	snapToNearest = true;

	view = 'week';

	timelineHeaderFormatFunction(date, type) {
		const ganttChart = this.ganttchart.current;

		if (type === 'week') {
			const startDayOfWeek = new Date(date),
				endDateOfWeek = new Date(date);
			endDateOfWeek.setDate(date.getDate() + 6);
			return startDayOfWeek.toLocaleDateString(ganttChart.locale, {
				day: 'numeric',
				month: ganttChart.monthFormat,
				year: ganttChart.yearFormat
			}) + ' - ' +
				endDateOfWeek.toLocaleDateString(ganttChart.locale, {
					day: 'numeric',
					month: ganttChart.monthFormat,
					year: ganttChart.yearFormat
				});
		}
		if (type === 'day') {
			return date.toLocaleDateString(ganttChart.locale, {
				day: 'numeric',
				month: ganttChart.monthFormat
			});
		}
	};

	resourceTimelineView = 'custom';

	resourceTimelineFormatFunction(taskIndexes, resourceIndex, cellDate) {
		const ganttChart = this.ganttchart.current,
			resource = ganttChart.resources[resourceIndex],
			tasks = ganttChart.tasks;

		if (ganttChart.nonworkingDays.includes(cellDate.getDay())) {
			return;
		}

		let total = 0;

		for (let i = 0; i < taskIndexes.length; i++) {
			const task = tasks[taskIndexes[i]];

			if (resource.type === 'material') {
				total += Math.round(resource.value / (task.duration || 1));
			} 
			else {
				total += resource.capacity;
			}
		}

		return total;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<p> <b>Description</b>
						<br />GanttChart Resources can be people and materials. The following demo illustrates
			            how to have multiple types of resources in a single project.
			            <br />The GanttChart represents a Building Construction Project with subtasks
			            and resources assigned to some of them. Tasks with multiple resources assigned
			            have a custom appearance for their <b>resource</b> column.
			            <br />The Resource Panel shows the allocation of the resources according to
			            the days and tasks assigned. The resource Tree and timeline are customized
			            to show different units and resource placement.
			            <br />Saturdays and Sundays are nonworking days and <b>snapToNearest</b> is enabled,
			            which means that the tasks will start and end at the begining of the days.</p>
				</div>
				<GanttChart ref={this.ganttchart} id="ganttChart" dataSource={this.dataSource} taskColumns={this.taskColumns} resourceColumns={this.resourceColumns}
					treeSize={this.treeSize} nonworkingDays={this.nonworkingDays} resourcePanelSize={this.resourcePanelSize} durationUnit={this.durationUnit}
					snapToNearest={this.snapToNearest} view={this.view} timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}
					resourceTimelineView={this.resourceTimelineView} resourceTimelineFormatFunction={this.resourceTimelineFormatFunction.bind(this)}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
