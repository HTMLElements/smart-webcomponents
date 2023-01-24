import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

class App extends React.Component {

	init() {

		// Your code here.
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<section>
					<h2>DateTimePicker</h2>
					<br />
					<div>
						<p>Pickers provide a simple way to select a single value from a pre-determined
						set. Users can also input a Date Time value by using the DateTimePicker's
			                input field.</p>
					</div>
				</section>
				<section id="usage">
					<br />
					<h2>Usage</h2>
					<div className="module">
						<p>On mobile, pickers are best suited for display in a confirmation dialog.</p>
						<p><strong>Tiles</strong> hold content, and can vary in height within a list.</p>
					</div>
				</section>
				<section id="datePickers">
					<h2>Date pickers</h2>
					<br />
					<div className="module">
						<p>A dialog picker is used to select a single date on desktop or mobile.</p>
						<br />
						<p>The selected day is indicated by a filled circle. The current day is indicated
			                by a different color and type weight.</p>
						<br />
						<p>Swipe left to right to navigate through the months. Touch the year in
			                the title bar to transition to the year view.</p>
						<br />
						<DateTimePicker ref="datetimepicker" dropDownPosition="bottom" calendarButton></DateTimePicker>
						<br />
						<br />
						<br />
						<br />
						<h2>Time Picker</h2>
						<DateTimePicker ref="datetimepicker2" calendarButton dropDownPosition="bottom"
							dropDownDisplayMode="timePicker"></DateTimePicker>
					</div>
				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
