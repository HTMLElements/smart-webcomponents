import React from "react";
import ReactDOM from "react-dom";
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {

	init() {

		// Your code here
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>Text areas should have a visible border, using the same color and thickness
			        as the input line.</p>
				<MultilineTextBox></MultilineTextBox>
				<br />
				<MultilineTextBox disabled></MultilineTextBox>
				<p>Disabled</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
