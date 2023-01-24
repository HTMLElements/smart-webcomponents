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
			    <DropDownList  selectedIndexes={[0]} className="auto-height animated"
			    selectionDisplayMode="tokens" selectionMode="oneOrManyExtended" dataSource={this.dataSource}></DropDownList>
			    <br/>
			    <br/>
			    <br/>
			    <div className="description">When multiple DropDownList items are selected, the height of the component
			        is updated and items are wrapped in multiple rows.</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
