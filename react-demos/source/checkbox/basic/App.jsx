import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <CheckBox id="checkBox">Check Box</CheckBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
