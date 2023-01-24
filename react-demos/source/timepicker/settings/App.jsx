import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.timepicker = React.createRef();
		this.valueLog = React.createRef();
	}

	handleTimePickerChange(event) {
		const value = event.detail.value;
		this.valueLog.current.innerHTML = value.getHours() + ':' + value.getMinutes();
	}

	handleHoursChange() {
		this.timepicker.current.selection = 'hour';
	}

	handleMinutesChange() {
		this.timepicker.current.selection = 'minute';
	}

	handleminuteInterval1Change() {
		this.timepicker.current.minuteInterval = 1;
	}

	handleminuteInterval5Change() {
		this.timepicker.current.minuteInterval = 5;
	}

	handleminuteInterval15Change() {
		this.timepicker.current.minuteInterval = 15;
	}

	handleSetHoursClick() {
		this.timepicker.current.setHours(20);
	}

	handleSetMinutesClick() {
		this.timepicker.current.setMinutes(12);
	}

	handleSetNowClick() {
		this.timepicker.current.value = new Date();
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div>
					<TimePicker ref={this.timepicker} id="timePicker" format="24-hour" onChange={this.handleTimePickerChange.bind(this)}></TimePicker>
				</div>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<div className="container">
							<p>Selection</p>
							<RadioButton checked groupName="selection" onChange={this.handleHoursChange.bind(this)}>Hours</RadioButton>
							<RadioButton groupName="selection" onChange={this.handleMinutesChange.bind(this)}>Minutes</RadioButton>
						</div>
						<div className="container">
							<p>Minute interval</p>
							<RadioButton checked groupName="minuteInterval" onChange={this.handleminuteInterval1Change.bind(this)}>1</RadioButton>
							<RadioButton groupName="minuteInterval" onChange={this.handleminuteInterval5Change.bind(this)}>5</RadioButton>
							<RadioButton groupName="minuteInterval" onChange={this.handleminuteInterval15Change.bind(this)}>15</RadioButton>
						</div>
						<br />
						<Button id="setHours" className="demoButton" onClick={this.handleSetHoursClick.bind(this)}>Set hours to 20</Button>
						<Button id="setMinutes" className="demoButton" onClick={this.handleSetMinutesClick.bind(this)}>Set minutes to 12</Button>
						<Button id="setNow" className="demoButton" onClick={this.handleSetNowClick.bind(this)}>Set to now</Button>
						<br />
						<br />
						<div>Current value: <strong ref={this.valueLog} id="valueLog"></strong>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
