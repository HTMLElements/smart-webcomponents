import React from "react";
import ReactDOM from "react-dom";
import { Led } from 'smart-webcomponents-react/led';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.LEDContainer = React.createRef();
	}

	init() {
		ReactDOM.render(<Led />, this.LEDContainer.current);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div ref={this.LEDContainer}></div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
