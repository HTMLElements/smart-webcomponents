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
		value: 2,
		group: "B"
	},
	{
		label: "Michael",
		value: 3,
		group: "B"
	},
	{
		label: "Angel",
		value: 4,
		group: "A"
	},
	{
		label: "Hristo",
		value: 5,
		group: "C"
	},
	{
		label: "Peter",
		value: 6,
		group: "A"
	},
	{
		label: "Albert",
		value: 7,
		group: "A"
	},
	{
		label: "George",
		value: 8,
		group: "C"
	}
	];

	handleButtonClick(event) {
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
					<p>Auto - the DropDownList is opened/closed when the element is hovered.</p>
					<p>Default - the DropDownList is opened/closed when the element is clicked.</p>
					<p>DropDownButton - the DropDownList is devided in two. An input field and
			            a drop-down button.</p>
					<p>None - the dropDownList can't be opened/closed.</p>
				</div>
				<DropDownList ref={this.dropdownlist} className="drop-down-list-modes-demo" dataSource={this.dataSource}></DropDownList>
				<div className="options">
					<div className="caption">DropDownList Open Mode:</div>
					<div className="option">
						<Button ref={this.button} disabled onClick={this.handleButtonClick.bind(this)}>Default</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} onClick={this.handleButtonClick.bind(this)}>Auto</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} onClick={this.handleButtonClick.bind(this)}>DropDownButton</Button>
					</div>
					<div className="option">
						<Button ref={this.button4} onClick={this.handleButtonClick.bind(this)}>None</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
