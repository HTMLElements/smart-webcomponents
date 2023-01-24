import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById('horizontalSlider'),
	        timePicker = document.getElementById('timePicker');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        timePicker.style.width = value + 'px';
	        timePicker.style.height = 1.67 * value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="250" max="1000" orientation="horizontal"
			    value="300" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <TimePicker ref="timepicker" id="timePicker"></TimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
