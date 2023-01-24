import React from "react";
import ReactDOM from "react-dom";
import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttChart = React.createRef();
		this.intervalInput = React.createRef();
		this.shaderSwitch = React.createRef();
		this.indicatorSwitch = React.createRef();

		const today = new Date(),
			year = today.getFullYear(),
			month = today.getMonth(),
			date = today.getDate();

		this.dateStart = new Date(year, month, date - 3);

		this.dateEnd = new Date(year, month, date + 9);

		this.dataSource = [{
			label: 'PRD & User-Stories',
			dateStart: new Date(year, month, date - 2),
			dateEnd: new Date(year, month, date - 1),
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Persona & Journey',
			dateStart: new Date(year, month, date - 1),
			dateEnd: new Date(year, month, date),
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Architecture',
			dateStart: new Date(year, month, date),
			dateEnd: new Date(year, month, date + 1),
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Prototyping',
			dateStart: new Date(year, month, date + 1),
			dateEnd: new Date(year, month, date + 2),
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Design',
			dateStart: new Date(year, month, date + 2),
			dateEnd: new Date(year, month, date + 3),
			class: 'design-team',
			type: 'task'
		},
		{
			label: 'Development',
			dateStart: new Date(year, month, date + 3),
			dateEnd: new Date(year, month, date + 4),
			class: 'dev-team',
			type: 'task'
		},
		{
			label: 'Testing & QA',
			dateStart: new Date(year, month, date + 4),
			dateEnd: new Date(year, month, date + 5),
			class: 'qa-team',
			type: 'task'
		},
		{
			label: 'UAT Test',
			dateStart: new Date(year, month, date + 5),
			dateEnd: new Date(year, month, date + 6),
			class: 'product-team',
			type: 'task'
		},
		{
			label: 'Handover & Documentation',
			dateStart: new Date(year, month, date + 6),
			dateEnd: new Date(year, month, date + 7),
			class: 'marketing-team',
			type: 'task'
		},
		{
			label: 'Release',
			dateStart: new Date(year, month, date + 7),
			dateEnd: new Date(year, month, date + 8),
			class: 'release-team',
			type: 'task'
		}
		];
	}

	view = 'week';

	shadeUntilCurrentTime = true;

	currentTimeIndicator = true;

	currentTimeIndicatorInterval = 60;

	taskColumns = [{
		label: 'Tasks',
		value: 'label'
	}];

	handleIntervalChange() {
		this.ganttChart.current.currentTimeIndicatorInterval = parseInt(this.intervalInput.current.value);
	}

	handleShadeChange() {
		this.ganttChart.current.shadeUntilCurrentTime = this.shaderSwitch.current.checked;
	}

	handleIndicatorChange() {
		this.ganttChart.current.currentTimeIndicator = this.indicatorSwitch.current.checked;
	}

	init() {

	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<GanttChart ref={this.ganttChart} id="gantt"
					dateStart={this.dateStart} dateEnd={this.dateEnd}
					dataSource={this.dataSource} view={this.view}
					shadeUntilCurrentTime={this.shadeUntilCurrentTime}
					currentTimeIndicator={this.currentTimeIndicator}
					currentTimeIndicatorInterval={this.currentTimeIndicatorInterval}
					taskColumns={this.taskColumns}></GanttChart>

				<div className="options">
					<div className="option">
						<h4>Current Time Indicator:</h4>
						<SwitchButton ref={this.indicatorSwitch} onChange={this.handleIndicatorChange.bind(this)} checked></SwitchButton>
					</div>
					<div className="option">
						<h4>Shade Untill Current Time:</h4>
						<SwitchButton ref={this.shaderSwitch} onChange={this.handleShadeChange.bind(this)} id="shadeUntilCurrentTime" checked></SwitchButton>
					</div>
					<div className="option">
						<h4>Current Time Indicator/Shader Update Interval:</h4>
						<NumberInput ref={this.intervalInput} onChange={this.handleIntervalChange.bind(this)} value={60}
							min={1}></NumberInput>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
