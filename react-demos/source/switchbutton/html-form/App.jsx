import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<form action="" name="testPost" method="get">
					<SwitchButton id="switchButton" name="switchButton"
						value="switchButtonValue"></SwitchButton>
					<br />
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
