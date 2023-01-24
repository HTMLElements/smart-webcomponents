import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	view = 'week';

	treeSize = '25%';

	durationUnit = 'hour';

	tooltip = {
		enabled: true
	};

	hideTimelineHeaderDetails = true;

	timelineHeaderFormatFunction = (date, type, isHeaderDetailsContainer, dateValue) => {
		if (!isHeaderDetailsContainer && type === 'day') {
			return date.toLocaleDateString(this.locale, {
				day: 'numeric',
				month: 'short'
			});
		}
		return dateValue;
	};

	taskColumns = [{
		label: 'Employee',
		value: 'label'
	},
	{
		label: 'From',
		value: 'dateStart',
		formatFunction: (value, item) => {
			return item.dateStart.toLocaleDateString('en', {
				hour: '2-digit',
				minute: '2-digit'
			});
		}
	}
	];

	resourceColumns = [{
		label: 'Name',
		value: 'label',
		size: '50%'
	},
	{
		label: 'Workload',
		value: 'workload',
		formatFunction: (data) => data + 'h'
	}
	];

	dataSource = [{
		label: 'Stage 1',
		synchronized: true,
		expanded: true,
		tooltip: '<b>Custom Tooltip Content</b>',
		tasks: [{
			label: 'Repairs',
			dateStart: '2021-11-1T02:30:00',
			duration: 9.5,
			progress: 45,
			connections: [{
				target: 2,
				type: 1
			}],
			resources: [{
				id: 'david',
				label: 'David'
			}]
		},
		{
			label: 'Rally',
			dateStart: '2021-11-1T13:30:00',
			duration: 12,
			connections: [{
				target: 3,
				type: 1
			}],
			resources: [{
				id: 'mike',
				label: 'Mike'
			}]
		},
		{
			label: 'Rankings Update',
			dateStart: '2021-11-02T07:30:00',
			duration: 8
		}
		]
	},
	{
		label: 'Stage 2',
		synchronized: true,
		expanded: true,
		tasks: [{
			label: 'Repairs & Optimizations',
			dateStart: '2021-11-03T07:30:00',
			duration: 6,
			connections: [{
				target: 6,
				type: 1
			}],
			resources: ['david', {
				id: 'alex',
				label: 'David'
			}]
		},
		{
			label: 'Stastics',
			dateStart: '2021-11-04T07:30:00',
			duration: 8
		}
		]
	},
	{
		label: 'Stage 3',
		synchronized: true,
		expanded: true,
		tasks: [{
			label: 'Preparation',
			dateStart: '2021-11-05T06:30:00',
			duration: 6,
			connections: [{
				target: 9,
				type: 1
			}],
			resources: ['david', 'mike']
		},
		{
			label: 'Rally',
			dateStart: '2021-11-05T013:00:00',
			duration: 13,
			connections: [{
				target: 10,
				type: 1
			}],
			resources: ['mike']
		},
		{
			label: 'Final Rankings',
			dateStart: '2021-11-06T7:30:00',
			duration: 12,
			connections: [{
				target: 11,
				type: 1
			}],
		},
		{
			label: 'Awards',
			dateStart: '2021-11-07T06:00:00',
			duration: 12
		}
		]
	}
	];

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<GanttChart ref={this.ganttchart} id="ganttChart" view={this.view}
					treeSize={this.treeSize}
					durationUnit={this.durationUnit}
					tooltip={this.tooltip}
					hideTimelineHeaderDetails={this.hideTimelineHeaderDetails}
					timelineHeaderFormatFunction={this.timelineHeaderFormatFunction}
					taskColumns={this.taskColumns}
					resourceColumns={this.resourceColumns}
					dataSource={this.dataSource}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
