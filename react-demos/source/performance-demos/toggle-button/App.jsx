import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let toggleButtonsList = [];
	    // appends 100 toggle buttons on the page
	    function appendToggleButtons() {
	        const toggleButtonsContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newToggleButton = document.createElement('smart-toggle-button');
	            newToggleButton.classList.add('testToggleButton');
	            toggleButtonsList.push(newToggleButton);
	            containerFragment.appendChild(newToggleButton);
	        }
	        toggleButtonsContainer.appendChild(containerFragment);
	        document.body.appendChild(toggleButtonsContainer);
	    }
	    // executes value updates for all toggle buttons in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                toggleButtonsList[i].checked = Boolean(Math.round(Math.random() * 2));
	            }
	        }, 10);
	    }
	
	    appendToggleButtons();
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
