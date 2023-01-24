import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let tanksList = [];
	    // appends 100 tanks on the page
	    function appendTanks() {
	        const tanksContainer = document.createElement('div');
	        const containerFragment = document.createDocumentFragment();
	        for (let i = 0; i < 100; i++) {
	            const newTank = document.createElement('smart-tank');
	            newTank.setAttribute('scale-type', 'floatingPoint');
	            newTank.setAttribute('max', 1000);
	            newTank.classList.add('testTank');
	            tanksList.push(newTank);
	            containerFragment.appendChild(newTank);
	        }
	        tanksContainer.appendChild(containerFragment);
	        document.body.appendChild(tanksContainer);
	    }
	    // executes value updates for all tanks in a 10ms loop
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                tanksList[i].value = Math.random() * 999 + 1;
	            }
	        }, 10);
	    }
	
	    appendTanks();
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
