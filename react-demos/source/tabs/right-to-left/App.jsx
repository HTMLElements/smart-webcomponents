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
				<Tabs className="demoTabs" selectedIndex={0} rightToLeft>
					<TabItem label="לוח 1">תוכן 1</TabItem>
					<TabItem label="לוח 2">תוכן 2</TabItem>
					<TabItem label="לוח 3">תוכן 3</TabItem>
					<TabItem label="לוח 4">תוכן 4</TabItem>
					<TabItem label="לוח 5">תוכן 5</TabItem>
				</Tabs>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
