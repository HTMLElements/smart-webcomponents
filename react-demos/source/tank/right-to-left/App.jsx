import React from "react";
import ReactDOM from "react-dom";
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tank orientation="horizontal" min="0" max="10" value="5" scalePosition="both"
					showUnit rightToLeft unit='ק"ג'></Tank>
				<br />
				<br />
				<Tank orientation="vertical" min="-100" max="0" value="-50"
					scalePosition="both" showUnit rightToLeft unit='ק"ג'></Tank>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
