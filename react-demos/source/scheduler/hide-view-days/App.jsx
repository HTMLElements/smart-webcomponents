import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.scheduler = React.createRef();
		this.checkbox = React.createRef();

		const today = new Date(),
			todayDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = [{
			label: 'Apple Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 1),
			backgroundColor: '#FF5722'
		}, {
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, todayDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, todayDate, 10, 30),
			backgroundColor: '#7CB342'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, todayDate - 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, todayDate - 1, 14, 15),
			backgroundColor: '#2196F3'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, todayDate + 2, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, todayDate + 2, 16, 15),
			backgroundColor: '#FFD600'
		}];
	}

	view = 'week';

	views = ['week', 'month'];

	nonworkingDays = [2, 4];

	handleViewChange(event) {
		const view = event.detail.value,
			hideAllDayButton = this.checkbox.current;

		hideAllDayButton.nativeElement.classList[view === 'month' ? 'add' : 'remove']('smart-hidden');
	}

	init() {
		const scheduler = this.scheduler.current;

		document.querySelector('.options').addEventListener('change', function (event) {
			if (!(event.target instanceof window.Smart.CheckBox)) {
				return;
			}

			const id = event.target.id,
				checked = event.target.checked;

			if (id === 'hideNonworkingWeekdays') {
				scheduler.hideNonworkingWeekdays = checked;
			}
			else if (id === 'hideWeekend') {
				scheduler.hideWeekend = checked;
			}
			else if (id === 'hideAllDay') {
				scheduler.hideAllDay = checked;
			}
		});
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.data} view={this.view}
					views={this.views}
					nonworkingDays={this.nonworkingDays} onViewChange={this.handleViewChange.bind(this)}></Scheduler>
				<div className="options">
					<div className="description">Tuesday and Thursday have been set as nonworking days.</div>
					<div className="option">
						<CheckBox id="hideNonworkingWeekdays">Hide Nonworking weekdays</CheckBox>
					</div>
					<div className="option">
						<CheckBox id="hideWeekend">Hide Weekend</CheckBox>
					</div>
					<div className="option">
						<CheckBox ref={this.checkbox} id="hideAllDay">Hide All day</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
