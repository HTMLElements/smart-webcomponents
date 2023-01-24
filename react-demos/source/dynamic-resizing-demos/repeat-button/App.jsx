import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        repeatButton = document.getElementById('repeatButton');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        repeatButton.style.width = value + 'px';
	        repeatButton.style.height = value / 2 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="0" max="1000" orientation="horizontal"
			    scale-position="near" unit="px" show-unit></Slider>
			    <RepeatButton id="repeatButton">Click Me</RepeatButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
