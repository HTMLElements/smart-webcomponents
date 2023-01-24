import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.querySelector('smart-slider'),
	        accordion = document.getElementsByTagName("smart-accordion")[0];
	    let value;
	    slider.addEventListener('change', function(event) {
	        value = slider.value;
	        accordion.style.width = value / 2 + 'px';
	        accordion.style.height = value + 'px';
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>Slide to resize:</h3>
			    <Slider ref="slider" id="horizontalSlider" min="40" max="1000" value="500"
			    orientation="horizontal" scale-position="near" unit="px" show-unit="true"
			    show-tool-tip="false"></Slider>
			    <Accordion ref="accordion">
			        <AccordionItem label="Item 1">Content</AccordionItem>
			        <AccordionItem label="Item 3">Content</AccordionItem>
			        <AccordionItem label="Item 2">Content</AccordionItem>
			        <AccordionItem label="Item 4">Content</AccordionItem>
			        <AccordionItem label="Item 5">Content</AccordionItem>
			        <AccordionItem label="Item 6">Content</AccordionItem>
			        <AccordionItem label="Item 7">Content</AccordionItem>
			        <AccordionItem label="Item 8">Content</AccordionItem>
			        <AccordionItem label="Item 9">Content</AccordionItem>
			    </Accordion>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
