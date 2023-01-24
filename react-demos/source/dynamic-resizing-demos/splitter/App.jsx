import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        smartSplitter = document.querySelector('smart-splitter');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        smartSplitter.style.width = size + 'px';
	        smartSplitter.style.height = size + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="100" max="1000" value="400"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <Splitter ref="splitter" label="New Window" opened>
			        <SplitterItem size="25%">Some simple text that starts here ...</SplitterItem>
			        <SplitterItem>... continues here ...</SplitterItem>
			        <SplitterItem size="25%">... and ends here.</SplitterItem>
			    </Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
