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
		this.button = React.createRef();

		this.itemsCount = 0;
	}

	draggable = false;

	layout = [{
		type: 'LayoutGroup',
		orientation: 'horizontal',
		items: [{
			id: 'tab0',
			type: 'LayoutPanel',
			label: 'Tabs 0',
			size: '65%',
			items: [{
				label: 'Tab 0',
				content: 'Content of Tab 0'
			}]
		},
		{
			id: 'tab1',
			type: 'LayoutPanel',
			label: 'Tabs 1',
			items: [{
				label: 'Tab 1',
				content: 'Content of Tab 1'
			}]
		}
		]
	},
	{
		type: 'LayoutGroup',
		orientation: 'horizontal',
		items: [{
			id: 'tab2',
			type: 'LayoutPanel',
			label: 'Tabs 2',
			size: '25%',
			items: [{
				label: 'Tab 2',
				content: 'Content of Tab 2'
			}]
		},
		{
			id: 'tab3',
			type: 'LayoutPanel',
			label: 'Tabs 3',
			items: [{
				label: 'Tab 3',
				content: 'Content of Tab 3',
			}]
		}
		]
	}];

	handleRemove() {
		const dropDownList = this.dropdownlist.current;

		this.dockinglayout.current.removeAt(dropDownList.selectedValues[0]);
		dropDownList.removeAt(dropDownList.selectedIndexes[0]);
		this.itemsCount++;

		if (this.itemsCount === 3) {
			this.button.current.disabled = true;
			dropDownList.disabled = true;
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout} draggable={this.draggable}></DockingLayout>
				<div className="options">
					<div className="option">
						<DropDownList ref={this.dropdownlist} id="dropDownList">
							<ListItem value="tab0">Tab 0</ListItem>
							<ListItem value="tab1">Tab 1</ListItem>
							<ListItem value="tab2">Tab 2</ListItem>
							<ListItem value="tab3">Tab 3</ListItem>
						</DropDownList>
					</div>
					<div className="option">
						<Button ref={this.button} id="remove" onClick={this.handleRemove.bind(this)}>Remove</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
