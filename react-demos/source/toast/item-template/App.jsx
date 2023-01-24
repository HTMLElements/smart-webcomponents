import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.toast = React.createRef();
	}

	handleOpen(event) {
		if (event.detail.instance.querySelector('#templateContent').querySelector('smart-button')) {
			return;
		}

		ReactDOM.render(
			<div className="buttons">
				<Button onClick={this.handleClick2.bind(this)} id="closeButton">Close</Button>
			</div>, new DocumentFragment(), function () {
				event.detail.instance.querySelector('#templateContent').appendChild(this);
			});
	}

	init() {
		const template = document.createElement('template');

		template.id = 'template';
		template.innerHTML = '<div id="templateContent"><span className="content">{{content}}</span></div>';

		document.body.appendChild(template);

		this.toast.current.itemTemplate = template.id;
	}

	handleClick() {
		this.toast.current.open();
	}

	handleClick2() {
		this.toast.current.closeLast();
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Toast ref={this.toast} onOpen={this.handleOpen.bind(this)} position="top-left" showCloseButton modal>Toast with custom template!</Toast>

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
