import React from "react";
import ReactDOM from "react-dom";
import { ComboBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/combobox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        comboBox = document.querySelector('smart-combo-box');
	    comboBox.dataSource = [
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
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        comboBox.style.width = size + 'px';
	        comboBox.style.height = size / 2 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="40" max="1000" value="50"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <ComboBox ref="combobox" selection-mode="one"></ComboBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
