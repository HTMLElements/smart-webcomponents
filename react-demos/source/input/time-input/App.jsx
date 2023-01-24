import React from "react";
import ReactDOM from "react-dom";
import { TimeInput } from 'smart-webcomponents-react/timeinput';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <div className="demo-description">
			        <p> <b>Smart.TimeInput</b> is an input that allows selection of a Time. It
			            uses the Intl.DateTimeFormat API for formatting the time.</p>
			    </div>
			    	<h3>Default</h3>
			    <TimeInput placeholder="Please Enter a Time"></TimeInput>
			    <br/>
			    <br/>
			    <br/>
			    	<h3>Underlined</h3>
			    <TimeInput className="underlined" placeholder="Please Enter a Time"></TimeInput>
			    <br/>
			    <br/>
			    <br/>
			    	<h3>Outlined</h3>
			    <TimeInput className="outlined" placeholder="Please Enter a Time"></TimeInput>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
