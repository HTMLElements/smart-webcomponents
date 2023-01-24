import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	    let newListBoxesList = [];
	    // appends 100 power buttons  on the page
	    function appendListBoxes() {
	        const listBoxesContainer = document.createElement('div'),
	            containerFragment = document.createDocumentFragment(),
	            source = [
	                "Affogato",
	                "Americano",
	                "Bicerin",
	                "Breve",
	                "Café Bombón",
	                "Café au lait",
	                "Caffé Corretto",
	                "Café Crema",
	                "Caffé Latte",
	                "Caffé macchiato",
	                "Café mélange"
	            ];
	        for (let i = 0; i < 100; i++) {
	            const newListBox = document.createElement('smart-list-box');
	            newListBox.classList.add('testListBox');
	            newListBox.dataSource = source;
	            newListBoxesList.push(newListBox);
	            containerFragment.appendChild(newListBox);
	        }
	        listBoxesContainer.appendChild(containerFragment);
	        document.body.appendChild(listBoxesContainer);
	    }
	
	    function runTest() {
	        setInterval(function() {
	            for (let i = 0; i < 100; i++) {
	                newListBoxesList[i].selectedIndexes = [parseInt(Math.random() * 9 + 2)];
	            }
	        }, 10);
	    }
	
	    appendListBoxes();
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
