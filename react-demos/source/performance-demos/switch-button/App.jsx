import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let switchButtonsList = [];
	    // appends 100 switch buttons on the page
	    function appendSwitchButtons() {
	        const switchButtonsContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newSwitchButton = document.createElement('smart-switch-button');
	            newSwitchButton.classList.add('testSwitchButton');
	            switchButtonsList.push(newSwitchButton);
	            containerFragment.appendChild(newSwitchButton);
	        }
	        switchButtonsContainer.appendChild(containerFragment);
	        document.body.appendChild(switchButtonsContainer);
	    }
	    // executes value updates for all switch buttons in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                switchButtonsList[i].checked = Boolean(Math.round(Math.random() * 2));
	            }
	        }, 10);
	    }
	
	    appendSwitchButtons();
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
