import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
		this.radiobutton = React.createRef();
	}

	handleChange() {
		const list = this.dropdownlist.current;

		if (this.radiobutton.current.checked) {
			list.dropDownButtonPosition = 'left';
		}
		else {
			list.dropDownButtonPosition = 'right';
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<div id="comboBoxContainer">
					<DropDownList ref={this.dropdownlist} selectedIndexes={[0]} className="drop-down-list-button-positions-demo">
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
					</DropDownList>
					<div className="options">
						<div className="caption">Dropdown button Position</div>
						<div className="option">
							<RadioButton ref={this.radiobutton} onChange={this.handleChange.bind(this)}>Left</RadioButton>
							<RadioButton checked onChange={this.handleChange.bind(this)}>Right</RadioButton>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
