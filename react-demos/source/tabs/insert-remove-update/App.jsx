import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tabs = React.createRef();
		this.index = React.createRef();
	}

	handleInsertClick() {
		this.tabs.current.insert(parseInt(this.index.current.value), {
			label: 'New TAB',
			content: 'New content'
		});
	}

	handleRemoveClick() {
		this.tabs.current.removeAt(parseInt(this.index.current.value));
	}

	handleUpdateClick() {
		this.tabs.current.update(parseInt(this.index.current.value), 'Updated TAB', 'Updated content');
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tabs ref={this.tabs} id="tabs" className="demoTabs" selectedIndex={0}>
					<TabItem label="TAB 1">Content 1</TabItem>
					<TabItem label="TAB 2">Content 2</TabItem>
					<TabItem label="TAB 3">Content 3</TabItem>
					<TabItem label="TAB 4">Content 4</TabItem>
				</Tabs>
				<div className="options">
					<div className="caption">Choose tab index</div>
					<div className="option">
						<input ref={this.index} id="index" type="number" />
					</div>
					<div className="option">
						<Button ref="button" id="insert" className="demoButton" onClick={this.handleInsertClick.bind(this)}>Insert at index</Button>
					</div>
					<div className="option">
						<Button ref="button2" id="remove" className="demoButton" onClick={this.handleRemoveClick.bind(this)}>Remove at index</Button>
					</div>
					<div className="option">
						<Button ref="button3" id="update" className="demoButton" onClick={this.handleUpdateClick.bind(this)}>Update at index</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
