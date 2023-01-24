import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.editor = React.createRef();
	}

	required = true;

	messageSettings = {
		iconType: 'success',
		autoClose: true,
		autoCloseDelay: 5000
	};

	handleChange() {
		const that = this,
			editor = that.editor.current;

		that.messageSettings.iconType = 'warning';
		that.messageSettings.autoCloseDelay = 2500;
		editor.showMessage('The Editor value has changed ! Current number of chars inside:' + editor.getCharCount(), that.messageSettings);
	}

	showMessage() {
		this.editor.current.showMessage('Show Message button clicked', this.messageSettings);
	}

	hideLastMessage() {
		this.editor.current.hideLastMessage();
	}

	hideMessages() {
		this.editor.current.hideMessage();
	}

	init() {
		const that = this,
			editor = that.editor.current;

		document.querySelector('.options').addEventListener('change', function (event) {
			that.messageSettings.iconType = event.target.id;
		});

		editor.showMessage('Welcome ! A custom message will appear each time value of the Editor is changed', that.messageSettings);
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Editor ref={this.editor} id="editor" required={this.required} onChange={this.handleChange.bind(this)}>
					<div className="section">
						<div>
							<h2 style={{ textAlign: 'center' }}>Camels</h2>
							<p>A camel is an even-toed ungulate in the genus Camelus that bears distinctive
								fatty deposits known as "humps" on its back. Camels have long been domesticated
								and, as livestock, they provide food (milk and meat) and textiles (fiber
								and felt from hair). Camels are working animals especially suited to their
								desert habitat and are a vital means of transport for passengers and cargo.
								There are three surviving species of camel. The one-humped dromedary makes
								up 94% of the world's camel population, and the two-humped Bactrian camel
								makes up 6%. The Wild Bactrian camel is a separate species and is now critically
								endangered. The word camel is also used informally in a wider sense, where
								the more correct term is "camelid", to include all seven species of the
								family Camelidae: the true camels (the above three species), along with
								the "New World" camelids: the llama, the alpaca, the guanaco, and the vicuña.
								The word itself is derived via Latin: camelus and Greek: κάμηλος (kamēlos)
								from Hebrew, Arabic or Phoenician: gāmāl.</p>
						</div>
						<img src="./../../../src/images/travel/1.jpg"></img>
					</div>
				</Editor>
				<div className="options">
					<div className="description">
						<h4>Editor Messages</h4>
						<p>Messages can be displayed inside the Editor via the <b>showMessage</b> API
							method. Messages can be customized.</p>
						<p>The <b>required</b> property set to the Editor opens an error message on
							Editor blur if the content is empty.</p>
					</div>
					<div className="option">
						<h3>Select a message type:</h3>
						<RadioButton id="info">Info</RadioButton>
						<RadioButton id="success" checked>Success</RadioButton>
						<RadioButton id="warning">Warning</RadioButton>
					</div>
					<div className="option">
						<Button ref="button" id="showMessage" onClick={this.showMessage.bind(this)}>Show Message</Button>
						<Button ref="button2" id="hideLastMessage" onClick={this.hideLastMessage.bind(this)}>Hide Last Message</Button>
						<Button ref="button3" id="hideAllMessages" onClick={this.hideMessages.bind(this)}>Hide All Messages</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
