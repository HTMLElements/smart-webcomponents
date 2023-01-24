import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        powerButton = document.querySelector('smart-power-button');
	    let value;
	    slider.addEventListener('change', function(event) {
	        value = slider.value;
	        powerButton.style.height = value + 'px';
	        powerButton.style.width = value + 'px';
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
			    <PowerButton></PowerButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
