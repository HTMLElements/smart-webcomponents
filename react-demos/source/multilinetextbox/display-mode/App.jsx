import React from "react";
import ReactDOM from "react-dom";
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.multilinetextbox = React.createRef();
	}

	handleDefaultModeChange() {
		this.multilinetextbox.current.displayMode = 'default';
	}

	handleEscapedModeChange() {
		this.multilinetextbox.current.displayMode = 'escaped';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<RadioButton id="defaultMode" checked onChange={this.handleDefaultModeChange.bind(this)}>Default mode</RadioButton>
				<RadioButton id="escapedMode" onChange={this.handleEscapedModeChange.bind(this)}>Escaped mode</RadioButton>
				<br />
				<MultilineTextBox ref={this.multilinetextbox} enterKeyBehavior="newLine"
					placeholder="Your text" value=""></MultilineTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
