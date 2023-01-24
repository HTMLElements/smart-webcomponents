import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.log = React.createRef();
	}

	formatDate(date) {
		const monthNames = [
			"January", "February", "March",
			"April", "May", "June", "July",
			"August", "September", "October",
			"November", "December"
		];
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const monthName = monthNames[monthIndex];
		const year = date.getFullYear();

		return day + ' ' + monthName + ' ' + year;
	}

	handleOpen(event) {
		const date = new Date(event.detail.value),
			calendar = this.calendar.current;

		if (date.getFullYear() === 2020) {
			const tooltip = event.detail.target;

			calendar.tooltipPosition = 'top';

			if (date.getMonth() === 5 && date.getDate() === 9) {
				tooltip.innerHTML = 'Ivan\'s Birthday !';
			}
			else if (date.getMonth() === 6) {
				if (date.getDate() === 1) {
					tooltip.innerHTML = 'Filip\'s Birthday !';
				}
				else {
					tooltip.innerHTML = 'Anthony\'s Birthday !';
					calendar.tooltipPosition = 'right';
				}
			}
		}
	}

	init() {
		const template = document.createElement('template');

		template.id = 'importantDatesTemplate';
		template.innerHTML = '<span>{{day}}</span><span>&#127874</span>';

		document.body.appendChild(template);

		this.calendar.current.importantDatesTemplate = template.id;

		const importantDates = this.calendar.current.importantDates;

		if (importantDates) {
			for (let d = 0; d < importantDates.length; d++) {
				this.log.current.innerHTML += this.formatDate(new Date(importantDates[d])) + '<br />';
			}
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} className="special-days"
					importantDates={["2020, 6, 9", "2020, 7, 1", "2020, 7, 30", "2020, 12, 24"]} tooltip></Calendar>
				<div className="options">
					<div className="caption">Important Dates</div>
					<div className="option" ref={this.log} id="importantDates"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
