import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	dataSource = [{
		label: 'Preparing',
		synchronized: true,
		expanded: true,
		disableResources: true,
		tasks: [{
			label: 'Plan Finances',
			dateStart: '2020-03-01',
			dateEnd: '2020-03-05',
			resources: [{
				id: 'trina',
				label: 'Trina',
				maxCapacity: 8
			}]
		},
		{
			label: 'Find an Office',
			dateStart: '2020-03-02',
			dateEnd: '2020-03-05',
			progress: 50,
			resources: [{
				id: 'michelle',
				label: 'Michelle',
				capacity: 4,
				maxCapacity: 10,
			}]
		},
		{
			label: 'Hire Staff',
			dateStart: '2020-03-02',
			dateEnd: '2020-03-10',
			resources: [{
				id: 'melanie',
				label: 'Melanie',
				capacity: 8,
				maxCapacity: 10,
			}]
		},
		{
			label: 'Staff Management',
			dateStart: '2020-03-10',
			dateEnd: '2020-03-15'
		},
		{
			label: 'Schedule',
			dateStart: '2020-03-10',
			dateEnd: '2020-03-12',
			resources: [{
				id: 'david',
				label: 'David',
				maxCapacity: 8
			}]
		},
		]
	},
	{
		label: 'Execution',
		synchronized: true,
		expanded: true,
		disableResources: true,
		tasks: [{
			label: 'Product Vision',
			dateStart: '2020-03-15',
			dateEnd: '2020-03-20',
			resources: [{
				id: 'chris',
				label: 'Chris',
				maxCapacity: 12
			}]
		},
		{
			label: 'Product Development',
			dateStart: '2020-03-20',
			dateEnd: '2020-03-31',
			resources: 'chris'
		},
		{
			label: 'Product Release',
			dateStart: '2020-04-01',
			dateEnd: '2020-04-05',
			resources: [{
				id: 'taylor',
				label: 'Taylor',
				capacity: 4,
				maxCapacity: 4
			}]
		}
		]
	},
	{
		label: 'Release',
		synchronized: true,
		expanded: true,
		disableResources: true,
		tasks: [{
			label: 'Release Management',
			dateStart: '2020-04-06',
			dateEnd: '2020-04-10'
		},
		{
			label: 'Updates',
			dateStart: '2020-04-15',
			dateEnd: '2020-05-01',
			resources: 'chris'
		},
		{
			label: 'Upgrades',
			dateStart: '2020-05-01',
			dateEnd: '2020-06-01',
			resources: [{
				id: 'brad',
				label: 'Brad'
			}]
		}
		]
	},
	{
		label: 'Support',
		synchronized: true,
		expanded: true,
		disableResources: true,
		tasks: [{
			label: 'QA',
			dateStart: '2020-04-01',
			dateEnd: '2020-05-01',
			resources: 'chris'
		},
		{
			label: 'Customer Service',
			dateStart: '2020-04-01',
			dateEnd: '2020-05-31',
			resources: 'michelle'
		},
		{
			label: 'Statistics and Data Analysis',
			dateStart: '2020-04-01',
			dateEnd: '2020-05-01'
		}
		]
	}
	];

	taskColumns = [{
		label: 'Name',
		value: 'label',
		size: '40%'
	},
	{
		label: 'From',
		value: 'dateStart',
		size: '20%'
	},
	{
		label: 'To',
		value: 'dateEnd',
		size: '20%'
	},
	{
		label: 'Owner',
		value: 'resources'
	}
	];

	resourceColumns = [{
		label: 'Name',
		value: 'label',
		size: '40%'
	},
	{
		label: 'Completion',
		value: 'progress',
		formatFunction: (data) => data + '%',
		size: '20%'
	},
	{
		label: 'Workload',
		value: 'workload',
		formatFunction: (data) => data + 'h',
		size: '20%'
	},
	{
		label: 'Capacity',
		value: 'capacity',
		formatFunction: (data) => data + 'h',
		size: '20%'
	}
	];

	treeMin = '25%';

	resourcePanelSize = '30%';

	resourceTimelineMode = 'histogram';

	view = 'week';

	timelineHeaderFormatFunction(date, type, isHeaderDetailsContainer) {
		const that = this.ganttchart.current;

		if (isHeaderDetailsContainer) {
			return date.toLocaleDateString(that.locale, {
				month: 'long',
				year: 'numeric'
			});
		}
		else {
			return date.toLocaleDateString(that.locale, {
				day: 'numeric',
				weekday: 'long'
			});
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p> <b>Description:</b> The Resource Timeline displays a histogram of the working
			        time of the resources. The resources represent people that are assigned
			        to different tasks. The resource properties <b>capactiy</b> and <b>maxCapacity</b> determines
			        the capacity and maximal capacity that a person can spend working on a
			        task. If the capacity is above the maximum possible it is collered in red
			        in the histogram.</p>
				<GanttChart ref={this.ganttchart} id="ganttChart" dataSource={this.dataSource} taskColumns={this.taskColumns} resourceColumns={this.resourceColumns} treeMin={this.treeMin}
					resourcePanelSize={this.resourcePanelSize} resourceTimelineMode={this.resourceTimelineMode} view={this.view} timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
