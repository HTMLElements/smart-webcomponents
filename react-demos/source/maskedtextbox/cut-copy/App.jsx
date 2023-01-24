import React from "react";
import ReactDOM from "react-dom";
import { MaskedTextBox } from 'smart-webcomponents-react/maskedtextbox';
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h3>cutCopyMaskFormat : </h3>
				<MaskedTextBox mask="00/00/0000" cutCopyMaskFormat="excludePromptAndLiterals"></MaskedTextBox>: excludePromptAndLiterals
				<br />
				<MaskedTextBox mask="00/00/0000" cutCopyMaskFormat="includePrompt"></MaskedTextBox>: includePrompt
				<br />
				<MaskedTextBox mask="00/00/0000" cutCopyMaskFormat="includeLiterals"></MaskedTextBox>: includeLiterals
				<br />
				<MaskedTextBox mask="00/00/0000" cutCopyMaskFormat="includePromptAndLiterals"></MaskedTextBox>: includePromptAndLiterals
				<br />
				<br />
				<h3>Paste copied text from a masked text box:</h3>
				<TextBox placeholder="Paste Here ..."></TextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
