import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        switchButton = document.querySelector('smart-switch-button');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        switchButton.style.setProperty('--smart-switch-button-default-width', value + 'px');
	        switchButton.style.setProperty('--smart-switch-button-default-height', value / 2 + 'px');
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
			    <SwitchButton ref="switchbutton"></SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
