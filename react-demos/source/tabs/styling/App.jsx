import React from "react";
import ReactDOM from "react-dom";
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tabs className="styleOneTabs demoTabs">
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2" selected>Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
				<br />
				<Tabs className="styleOneTabs demoTabs" tabPosition="left">
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4" selected>Content 4</TabItem>
				</Tabs>
				<br />
				<Tabs id="styleTwoTab" className="demoTabs">
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2" selected>Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
