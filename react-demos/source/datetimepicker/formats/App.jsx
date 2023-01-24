import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.datetimepicker = React.createRef();
	}

	handleChange(event) {
		this.datetimepicker.current.formatString = event.detail.value;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DateTimePicker ref={this.datetimepicker} className="demoDateTimePickerWide" calendarButton
					enableMouseWheelAction spinButtons spinButtonsPosition="left"></DateTimePicker>
				<div className="options">
					<div className="caption">Formats</div>
					<div className="option">
						<DropDownList id="chooseFormat" onChange={this.handleChange.bind(this)}>
							<ListItem value="dd-MMM-yy HH:mm:ss.fff" selected>default pattern</ListItem>
							<ListItem value="d">short date pattern</ListItem>
							<ListItem value="D">long date pattern</ListItem>
							<ListItem value="t">short time pattern</ListItem>
							<ListItem value="T">long time pattern</ListItem>
							<ListItem value="f">long date, short time pattern</ListItem>
							<ListItem value="F">long date, long time pattern</ListItem>
							<ListItem value="M">month/day pattern</ListItem>
							<ListItem value="Y">month/year pattern</ListItem>
							<ListItem value="FP">full precision</ListItem>
							<ListItem value="FT">full precision time</ListItem>
							<ListItem value="PP">processor precision</ListItem>
							<ListItem value="PT">processor precision time</ListItem>
							<ListItem value="dddd-MMMM-yyyy">custom</ListItem>
						</DropDownList>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
