import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {

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

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <DropDownList  dataSource={this.dataSource}></DropDownList>
			    <DropDownList  id="last" dataSource={this.dataSource}></DropDownList>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
