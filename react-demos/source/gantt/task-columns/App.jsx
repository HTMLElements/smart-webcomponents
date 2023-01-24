import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	treeSize = '20%';

	dataSource = [{
		label: 'Learn',
		dateStart: '2021-02-11T7:00:00',
		dateEnd: '2021-02-11T12:00:00',
		type: 'task',
		connections: [{
			target: 1,
			type: 1
		}]
	},
	{
		label: 'Work',
		dateStart: '2021-02-11T7:00:00',
		dateEnd: '2021-02-11T17:30:00',
		type: 'task',
		connections: [{
			target: 3,
			type: 1
		}]
	},
	{
		label: 'Eat',
		dateStart: '2021-02-11T12:00:00',
		dateEnd: '2021-02-11T13:00:00',
		type: 'task'
	},
	{
		label: 'Shop',
		dateStart: '2021-02-11T18:45:00',
		dateEnd: '2021-02-11T19:30:00',
		type: 'task',
		connections: [{
			target: 5,
			type: 1
		}]
	},
	{
		label: 'Train',
		dateStart: '2021-02-11T20:00:00',
		dateEnd: '2021-02-11T21:45:00',
		progress: 50,
		type: 'task'
	},
	{
		label: 'Travel',
		dateStart: '2021-02-11T23:00:00',
		dateEnd: '2021-02-12T06:00:00',
	}
	];

	taskColumns = [{
		label: 'Labels',
		value: 'label',
		//Column min size
		size: '25%',
		//Column size
		min: '30%',
		//Custom format function
		formatFunction: function (label) {
			if (label === 'Learn') {
				return ' <i className="material-icons">&#xE80C;</i>' + label;
			} else if (label === 'Work') {
				return ' <i className="material-icons">&#xE30A;</i>' + label;
			} else if (label === 'Travel') {
				return ' <i className="material-icons">&#xE53D;</i>' + label;
			} else if (label === 'Eat') {
				return ' <i className="material-icons">&#xE56C;</i>' + label;
			} else if (label === 'Shop') {
				return ' <i className="material-icons">&#xE25C;</i>' + label;
			} else if (label === 'Train') {
				return ' <i className="material-icons">&#xE52F;</i>' + label;
			} else {
				return label;
			}
		}
	},
	{
		label: 'Date Start',
		value: 'dateStart',
		//Custom format function
		formatFunction: (date) => new Date(date).toLocaleDateString(this.ganttchart.current.locale, {
			hour: '2-digit',
			minute: '2-digit'
		}),
		min: 100
	},
	{
		label: 'Date End',
		value: 'dateEnd',
		size: '25%',
		min: '30%'
	}
	];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p> <b>Description:</b> Custom Task Columns with custom content.</p>
				<GanttChart ref={this.ganttchart}
					dataSource={this.dataSource} taskColumns={this.taskColumns} treeSize={this.treeSize} view="day"></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
