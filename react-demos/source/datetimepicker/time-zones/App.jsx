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
				<p>Original value of all DateTimePickers: <code>2019-08-17 11:24:15:350:111:100:009:078:087:765:012 -06:00</code> (Central
			        Standard Time)</p>
				<p>displayKind: 'unspecified'</p>
				<DateTimePicker calendarButton
					display-kind="unspecified" formatString="dd-MMM-yy HH:mm:ss.fff zzz" enableMouseWheelAction
					interval="new smartUtilities.TimeSpan(1, 0, 0)" spinButtons spinButtonsPosition="left"
					value="new smartUtilities.DateTime(2019, 8, 17, 11, 24, 15, 350, 111, 100, 9, 78, 87, 765, 12, 'Central Standard Time')"></DateTimePicker>
				<p>displayKind: 'UTC'</p>
				<DateTimePicker calendarButton
					display-kind="UTC" formatString="dd-MMM-yy HH:mm:ss.fff zzz" enableMouseWheelAction
					interval="new smartUtilities.TimeSpan(1, 0, 0)" spinButtons spinButtonsPosition="left"
					value="new smartUtilities.DateTime(2019, 8, 17, 11, 24, 15, 350, 111, 100, 9, 78, 87, 765, 12, 'Central Standard Time')"></DateTimePicker>
				<p>displayKind: 'local'</p>
				<DateTimePicker calendarButton
					display-kind="local" formatString="dd-MMM-yy HH:mm:ss.fff zzz" enableMouseWheelAction
					interval="new smartUtilities.TimeSpan(1, 0, 0)" spinButtons spinButtonsPosition="left"
					value="new smartUtilities.DateTime(2019, 8, 17, 11, 24, 15, 350, 111, 100, 9, 78, 87, 765, 12, 'Central Standard Time')"></DateTimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
