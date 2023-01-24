import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
		this.log = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
	}

	dataSource = [{
		label: "Andrew",
		value: 1,
		group: "A"
	},
	{
		label: "Natalia",
		value: 5,
		group: "B"
	},
	{
		label: "Michael",
		value: 4,
		group: "B"
	},
	{
		label: "Angel",
		value: 2,
		group: "A"
	},
	{
		label: "Hristo",
		value: 6,
		group: "C"
	},
	{
		label: "Peter",
		value: 3,
		group: "A"
	},
	{
		label: "Albert",
		value: 3,
		group: "A"
	},
	{
		label: "Boyko",
		value: 7,
		group: "A"
	},
	{
		label: "Dimitar",
		value: 3,
		group: "B"
	},
	{
		label: "George",
		value: 25,
		group: "C"
	}];

	handleDropDownListClick(event) {
		const that = this;

		const dropDownList = that.dropdownlist.current;
		const log = that.log.current;
		const target = event.target;

		if (dropDownList.dropDownOpenMode !== 'dropDownButton') {
			log.innerHTML = 'DropDownButton clicked';
			return;
		}
		if (target.classList.contains('smart-action-button')) {
			log.textContent = 'ActionButton clicked';
		}
		else if (target.classList.contains('smart-drop-down-button')) {
			log.textContent = 'DropDownButton clicked';
		}
	}

	handleRadioButtonClick(event) {
		const that = this;

		const dropDownList = that.dropdownlist.current;
		const buttons = [that.button.current, that.button2.current, that.button3.current, that.button4.current];
		let mode = event.target.textContent.trim();

		dropDownList.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);

		for (let b = 0; b < buttons.length; b++) {
			buttons[b].disabled = buttons[b].nativeElement === event.target ? true : false;
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div id="description">
					<h3>Modes Description</h3>
					<pre>Auto - the dropDownList is opened/closed when the element is hovered.</pre>
					<pre>Default - the dropDownList is opened/closed when the element is clicked.</pre>
					<pre>DropDownButton - the dropDownList is divided in two components. An Action Button and a dropDown Button. The dropDownList can be opened/closed when the dropDownButton is clicked.</pre>
					<pre>None - the dropDownList can't be opened/closed.</pre>
				</div>
				<div id="eventLog">
					<h4>Event log:</h4>
					<div ref={this.log} id="log">...</div>
				</div>
				<div id="container">
					<DropDownList ref={this.dropdownlist} className="drop-down-list-modes-demo" dataSource={this.dataSource} onClick={this.handleDropDownListClick.bind(this)}></DropDownList>
					<div id="controlPanel">
						<h3>DropDownListOpen Mode:</h3>
						<Button ref={this.button} disabled onClick={this.handleRadioButtonClick.bind(this)}>Default</Button>
						<Button ref={this.button2} onClick={this.handleRadioButtonClick.bind(this)}>Auto</Button>
						<Button ref={this.button3} onClick={this.handleRadioButtonClick.bind(this)}>DropDownButton</Button>
						<Button ref={this.button4} onClick={this.handleRadioButtonClick.bind(this)}>None</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
