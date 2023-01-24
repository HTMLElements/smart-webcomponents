import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            message: "Hello World",
	            longMessage: "This is a long message"
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Input and TextArea 'value' is data-bound through the 'smart-model' attribute.</div>
			    <br/>
			    <input smart-model="message" />
			    <br/>
			    <br/>Input Message is: <span>{{message}}</span>
			    <br/>
			    <br/>
			    <textarea smart-model="longMessage"></textarea>
			    <br/>
			    <br/>Text Area Message is: <span>{{longMessage}}</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
