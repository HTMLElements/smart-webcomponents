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
		type: 'LayoutPanel',
		label: 'Tabs 0',
		items: [{
			label: 'Tab 0',
			content: 'Content of Tab 0'
		}]
	},
	{
		type: 'LayoutPanel',
		label: 'Tabs 1',
		items: [{
			label: 'Tab 1',
			content: 'Content of Tab 1',
		}]
	}];

	createListItem() {
		const dropDownList = this.dropdownlist.current;

		ReactDOM.render(<ListItem />, document.createDocumentFragment(), function () {
			this.label = 'Tabs ' + dropDownList.items.length;
			dropDownList.appendChild(this.nativeElement);
		});
	}

	handleStateChange() {
		const dockingLayout = this.dockinglayout.current;
		let layoutItems = dockingLayout.items,
			i, undockedItems = dockingLayout.undockedItems;

		for (i = 0; i < layoutItems.length; i++) {
			layoutItems[i].label = 'Tabs ' + i;
			layoutItems[i].update(0, 'Tab ' + i, 'Content of Tab ' + i);
		}

		for (i = 0; i < undockedItems.length; i++) {
			undockedItems[i].label = 'Undocked Tabs';
			undockedItems[i].update(0, 'Tab', 'Content of Undocked Tab');
		}
	}

	handleInsertInto(position) {
		const dropDownList = this.dropdownlist.current,
			tabsWindowObject = {
				label: 'New Item',
				size: '50%',
				items: [{
					label: 'New Tab Item',
					content: 'New Tab Item Content'
				}]
			},
			index = dropDownList.selectedIndexes[0];

		this.dockinglayout.current['insertInto' + position](index, tabsWindowObject);
		this.createListItem();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="options">
					<div className="option">Choose an Item</div>
					<div className="option">
						<DropDownList ref={this.dropdownlist} sorted>
							<ListItem>Tabs 0</ListItem>
							<ListItem>Tabs 1</ListItem>
						</DropDownList>
					</div>
					<div className="option">
						<div className="option">Choose a method:</div>
						<Button id="insertIntoLeft" onClick={this.handleInsertInto.bind(this, 'Left')}>InsertIntoLeft</Button>
						<br />
						<Button id="insertIntoRight" onClick={this.handleInsertInto.bind(this, 'Right')}>InsertIntoRight</Button>
						<br />
						<Button id="insertIntoTop" onClick={this.handleInsertInto.bind(this, 'Top')}>InsertIntoTop</Button>
						<br />
						<Button id="insertIntoBottom" onClick={this.handleInsertInto.bind(this, 'Bottom')}>InsertIntoBottom</Button>
					</div>
				</div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout} onStateChange={this.handleStateChange.bind(this)}></DockingLayout>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
