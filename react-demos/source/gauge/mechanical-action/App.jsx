import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.gauge = React.createRef();
		this.gauge2 = React.createRef();
		this.gauge3 = React.createRef();
	}

	handleSwitchWhileDraggingChange() {
		this.gauge.current.mechanicalAction = 'switchWhileDragging';
		this.gauge2.current.mechanicalAction = 'switchWhileDragging';
		this.gauge3.current.mechanicalAction = 'switchWhileDragging';
	}

	handleSwitchUntilReleasedChange() {
		this.gauge.current.mechanicalAction = 'switchUntilReleased';
		this.gauge2.current.mechanicalAction = 'switchUntilReleased';
		this.gauge3.current.mechanicalAction = 'switchUntilReleased';
	}

	handleSwitchWhenReleasedChange() {
		this.gauge.current.mechanicalAction = 'switchWhenReleased';
		this.gauge2.current.mechanicalAction = 'switchWhenReleased';
		this.gauge3.current.mechanicalAction = 'switchWhenReleased';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Gauge ref={this.gauge} id="needleGauge" analogDisplayType="needle" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="100" value="100"></Gauge>
				<Gauge ref={this.gauge2} id="fillGauge" analogDisplayType="fill"
					digitalDisplay startAngle={-30} endAngle={210} min="0" max="100" value="20"
					ticks-position="scale"></Gauge>
				<Gauge ref={this.gauge3} id="lineGauge" analogDisplayType="line"
					digitalDisplay startAngle={-30} endAngle={210} min="0" max="100" value="75"
					ticks-position="scale"></Gauge>
				<div className="options">
					<div className="caption">Mechanical action</div>
					<div className="option">
						<RadioButton id="switchWhileDragging" name="mechanicalAction"
							checked onChange={this.handleSwitchWhileDraggingChange.bind(this)}>
							<label for="switchWhileDragging">switchWhileDragging</label>
						</RadioButton>
						<br />
						<RadioButton type="radio" id="switchUntilReleased"
							name="mechanicalAction" onChange={this.handleSwitchUntilReleasedChange.bind(this)}>
							<label for="switchUntilReleased">switchUntilReleased</label>
						</RadioButton>
						<br />
						<RadioButton type="radio" id="switchWhenReleased"
							name="mechanicalAction" onChange={this.handleSwitchWhenReleasedChange.bind(this)}>
							<label for="switchWhenReleased">switchWhenReleased</label>
						</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
