import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
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
		this.dropdownlist.current.sorted = false;
	}

	handleSort() {
		this.dropdownlist.current.sorted = true;
	}

	handleUngroup() {
		this.dropdownlist.current.grouped = false;
	}

	handleGroup() {
		this.dropdownlist.current.grouped = true;
	}

	handleOpen() {
		this.dropdownlist.current.open();
	}

	handleClose() {
		this.dropdownlist.current.close();
	}

	handleDefault() {
		this.dropdownlist.current.selectionMode = 'oneOrManyExtended';
	}

	handleCheck() {
		this.dropdownlist.current.selectionMode = 'checkBox';
	}

	handleRadio() {
		this.dropdownlist.current.selectionMode = 'radioButton';
	}

	handleInsert() {
		this.dropdownlist.current.insert(0, "New Item");
	}

	handleUpdate() {
		this.dropdownlist.current.update(0, "Updated Item");
	}

	handleRemove() {
		this.dropdownlist.current.removeAt(0);
	}

	handleDisable() {
		const dropDownList = this.dropdownlist.current;

		dropDownList.disabled = !dropDownList.disabled;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DropDownList ref={this.dropdownlist} id="dropDownListMethodsDemo" dataSource={this.dataSource}></DropDownList>
				<div className="options">
					<div className="option">Settings</div>
					<div className="option">
						<Button id="unsort" onClick={this.handleUnsort.bind(this)}>Unsort</Button>
						<Button id="sort" onClick={this.handleSort.bind(this)}>Sort</Button>
						<br />
						<br />
						<Button id="ungroup" onClick={this.handleUngroup.bind(this)}>Ungroup</Button>
						<Button id="group" onClick={this.handleGroup.bind(this)}>Group</Button>
						<br />
						<br />
						<Button id="open" onClick={this.handleOpen.bind(this)}>Open</Button>
						<Button id="close" onClick={this.handleClose.bind(this)}>Close</Button>
						<br />
						<br />
						<Button id="default" onClick={this.handleDefault.bind(this)}>Default</Button>
						<Button id="check" onClick={this.handleCheck.bind(this)}>Check</Button>
						<br />
						<br />
						<Button id="radio" onClick={this.handleRadio.bind(this)}>Radio</Button>
						<br />
						<br />
						<Button id="insert" onClick={this.handleInsert.bind(this)}>Insert</Button>
						<Button id="update" onClick={this.handleUpdate.bind(this)}>Update</Button>
						<br />
						<br />
						<Button id="remove" onClick={this.handleRemove.bind(this)}>Remove</Button>
						<br />
						<br />
						<Button style={{ width: "auto" }} id="disabled" onClick={this.handleDisable.bind(this)}>Enable/Disable</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
