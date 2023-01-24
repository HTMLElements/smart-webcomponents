import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.today = new Date();

		const todayDate = this.today.getDate(),
			currentYear = this.today.getFullYear(),
			currentMonth = this.today.getMonth();

		this.data = [{
			label: 'Protect the Mind Stone',
			movieId: 1,
			priorityId: 2,
			heroId: 3,
			dateStart: new Date(currentYear, currentMonth, todayDate + 5, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 5, 11, 30)
		},
		{
			label: 'Craft Stormbreaker',
			movieId: 2,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth, todayDate + 5, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 5, 11, 30)
		}, {
			label: 'Find the Thanos',
			movieId: 2,
			priorityId: 3,
			heroId: 1,
			dateStart: new Date(currentYear, currentMonth, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 7, 12, 0),
		},
		{
			label: 'Find the Thanos',
			movieId: 2,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 7, 12, 0),
		},
		{
			label: 'Time Heist',
			movieId: 2,
			priorityId: 3,
			heroId: 1,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate + 8, 12, 0),
		},
		{
			label: 'Time Heist',
			movieId: 2,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate + 7, 10, 0),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate + 8, 12, 0),
		},
		{
			label: 'Time Heist',
			movieId: 2,
			priorityId: 3,
			heroId: 3,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate, 10, 0),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate + 1, 12, 0),
		}, {
			label: 'Collect The Space Stone',
			movieId: 1,
			priorityId: 1,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth - 2, todayDate - 5, 13),
			dateEnd: new Date(currentYear, currentMonth - 2, todayDate - 5, 21, 30)
		},
		{
			label: 'Collect The Mind Stone',
			movieId: 1,
			priorityId: 2,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth - 1, todayDate - 5, 13),
			dateEnd: new Date(currentYear, currentMonth - 1, todayDate - 4, 15, 30)
		},
		{
			label: 'Collect The Reality Stone',
			movieId: 1,
			priorityId: 1,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth, 1, 13),
			dateEnd: new Date(currentYear, currentMonth, 3, 15, 30)
		},
		{
			label: 'Collect The Power Stone',
			movieId: 1,
			priorityId: 1,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth + 1, 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 1, 2, 15, 30)
		},
		{
			label: 'Collect The Time Stone',
			movieId: 1,
			priorityId: 2,
			dateStart: new Date(currentYear, currentMonth + 2, todayDate, 13),
			dateEnd: new Date(currentYear, currentMonth + 2, todayDate + 3, 15, 30)
		},
		{
			label: 'Collect The Soul Stone',
			movieId: 1,
			priorityId: 3,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth + 3, 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, 1, 15, 30)
		},
		{
			label: 'Execute The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 4,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		},
		{
			label: 'Prevent The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 1,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		},
		{
			label: 'Prevent The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 2,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		},
		{
			label: 'Prevent The Snap',
			movieId: 1,
			priorityId: 3,
			heroId: 3,
			dateStart: new Date(currentYear, currentMonth + 3, todayDate - 1, 13),
			dateEnd: new Date(currentYear, currentMonth + 3, todayDate - 1, 15, 30)
		}
		];
	}

	view = 'timelineMonth';

	dateCurrent = '2020-11-1';

	views = ['timelineDay', 'timelineWeek', 'timelineMonth'];

	firstDayOfWeek = 1;

	hourStart = 6;

	hourEnd = 20;

	groups = ['movieId', 'heroId', 'priorityId'];

	groupOrientation = 'vertical';

	resources = [{
		label: 'Priority',
		value: 'priorityId',
		dataSource: [{
			label: 'Low',
			id: 1,
			backgroundColor: '#0288D1'
		},
		{
			label: 'Normal',
			id: 2,
			backgroundColor: '#FFB74D'
		},
		{
			label: 'Critical',
			id: 3,
			backgroundColor: '#26A69A'
		}
		],
	},
	{
		value: 'heroId',
		dataSource: [{
			label: 'Tony Stark',
			id: 1,
			backgroundColor: '#D32F2F'
		},
		{
			label: 'Thor',
			id: 2,
			backgroundColor: '#7986CB'
		},
		{
			label: 'Steven Rogers',
			id: 3,
			backgroundColor: '#F9A825'
		},
		{
			label: 'Thanos',
			id: 4,
			backgroundColor: '#5D4037'
		}
		],
		label: 'Employee'
	},
	{
		value: 'movieId',
		dataSource: [{
			label: 'Infinity War',
			id: 1,
			backgroundColor: '#FF4081'
		},
		{
			label: 'Endgame',
			id: 2,
			backgroundColor: '#00B0FF'
		}
		],
		label: 'Movies'
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
				<Scheduler id="scheduler" dataSource={this.data} dateCurrent={this.dateCurrent}
					views={this.views} view={this.view}
					firstDayOfWeek={this.firstDayOfWeek}
					hourStart={this.hourStart}
					hourEnd={this.hourEnd}
					groups={this.groups}
					groupOrientation={this.groupOrientation} resources={this.resources}></Scheduler>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
