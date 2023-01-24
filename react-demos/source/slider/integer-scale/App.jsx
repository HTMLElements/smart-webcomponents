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
				<h2>64-bit(Large) Integer Scale</h2>
				<br />
				<h3>Horizontal</h3>
				<Slider id="horizontalSlider" showTooltip scaleType="integer"
					min="-1000000000000000000000" max="100000000000000000000" value="0" scalePosition="both"></Slider>
				<br />
				<h3>Vertical</h3>
				<Slider id="verticalSlider" showTooltip tooltipPosition="far"
					orientation="vertical" scaleType="integer" min="-1000000000000000000000"
					max="100000000000000000000" value="0" scalePosition="far"></Slider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
