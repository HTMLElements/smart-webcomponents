import React from "react";
import ReactDOM from "react-dom";
import { Array } from 'smart-webcomponents-react/array';

class App extends React.Component {

	init() {
	
	    let source = {};
	    source.numeric = [100, 640, 333, 11, 0.6, 33, 90, 89000, 1, 100, 4, 444, 555, 2.123, 3.14];
	    source.string = ['Jaguar', 'Penguin', 'Sherlock', 'Barrel', 'Possum', 'Sun', 'Milan', 'Face', 'Samuel', 'Supernatural', 'Bobby'];
	
	    function generateRandomValue(type) {
	        let value = [];
	        for (let i = 0; i < 10; i++) {
	            value.push([]);
	            for (let j = 0; j < 10; j++) {
	                value[i][j] = source[type][Math.floor(Math.random() * source[type].length)];
	            }
	        }
	        return value;
	    }
	
	    function runTest() {
	        setInterval(function() {
	            smartArrayNumeric.value = generateRandomValue('numeric');
	            smartArrayString.value = generateRandomValue('string');
	        }, 10);
	    }
	
	    const smartArrayNumeric = document.getElementById('smartArrayNumeric'),
	        smartArrayString = document.getElementById('smartArrayString');
	    runTest();
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Array ref="array" id="smartArrayNumeric" show-index-display type="numeric"
			    dimensions="2" rows="10" columns="10"></Array>
			    <br />
			    <Array ref="array2" id="smartArrayString" show-index-display type="string"
			    dimensions="2" rows="10" columns="10"></Array>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
