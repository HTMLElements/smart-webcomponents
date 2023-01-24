import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let gaugesList = [];
	    // appends 100 gauges on the page
	    function appendGauges() {
	        const gaugesContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newGauge = document.createElement('smart-gauge');
	            newGauge.analogDisplayType = 'fill';
	            gaugesList.push(newGauge);
	            containerFragment.appendChild(newGauge);
	        }
	        gaugesContainer.appendChild(containerFragment);
	        document.body.appendChild(gaugesContainer);
	    }
	    // executes value updates for all gauges in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                gaugesList[i].value = Math.random() * 100;
	            }
	        }, 10);
	    }
	
	    appendGauges();
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
