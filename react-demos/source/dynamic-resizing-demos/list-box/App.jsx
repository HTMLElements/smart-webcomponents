import React from "react";
import ReactDOM from "react-dom";
import { ListBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/listbox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        listbox = document.getElementsByTagName("smart-list-box")[0],
	        source = [
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
	            "Iced Coffee﻿",
	            "Indian filter coffee",
	            "Instant coffee",
	            "Irish coffee",
	            "Liqueur coffee"
	        ];
	    listbox.dataSource = source;
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        listbox.style.width = value / 2 + 'px';
	        listbox.style.height = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="40" max="1000" value="500"
			    orientation="horizontal" scale-position="near" unit="px" show-unit="true"
			    show-tool-tip="false"></Slider>
			    <ListBox ref="listbox"></ListBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
