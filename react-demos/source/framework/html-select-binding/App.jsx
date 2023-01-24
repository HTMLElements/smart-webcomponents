import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            selected: ''
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Single Select, smart-model="selected"</div>
			    <br/>
			    <select smart-model="selected">
			        <option disabled value="">Please select one</option>
			        <option>A</option>
			        <option>B</option>
			        <option>C</option>
			    </select>
			    <br/>
			    <br/>Selected: <span>{{ selected }}</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
