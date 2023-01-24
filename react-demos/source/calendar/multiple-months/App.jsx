import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { inherits } from "util";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.input = React.createRef();
	}

	selectedDates = ["2020-08-17", "2020-09-6", "2020-09-21", "2020-10-31", "2020-11-25", "2020-12-24", "2021-1-7"];

	handleChange(event) {
		this.calendar.current.months = parseInt(event.target.value);
	}

	init() {
		this.input.current.value = '12';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} className="multiple-months" months={12} selectedDates={this.selectedDates}></Calendar>
				<div className="options">
					<div className="caption">Number of months(1-12)</div>
					<div className="option">
						<input ref={this.input} className="text-input" onChange={this.handleChange.bind(this)} id="monthsCountSelector"/>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
