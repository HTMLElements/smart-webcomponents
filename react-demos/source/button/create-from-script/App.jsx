import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {

	constructor(p) {
		super(p);

		this.button = React.createRef();
	}

	handleClick() {
		this.button.current.innerHTML = "Clicked";
	}

	componentDidMount() {
		ReactDOM.render(<Button ref={this.button} onClick={this.handleClick.bind(this)} id="button">Click Me</Button>, document.getElementById('buttonContainer'));
	}

	render() {
		return (
			<div id="buttonContainer"></div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
