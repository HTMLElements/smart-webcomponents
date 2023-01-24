import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.slider2 = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
	}

	handleButtonClick() {
		if (this.slider.current.tooltipPosition === 'near') {
			this.slider.current.tooltipPosition = 'far';
		}
		else {
			this.slider.current.tooltipPosition = 'near';
		}

		if (this.slider2.current.tooltipPosition === 'near') {
			this.slider2.current.tooltipPosition = 'far';
		}
		else {
			this.slider2.current.tooltipPosition = 'near';
		}
	}

	handleButton2Click() {
		this.slider.current.showTooltip = false;
		this.slider2.current.showTooltip = false;
		this.button.current.disabled = true;
		this.button2.current.disabled = true;
	}

	init() {

	};

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>Move the slider thumbs to see the tooltips.</p>
				<Slider ref={this.slider} id="horizontalSlider"
					showTooltip tooltipPosition="near" orientation="horizontal" min="0" max="100"
					value="95" scalePosition="none"></Slider>
				<br />
				<Slider ref={this.slider2} id="verticalSlider" showTooltip tooltipPosition="near"
					orientation="vertical" min="0" max="100" value="33" scalePosition="none"></Slider>
				<br />
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button ref={this.button} id="toggleTooltipPositionButton" onClick={this.handleButtonClick.bind(this)}>Flip Tooltip</Button>
						<br />
						<br />
						<Button ref={this.button2} id="disableTooltipsButton" onClick={this.handleButton2Click.bind(this)}>Disable Tooltip</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
