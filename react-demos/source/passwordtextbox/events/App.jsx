import React from "react";
import ReactDOM from "react-dom";
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.passwordtextbox = React.createRef();
		this.log = React.createRef();
	}

	handleChange(event) {
		this.log.current.innerHTML = this.passwordtextbox.current.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<PasswordTextBox ref={this.passwordtextbox} onChange={this.handleChange.bind(this)} placeholder="Your password"></PasswordTextBox>
				<div className="options">
					<div className="caption">Events Log</div>
					<div className="option">
						<div ref={this.log} id="eventLog"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
