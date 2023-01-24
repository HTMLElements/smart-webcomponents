import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h2>Logarithmic Scale</h2>
				<br />
				<h3>Horizontal</h3>
				<Slider id="horizontalSlider" showTooltip logarithmicScale
					coerce interval="1" min="0" max="10000000" value="1000" scalePosition="both"></Slider>
				<br />
				<h3>Vertical</h3>
				<Slider id="verticalSlider" showTooltip tooltip-position="far"
					orientation="vertical" logarithmicScale coerce interval="1" min="0" max="10000000"
					value="1000" scalePosition="far"></Slider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
