import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        horizontalTankContainer = document.getElementById('horizontalTank'),
	        verticalTankContainer = document.getElementById('verticalTank');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value + 'px';
	        horizontalTankContainer.style.width = size;
	        verticalTankContainer.style.height = size;
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
			    <Tank ref="tank" id="horizontalTank" orientation="horizontal" min="0"
			    max="1000" value="333"></Tank>
			    <Tank ref="tank2" id="verticalTank" orientation="vertical" inverted
			    min="0" max="1000" value="333"></Tank>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
