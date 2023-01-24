import React from "react";
import ReactDOM from "react-dom";
import { Menu, MenuItem, MenuItemsGroup } from 'smart-webcomponents-react/menu';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.menu = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.radiobutton3 = React.createRef();
		this.radiobutton4 = React.createRef();
		this.radiobutton5 = React.createRef();
		this.radiobutton6 = React.createRef();
		this.radiobutton7 = React.createRef();
	}

	handleAutoChange() {
		this.menu.current.dropDownPosition = 'auto';
	}

	handleBottomLeftChange() {
		this.menu.current.dropDownPosition = 'bottom-left';
	}

	handleBottomRightChange() {
		this.menu.current.dropDownPosition = 'bottom-right';
	}

	handleTopLeftChange() {
		this.menu.current.dropDownPosition = 'top-left';
	}

	handleTopRightChange() {
		this.menu.current.dropDownPosition = 'top-right';
	}

	handleOverlayLeftChange() {
		this.menu.current.dropDownPosition = 'overlay-left';
	}

	handleOverlayRightChange() {
		this.menu.current.dropDownPosition = 'overlay-right';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Menu ref={this.menu} id="menu" className="material animation" dropDownPosition="auto">
					<MenuItemsGroup>File
			            <MenuItem shortcut="Ctrl+N">New</MenuItem>
						<MenuItem shortcut="Ctrl+0">Open</MenuItem>
						<MenuItem shortcut="Ctrl+S" disabled>Save</MenuItem>
						<MenuItem shortcut="Ctrl+Alt+S" separator>Save As...</MenuItem>
						<MenuItem shortcut="Alt+F4">Exit</MenuItem>
					</MenuItemsGroup>
					<MenuItemsGroup>Edit
			            <MenuItem shortcut="Ctrl+Z">Undo</MenuItem>
						<MenuItem shortcut="Ctrl+Y" separator>Redo</MenuItem>
						<MenuItem shortcut="Ctrl+X">Cut</MenuItem>
						<MenuItem shortcut="Ctrl+C">Copy</MenuItem>
						<MenuItem shortcut="Ctrl+V" disabled>Paste</MenuItem>
					</MenuItemsGroup>
				</Menu>
				<div className="options">
					<div className="caption">Dropdown Position</div>
					<div className="option">
						<RadioButton ref={this.radiobutton} checked onChange={this.handleAutoChange.bind(this)}>Auto (browser bounds detection)</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton2} onChange={this.handleBottomLeftChange.bind(this)}>Bottom left</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton3} onChange={this.handleBottomRightChange.bind(this)}>Bottom right</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton4} onChange={this.handleTopLeftChange.bind(this)}>Top left</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton5} onChange={this.handleTopRightChange.bind(this)}>Top right</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton6} onChange={this.handleOverlayLeftChange.bind(this)}>Overlay left</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton7} onChange={this.handleOverlayRightChange.bind(this)}>Overlay right</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
