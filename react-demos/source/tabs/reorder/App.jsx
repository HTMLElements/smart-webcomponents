import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tabs = React.createRef();
		this.log = React.createRef();
	}

	handleReorder(event) {
		this.log.current.innerHTML = 'Moved a tab from position ' + event.detail.originalIndex + ' to position ' + event.detail.newIndex + '.';
	}

	handleClick() {
		this.tabs.current.nativeElement.getElementsByTagName('smart-tab-item')[3].index = 0;
	}


	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tabs ref={this.tabs} id="horizontalTabs1" className="demoTabs" selectedIndex={1}
					reorder closeButtons onReorder={this.handleReorder.bind(this)}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button ref={this.button} id="reorder" onClick={this.handleClick.bind(this)}>Position TAB 4
			                <br />at index 0</Button>
					</div>
					<div className="option">
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
