import React from "react";
import ReactDOM from "react-dom";
import SwitchButton from "smart-webcomponents-react/switchbutton";

class App extends React.Component {

	init() {
		ReactDOM.render(<SwitchButton />, document.getElementById('switchContainer'));
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div id="switchContainer"></div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
