import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			currentYear = today.getFullYear(),
			colors = ['#D50000', '#E67C73', '#F4511E', '#F6BF26',
				'#33B679', '#0B8043', '#039BE5', '#3F51B5',
				'#7986CB', '#8E24AA', '#616161'
			],
			labels = ['Quarterly Project Review Meeting', 'IT Group Mtg', 'New Projects Planning', 'Interview with James', 'Interview with Nancy'];
		let data = [];

		//Load 100 000 events
		for (let i = 0; i < 100000; i++) {
			const year = Math.round(Math.random() * (currentYear + 5 - currentYear) + currentYear),
				month = Math.round(Math.random() * 12),
				day = Math.round(Math.random() * 31),
				offset = Math.round(Math.random() * 5);
			data.push({
				label: labels[Math.round(Math.random() * 4)],
				dateStart: new Date(year, month, day),
				dateEnd: new Date(year, month, day + offset),
				backgroundColor: colors[Math.round(Math.random() * 10)]
			});
		}

		this.data = data;
	}

	view = 'month';

	views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek', 'timelineMonth', 'agenda'];

	hourStart = 7;

	hourEnd = 19;

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
					hourStart={this.hourStart}
					hourEnd={this.hourEnd}
					firstDayOfWeek={this.firstDayOfWeek}></Scheduler>
				<div className="options">
					<div className="description">
						<p>A Scheduler with 100 000 events loaded</p>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
