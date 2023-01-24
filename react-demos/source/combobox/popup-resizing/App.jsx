import React from "react";
import ReactDOM from "react-dom";
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.combobox = React.createRef();
	}

	handleResizeModeButtonClick(event) {
		const that = this;
		const combobox = that.combobox.current;
		let mode = event.target.textContent.trim();

		combobox.resizeMode = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	handleDropDownPositionButtonClick(event) {
		const that = this;
		const combobox = that.combobox.current;
		let mode = event.target.textContent.trim();

		combobox.dropDownPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
	}
	
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ComboBox ref={this.combobox} resizeMode="vertical">
			        <ListItem value="1">Affogato</ListItem>
			        <ListItem value="2">Americano</ListItem>
			        <ListItem value="3">Bicerin</ListItem>
			        <ListItem value="4">Breve</ListItem>
			        <ListItem value="5">Cappuccino</ListItem>
			        <ListItem value="6">Cafe Crema</ListItem>
			        <ListItem value="7">Cafe Corretto</ListItem>
			        <ListItem value="8">Cafe macchiato</ListItem>
			        <ListItem value="9">Cafe mocha</ListItem>
			        <ListItem value="10">Cortado</ListItem>
			        <ListItem value="11">Cuban espresso</ListItem>
			        <ListItem value="12">Espresso</ListItem>
			        <ListItem value="13">Eiskaffee</ListItem>
			        <ListItem value="14">Frappuccino</ListItem>
			        <ListItem value="15">Galao</ListItem>
			        <ListItem value="16">Greek frappe coffee</ListItem>
			        <ListItem value="17">Iced Coffee﻿</ListItem>
			        <ListItem value="18">Instant Coffee﻿</ListItem>
			        <ListItem value="19">Latte</ListItem>
			        <ListItem value="20">Liqueur coffee</ListItem>
			    </ComboBox>
			    <div className="options">
			        <div className="caption">Resize Mode</div>
			        <div className="option">
			            <RadioButton onClick={this.handleResizeModeButtonClick.bind(this)}>None</RadioButton>
			            <br/>
			            <br/>
			            <RadioButton onClick={this.handleResizeModeButtonClick.bind(this)}>Horizontal</RadioButton>
			            <br/>
			            <br/>
			            <RadioButton onClick={this.handleResizeModeButtonClick.bind(this)}>Both</RadioButton>
			            <br/>
			            <br/>
			            <RadioButton checked onClick={this.handleResizeModeButtonClick.bind(this)}>Vertical</RadioButton>
			            <br/>
			            <br/>
			        </div>
			        <div className="ddp caption">DropDown position</div>
			        <div className="ddp option">
			            <RadioButton checked onClick={this.handleDropDownPositionButtonClick.bind(this)}>Bottom</RadioButton>
			            <RadioButton onClick={this.handleDropDownPositionButtonClick.bind(this)}>Top</RadioButton>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
