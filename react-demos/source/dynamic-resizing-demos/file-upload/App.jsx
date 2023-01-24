import React from "react";
import ReactDOM from "react-dom";
import { FileUpload } from 'smart-webcomponents-react/fileupload';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        smartFileUpload = document.querySelector('smart-file-upload');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        smartFileUpload.style.width = size + 'px';
	        smartFileUpload.style.height = size / 2 + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="80" max="1000" value="400"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <FileUpload ref="fileupload" multiple drop-zone></FileUpload>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
