import React from "react";
import ReactDOM from "react-dom";
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.combobox = React.createRef();
	}

	dataSource = [
		"Affogato",
		"Americano",
		"Bicerin",
		"Breve",
		"Café Bombón",
		"Café au lait",
		"Caffé Corretto",
		"Café Crema",
		"Caffé Latte",
		"Caffé macchiato",
		"Café mélange",
		"Coffee milk",
		"Cafe mocha",
		"Cappuccino",
		"Carajillo",
		"Cortado",
		"Cuban espresso",
		"Espresso",
		"Eiskaffee",
		"The Flat White",
		"Frappuccino",
		"Galao",
		"Greek frappé coffee",
		"Alabala",
		"Indian filter coffee",
		"Instant coffee",
		"Irish coffee",
		"Liqueur coffee"
	];

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
				<div id="container">
					<ComboBox ref={this.combobox} className="drop-down-list-modes-demo" dataSource={this.dataSource}></ComboBox>
					<div className="options">
						<div className="caption">DropDown list Position:</div>
						<div className="option">
							<RadioButton  checked onClick={this.handleDropDownPositionButtonClick.bind(this)}>Auto</RadioButton>
							<br />
							<br />
							<RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Bottom</RadioButton>
							<br />
							<br />
							<RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Overlay-bottom</RadioButton>
							<br />
							<br />
							<RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Overlay-center</RadioButton>
							<br />
							<br />
							<RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Overlay-top</RadioButton>
							<br />
							<br />
							<RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Top</RadioButton>
							<br />
							<br />
							<RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Center-bottom</RadioButton>
							<br />
							<br />
							<RadioButton  onClick={this.handleDropDownPositionButtonClick.bind(this)}>Center-top</RadioButton>
							<br />
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
