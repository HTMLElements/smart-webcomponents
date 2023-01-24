import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.datetimepicker = React.createRef();
	}

	init() {
		const dateTimePicker = this.datetimepicker.current,
			messages = Object.assign({}, dateTimePicker.messages);
		messages['he'] = {
			'now': 'עכשיו',
			'dateTabLabel': 'תאריך',
			'timeTabLabel': 'זמן'
		};
		dateTimePicker.messages = messages;
		dateTimePicker.placeholder = 'הזן תאריך';
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">DateTimePicker Web Component with enabled Right to Left Layout</div>
				<DateTimePicker ref={this.datetimepicker} dropDownPosition="bottom" calendarButton dropDownDisplayMode="default"
					rightToLeft locale="he"></DateTimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
