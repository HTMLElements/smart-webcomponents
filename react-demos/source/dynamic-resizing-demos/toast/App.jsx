import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        toastContainerTopRight = document.querySelector('.smart-toast-container-top-right');
	    slider.addEventListener('change', function(event) {
	        toastContainerTopRight.style.width = slider.value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="150" max="1000" value="300"
			    orientation="horizontal" scale-position="near" unit="px" show-unit="true"
			    show-tool-tip="false"></Slider>
			    <Toast ref="toast" auto-open show-close-button className="blink">Alert!</Toast>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
