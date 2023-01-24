import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownbutton = React.createRef();
	}

	handleOpen() {
		this.dropdownbutton.current.open();
	}

	handleClose() {
		this.dropdownbutton.current.close();
	}

	handleClear() {
		this.dropdownbutton.current.removeAll();
	}

	handleAppendChild() {
		const fragment = document.createDocumentFragment();

		ReactDOM.render(<Button />, fragment, function () {
			const button = this;

			button.nativeElement.id = 'simpleButton';
			button.innerHTML = 'Button';

		});

		this.dropdownbutton.current.nativeElement.appendChild(fragment);
	}

	handleRemoveChild() {
		const button = document.getElementById('simpleButton');

		if (button) {
			this.dropdownbutton.current.removeChild(button);
		}
	}

	handleDisable() {
		this.dropdownbutton.current.disabled = !this.dropdownbutton.current.disabled;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DropDownButton ref={this.dropdownbutton} id="dropDownButtonDemo" placeholder="DropDownButton">
					<h4> What is Lorem Ipsum?</h4>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
			        Lorem Ipsum has been the industry's standard dummy text ever since the
			        1500s, when an unknown printer took a galley of type and scrambled it to
			        make a type specimen book. It has survived not only five centuries, but
			        also the leap into electronic typesetting, remaining essentially unchanged.
			        It was popularised in the 1960s with the release of Letraset sheets containing
			        Lorem Ipsum passages, and more recently with desktop publishing software
			        like Aldus PageMaker including versions of Lorem Ipsum.</DropDownButton>
				<div
					className="options">
					<div className="option" id="methodButtons">
						<Button id="open" onClick={this.handleOpen.bind(this)}>Open</Button>
						<br />
						<br />
						<Button id="close" onClick={this.handleClose.bind(this)}>Close</Button>
						<br />
						<br />
						<Button id="appendChild" onClick={this.handleAppendChild.bind(this)}>Append Child</Button>
						<br />
						<br />
						<Button id="removeChild" onClick={this.handleRemoveChild.bind(this)}>Remove Child</Button>
						<br />
						<br />
						<Button id="clear" onClick={this.handleClear.bind(this)}>Clear</Button>
						<br />
						<br />
						<Button id="disabled" onClick={this.handleDisable.bind(this)}>Enable/Disable</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
