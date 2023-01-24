import React from "react";
import ReactDOM from "react-dom";
import { DateInput } from 'smart-webcomponents-react/dateinput';

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
			        <p> <b>Smart.DateInput</b> is an input that allows selection of a single date.
			            It uses the Intl.DateTimeFormat API for formatting the dates.</p>
			    </div>
			    	<h3>Default</h3>
			    <DateInput placeholder="Please Enter a Date"></DateInput>
			    <br/>
			    <br/>
			    <br/>
			    	<h3>Underlined</h3>
			    <DateInput className="underlined" placeholder="Please Enter a Date"></DateInput>
			    <br/>
			    <br/>
			    <br/>
			    	<h3>Outlined</h3>
			    <DateInput className="outlined" placeholder="Please Enter a Date"></DateInput>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
