import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            isChecked: true
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Single checkbox, boolean value:</div>
			    <br/>
			    <input type="checkbox" smart-model="isChecked" />
			    <br/>
			    <br/>CheckBox's Value is: <span>{{isChecked}}</span>	
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
