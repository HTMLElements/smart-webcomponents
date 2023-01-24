import React from "react";
import ReactDOM from "react-dom";
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <MultilineTextBox ref="multilinetextbox" placeholder="Enter Text" autoExpand></MultilineTextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
