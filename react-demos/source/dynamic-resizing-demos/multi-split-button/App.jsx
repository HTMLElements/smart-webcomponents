import React from "react";
import ReactDOM from "react-dom";
import { MultiSplitButton, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multisplitbutton';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        multiSplitButton = document.querySelector('smart-multi-split-button');
	    multiSplitButton.dataSource = [{
	        "value": "1",
	        "label": "Btn 1",
	        "button": true
	    }, {
	        "value": "2",
	        "label": "Btn 2",
	        "button": true
	    }, {
	        "value": "3",
	        "label": "Btn 3",
	        "button": true
	    }, {
	        "value": "4",
	        "label": "Btn 4",
	        "button": true
	    }, {
	        "value": "5",
	        "label": "Btn 5",
	        "button": true
	    }, {
	        "value": "6",
	        "label": "Btn 6",
	        "button": true
	    }, {
	        "value": "7",
	        "label": "Btn 7"
	    }, {
	        "value": "8",
	        "label": "Btn 8"
	    }];
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        multiSplitButton.style.width = size + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="40" max="1000" value="300"
			    orientation="horizontal" scale-position="near" unit="px" show-unit></Slider>
			    <br />
			    <MultiSplitButton ref="multisplitbutton"></MultiSplitButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
