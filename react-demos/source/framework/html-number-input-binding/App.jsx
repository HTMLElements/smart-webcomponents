import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            number: 10
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Number Input 'value' is data-bound through the 'smart-model' attribute.</div>
			    <br/>
			    <input type="number" smart-model="number" />
			    <br/>
			    <br/>Input Number is: <span>{{number}}</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
