import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	init() {

		// Your code here
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<CheckBox checked className="heart">Check Box</CheckBox>
				<CheckBox className="heart">Check Box 2</CheckBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
