import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            message: "Hello World",
	            buttonText: "Submit",
	            submit: function(event) {
	                alert("Submitting: " + this.message);
	            }
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Button's 'click' event is bound to the data object's 'submit' function.</div>
			    <br/>
			    <TextBox ref="textbox" title={{message}} smart-model="message" id="textBox1"></TextBox>
			    <br/>
			    <Button ref="button" (click)="submit()">{{buttonText}}</Button>
			    <br/>
			    <br/>	<span>{{message}}</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
