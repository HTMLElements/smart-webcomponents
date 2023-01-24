import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	view = 'day';

	treeSize = '25%';

	durationUnit = 'hour';

	taskColumns = [{
		label: 'Employee',
		value: 'label'
	},
	{
		label: 'From',
		value: 'dateStart'
	},
	{
		label: 'Office Time',
		value: 'duration',
		size: '20%'
	}
	];

	dataSource = [{
		label: 'Beth',
		dateStart: '2021-11-1T07:30:00',
		duration: 8,
		class: 'beth',
		progress: 45,
		segments: [{
			label: 'Morning',
			dateStart: '2021-11-1T07:30:00',
			dateEnd: '2021-11-1T11:30:00'
		},
		{
			label: 'Afternoon',
			dateStart: '2021-11-1T13:00:00',
			dateEnd: '2021-11-1T17:30:00'
		}
		],
		indicators: [{
			label: 'Lunch Break',
			date: '2021-11-1T11:45:00',
			className: 'material-icons',
			icon: '\\e56c'
		}]
	},
	{
		label: 'William',
		dateStart: '2021-11-1T08:00:00',
		duration: 8,
		class: 'william',
		progress: 25,
		segments: [{
			label: 'Morning',
			dateStart: '2021-11-1T08:00:00',
			dateEnd: '2021-11-1T12:00:00'
		},
		{
			label: 'Afternoon',
			dateStart: '2021-11-1T13:15:00',
			dateEnd: '2021-11-1T17:30:00'
		}
		],
		indicators: [{
			label: 'Lunch Break',
			date: '2021-11-1T12:15:00',
			className: 'material-icons',
			icon: '\\ea64'
		}]
	},
	{
		label: 'Emma',
		dateStart: '2021-11-1T09:30:00',
		duration: 9,
		class: 'emma',
		progress: 50,
		segments: [{
			dateStart: '2021-11-1T09:30:00',
			dateEnd: '2021-11-1T12:00:00',
		},
		{
			dateStart: '2021-11-1T13:30:00',
			dateEnd: '2021-11-1T15:00:00',
		},
		{
			dateStart: '2021-11-1T16:30:00',
			dateEnd: '2021-11-1T18:00:00',
		}
		],
		indicators: [{
			label: 'Preview Docs',
			date: '2021-11-1T08:00:00',
			className: 'material-icons',
			icon: '\\f040',
			tooltip: 'Preview the documents'
		},
		{
			label: 'Lunch Break',
			date: '2021-11-1T12:15:00',
			className: 'material-icons',
			icon: '\\f1e9'
		},
		{
			label: 'Metting',
			date: '2021-11-1T15:15:00',
			className: 'material-icons',
			icon: '\\f233'
		}
		]
	},
	{
		label: 'Team Oliver',
		synchronized: true,
		class: 'team-oliver',
		expanded: true,
		indicators: [{
			label: 'Metting',
			date: '2021-11-1T08:00:00',
			className: 'material-icons',
			icon: '\\f233',
			tooltip: 'Lunch Break End'
		}],
		tasks: [{
			label: 'Oliver',
			dateStart: '2021-11-1T010:30:00',
			duration: 7.5,
			class: 'oliver',
			progress: 75,
		},
		{
			label: 'Jason',
			dateStart: '2021-11-1T09:30:00',
			duration: 9,
			class: 'jason',
			progress: 15
		},
		{
			label: 'Alex',
			dateStart: '2021-11-1T09:00:00',
			duration: 10,
			class: 'alex',
			progress: 15,
			indicators: [{
				label: 'Lock',
				date: '2021-11-1T19:10:00',
				className: 'material-icons',
				icon: '\\e73c',
				tooltip: 'Remember to lock the office door'
			}]
		}
		]
	},
	{
		label: 'Lucas',
		dateStart: '2021-11-1T13:00:00',
		duration: 4,
		class: 'lucas',
		indicators: [{
			label: 'Late',
			date: '2021-11-1T12:00:00',
			className: 'material-icons',
			icon: '\\e8b5',
			tooltip: 'Late for work'
		},
		{
			label: 'Early',
			date: '2021-11-1T17:10:00',
			className: 'material-icons',
			icon: '\\f1bb',
			tooltip: 'Left early today'
		}
		]
	},
	{
		label: 'Michael',
		dateStart: '2021-11-1T11:00:00',
		duration: 8,
		class: 'michael',
		indicators: [{
			date: '2021-11-1T10:30:00',
			className: 'material-icons',
			icon: '\\e7fe',
			tooltip: 'The new guy'
		}]
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
					taskColumns={this.taskColumns}
					dataSource={this.dataSource}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
