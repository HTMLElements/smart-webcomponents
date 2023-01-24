import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.log = React.createRef();
		this.button = React.createRef();
	}

	handleEvent(event) {
		this.log.current.innerHTML = event.type;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Button ref={this.button} id="myButton" onClick={this.handleEvent.bind(this)} onFocus={this.handleEvent.bind(this)} onBlur={this.handleEvent.bind(this)}
					onMouseEnter={this.handleEvent.bind(this)} onMouseLeave={this.handleEvent.bind(this)}>Click</Button>
				<div className="options">
					<div className="caption">Events</div>
					<div className="option" ref={this.log} id="log"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
