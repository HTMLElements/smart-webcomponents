import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let newAccordionsList = [];
	    // appends 100 Accordions  on the page
	    function appendAccordions() {
	        const accordionsContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newAccordion = document.createElement('smart-accordion');
	            let newAccordionItemsList = [];
	            for (let j = 0; j < 4; j++) {
	                const newAccordionItem = document.createElement('smart-accordion-item');
	                newAccordionItem.label = 'Label ' + j;
	                newAccordionItem.content = 'Content ' + j;
	                newAccordionItemsList.push(newAccordionItem);
	                newAccordion.appendChild(newAccordionItem);
	            }
	            newAccordionsList.push(newAccordion);
	            containerFragment.appendChild(newAccordion);
	        }
	        accordionsContainer.appendChild(containerFragment);
	        document.body.appendChild(accordionsContainer);
	    }
	    // executes expandedIndexes updates for all Accordions in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                const newIndex = parseInt(Math.random() * 4);
	                newAccordionsList[i].expandedIndexes = [newIndex];
	            }
	        }, 10);
	    }
	
	    appendAccordions();
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
