import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	dataSource = [{
		type: 'project',
		label: 'פרוייקט 1',
		dateStart: '2021-5-2',
		duration: 60 * 24 * 60 * 60 * 1000,
		expanded: true,
		connections: [{
			target: 1,
			type: 0
		}],
		tasks: [{
			type: 'task',
			label: 'משימה 1.1',
			dateStart: '2021-5-5',
			duration: 10 * 24 * 60 * 60 * 1000,
			connections: [{
				target: 2,
				type: 1
			}]
		},
		{
			type: 'task',
			label: 'משימה 1.2',
			dateStart: '2021-5-16',
			duration: 12 * 24 * 60 * 60 * 1000,
			connections: [{
				target: 3,
				type: 1
			}]
		},
		{
			type: 'milestone',
			label: 'אבן דרך 1',
			dateStart: '2021-6-1',
			connections: [{
				target: 4,
				type: 1
			}]
		},
		{
			type: 'task',
			label: 'משימה 1.3',
			dateStart: '2021-6-2',
			duration: 90 * 24 * 60 * 60 * 1000 //90 days in miliseconds
		}
		]
	},
	{
		type: 'project',
		label: 'פרויקט 2',
		dateStart: '2021-10-1',
		duration: 60 * 24 * 60 * 60 * 1000,
		expanded: true,
		connections: [{
			target: 6,
			type: 0
		}],
		tasks: [{
			type: 'task',
			label: 'משימה 2.1',
			dateStart: '2021-10-2',
			duration: 15 * 24 * 60 * 60 * 1000,
			connections: [{
				target: 7,
				type: 0
			}]
		},
		{
			type: 'task',
			label: 'משימה 2.2',
			dateStart: '2021-10-2',
			duration: 10 * 24 * 60 * 60 * 1000,
			connections: [{
				target: 8,
				type: 1
			}]
		},
		{
			type: 'task',
			label: 'משימה 2.3',
			dateStart: '2021-11-1',
			duration: 45 * 24 * 60 * 60 * 1000 //45 days in miliseconds
		}
		]
	}];

	handleChange(event) {
		this.ganttchart.current.rightToLeft = event.detail.value;
	}


	init() {
		const ganttChart = this.ganttchart.current,
			messages = Object.assign({}, ganttChart.messages);

		messages['he'] = {
			'noId': 'smartGanttChart דורש מזהה כדי לשמור / לטעון / לנקות מצב.',
			'ok': 'בסדר',
			'cancel': 'בטל',
			'delete': 'מחק',
			'confirm': '{{componentName}} יימחק לצמיתות, <b> האם אתה בטוח? </b>',
			'taskColumnLabel': 'שם המטלה',
			'label': 'תווית',
			'deleteLink': 'מחק קישור'
		};

		ganttChart.messages = messages;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Gantt Chart fully supports right-to-left (RTL) language locales. You can
			        enable/disable the right-to-left support using rightToLeft property.</div>
				<GanttChart
					ref={this.ganttchart} rightToLeft view="month" locale="he" dataSource={this.dataSource}></GanttChart>
				<div className="options">
					<h3>Gantt Right To Left</h3>
					<div className="option">
						<CheckBox  checked onChange={this.handleChange.bind(this)}>Right To Left</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
