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
			    <DropDownList  selectedIndexes={[0]} minLength={1}
			    selectionMode="zeroOrOne" dataSource={this.dataSource}></DropDownList>
			    <br/>
			    <br/>
			    <br/>
			    <div className="description">Open the DropDownList and press "F" to select the "Frappuccino" item.</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
