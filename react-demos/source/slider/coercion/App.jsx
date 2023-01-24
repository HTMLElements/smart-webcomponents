import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.numerictextbox = React.createRef();
	}

	handleIntervalChange() {
		this.slider.current.interval = this.numerictextbox.current.value;
	}

	handleToggleCoercionChange(event) {
		this.slider.current.coerce = event.detail.value;
	}

	handleSetValueClick() {
		this.slider.current.val(99);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider ref={this.slider} showTooltip id="horizontalSlider" min="0" max="100"
					value="77" scalePosition="both" coerce interval="5"></Slider>
				<br />
				<div className="options">
					<div className="caption">Set coercion interval</div>
					<div className="option">
						<NumericTextBox ref={this.numerictextbox} id="interval" spinButtons inputFormat="integer"
							value="5" onChange={this.handleIntervalChange.bind(this)}></NumericTextBox>
					</div>
					<div className="option">
						<ToggleButton id="toggleCoercion" checked onChange={this.handleToggleCoercionChange.bind(this)}>Toggle coercion</ToggleButton>
					</div>
					<div className="option">
						<Button id="setValue" onClick={this.handleSetValueClick.bind(this)}>Set value to 99</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
