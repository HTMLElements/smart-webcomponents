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
		this.datetimepicker.current.locale = event.detail.value;
	}

	init() {
		const dateTimePicker = this.datetimepicker.current;

		dateTimePicker.messages.bg = {
			now: 'Сега',
			dateTabLabel: 'ДАТА',
			timeTabLabel: 'ВРЕМЕ'
		};
		dateTimePicker.messages.fr = {
			now: 'À présent',
			dateTabLabel: 'DATE',
			timeTabLabel: 'TEMPS'
		};
		dateTimePicker.messages.de = {
			now: 'Jetzt',
			dateTabLabel: 'DATUM',
			timeTabLabel: 'ZEIT'
		};
		dateTimePicker.messages.it = {
			now: 'Adesso',
			dateTabLabel: 'DATA',
			timeTabLabel: 'TEMPO'
		};
		dateTimePicker.messages.ja = {
			now: '今',
			dateTabLabel: '日付',
			timeTabLabel: '時間'
		};
		dateTimePicker.messages.es = {
			now: 'Ahora',
			dateTabLabel: 'FECHA',
			timeTabLabel: 'HORA'
		};
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<DateTimePicker ref={this.datetimepicker} className="demoDateTimePickerWide" calendarButton
					enableMouseWheelAction dropDownPosition="center-bottom" spinButtons
					spinButtonsPosition="left" locale="en"></DateTimePicker>
				<div className="options">
					<div className="option">Locales</div>
					<div className="option">
						<DropDownList ref={this.dropdownlist} id="chooseLocale" onChange={this.handleChange.bind(this)}>
							<ListItem value="bg">Bulgarian</ListItem>
							<ListItem selected value="en">English</ListItem>
							<ListItem value="fr">French</ListItem>
							<ListItem value="de">German</ListItem>
							<ListItem value="it">Italian</ListItem>
							<ListItem value="ja">Japanese</ListItem>
							<ListItem value="es">Spanish</ListItem>
						</DropDownList>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
