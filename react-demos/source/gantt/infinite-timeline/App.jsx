import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {

	infiniteTimeline = true;

	infiniteTimelineStep = 10;

	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '60%'
	},
	{
		label: 'Expected End Date',
		value: 'dateEnd'
	}];

	dataSource = [{
		label: 'PRD & User-Stories',
		dateStart: '2021-01-10',
		dateEnd: '2022-03-10'
	},
	{
		label: 'Persona & Journey',
		dateStart: '2021-02-01',
		dateEnd: '2022-03-30'
	},
	{
		label: 'Architecture',
		dateStart: '2021-02-11',
		dateEnd: '2022-05-16'
	},
	{
		label: 'Prototyping',
		dateStart: '2021-01-17',
		dateEnd: '2022-05-01'
	},
	{
		label: 'Design',
		dateStart: '2021-06-02',
		dateEnd: '2022-08-01'
	},
	{
		label: 'Development',
		dateStart: '2021-08-01',
		dateEnd: '2022-09-10'
	},
	{
		label: 'Testing & QA',
		dateStart: '2021-09-11',
		dateEnd: '2022-12-10'
	}];

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (<GanttChart id="gantt" infiniteTimeline={this.infiniteTimeline}
			infiniteTimelineStep={this.infiniteTimelineStep}
			taskColumns={this.taskColumns} dataSource={this.dataSource}></GanttChart>);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
