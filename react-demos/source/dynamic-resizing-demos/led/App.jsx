import React from "react";
import ReactDOM from "react-dom";
import { Led } from 'smart-webcomponents-react/led';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        leds = document.querySelectorAll('smart-led'),
	        led = leds[0],
	        ledSquare = leds[1];
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        led.style.width = led.style.height = value + 'px';
	        ledSquare.style.width = ledSquare.style.height = value + 'px';
	    });
	    led.style.width = led.style.height = '100px';
	    ledSquare.style.width = ledSquare.style.height = '100px';
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="40" max="1000" orientation="horizontal"
			    scale-position="near" unit="px" show-unit></Slider>
			    <Led ref="led" checked></Led>
			    <Led ref="led2" checked shape="square"></Led>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
