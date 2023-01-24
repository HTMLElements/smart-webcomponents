import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.slider2 = React.createRef();
	}

	handleButtonClick() {
		this.slider.current.val([55, 100]);
		this.slider2.current.val([55, 100]);
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider ref={this.slider} id="horizontalSlider" showTooltip min="0" max="100"
					coerce interval="10" scalePosition="both" rangeSlider values={[10, 30]}></Slider>
				<br />
				<br />
				<br />
				<Slider ref={this.slider2} id="verticalSlider" showTooltip tooltipPosition="far"
					orientation="vertical" inverted min="0" max="100" coerce interval="0.5"
					scalePosition="both" rangeSlider values={[10, 30]}></Slider>
				<br />
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button id="setValues" onClick={this.handleButtonClick.bind(this)}>Set <strong>values</strong> to [55, 100]</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
