import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	handleSliderChange(event) {
		const value = event.detail.value;

		document.getElementById(this.id + 'Value').innerHTML = parseFloat(value).toFixed(2);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>mechanicalAction: 'switchWhileDragging' <em>(default)</em>
				<Slider id="smartSlider3" showTooltip orientation="horizontal" min="0" max="100"
					value="10" scalePosition="none" mechanicalAction="switchWhileDragging" onChange={this.handleSliderChange}></Slider>
					Value: <span id="smartSlider3Value">10.00</span>
				<br />
				<br />mechanicalAction: 'switchUntilReleased'
				<Slider id="smartSlider1"
					showTooltip orientation="horizontal" min="0" max="100" value="20" scalePosition="none"
					mechanicalAction="switchUntilReleased" onChange={this.handleSliderChange}></Slider>
					Value: <span id="smartSlider1Value">20.00</span>
				<br />
				<br />mechanicalAction: 'switchWhenReleased'
				<Slider id="smartSlider2"
					showTooltip orientation="horizontal" min="0" max="100" value="30" scalePosition="none"
					mechanicalAction="switchWhenReleased" onChange={this.handleSliderChange}></Slider>
					Value: <span id="smartSlider2Value">30.00</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
