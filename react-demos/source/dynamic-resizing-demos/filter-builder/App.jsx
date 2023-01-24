import React from "react";
import ReactDOM from "react-dom";
import { FilterBuilder } from 'smart-webcomponents-react/filterbuilder';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {
	
	
	    const slider = document.getElementById("horizontalSlider"),
	        smartFilterBuilder = document.querySelector('smart-filter-builder');
	    smartFilterBuilder.fields = [{
	            label: 'id',
	            dataField: 'id',
	            dataType: 'number'
	        },
	        {
	            label: 'Product',
	            dataField: 'productName',
	            dataType: 'string'
	        }
	    ];
	    slider.addEventListener('change', function(event) {
	        const size = event.detail.value;
	        smartFilterBuilder.style.width = size + 'px';
	        smartFilterBuilder.style.height = size / 2 + 'px';
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
			    <FilterBuilder ref="filterbuilder"></FilterBuilder>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
