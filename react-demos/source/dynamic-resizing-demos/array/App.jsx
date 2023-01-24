import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById('horizontalSlider'),
	        array = document.getElementById('array');
	    slider.addEventListener('change', function(event) {
	        const value = slider.value;
	        array.style.width = value + 'px';
	        array.style.height = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="130" max="1000" orientation="horizontal"
			    value="130" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <Array ref="array" id="array" show-index-display type="none"></Array>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
