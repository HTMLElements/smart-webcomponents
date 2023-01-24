import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tabs = React.createRef();
	}

	handleClick() {
		this.tabs.current.select(0);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>selectionMode: 'none'; Click the button to select another tab.</p>
				<Tabs ref={this.tabs} className="demoTabsShort" id="fourthTabs" selectionMode="none" selectedIndex={3}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
				<br />
				<br />
				<br />
				<p>selectionMode: 'click'</p>
				<Tabs className="demoTabsShort" selectionMode="click" selected-index={0}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
				<br />
				<br />
				<br />
				<p>selectionMode: 'dblclick'</p>
				<Tabs className="demoTabsShort" selectionMode="dblclick" selected-index={1}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
				<br />
				<br />
				<br />
				<p>selectionMode: 'mouseenter'</p>
				<Tabs className="demoTabsShort" selectionMode="mouseenter" selectedIndex={2}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
				<br />
				<br />
				<br />
				<br />
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button id="selectFirstTab" className="demoButton" onClick={this.handleClick.bind(this)}>Select first tab</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
