import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.ganttchart = React.createRef();
	}

	view = 'week';
	treeSize = 350;
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

	init() {
		const gantt = this.ganttchart.current;

		fetch('./../../../source/gantt/load-from-json/data.json', {
			method: 'GET',
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).then(function (response) {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json();
		}).then(function (data) {
			//Load the data as new DataSource
			gantt.dataSource = data;
		}).catch(function (error) {
			alert(error.message);
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">The <b>DataSource</b> for the <b>Smart.GanttChart</b> is fetched via Ajax
			        and loaded from an external <b>data.json</b> file during window.onload.</div>
				<GanttChart ref={this.ganttchart} id="ganttChart"
					view={this.view} treeSize={this.treeSize} durationUnit={this.durationUnit} taskColumns={this.taskColumns} ></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
