import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="button-demo rounded-pulse-button">
			        <label>Rounded Pulse Button</label>
			        <div className="demo-buttons-group">
			            <div className="text-box">
			                <Button ref="button" className="Button-element btn btn-white btn-animate">click me</Button>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
