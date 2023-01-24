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
				<Tank id="tank" logarithmicScale orientation="vertical" min="1"
					max="1000" value="100" scalePosition="both" showTooltip></Tank>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
