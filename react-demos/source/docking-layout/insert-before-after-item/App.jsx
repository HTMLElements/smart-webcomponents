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
		this.button2 = React.createRef();

		this.itemsCount = 0;
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
	},
	{
		type: 'LayoutPanel',
		label: 'Tabs 2',
		items: [{
			label: 'Tab 2',
			content: 'Content of Tab 2'
		}]
	}];

	handleStateChange(event) {
		const smartDockingLayout = this.dockinglayout.current;
		let layoutItems = smartDockingLayout.items, i;

		let undockedItems = smartDockingLayout.undockedItems;
		
		for (i = 0; i < layoutItems.length; i++) {
			layoutItems[i].label = 'Tabs ' + i;
			layoutItems[i].update(0, 'Tab ' + i, 'Content of Tab ' + i);
		}

		for (i = 0; i < undockedItems.length; i++) {
			undockedItems[i].label = 'Undocked Tabs';
			undockedItems[i].update(0, 'Tab', 'Content of Undocked Tab');
		}
	}

	createListItem() {
		const fragment = document.createDocumentFragment(),
			dropDownList = this.dropdownlist.current;

		ReactDOM.render(<ListItem />, fragment, function () {
			this.label = 'Tabs ' + dropDownList.items.length;
			dropDownList.appendChild(this.nativeElement);
		});

	}

	handleInsertBeforeItem(event) {
		const tabsWindowObject = {
			label: 'New Item',
			size: '25%',
			items: [{
				label: 'New Tab Item',
				content: 'New Tab Item Content'
			}]
		};

		if (this.itemsCount === 1) {
			this.button.current.disabled = true;
			this.button2.current.disabled = true;
		}

		this.dockinglayout.current.insertBeforeItem(this.dropdownlist.current.selectedIndexes[0], tabsWindowObject);
		this.createListItem();
		this.itemsCount++;
	}

	handleInsertAfterItem(event) {
		const tabsWindowObject = {
			label: 'New Item',
			size: '25%',
			items: [{
				label: 'New Tab Item',
				content: 'New Tab Item Content'
			}]
		};

		if (this.itemsCount === 1) {
			this.button.current.disabled = true;
			this.button2.current.disabled = true;
		}

		this.dockinglayout.current.insertAfterItem(this.dropdownlist.current.selectedIndexes[0], tabsWindowObject);
		this.createListItem();
		this.itemsCount++;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout} onStateChange={this.handleStateChange.bind(this)}></DockingLayout>

				<div className="options">
					<div className="caption">Choose an Item</div>
					<div className="option">
						<DropDownList ref={this.dropdownlist} selectedIndexes={[0]} sorted>
							<ListItem>Tabs 0</ListItem>
							<ListItem>Tabs 1</ListItem>
							<ListItem>Tabs 2</ListItem>
						</DropDownList>
					</div>
					<div className="caption">Choose a method</div>
					<div className="option">
						<Button ref={this.button} id="insertBeforeItem" onClick={this.handleInsertBeforeItem.bind(this)}>InsertBeforeItem</Button>
					</div>
					<div className="option">
						<Button ref={this.button2} id="insertAfterItem" onClick={this.handleInsertAfterItem.bind(this)}>InsertAfterItem</Button>
					</div>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
