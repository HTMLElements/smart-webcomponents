import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { TextBox } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.summary = React.createRef();
	}

	dataSource = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
	dataSource1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
	dataSource2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	handleChange(event) {
		const summary = this.summary.current,
			calendar = this.calendar.current;

		if (calendar.selectedDates) {
			summary.innerHTML = "Duration: " + calendar.selectedDates.length + ' days';
		}

		summary.classList.remove('smart-visibility-hidden');
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div>
					<h2>Hotel Booking</h2>
				</div>
				<div id="mainContainer">
					<div>
						<h4>Name of the destination:</h4>
						<TextBox id="nameInput" placeholder="London"></TextBox>
					</div>
					<div id="travelChooser">
						<h4>Work travel ?</h4>
						<RadioButton>Yes</RadioButton>
						<RadioButton>No</RadioButton>
					</div>
					<div>
						<h4>Reservation dates:</h4>
						<Calendar ref={this.calendar} id="datePicker" min="new Date()" months={2} selectionMode="many"
							viewSections={["header", "footer"]} onChange={this.handleChange.bind(this)}></Calendar>
					</div>
					<br />
					<div ref={this.summary} id="summary" className="smart-visibility-hidden"></div>
					<br />
					<div id="personPicker">
						<div>
							<h4>Rooms:</h4>
							<ComboBox dataSource={this.dataSource} id="roomPicker" className="hotelRoomPicker" selectionMode="one"></ComboBox>
						</div>
						<div>
							<h4>Adults:</h4>
							<ComboBox dataSource={this.dataSource1} id="adultPicker" className="hotelRoomPicker" selectionMode="one"></ComboBox>
						</div>
						<div>
							<h4>Children:</h4>
							<ComboBox dataSource={this.dataSource2} id="childrenPicker" className="hotelRoomPicker"
								selectionMode="one"></ComboBox>
						</div>
					</div>
					<br />
					<Button id="submitButton">Search</Button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
