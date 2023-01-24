import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.combobox = React.createRef();
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
		this.combobox.current.sorted = false;
	}

	handleSort() {
		this.combobox.current.sorted = true;
	}

	handleUngroup() {
		this.combobox.current.grouped = false;
	}

	handleGroup() {
		this.combobox.current.grouped = true;
	}

	handleOpen() {
		this.combobox.current.open();
	}

	handleClose() {
		this.combobox.current.close();
	}

	handleDefault() {
		this.combobox.current.selectionMode = 'oneOrManyExtended';
	}

	handleCheck() {
		this.combobox.current.selectionMode = 'checkBox';
	}

	handleRadio() {
		this.combobox.current.selectionMode = 'radioButton';
	}

	handleInsert() {
		this.combobox.current.insert(0, "New Item");
	}

	handleUpdate() {
		this.combobox.current.update(0, "Updated Item");
	}

	handleRemove() {
		this.combobox.current.removeAt(0);
	}

	handleDisable() {
		const combobox = this.combobox.current;

		combobox.disabled = !combobox.disabled;
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<ComboBox ref={this.combobox} id="dropDownListMethodsDemo" dataSource={this.dataSource}></ComboBox>
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
