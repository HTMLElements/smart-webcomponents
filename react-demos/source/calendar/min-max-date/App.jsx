import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.input = React.createRef();
		this.input2 = React.createRef();
	}

	handleChange(property, event) {
		this.calendar.current[property] = event.target.value;
	}

	init() {
		this.input.current.value = '2018-7-1';
		this.input2.current.value = '2019-7-31';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} className="calendar-demo" min="2018, 7, 1" max="2019-7-31"
					selectedDates={["2019-7-2", "2029-7-17"]}></Calendar>
				<div className="options" id="controlContainer">
					<div>Min/Max Set</div>
					<div className="option"> <pre>Min </pre>
						<input className="text-input" ref={this.input} onChange={this.handleChange.bind(this, 'min')}  placeholder="2019-01-01"
							id="minInput" />
					</div>
					<div className="option"> <pre>Max </pre>
						<input className="text-input" ref={this.input2} onChange={this.handleChange.bind(this, 'max')} placeholder="2019-01-01"
							id="maxInput" />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
