import React from "react";
import ReactDOM from "react-dom";
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<MultilineTextBox enterKeyBehavior="newLine"
					verticalScrollBarVisibility="auto" horizontalScrollBarVisibility="auto"
					placeholder="Auto Scrollbars"></MultilineTextBox>
				<MultilineTextBox enterKeyBehavior="newLine"
					verticalScrollBarVisibility="disabled" horizontalScrollBarVisibility="disabled"
					placeholder="Disabled Scrollbars"></MultilineTextBox>
				<MultilineTextBox enterKeyBehavior="newLine"
					verticalScrollBarVisibility="visible" horizontalScrollBarVisibility="visible"
					placeholder="Visible Scrollbars"></MultilineTextBox>
				<MultilineTextBox enterKeyBehavior="newLine"
					verticalScrollBarVisibility="hidden" horizontalScrollBarVisibility="hidden"
					placeholder="Hidden Scrollbars"></MultilineTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
