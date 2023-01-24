import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	
	    const app = new smartApp({
	        data: {
	            counter: 0,
	            click: function(event) {
	                this.counter++;
	            }
	        }
	    });
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Click the Button to increase the 'counter'.</div>
			    <Button ref="button"
			    (click)="click()">Count: <span>{{counter}}</span>
			    </Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
