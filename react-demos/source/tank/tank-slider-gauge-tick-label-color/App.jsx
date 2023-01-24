import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Gauge } from 'smart-webcomponents-react/gauge';
import { Slider } from 'smart-webcomponents-react/slider';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.tank = React.createRef();
		this.gauge = React.createRef();
	}

	handleRedTicksClick() {
		this.slider.current.nativeElement.style.setProperty('--smart-tick-color', 'red');
		this.tank.current.nativeElement.style.setProperty('--smart-tick-color', 'red');
		this.gauge.current.nativeElement.style.setProperty('--smart-tick-color', 'red');
	}

	handleBlueTicksClick() {
		this.slider.current.nativeElement.style.setProperty('--smart-tick-color', 'blue');
		this.tank.current.nativeElement.style.setProperty('--smart-tick-color', 'blue');
		this.gauge.current.nativeElement.style.setProperty('--smart-tick-color', 'blue');
	}

	handleRedLabelsClick() {
		this.slider.current.nativeElement.style.setProperty('--smart-tick-label-color', 'red');
		this.tank.current.nativeElement.style.setProperty('--smart-tick-label-color', 'red');
		this.gauge.current.nativeElement.style.setProperty('--smart-tick-label-color', 'red');
	}

	handleBlueLabelsClick() {
		this.slider.current.nativeElement.style.setProperty('--smart-tick-label-color', 'blue');
		this.tank.current.nativeElement.style.setProperty('--smart-tick-label-color', 'blue');
		this.gauge.current.nativeElement.style.setProperty('--smart-tick-label-color', 'blue');
	}

	handleResizeClick() {
		this.slider.current.nativeElement.style.width = '500px';
		this.tank.current.nativeElement.style.height = '100px';
		this.gauge.current.nativeElement.style.width = '200px';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider ref={this.slider} id="slider" showTooltip orientation="horizontal"
					min="0" max="100" value="30" scalePosition="both"></Slider>
				<Tank ref={this.tank} id="tank" showTooltip min="0" max="100" value="30"
					scalePosition="both"></Tank>
				<Gauge ref={this.gauge} id="gauge" analogDisplayType="fill" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="100" value="0"></Gauge>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<Button id="redTicks" onClick={this.handleRedTicksClick.bind(this)}>tick color to <span style={{ color: 'red' }}>red</span>
						</Button>
						<Button id="blueTicks" onClick={this.handleBlueTicksClick.bind(this)}>tick color to <span style={{ color: 'blue' }}>blue</span>
						</Button>
						<br />
						<Button id="redLabels" onClick={this.handleRedLabelsClick.bind(this)}>label color to <span style={{ color: 'red' }}>red</span>
						</Button>
						<Button id="blueLabels" onClick={this.handleBlueLabelsClick.bind(this)}>label color to <span style={{ color: 'blue' }}>blue</span>
						</Button>
						<br />
						<Button id="resize" onClick={this.handleResizeClick.bind(this)}>Resize elements</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
