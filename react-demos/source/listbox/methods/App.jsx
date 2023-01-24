import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.listbox = React.createRef();
	}

	dataSource = [{
		label: "Andrew",
		value: 1,
		group: "Product Owners"
	},
	{
		label: "Natalia",
		value: 2,
		group: "Developers"
	},
	{
		label: "Michael",
		value: 3,
		group: "Developers"
	},
	{
		label: "Angel",
		value: 4,
		group: "Product Owners"
	},
	{
		label: "Hristo",
		value: 5,
		group: "Developers"
	},
	{
		label: "Peter",
		value: 6,
		group: "Developers"
	},
	{
		label: "Albert",
		value: 7,
		group: "Support"
	},
	{
		label: "George",
		value: 8,
		group: "Support"
	}];

	handleUnsort() {
		this.listbox.current.sorted = false;
	}

	handleSort() {
		this.listbox.current.sorted = true;
	}

	handleUngroup() {
		this.listbox.current.grouped = false;
	}

	handleGroup() {
		this.listbox.current.grouped = true;
	}

	handleDefault() {
		this.listbox.current.selectionMode = 'oneOrManyExtended';
	}

	handleCheck() {
		this.listbox.current.selectionMode = 'checkBox';
	}

	handleRadio() {
		this.listbox.current.selectionMode = 'radioButton';
	}

	handleInsert() {
		this.listbox.current.insert(0, "New Item");
	}

	handleUpdate() {
		this.listbox.current.update(0, "Updated Item");
	}

	handleRemove() {
		this.listbox.current.removeAt(0);
	}

	handleDisable() {
		const listbox = this.listbox.current;

		listbox.disabled = !listbox.disabled;
	}

	handleClearItems() {
		this.listbox.current.clearItems();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<ListBox ref={this.listbox} selectionMode="checkBox" id="list" dataSource={this.dataSource}></ListBox>
				<div className="options">
					<div className="caption">Methods</div>
					<div className="option">
						<Button id="unsort" onClick={this.handleUnsort.bind(this)}>Unsort</Button>
						<Button id="sort" onClick={this.handleSort.bind(this)}>Sort</Button>
					</div>
					<div className="option">
						<Button id="ungroup" onClick={this.handleUngroup.bind(this)}>Ungroup</Button>
						<Button id="group" onClick={this.handleGroup.bind(this)}>Group</Button>
					</div>
					<div className="option">
						<Button id="default" onClick={this.handleDefault.bind(this)}>Default</Button>
						<Button id="check" onClick={this.handleCheck.bind(this)}>Check</Button>
						<br />
						<Button id="radio" onClick={this.handleRadio.bind(this)}>Radio</Button>
					</div>
					<div className="option">
						<Button id="insert" onClick={this.handleInsert.bind(this)}>Insert</Button>
						<Button id="update" onClick={this.handleUpdate.bind(this)}>Update</Button>
						<br />
						<Button id="remove" onClick={this.handleRemove.bind(this)}>Remove</Button>
					</div>
					<div className="option">
						<Button style={{ width: "auto" }} id="disabled" onClick={this.handleDisable.bind(this)}>Enable/Disable</Button>
						<br />
						<Button id="clearItems" onClick={this.handleClearItems.bind(this)}>Clear Items</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
