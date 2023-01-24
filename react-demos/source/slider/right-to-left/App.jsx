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
				<Slider showTooltip orientation="horizontal" min="0" max="100"
					value="30" scalePosition="near" showUnit rightToLeft unit='ק"ג'></Slider>
				<Slider showTooltip orientation="vertical" min="0"
					max="100" value="30" scalePosition="far" tooltipPosition="far" showUnit
					rightToLeft unit='ק"ג'></Slider>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
