import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const gauge = document.getElementById('gauge');
	    document.getElementById('resizeSlider').addEventListener('change', function(event) {
	        const size = this.value + 'px';
	        gauge.style.width = size;
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="resizeSlider" min="200" max="1000" value="200"
			    orientation="horizontal" scale-position="near" show-unit unit="px"></Slider>
			    <br />
			    <Gauge ref="gauge" id="gauge"></Gauge>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
