import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let newTooltipsList = [],
	        tooltipPositions = ['top', 'left', 'bottom', 'right'];
	
	    function appendTooltips() {
	        const fragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const button = document.createElement("smart-button"),
	                buttonId = 'btn' + i,
	                tooltip = document.createElement("smart-tooltip");
	            button.innerHTML = "Click Me";
	            button.id = buttonId;
	            fragment.appendChild(button);
	            fragment.appendChild(tooltip);
	            tooltip.selector = buttonId;
	            tooltip.value = 'Tooltip #' + i;
	            tooltip.position = 'bottom';
	            tooltip.arrow = true;
	            newTooltipsList.push(tooltip);
	        }
	        document.body.appendChild(fragment);
	    }
	
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                newTooltipsList[i].visible = Math.random() < 0.5;
	            }
	        }, 10);
	    }
	
	    appendTooltips();
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
