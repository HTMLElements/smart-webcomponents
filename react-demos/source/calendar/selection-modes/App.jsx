import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.description = React.createRef();
	}

	setDescription(mode) {
		let description = this.description.current;

		switch (mode) {
			case 'default':
				description.textContent = 'Allows single date selection via keyboard/mouse and multiple date selection when \'Control\' keyboard key is pressed.';
				break;
			case 'none':
				description.textContent = 'Date selection is disabled.';
				break;
			case 'one':
				description.textContent = 'Only one date can be selected.';
				break;
			case 'oneExtended':
				description.textContent = 'Only one date can be selected. Allows keyboard selection on "Enter/Space" key press.';
				break;
			case 'many':
				description.textContent = 'Allows multiple dates selection. The first selected date determines the begining of a date selection range. Last selected date sets the end of the range. All hovered dates in between will also be selected when the end date is decided. They will appear as hovered until the end date is selected.';
				break;
			case 'zeroOrMany':
				description.textContent = 'Allows zero or more dates to be selected.';
				break;
			case 'oneOrMany':
				description.textContent = 'Allows one or more dates to be selected. Doesn\'t allow zero selection.';
				break;
			case 'zeroOrOne':
				description.textContent = 'Zero or one date can be selected.';
				break;
			case 'week':
				description.textContent = 'Selects 7 days in a row from the selected date. The selected date is the beginning of the date range and the next 6 days are also selected to form a week( 7 days in a row).';
				break;
			case 'range':
				description.textContent = 'Selectes a range of dates between two dates. The first selected date marks the beginning of the range and the second selected date marks the end. Every date between the first and second date selection will also be selected. The next selected date will clear all previously selected and set the start for a new date range.  If the keyboard key \'Control\' is pressed it is possible to start a second range selection by keeping the previous. All dates that are about to be selected are marked as hovered.';
				break;
		}
	}

	handleChange(event) {
		this.calendar.current.selectionMode = event.detail.label;
		this.setDescription(event.detail.label);
	}

	init() {
		const calendar = this.calendar.current;

		if (calendar.selectionMode) {
			this.setDescription(calendar.selectionMode);
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar}></Calendar>
				<div className="options">
					<div className="option">
						<h3>SelectionMode</h3>
						<DropDownList onChange={this.handleChange.bind(this)} id="modeSelector">
							<ListItem selected>default</ListItem>
							<ListItem>many</ListItem>
							<ListItem>none</ListItem>
							<ListItem>one</ListItem>
							<smart-list-item>oneExtended</smart-list-item>
							<ListItem>oneOrMany</ListItem>
							<ListItem>range</ListItem>
							<ListItem>week</ListItem>
							<ListItem>zeroOrOne</ListItem>
							<ListItem>zeroOrMany</ListItem>
						</DropDownList>
					</div>
					<div className="option">
						<h3>Description:</h3>
						<div ref={this.description} id="modeDescription"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
