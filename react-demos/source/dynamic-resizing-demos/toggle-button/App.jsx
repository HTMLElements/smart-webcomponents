import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        toggleButton = document.querySelector('smart-toggle-button');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        toggleButton.style.width = value + 'px';
	        toggleButton.style.height = value / 2 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="65" max="1000" value="65"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <ToggleButton>Click Me</ToggleButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
