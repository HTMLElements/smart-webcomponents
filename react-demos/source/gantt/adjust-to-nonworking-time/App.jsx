import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttChart = React.createRef();
		this.button = React.createRef();
	}

	adjustToNonwokringTime = true;

	nonworkingDays = [0, 6];

	nonworkingHours = [[18, 6]];

	durationUnit = 'day';

	view = 'week';

	treeSize = '25%';

	disableSelection = true;

	keyboardNavigation = true;

	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '40%'
	},
	{
		label: 'Expected End Date',
		value: 'dateEnd'
	},
	{
		label: 'Duration (days)',
		value: 'duration'
	}
	];

	dataSource = [{
		label: 'Review announcement blog',
		dateStart: '2021-01-10',
		dateEnd: '2021-01-15'
	},
	{
		label: 'Company dogs email newsletter',
		dateStart: '2021-01-01',
		dateEnd: '2021-01-05'
	},
	{
		label: 'Launch new home page',
		dateStart: '2021-01-11',
		dateEnd: '2021-01-16'
	},
	{
		label: 'Establish Mars Colony',
		dateStart: '2021-01-17',
		dateEnd: '2021-01-19'
	},
	{
		label: 'Choose flight menu',
		dateStart: '2021-01-02',
		dateEnd: '2021-01-06'
	},
	{
		label: 'Find crew',
		dateStart: '2021-01-01',
		dateEnd: '2021-01-10'
	},
	{
		label: 'Test hibernation boxes',
		dateStart: '2021-01-24',
		dateEnd: '2021-01-28'
	}
	];

	handleClick() {
		const that = this,
			ganttChart = that.ganttChart.current,
			button = that.button.current;

		ganttChart.adjustToNonworkingTime = !ganttChart.adjustToNonworkingTime;
		button.innerHTML = 'Click to ' + (ganttChart.adjustToNonworkingTime ? 'Disable' : 'Enable');
	}

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<GanttChart ref={this.ganttChart} id="gantt" adjustToNonwokringTime={this.adjustToNonwokringTime}
					nonworkingDays={this.nonworkingDays}
					nonworkingHours={this.nonworkingHours}
					durationUnit={this.durationUnit}
					view={this.view}
					treeSize={this.treeSize}
					disableSelection={this.disableSelection}
					keyboardNavigation={this.keyboardNavigation}
					taskColumns={this.taskColumns} dataSource={this.dataSource}></GanttChart>
				<div class="options">
					<h3>Adjust To Nonworking Time</h3>
					<div className="option">
						<p>The <b>adjustToNonworkingTime</b> determines whether the tasks are displayed
							according to the working time inside the Timeline. By default the proeprty
							is disabled and tasks are displayed according to the calendar time inside
							the timeline. When enabled, the <b>dateEnd</b> of the tasks is recalculated
							according to the duration in working time only. Work time is determined
							by the <b>nonworkingDays</b> and <b>nonwokringHours</b> properties.</p>
					</div>
					<div className="option">
						<p>Click on the button to enable or disable the adjustment to working time</p>
						<Button
							ref={this.button} id="adjust" onClick={this.handleClick.bind(this)}>Click To Enable</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
