import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>editMode: 'full' - Value validation on blur only.</p>
				<DateTimePicker
					calendarButton formatString="d" enableMouseWheelAction interval="new smartUtilities.TimeSpan(24, 0, 0)"
					dropDownPosition="center-bottom" spinButtons spinButtonsPosition="left"
					editMode="full"></DateTimePicker>
				<br />
				<p>editMode: 'default' - Validation while typing and on blur.</p>
				<DateTimePicker
					calendarButton formatString="d" enableMouseWheelAction
					interval="new smartUtilities.TimeSpan(24, 0, 0)" dropDownPosition="center-bottom"
					spinButtons spinButtonsPosition="left" editMode="default"></DateTimePicker>
				<br />
				<p>editMode: 'partial' - Strict Validation while typing. Delete/Backspace
			            set the edit part to min value.</p>
				<DateTimePicker
					calendarButton formatString="d" enableMouseWheelAction interval="new smartUtilities.TimeSpan(24, 0, 0)"
					dropDownPosition="center-bottom" spinButtons spinButtonsPosition="left"
					editMode="partial"></DateTimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
