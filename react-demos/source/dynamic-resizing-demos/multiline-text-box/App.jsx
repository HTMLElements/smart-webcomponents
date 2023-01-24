import React from "react";
import ReactDOM from "react-dom";
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        textBox = document.getElementById('multilineTextBox');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value + 'px';
	        textBox.style.width = size;
	        textBox.style.height = size;
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="40" max="1000" value="200"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <MultilineTextBox ref="multilinetextbox" id="multilineTextBox" select-all-on-focus
			    allow-horizontal-scrollbar allow-vertical-scrollbar placeholder="smartMultilineTextBox"></MultilineTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
