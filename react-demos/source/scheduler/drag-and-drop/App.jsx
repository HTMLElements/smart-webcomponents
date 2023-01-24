import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			todayDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = [{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 30),
			allDay: true,
			backgroundColor: '#3F51B5'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate + 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 14, 15),
			backgroundColor: '#F4511E'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#7986CB'
		},
		{
			label: 'Rollout of New Website and Marketing Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 2, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 10, 45),
			backgroundColor: '#E67C73'
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
			backgroundColor: '#616161'
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, todayDate - 3, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 2, 9, 0),
			backgroundColor: '#E67C73'
		}
		];

		this.data2 = [{
			label: 'Update Website Marketing Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 45),
			backgroundColor: '#880E4F'
		}, {
			label: 'Prepare Sales Strategy Papers',
			dateStart: new Date(currentYear, currentMonth, todayDate, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 13, 45),
			backgroundColor: '#3F51B5'
		}, {
			label: 'Complete Agreements',
			dateStart: new Date(currentYear, currentMonth, todayDate + 1, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 10, 0),
			backgroundColor: '#558B2F'
		}, {
			label: 'Approve Hiring of Mark Waterberg',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			backgroundColor: '#00BFA5'
		}, {
			label: 'Reach NDA Agreement',
			dateStart: new Date(currentYear, currentMonth, todayDate - 2, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1, 13, 45),
			backgroundColor: '#004D40'
		}];
	}

	view = 'week';

	views = ['day', 'week', 'month'];

	hourStart = 9;

	timelineDayScale = 'halfHour';

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="scheduler-container">
					<Scheduler id="scheduler" dataSource={this.data} view={this.view}
						views={this.views}
						hourStart={this.hourStart}
						timelineDayScale={this.timelineDayScale}></Scheduler>
					<Scheduler id="scheduler2" dataSource={this.data2} view={this.view}
						views={this.views}
						hourStart={this.hourStart}
						timelineDayScale={this.timelineDayScale}></Scheduler>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
