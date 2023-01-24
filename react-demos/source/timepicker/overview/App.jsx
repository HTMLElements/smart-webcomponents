import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

class App extends React.Component {

	init() {

		// Your code here
	}


	componentDidMount() {
		this.refs.templateContainer = `
		<template id="templateWithButtons">
			<Button ref="button" className="flat">CANCEL</Button>
			<Button ref="button2" className="flat">OK</Button>
		</template>`
	}

	render() {
		return (
			<div className="smart-demo-container">
				<div ref="templateContainer"></div>
				<div id="materialPicker">
					<section id="timePickers">
						<h1>Time pickers</h1>
						<div className="module">
							<p>A time picker adjusts to a user’s preferred time setting, i.e. the 12-hour
			                        or 24-hour format.</p>
							<p>A dialog picker is used to select a single time (hours:minutes) on mobile.</p>
							<p>The selected time is indicated by the filled circle at the end of the
			                        clock hand.</p>
							<p>Tap between the hour and minute label in the title bar to switch between
							the hour or minute view. Additionally, tap on the AM/PM label in the title
			                        bar to switch between AM or PM (in 12-hour clock mode).</p>
						</div>
						<div className="module">
							<div>
								<TimePicker ref="timepicker" footer footer-template="templateWithButtons"></TimePicker>
							</div>
						</div>
						<br />
						<br />
						<div className="module">
							<div>
								<TimePicker ref="timepicker2" footer footer-template="templateWithButtons"
									selection="minute"></TimePicker>
							</div>
						</div>
						<div className="module">
							<br />
							<p>The picker has a landscape view as well to suite the different screen
			                        orientations.</p>
						</div>
						<div className="module">
							<TimePicker ref="timepicker3" view="landscape" footer footer-template="templateWithButtons"></TimePicker>
						</div>
						<br />
						<br />
						<div className="module">
							<TimePicker ref="timepicker4" view="landscape" footer footer-template="templateWithButtons"
								selection="minute"></TimePicker>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
