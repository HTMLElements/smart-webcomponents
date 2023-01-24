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
		this.tabs.current.dataSource = [{
			label: 'Item A',
			content: 'Content A',
			index: 3
		},
		{
			label: 'Item B',
			content: 'Content B',
			index: 2
		},
		{
			label: 'Item C',
			content: 'Content C',
			index: 1
		},
		{
			label: 'Item D',
			labelSize: 80,
			content: 'Content D',
			index: 0
		}];
	}

	dataSource = [{
		label: 'Group 1',
		items: [{
			label: 'Item 1.1',
			content: 'Content 1.1'
		},
		{
			label: 'Item 1.2',
			content: 'Content 1.2'
		},
		{
			label: 'Item 1.3',
			content: 'Content 1.3'
		}
		]
	},
	{
		label: 'Item 2',
		content: 'Content 2'
	},
	{
		label: 'Item 3',
		content: 'Content 3',
		selected: true
	}
	];

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tabs ref={this.tabs} className="demoTabs" dataSource={this.dataSource}></Tabs>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button ref="button" id="loadDataSource" className="demoButton" onClick={this.handleClick.bind(this)}>Load a different dataSource</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
