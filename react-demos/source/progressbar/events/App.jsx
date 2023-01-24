import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.progressbar = React.createRef();
		this.log = React.createRef();
	}

	setVal(number) {
		const customElement = this.progressbar.current;

		customElement.value = number;
	}

	handleChange(event) {
		const newV = event.detail.value,
			oldV = event.detail.oldValue;
	
		this.log.current.innerHTML = '"change" event has been raised.' + '<br/><br/>' + 'Event Details:' + '<br/>' + 'newValue:' + newV + '<br/>' + 'oldValue: ' + oldV;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<ProgressBar ref={this.progressbar} value={50} onChange={this.handleChange.bind(this)}></ProgressBar>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<div>
							<Button  onclick={this.setVal.bind(this, 100)}>Set Value</Button>
						</div>
						<br />
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
