import React from "react";
import ReactDOM from "react-dom";
import { TextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/textbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <TextBox  selectAllOnFocus placeholder="בבקשה היכנס" label="תיבת טקסט" rightToLeft></TextBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
