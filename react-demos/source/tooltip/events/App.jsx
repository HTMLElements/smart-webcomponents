import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'smart-webcomponents-react/button';
import { Tooltip } from 'smart-webcomponents-react/tooltip';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.tooltip = React.createRef();
		this.log = React.createRef();
	}

	handleChange(event) {
		this.tooltip.current.innerHTML = 'LED is: ' + (event.detail.value ? "ON" : "OFF");
	}

	handleEvent(event) {
		this.log.current.innerHTML = event.type + ' event fired';
	}
	
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Button id="led">Button</Button>
				<Tooltip ref={this.tooltip} id="tooltip" selector="led" arrow position="bottom" onOpen={this.handleEvent.bind(this)} onClose={this.handleEvent.bind(this)}>LED is OFF</Tooltip>
				<div className="options">
					<h3>Event log:</h3>
					<div ref={this.log} id="log"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
