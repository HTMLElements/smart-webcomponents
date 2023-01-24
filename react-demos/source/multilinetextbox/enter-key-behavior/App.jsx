import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Window } from 'smart-webcomponents-react/window';
import { Chip } from 'smart-webcomponents-react/chip';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.messageContainer = React.createRef();
		this.window = React.createRef();
		this.window2 = React.createRef();
		this.multilinetextbox = React.createRef();
		this.multilinetextbox2 = React.createRef();
	}

	messages = [];

	updateMessageContainer(event, user) {
		if (!event.detail || event.detail.type !== 'submit') {
			return;
		}
		const value = event.detail.value,
			chipContainer = document.createElement('div');

		this.messages.push(value);
		this.messageContainer.current.appendChild(chipContainer);

		ReactDOM.render(<Chip />, chipContainer, function () {
			const messageChip = this;

			messageChip.value = value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
			messageChip.avatar = user;
		});
	}

	enterKeyBehaviorTo(option) {
		this.multilinetextbox.current.enterKeyBehavior = option;
		this.multilinetextbox2.current.enterKeyBehavior = option;
	}

	handleStartChatClick() {
		this.window.current.open();
		this.window2.current.open();
	}

	handleMessageBoxJChange(event) {
		this.updateMessageContainer(event, 'J');
	}

	handleMessageBoxSChange(event) {
		this.updateMessageContainer(event, 'S');
	}

	handleClearOnSubmitChange() {
		this.enterKeyBehaviorTo('clearOnSubmit');
	}

	handleSubmitChange() {
		this.enterKeyBehaviorTo('submit');
	}

	handleNewLineChange() {
		this.enterKeyBehaviorTo('newLine');
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Window ref={this.window} id="messageWindowJ" label="Johnny">
					<MultilineTextBox ref={this.multilinetextbox} id="messageBoxJ" placeholder="Type a message here"
						enterKeyBehavior="clearOnSubmit" onChange={this.handleMessageBoxJChange.bind(this)}></MultilineTextBox>
				</Window>
				<Window ref={this.window2} id="messageWindowS" label="Sam">
					<MultilineTextBox ref={this.multilinetextbox2} id="messageBoxS" placeholder="Type a message here"
						enterKeyBehavior="clearOnSubmit" onChange={this.handleMessageBoxSChange.bind(this)}></MultilineTextBox>
				</Window>
				<div className="options">
					<div className="caption">Enter Key Behavior</div>
					<div className="option">
						<RadioButton id="radioBtn0" value="clearOnSubmit" checked onChange={this.handleClearOnSubmitChange.bind(this)}>clearOnSubmit</RadioButton>
						<RadioButton id="radioBtn1" value="submit" onChange={this.handleSubmitChange.bind(this)}>submit</RadioButton>
						<RadioButton id="radioBtn2" value="newLine" onChange={this.handleNewLineChange.bind(this)}>newLine</RadioButton>
					</div>
					<div className="option">
						<Button id="startChat" onClick={this.handleStartChatClick.bind(this)}>Start chat</Button>
					</div>
					<div className="option">
						<div ref={this.messageContainer} id="messageContainer"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
