import React from "react";
import ReactDOM from "react-dom";
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <TextBox  selectAllOnFocus placeholder="smart Text Box"></TextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
