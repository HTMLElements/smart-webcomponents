import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
	}

	handleReady() {
		ReactDOM.render(<div>
			<Button className="flat primary">CANCEL</Button>
			<Button className="flat primary">OK</Button>
		</div>, document.getElementById('buttonContainer'));
	}

	init() {
		const template = document.createElement('template');

		template.id = 'templateWithButtons';
		template.innerHTML = '<div id="buttonContainer"></div>';

		document.body.appendChild(template);

		this.calendar.current.footerTemplate = template.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} onReady={this.handleReady.bind(this)} id="customFooter" viewSections={["title", "header", "footer"]}></Calendar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
