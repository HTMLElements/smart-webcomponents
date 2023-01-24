import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById('horizontalSlider'),
	        calendar = document.getElementById('calendar');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        calendar.style.height = value / 2 + 'px';
	        calendar.style.width = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="100" max="1000" value="300"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <Calendar ref="calendar" id="calendar" calendar-mode="classic"></Calendar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
