import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        progressbarHorizontal = document.getElementById('progressbar1'),
	        progressbarVertical = document.getElementById('progressbar2'),
	        progressbarCircular = document.getElementById('progressbar3');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        progressbarHorizontal.style.width = value + 'px';
	        progressbarHorizontal.style.height = value / 4 + 'px';
	        progressbarVertical.style.height = value + 'px';
	        progressbarVertical.style.width = value / 4 + 'px';
	        progressbarCircular.style.width = value + 'px';
	        progressbarCircular.style.height = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="40" max="1000" value="100"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <ProgressBar ref="progressbar" id="progressbar1" value="50" show-progress-value></ProgressBar>
			    <ProgressBar ref="progressbar2" id="progressbar2" orientation="vertical"
			    value="50" show-progress-value></ProgressBar>
			    <CircularProgressBar id="progressbar3" value="50" show-progress-value></CircularProgressBar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
