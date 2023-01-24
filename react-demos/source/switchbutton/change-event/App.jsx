import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleChange(event) {
		const checkStatus = event.detail.value;

		this.log.current.textContent = checkStatus;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="options">
					<div className="captions" id="checked">Checked: <span ref={this.log} id="log">false</span>
					</div>
				</div>
				<SwitchButton onChange={this.handleChange.bind(this)}></SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
