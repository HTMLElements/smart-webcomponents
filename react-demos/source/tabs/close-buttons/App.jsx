import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tabs = React.createRef();
		this.tabs2 = React.createRef();
		this.togglebutton = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
	}

	handleToggleCloseButtonsChange(event) {
		this.tabs.current.closeButtons = event.detail.value;
	}

	handleTabs1Close() {
		this.button.current.disabled = true;
		this.button2.current.disabled = true;
	}

	handleShowCloseButtonClick() {
		this.tabs.current.nativeElement.getElementsByTagName('smart-tab-item')[2].closeButtonHidden = false;
		this.button.current.disabled = true;
		this.button2.current.disabled = false;
	}

	handleHideCloseButtonClick() {
		this.tabs.current.nativeElement.getElementsByTagName('smart-tab-item')[2].closeButtonHidden = true;
		this.button2.current.disabled = true;
		this.button.current.disabled = false;
	}

	handleTabs2Closing(event) {
		const close = window.confirm('Do you wish to close tab with index ' + event.detail.index + '?');
		if (!close) {
			event.preventDefault();
		}
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>closeButtonMode 'default'</p>
				<Tabs ref={this.tabs} id="tabs1" className="demoTabsShort" closeButtons onClose={this.handleTabs1Close.bind(this)}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2" selected>Content 2</TabItem>
					<TabItem label="TAB 3" closeButtonHidden>Content 3</TabItem>
				</Tabs>
				<br />
				<p>closeButtonMode 'selected'</p>
				<Tabs ref={this.tabs2} id="tabs2" className="demoTabsShort"
					closeButtons closeButtonMode="selected" addNewTab
					onClosing={this.handleTabs2Closing.bind(this)}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3" selected>Content 3</TabItem>
				</Tabs>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<ToggleButton ref={this.togglebutton} id="toggleCloseButtons" className="demoButton" checked
							onChange={this.handleToggleCloseButtonsChange.bind(this)}>Toggle close buttons</ToggleButton>
						<br />
						<br />
						<Button ref={this.button} id="showCloseButton" className="demoButton"
							onClick={this.handleShowCloseButtonClick.bind(this)}>Show third close button</Button>
						<br />
						<br />
						<Button ref={this.button2} id="hideCloseButton" className="demoButton" disabled
							onClick={this.handleHideCloseButtonClick.bind(this)}>Hide third close button</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
