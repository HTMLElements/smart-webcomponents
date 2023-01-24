import React from "react";
import ReactDOM from "react-dom";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownbutton = React.createRef();
		this.log = React.createRef();
	}

	handleClick(event) {
		const dropDownButton = this.dropdownbutton.current;
		let mode = event.target.textContent.trim();

		dropDownButton.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);
		dropDownButton.placeholder = mode === 'Default' ? 'Button' : 'Action';
	}

	handleDropDownButtonEvent(event) {
		this.log.current.innerHTML += event.type + '<br />';
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DropDownButton ref={this.dropdownbutton} placeholder="Button" onActionButtonClick={this.handleDropDownButtonEvent.bind(this)} onDropDownButtonClick={this.handleDropDownButtonEvent.bind(this)}
					onOpening={this.handleDropDownButtonEvent.bind(this)} onClosing={this.handleDropDownButtonEvent.bind(this)}>
					What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
					and typesetting industry. Lorem Ipsum has been the industry's standard
					dummy text ever since the 1500s, when an unknown printer took a galley
					of type and scrambled it to make a type specimen book. It has survived
					not only five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with the
					release of Letraset sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker including versions
			        of Lorem Ipsum.</DropDownButton>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<div>Open Mode:</div>
						<RadioButton checked onClick={this.handleClick.bind(this)}>Default</RadioButton>
						<br />
						<RadioButton onClick={this.handleClick.bind(this)}>DropDownButton</RadioButton>
					</div>
					<div className="option" id="eventLog">
						<h4>Event log:</h4>
						<div ref={this.log} id="log"></div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
