import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.toast = React.createRef();
	}

	handleClick(event) {
		this.toast.current.open();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div id="toastContainer"></div>
				<Toast ref={this.toast} position="top-left" autoOpen autoClose showCloseButton
					appendTo="toastContainer" className="blink"><b>Toast !</b>
				</Toast>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button onClick={this.handleClick.bind(this)} id="openButton">Open Toast</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
