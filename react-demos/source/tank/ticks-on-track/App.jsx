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
				<Tank id="tank" orientation="vertical" min="0" max="50" value="20"
					scalePosition="both" ticksPosition="track"></Tank>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
