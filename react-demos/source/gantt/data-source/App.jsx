import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.ganttchart = React.createRef();
		this.button = React.createRef();
		this.log = React.createRef();
	}

	view = 'month';

	treeSize = '25%';

	durationUnit = 'day';

	taskColumns = [{
		label: 'Book Plan',
		value: 'label',
		size: '60%'
	},
	{
		label: 'Duration (days)',
		value: 'duration',
		formatFunction: (duration) => Math.round(duration)
	}
	];

	timelineHeaderFormatFunction = function (date, type, isHeaderDetails, defaultValue) {
		const ganttChart = this.ganttchart.current;

		if (isHeaderDetails) {
			return date.toLocaleDateString(ganttChart.locale, {
				month: 'short',
				year: 'numeric'
			});
		} else {
			return '#' + defaultValue;
		}
	};

	dataSource = [{
		label: 'Chapter 1',
		synchronized: true,
		expanded: true,
		type: 'project',
		tasks: [{
			label: 'Section 1.1',
			dateStart: '2021-01-01',
			duration: 30,
			progress: 35,
			type: 'task'
		},
		{
			label: 'Section 1.2',
			dateStart: '2021-02-01',
			progress: 25,
			duration: 30,
			type: 'task'
		},
		{
			label: 'Section 1.3',
			dateStart: '2021-02-01',
			progress: 10,
			duration: 30,
			type: 'task'
		}
		]
	},
	{
		label: 'End of Chapter 1',
		dateStart: '2021-03-01',
		type: 'milestone'
	},
	{
		label: 'Chapter 2',
		synchronized: true,
		expanded: true,
		type: 'project',
		tasks: [{
			label: 'Section 2.1',
			dateStart: '2021-03-01',
			duration: 30,
			progress: 15,
			type: 'task'
		},
		{
			label: 'Section 2.2',
			dateStart: '2021-04-01',
			progress: 10,
			duration: 30,
			type: 'task'
		},
		{
			label: 'Section 2.3',
			dateStart: '2021-05-01',
			progress: 20,
			duration: 30,
			type: 'task'
		}
		]
	},
	{
		label: 'End of Chapter 2',
		dateStart: '2021-06-01',
		type: 'milestone'
	}
	];

	handleClick() {
		this.log.current.innerHTML = JSON.stringify(this.ganttchart.current.dataSource, null, 4);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Click on the Button to show the current <b>DataSource</b> in the log section.</div>
				<GanttChart ref={this.ganttchart} id="gantt" view={this.view} treeSize={this.treeSize} durationUnit={this.durationUnit} taskColumns={this.taskColumns} timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)} dataSource={this.dataSource}></GanttChart>
				<div className="options">
					<h3>DataSource</h3>
					<div className="option">
						<Button ref={this.button} onClick={this.handleClick.bind(this)} id="showDataSource">Show DataSource</Button>
					</div>
					<div className="option">
						<h4>Log:</h4>

						<div className="log">
							<pre ref={this.log} id="log"></pre>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
