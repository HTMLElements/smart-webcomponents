import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let slidersList = [];
	    // appends 100 sliders on the page
	    function appendSliders() {
	        const slidersContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newSlider = document.createElement('smart-slider');
	            newSlider.setAttribute('scale-type', 'floatingPoint');
	            newSlider.setAttribute('max', 1000);
	            newSlider.classList.add('testSlider');
	            slidersList.push(newSlider);
	            containerFragment.appendChild(newSlider);
	        }
	        slidersContainer.appendChild(containerFragment);
	        document.body.appendChild(slidersContainer);
	    }
	    // executes value updates for all sliders in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                slidersList[i].value = Math.random() * 999 + 1;
	            }
	        }, 10);
	    }
	
	    appendSliders();
	    runTest();
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div></div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
