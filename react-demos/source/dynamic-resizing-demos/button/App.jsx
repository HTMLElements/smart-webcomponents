import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        button = document.querySelector('smart-button');
	    let value;
	    slider.addEventListener('change', function(event) {
	        value = slider.value;
	        button.style.height = value / 2 + 'px';
	        button.style.width = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="10" max="1000" orientation="horizontal"
			    value="100" scale-position="near" unit="px" show-unit></Slider>
			    <Button ref="button">Click Me</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
