import React from "react";
import ReactDOM from "react-dom";
import { Led } from 'smart-webcomponents-react/led';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.eventLogContainer = React.createRef();
	}

	handleChange(event) {
		this.eventLogContainer.current.textContent = event.detail.value;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Led onChange={this.handleChange.bind(this)}></Led>
				<div ref={this.eventLogContainer} id="eventLogContainer">Checked: <span id="log">false</span>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
