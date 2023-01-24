import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = [{
			label: 'Design Review',
			dateStart: new Date(currentYear, currentMonth, 1),
			dateEnd: new Date(currentYear, currentMonth, 2),
			allDay: true,
			backgroundColor: '#388E3C',
			repeat: {
				repeatFreq: 'daily',
				repeatInterval: 2,
				repeatEnd: 10,
				exceptions: [{
					date: new Date(currentYear, currentMonth, 5),
					label: 'Official Holliday',
					backgroundColor: '#64DD17'
				},
				{
					date: new Date(currentYear, currentMonth, 7),
					label: 'Day off',
					hidden: true
				},
				{
					date: new Date(currentYear, currentMonth, 15),
					label: 'Day off',
					hidden: true
				},
				{
					date: new Date(currentYear, currentMonth, 9),
					label: 'Rescheduled. Simon is not available',
					dateStart: new Date(currentYear, currentMonth, 8),
					dateEnd: new Date(currentYear, currentMonth, 9),
					backgroundColor: '#2196F3'
				}
				]
			}
		},
		{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, 10, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, 11, 10, 30),
			allDay: true,
			backgroundColor: '#F57F17',
			repeat: {
				repeatFreq: 'weekly',
				repeatInterval: 5,
				repeatOn: [0, 2, 5],
				repeatEnd: new Date(currentYear, currentMonth + 2, 24)
			}
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, 6, today.getDate(), 11, 30),
			dateEnd: new Date(currentYear, 6, today.getDate() + 1, 14, 15),
			backgroundColor: '#BA68C8',
			repeat: {
				repeatFreq: 'monthly',
				repeatInterval: 1,
				repeatOn: today.getDate()
			}
		},
		{
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, 6, 12, 13, 15),
			dateEnd: new Date(currentYear, 6, 14, 16, 15),
			backgroundColor: '#4CAF50',
			repeat: {
				repeatFreq: 'yearly',
				repeatInterval: 10,
				repeatOn: {
					month: 7,
					date: 17
				},
				repeatEnd: 3
			}
		}
		];
	}

	view = 'month';

	views = ['week', 'month', 'agenda'];

	firstDayOfWeek = 1;

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler id="scheduler" dataSource={this.data} view={this.view}
					views={this.views}
					firstDayOfWeek={this.firstDayOfWeek}></Scheduler>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
