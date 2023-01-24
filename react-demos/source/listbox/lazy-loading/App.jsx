import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.listbox = React.createRef();
	}

	dataSource = ["Affogato", "Americano", "Bicerin", "Breve", "Café Bombón", "Café au lait", "Caffé Corretto", "Café Crema", "Caffé Latte", "Caffé macchiato", "Café mélange", "Coffee milk", "Cafe mocha", "Cappuccino", "Carajillo", "Cortado", "Cuban espresso", "Espresso", "Eiskaffee", "The Flat White", "Frappuccino", "Galao", "Greek frappé coffee", "Iced Coffee﻿", "Indian filter coffee", "Instant coffee", "Irish coffee", "Liqueur coffee"]

	handleScrollBottomReached() {
		const list = this.listbox.current;

		list.displayLoadingIndicator = true;

		setTimeout(function () {
			const index = list.items.length;
			let items = [];

			for (let i = 0; i < 10; i++) {
				items.push("Item " + parseInt('' + (i + index)));
			}

			list.insert(index, items);
			list.displayLoadingIndicator = false;
		}, 1000);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div> <i>Hint: Scroll to the bottom to lazy load items.</i>
				<ListBox ref={this.listbox} dataSource={this.dataSource} onScrollBottomReached={this.handleScrollBottomReached.bind(this)}></ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
