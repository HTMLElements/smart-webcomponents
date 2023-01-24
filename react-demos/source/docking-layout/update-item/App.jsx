import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DockingLayout } from 'smart-webcomponents-react/dockinglayout';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dockinglayout = React.createRef();
		this.dropdownlist = React.createRef();
	}

	layout = [{
		id: 'tab1',
		type: 'LayoutPanel',
		label: 'Tabs 1',
		items: [{
			label: 'Tab 1',
			content: 'Content of Tab 1',
			selected: true
		}]
	},
	{
		id: 'tab2',
		type: 'LayoutPanel',
		label: 'Tabs 2',
		items: [{
			label: 'Tab 2',
			content: 'Content of Tab 2',
		}]
	},
	{
		id: 'tab3',
		type: 'LayoutPanel',
		label: 'Tabs 3',
		items: [{
			label: 'Tab 3',
			content: 'Content of Tab 3'
		}]
	}];

	handleUpdate() {
		const targetItem = document.getElementById(this.dropdownlist.current.selectedValues[0]);

		if (targetItem) {
			this.dockinglayout.current.update(targetItem, {
				size: '33%',
				label: 'Updated',
				items: [{
					index: 0,
					label: 'Updated',
					content: 'Updated'
				}]
			});
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout}></DockingLayout>
				<div className="options">
					<div className="option">
						<DropDownList ref={this.dropdownlist}>
							<ListItem value="tab1">Tab 1</ListItem>
							<ListItem value="tab2">Tab 2</ListItem>
							<ListItem value="tab3">Tab 3</ListItem>
						</DropDownList>
					</div>
					<div className="option">
						<Button id="update" onClick={this.handleUpdate.bind(this)}>Update</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
