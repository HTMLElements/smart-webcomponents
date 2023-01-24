import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.restricteddates = React.createRef();
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
		const year = date.getFullYear();

		return day + ' ' + monthNames[monthIndex] + ' ' + year;
	}

	init() {
		const restrictedDates = this.calendar.current.restrictedDates;

		if (restrictedDates) {
			for (let d = 0; d < restrictedDates.length; d++) {
				this.restricteddates.current.innerHTML += this.formatDate(new Date(restrictedDates[d])) + '<br/>';
			}
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} id="calendar" selectedDates={["2019-7-4"]} restrictedDates={["2019-7-25", "2019-7-15","2019-1-1"]}></Calendar>
				<div className="options">
					<div className="caption">Restricted Dates</div>
					<div className="option" ref={this.restricteddates} id="restrictedDates"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
