import React from "react";
import ReactDOM from "react-dom";
import { MultiSplitButton, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multisplitbutton';

class App extends React.Component {

	buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <MultiSplitButton buttonsDataSource={this.buttonsDataSource} id="multiSplitButton"></MultiSplitButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
