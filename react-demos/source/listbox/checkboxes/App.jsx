import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ListBox  selectionMode="checkBox">
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
			    </ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
