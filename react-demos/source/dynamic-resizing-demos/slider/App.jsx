import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        horizontalSliderContainer = document.getElementById('horizontalSliderContainer'),
	        verticalSliderContainer = document.getElementById('verticalSliderContainer');
	    slider.addEventListener('change', function(event) {
	        const size = slider.value + 'px';
	        horizontalSliderContainer.style.width = size;
	        verticalSliderContainer.style.height = size;
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize the second and third sliders:</h3>
			    <Slider ref="slider" id="resizeSlider" min="200" max="1000" value="200"
			    orientation="horizontal" scale-position="near" show-unit unit="px"></Slider>
			    <br />
			    <br />
			    <div id="horizontalSliderContainer">
			        <Slider ref="slider2" id="horizontalSlider" logarithmic-scale min="1"
			        max="100000" value="333"></Slider>
			    </div>
			    <br />
			    <br />
			    <div id="verticalSliderContainer">
			        <Slider ref="slider3" id="verticalSlider" orientation="vertical" inverted
			        min="0" max="1000" value="333"></Slider>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
