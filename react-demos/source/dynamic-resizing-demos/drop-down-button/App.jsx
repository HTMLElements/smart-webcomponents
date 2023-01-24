import React from "react";
import ReactDOM from "react-dom";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        dropDownList = document.querySelector('smart-drop-down-button');
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        dropDownList.style.width = size + 'px';
	        dropDownList.style.height = size / 2 + 'px';
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
			    <DropDownButton ref="dropdownbutton">
			         <h3>What is Lorem Ipsum?</h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			        Lorem Ipsum has been the industry's standard dummy text ever since the
			        1500s, when an unknown printer took a galley of type and scrambled it to
			        make a type specimen book. It has survived not only five centuries, but
			        also the leap into electronic typesetting, remaining essentially unchanged.
			        It was popularised in the 1960s with the release of Letraset sheets containing
			        Lorem Ipsum passages, and more recently with desktop publishing software
			        like Aldus PageMaker including versions of Lorem Ipsum.</DropDownButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
