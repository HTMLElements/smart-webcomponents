import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	init() {
	
	    // Your code here
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <p>On/off switches toggle the state of a single settings option. The option
			        that the switch controls, as well as the state it’s in, should be made
			        clear from the corresponding inline label. Switches take on the same visual
			        properties of the radio button.</p>
			    <br/>
			    <br/>
			    <SwitchButton  checked></SwitchButton>
			    <br/>
			    <br/>
			    <SwitchButton ></SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
