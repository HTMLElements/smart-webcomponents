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
				<MultilineTextBox enterKeyBehavior="newLine" selectAllOnFocus resizable placeholder="smart Text Area"></MultilineTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
