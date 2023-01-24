import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			     <h3>מתג אופקי מימין לשמאל</h3>
			    <SwitchButton rightToLeft></SwitchButton>
			     <h3>מתג אנכי מימין לשמאל</h3>
			    <SwitchButton orientation="vertical" rightToLeft></SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
