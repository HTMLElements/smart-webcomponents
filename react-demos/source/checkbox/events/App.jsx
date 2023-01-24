import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleChange(event) {
		this.log.current.textContent = "Change event. Status: " + event.detail.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<CheckBox onChange={this.handleChange.bind(this)}>Check Box</CheckBox>
				<div className="options">
					<div className="caption">Events</div>
					<div className="option">
						<span ref={this.log} id="log">Change event. Status: false</span>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
