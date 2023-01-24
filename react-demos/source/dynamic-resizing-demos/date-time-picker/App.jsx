import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        dateTimePicker = document.getElementById('dateTimePicker');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        dateTimePicker.style.height = value / 5 + 'px';
	        dateTimePicker.style.width = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="100" max="1000" orientation="horizontal"
			    value="250" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <DateTimePicker ref="datetimepicker" id="dateTimePicker" spin-buttons
			    spin-buttons-position="left" calendar-button calendar-mode="classic" drop-down-position="center-bottom"></DateTimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
