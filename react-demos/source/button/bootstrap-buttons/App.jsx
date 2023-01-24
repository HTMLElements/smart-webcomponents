import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.button = React.createRef();
		this.button2 = React.createRef();
	}

	handleClick(buttonType) {
		const submitButton = (buttonType === 'success' ? this.button : this.button2).current.nativeElement;

		if (submitButton.classList.contains('sending')) {
			submitButton.classList.remove('sending');
		}
		else {
			submitButton.classList.add('sending');
		}

		setTimeout(function () {
			submitButton.classList.remove('sending');
		}, 4500);
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Button ref={this.button} onClick={this.handleClick.bind(this, 'success')} className="submit success Button-element">Click Me</Button>
				<Button ref={this.button2} onClick={this.handleClick.bind(this)} className="submit primary Button-element">Click Me</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
