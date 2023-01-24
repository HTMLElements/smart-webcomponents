import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { TimePicker } from 'smart-webcomponents-react/timepicker';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.timepicker = React.createRef();
	}

	handleReady() {
		this.timepicker.current.footerTemplate = "templateWithButtons";
	}

	init() {
		const templateWithButtons = document.createElement('template');

		templateWithButtons.id = 'templateWithButtons';
		templateWithButtons.innerHTML = `<smart-button className="flat primary">CANCEL</smart-button><smart-button className="flat primary">OK</smart-button>`;

		document.body.appendChild(templateWithButtons);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div >
				<TimePicker ref={this.timepicker} footer onReady={this.handleReady.bind(this)}></TimePicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
