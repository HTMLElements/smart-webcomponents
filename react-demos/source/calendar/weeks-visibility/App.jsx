import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.weeksCountSelector = React.createRef();
	}

	handleChange(event) {
		const calendar = this.calendar.current;

		if (calendar.weeks) {
			calendar.weeks = parseInt(event.target.value);
			calendar.nativeElement.style.height = 120 + 32 * (calendar.weeks - 1) + 'px';
		}
	}

	init() {
		const calendar = this.calendar.current;

		if (calendar.weeks) {
			calendar.nativeElement.style.height = 120 + 32 * (calendar.weeks - 1) + 'px';
		}

		this.weeksCountSelector.current.value = '2';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} weeks={2}></Calendar>
				<div className="options">
					<div className="caption">Number of weeks(1-6)</div>
					<div className="option">
						<input className="text-input" ref={this.weeksCountSelector} onChange={this.handleChange.bind(this)} id="weeksCountSelector" />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
