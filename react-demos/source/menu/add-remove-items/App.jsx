import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.menu = React.createRef();
		this.button3 = React.createRef();
	}

	itemCount = 1;
	subItemCount = 0;

	handleAddItemClick() {
		this.itemCount++;
		const newItem = document.createElement('smart-menu-item');
		newItem.innerHTML = 'Item ' + this.itemCount;
		this.menu.current.addItem(newItem);
	}

	handleAddSubItemClick() {
		this.subItemCount++;
		const newItem = document.createElement('smart-menu-item');
		newItem.innerHTML = 'Item 0.' + this.subItemCount;
		this.menu.current.addItem(newItem, '0');
	}

	handleRemoveItemClick() {
		this.menu.current.removeItem('1');
		this.button3.current.disabled = true;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Menu ref={this.menu} id="menu" drop-down-append-to="body">
					<MenuItemsGroup>Item 0
						<MenuItem>Item 0.0</MenuItem>
					</MenuItemsGroup>
					<MenuItem>Item 1</MenuItem>
				</Menu>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button id="addItem" className="demoButton" onClick={this.handleAddItemClick.bind(this)}>Add item</Button>
					</div>
					<div className="option">
						<Button id="addSubItem" className="demoButton" onClick={this.handleAddSubItemClick.bind(this)}>Add to "Item 0"</Button>
					</div>
					<div className="option">
						<Button ref={this.button3} id="removeItem" className="demoButton" onClick={this.handleRemoveItemClick.bind(this)}>Remove "Item 1"</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
