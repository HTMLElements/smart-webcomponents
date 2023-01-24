import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.editor = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
	}

	placeholder = 'The Editor is empty. Click on the buttons in the Options area to import data.'

	importFromHTML() {
		this.button.current.disabled = true;
		this.editor.current.importData('./../../../src/common/demo.html');
	}

	importFromTXT() {
		this.button2.current.disabled = true;
		this.editor.current.importData('./../../../src/common/demo.txt');
	}

	componentDidMount() {
		//NOTE: Use code goes here
	}

	render() {
		return (
			<div>
				<Editor ref={this.editor} id="editor" placeholder={this.placeholder}></Editor>
				<div class="options">
					<h4>Editor Import from TXT or HTML</h4>
					<div class="demo-description">
						<p>The Editor component can import content from TXT and HTML files.</p>
						<p>Click on the appropriate button for a live demonstration.</p>
					</div>
					<div class="option">
						<Button ref={this.button} id="importFromHTML" onClick={this.importFromHTML.bind(this)}>Import from HTML</Button>
					</div>
					<div class="option">
						<Button ref={this.button2} id="importFromTXT" onClick={this.importFromTXT.bind(this)}>Import from TXT</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
