import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.datetimepicker = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.radiobutton3 = React.createRef();
		this.radiobutton4 = React.createRef();
		this.radiobutton5 = React.createRef();
	}

	handleDefaultChange() {
		this.datetimepicker.current.dropDownDisplayMode = 'default';
	}

	handleClassicChange() {
		this.datetimepicker.current.dropDownDisplayMode = 'classic';
	}

	handleCalendarChange() {
		this.datetimepicker.current.dropDownDisplayMode = 'calendar';
	}

	handleTimePickerChange() {
		this.datetimepicker.current.dropDownDisplayMode = 'timePicker';
	}

	handleAutoChange() {
		this.datetimepicker.current.dropDownDisplayMode = 'auto';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DateTimePicker ref={this.datetimepicker} id="dateTimePicker" calendarButton
					dropDownDisplayMode="default" dropDownPosition="center-bottom" enableMouseWheelAction
					spinButtons spinButtonsPosition="left"></DateTimePicker>
				<div className="options">
					<div className="caption">Display Mode</div>
					<div className="option">
						<RadioButton ref={this.radiobutton} checked onChange={this.handleDefaultChange.bind(this)}>Default</RadioButton>
						<RadioButton ref={this.radiobutton2} onChange={this.handleClassicChange.bind(this)}>Classic (NI theme)</RadioButton>
						<RadioButton ref={this.radiobutton3} onChange={this.handleCalendarChange.bind(this)}>Calendar only</RadioButton>
						<RadioButton ref={this.radiobutton4} onChange={this.handleTimePickerChange.bind(this)}>Time picker only</RadioButton>
						<RadioButton ref={this.radiobutton5} onChange={this.handleAutoChange.bind(this)}>Auto (based on <strong>formatString</strong>)</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
