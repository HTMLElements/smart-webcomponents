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
				<p>DateTime precision up to a yoctosecond (10⁻²⁴ second) support. Engineering/Scientific
			        Formats</p>
				<DateTimePicker calendarButton enableMouseWheelAction
					spinButtons spinButtonsPosition="left" formatString="FP" value="new smartUtilities.DateTime(2019, 2, 19, 12, 54, 111, 333, 31, 40, 436, 144, 490, 59, 99)"></DateTimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
