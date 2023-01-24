import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.ganttchart = React.createRef();
	}
	
	sortable = true;
	view = 'week';
	treeSize = 350;
	hideTimelineHeaderDetails = true;
	snapToNearest = true;
	timelineHeaderFormatFunction = function (date, type, isHeaderDetails, value) {
		const ganttChart = this.ganttchart.current;

		if (type === 'day') {
			return date.toLocaleDateString(ganttChart.locale, {
				day: 'numeric',
				month: 'short'
			});
		}
		return value;
	};
	durationUnit = 'day';
	taskColumns = [{
		label: 'Employee',
		value: 'label',
		size: '50%',
	},
	{
		label: 'Start Time',
		value: 'dateStart'
	},
	{
		label: 'Duration',
		value: 'duration',
		size: 30
	}
	];

	dataSource = [{
		label: 'Mission A',
		dateStart: '2021-08-01',
		duration: 10,
		progress: 22,
		expanded: true,
		type: 'project',
		tasks: [{
			label: 'Stage 1',
			dateStart: '2021-08-03',
			duration: 5,
			progress: 100,
			type: 'task'
		},
		{
			label: 'Stage 2',
			dateStart: '2021-08-02',
			duration: 6,
			progress: 50,
			expanded: true,
			type: 'project',
			connections: [{
				target: 3,
				type: 0
			}],
			tasks: [{
				label: 'Task 2.1',
				dateStart: '2021-08-03',
				duration: 2,
				progress: 100,
				type: 'task',
				connections: [{
					target: 4,
					type: 0
				}],
			},
			{
				label: 'Task 2.2',
				dateStart: '2021-08-06',
				duration: 3,
				progress: 80,
				type: 'task',
				connections: [{
					target: 5,
					type: 0
				}],
			},
			{
				label: 'Task 2.3',
				dateStart: '2021-08-10',
				duration: 5,
				progress: 20,
				type: 'task',
				connections: [{
					target: 6,
					type: 1
				}]
			},
			{
				label: 'Task 2.4',
				dateStart: '2021-08-10',
				duration: 4,
				progress: 5,
				type: 'task'
			}
			]
		},
		{
			label: 'Stage 3',
			dateStart: '2021-08-02',
			duration: 6,
			progress: 80,
			type: 'task'
		}
		]
	},
	{
		label: 'Mission B',
		dateStart: '2021-08-01',
		duration: 20,
		progress: 40,
		expanded: true,
		type: 'project',
		tasks: [{
			label: 'Stage 1',
			dateStart: '2021-08-02',
			duration: 8,
			progress: 50,
			expanded: true,
			type: 'project',
			connections: [{
				target: 10,
				type: 2
			},
			{
				target: 11,
				type: 2
			}
			],
			tasks: [{
				label: 'Task 1.1',
				dateStart: '2021-08-02',
				duration: 7,
				progress: 60,
				type: 'task'
			},
			{
				label: 'Task 1.2',
				dateStart: '2021-08-03',
				duration: 7,
				progress: 60,
				type: 'task'
			}
			]
		},
		{
			label: 'Stage 2',
			dateStart: '2021-08-11',
			duration: 8,
			progress: 60,
			expanded: true,
			type: 'project',
			connections: [{
				target: 13,
				type: 2
			}],
			tasks: [{
				label: 'Task 2.1',
				dateStart: '2021-08-11',
				duration: 8,
				progress: 60,
				type: 'task'
			}]
		},
		{
			label: 'Stage 3',
			dateStart: '2021-08-13',
			duration: 6,
			progress: 50,
			expanded: true,
			type: 'project',
			connections: [{
				target: 15,
				type: 2
			},
			{
				target: 16,
				type: 1
			},
			{
				target: 17,
				type: 1
			}
			],
			tasks: [{
				label: 'Task 3.1',
				dateStart: '2021-08-14',
				duration: 5,
				progress: 50,
				type: 'task'
			},
			{
				label: 'Task 3.2',
				dateStart: '2021-08-14',
				duration: 4,
				progress: 50,
				type: 'task'
			},
			{
				label: 'Task 3.3',
				dateStart: '2021-08-14',
				duration: 3,
				progress: 50,
				type: 'task'
			}
			]
		}
		]
	}
	];

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<GanttChart ref={this.ganttchart} id="ganttChart" sortable={this.sortable} onItemClick={this.handleItemClick.bind(this)} view={this.view} treeSize={this.treeSize} hideTimelineHeaderDetails={this.hideTimelineHeaderDetails}
					snapToNearest={this.snapToNearest} timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}
					durationUnit={this.durationUnit} taskColumns={this.taskColumns} dataSource={this.dataSource}></GanttChart>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
