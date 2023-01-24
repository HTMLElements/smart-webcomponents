import React from "react";
import ReactDOM from "react-dom";
import { Led } from 'smart-webcomponents-react/led';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<form action="" name="testPost" method="get">
					<Led id="led" name="led" value="ledValue"></Led>
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
