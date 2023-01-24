import React from "react";
import ReactDOM from "react-dom";
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.horizontalSliderValue = React.createRef();
		this.verticalSliderValue = React.createRef();
		this.invertedHorizontalSliderValue = React.createRef();
		this.invertedVerticalSliderValue = React.createRef();
	}

	handleHorizontalSliderChange(event) {
		this.horizontalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}

	handleVerticalSliderChange(event) {
		this.verticalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}

	handleInvertedHorizontalSliderChange(event) {
		this.invertedHorizontalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}

	handleInvertedVerticalSliderChange(event) {
		this.invertedVerticalSliderValue.current.innerHTML = parseFloat(event.detail.value).toFixed(2);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="container">
					<div className="underlined">Horizontal slider</div>Value: <span ref={this.horizontalSliderValue} id="horizontalSliderValue">30.00</span>
					<Slider id="horizontalSlider" showTooltip orientation="horizontal"
						min="0" max="100" value="30" scalePosition="none" onChange={this.handleHorizontalSliderChange.bind(this)}></Slider>
					<br />
					<div className="underlined">Vertical slider</div>Value: <span ref={this.verticalSliderValue} id="verticalSliderValue">30.00</span>
					<Slider id="verticalSlider" showTooltip tooltipPosition="far" orientation="vertical"
						min="0" max="100" value="30" scalePosition="none" onChange={this.handleVerticalSliderChange.bind(this)}></Slider>
				</div>
				<div className="container">
					<div className="underlined">Inverted horizontal slider</div>Value: <span ref={this.invertedHorizontalSliderValue} id="invertedHorizontalSliderValue">30.00</span>
					<Slider id="invertedHorizontalSlider" showTooltip orientation="horizontal"
						inverted min="0" max="100" value="30" scalePosition="none" onChange={this.handleInvertedHorizontalSliderChange.bind(this)}></Slider>
					<br />
					<div className="underlined">Inverted vertical slider</div>Value: <span ref={this.invertedVerticalSliderValue} id="invertedVerticalSliderValue">30.00</span>
					<Slider id="invertedVerticalSlider" showTooltip tooltipPosition="far"
						orientation="vertical" inverted min="0" max="100" value="30" scalePosition="none" onChange={this.handleInvertedVerticalSliderChange.bind(this)}></Slider>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
