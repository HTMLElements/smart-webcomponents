import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

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
			    <div className="demo-description">Our CheckBox Custom Element bound through smart-MODEL</div>
			    <br/>
			    <CheckBox ref="checkbox" smart-model="isChecked">CheckBox</CheckBox>
			    <br/>
			    <br/>CheckBox's Value is: <span>{{isChecked}}</span>	
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
