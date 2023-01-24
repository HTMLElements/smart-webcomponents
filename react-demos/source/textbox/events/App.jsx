import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.textbox = React.createRef();
		this.log = React.createRef();
	}

	handleChange(event) {
		this.log.current.innerHTML += '<br>' + '<b>' + event.type + '</b>' + ' event fired with details: ' +
			'newValue: <b>' + event.detail.value + '</b>' + ', oldValue: <b>' + event.detail.oldValue + '</b>';
	}

	handleButtonClick() {
		const label = ['One', 'Two', 'Three', 'Four', 'Five'];
		const textBox = this.textbox.current;
		const oldValue = textBox.value;

		textBox.value = label[Math.floor(Math.random() * Math.floor(5))];

		//Fire a 'change' event with details
		textBox.nativeElement.$.fireEvent('change', {
			value: textBox.value,
			oldValue: oldValue
		});
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<TextBox ref={this.textbox} onChange={this.handleChange.bind(this)}></TextBox>
				<div className="options">
					<div className="caption">Settings</div>
					<Button  onClick={this.handleButtonClick.bind(this)}>Press to Change Value</Button>
					<br />
					<br />
					<label>Event log:</label>
					<div ref={this.log} id="log"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
