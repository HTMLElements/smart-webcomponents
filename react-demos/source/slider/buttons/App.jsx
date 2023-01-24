import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';
import { ToggleButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.slider2 = React.createRef();
	}

	handleToggleButtonsChange(event) {
		this.slider.current.showButtons = event.detail.value;
		this.slider2.current.showButtons = event.detail.value;
	}


	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider ref={this.slider} showTooltip id="horizontalSlider" min="0" max="100"
					value="50" scalePosition="both" showButtons></Slider>
				<br />
				<Slider ref={this.slider2} showTooltip id="verticalSlider" orientation="vertical"
					tooltipPosition="far" min="0" max="100" coerce interval="0.5" scalePosition="both"
					rangeSlider values={[10, 30]} showButtons></Slider>
				<br />
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<ToggleButton id="toggleButtons" checked onChange={this.handleToggleButtonsChange.bind(this)}>Toggle slider buttons</ToggleButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
