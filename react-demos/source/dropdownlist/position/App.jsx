import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownlist = React.createRef();
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
		const dropDownList = that.dropdownlist.current;
		let mode = event.target.textContent.trim();

		dropDownList.dropDownPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DropDownList ref={this.dropdownlist} className="drop-down-list-modes-demo" dataSource={this.dataSource}></DropDownList>
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
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
