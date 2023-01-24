import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownbutton = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
		this.tabs = React.createRef();
		this.log = React.createRef();
	}

	handleButtonClick(event) {
		const that = this;
		const dropDownButton = that.dropdownbutton.current;
		const buttons = [that.button.current, that.button2.current, that.button3.current, that.button4.current];

		let mode = event.target.textContent.trim();

		dropDownButton.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);

		for (let b = 0; b < buttons.length; b++) {
			buttons[b].disabled = buttons[b].nativeElement === event.target ? true : false;
		}
	}

	handleDropDownButtonClick(event) {
		const log = this.log.current;
		const target = event.target;

		if (this.dropdownbutton.current.dropDownOpenMode !== 'dropDownButton') {
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

	handleTabsChange(event) {
		const tabsItems = this.tabs.current.nativeElement.getElementsByTagName('smart-tab-item');

		this.dropdownbutton.current.placeholder = tabsItems[event.detail.index].label;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div id="container">
					<DropDownButton ref={this.dropdownbutton} placeholder="Select" dropDownWidth="auto" onClick={this.handleDropDownButtonClick.bind(this)}>
						<Tabs ref={this.tabs} id="tab" onChange={this.handleTabsChange.bind(this)}>
							<TabItem label="Tab 1">Content of Item 1</TabItem>
							<TabItem label="Tab 2">Content of Item 2</TabItem>
							<TabItem label="Tab 3">Content of Item 3</TabItem>
						</Tabs>
					</DropDownButton>
				</div>
				<div className="options">
					<div className="option">
						<div>Open Mode:</div>
						<br />
						<Button ref={this.button} disabled onClick={this.handleButtonClick.bind(this)}>Default</Button>
						<br />
						<br />
						<Button ref={this.button2} onClick={this.handleButtonClick.bind(this)}>Auto</Button>
						<br />
						<br />
						<Button ref={this.button3} onClick={this.handleButtonClick.bind(this)}>DropDownButton</Button>
						<br />
						<br />
						<Button ref={this.button4} onClick={this.handleButtonClick.bind(this)}>None</Button>
						<br />
					</div>
					<div className="option" id="eventLog">
						<h4>Event log:</h4>
						<div ref={this.log} id="log">...</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<div id="description">
					<div>Modes Description</div>
					<ul>
						<li>Auto - the dropDownButton is opened/closed when the element is hovered.</li>
						<li>Default - the dropDownButton is opened/closed when the element is clicked.</li>
						<li>DropDownButton - the dropDownButton is devided in two components. An Action
						Button and a dropDown Button.
			                <br />The dropDownButton can be opened/closed when the dropDownButton is clicked.</li>
						<li>None - the dropDownButton can't be opened/closed.</li>
					</ul>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
