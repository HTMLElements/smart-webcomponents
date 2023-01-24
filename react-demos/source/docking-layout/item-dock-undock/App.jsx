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
		items: [{
			id: 'A',
			label: 'A',
			content: 'Content of item with id #itemA',
			selected: true
		}],
		autoHide: true,
		autoHidePosition: 'top'
	},
	{
		type: 'LayoutPanel',
		items: [{
			id: 'B',
			label: 'B',
			content: 'Content of item with id #itemB',
		}],
		autoHide: true,
		autoHidePosition: 'left'
	},
	{
		type: 'LayoutPanel',
		items: [{
			id: 'C',
			label: 'C',
			content: 'Content of item with id #itemC'
		}],
		autoHide: true,
		autoHidePosition: 'right'
	},
	{
		type: 'LayoutPanel',
		items: [{
			id: 'D',
			label: 'D',
			content: 'Content of item with id #itemD',
		}],
		autoHide: true,
		autoHidePosition: 'bottom'
	}];

	handleDock() {
		this.dockinglayout.current.dock(this.dropdownlist.current.selectedValues[0]);
	}

	handleUndock() {
		this.dockinglayout.current.undock(this.dropdownlist.current.selectedValues[0]);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DockingLayout ref={this.dockinglayout} id="layout" layout={this.layout}></DockingLayout>
				<div className="options">
					<div className="caption">Choose an Item</div>
					<div className="option">
						<DropDownList ref={this.dropdownlist} sorted>
							<ListItem value="A">Tabs A</ListItem>
							<ListItem value="B">Tabs B</ListItem>
							<ListItem value="C">Tabs C</ListItem>
							<ListItem value="D">Tabs D</ListItem>
						</DropDownList>
					</div>
					<div className="option">
						<Button id="dock" onClick={this.handleDock.bind(this)}>Dock</Button>
					</div>
					<div className="option">
						<Button id="undock" onClick={this.handleUndock.bind(this)}>Undock</Button>
					</div>
				</div>
				<br />
				<br />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
