import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let numericTextBoxesList = [];
	    // appends 100 numeric text boxes on the page
	    function appendNumericTextBoxes() {
	        const numericTextBoxesContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newNumericTextBox = document.createElement('smart-numeric-text-box');
	            newNumericTextBox.setAttribute('input-format', 'floatingPoint');
	            newNumericTextBox.classList.add('testNumericTextBox');
	            newNumericTextBox.spinButtons = true;
	            numericTextBoxesList.push(newNumericTextBox);
	            containerFragment.appendChild(newNumericTextBox);
	        }
	        numericTextBoxesContainer.appendChild(containerFragment);
	        document.body.appendChild(numericTextBoxesContainer);
	    }
	    // executes value updates for all numeric text boxes in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                numericTextBoxesList[i].value = Math.random() * 999 + 1;
	            }
	        }, 10);
	    }
	
	    appendNumericTextBoxes();
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
