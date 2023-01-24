import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Slider } from 'smart-webcomponents-react/slider';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.slider = React.createRef();
		this.slider2 = React.createRef();
	}

	handleAllChange() {
		this.slider.current.labelsVisibility = 'all';
		this.slider2.current.labelsVisibility = 'all';
	}

	handleEndPointsChange() {
		this.slider.current.labelsVisibility = 'endPoints';
		this.slider2.current.labelsVisibility = 'endPoints';
	}

	handleNoneChange() {
		this.slider.current.labelsVisibility = 'none';
		this.slider2.current.labelsVisibility = 'none';
	}

	handleMajorChange() {
		this.slider.current.ticksVisibility = 'major';
		this.slider2.current.ticksVisibility = 'major';
	}

	handleMinorChange() {
		this.slider.current.ticksVisibility = 'minor';
		this.slider2.current.ticksVisibility = 'minor';
	}

	handleNoTicksChange() {
		this.slider.current.ticksVisibility = 'none';
		this.slider2.current.ticksVisibility = 'none';
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Slider ref={this.slider} id="horizontalSlider" showTooltip min="17" max="769"
					value="172" scalePosition="both"></Slider>
				<br />
				<Slider ref={this.slider2} id="verticalSlider" showTooltip orientation="vertical"
					inverted min="-100" max="0" value="-4" scalePosition="both"></Slider>
				<div className="options">
					<div className="option">
						<p>Labels</p>
						<RadioButton id="all" name="labelsVisibility" checked onChange={this.handleAllChange.bind(this)}>
							<label for="all">All</label>
						</RadioButton>
						<br />
						<RadioButton id="endPoints" name="labelsVisibility" onChange={this.handleEndPointsChange.bind(this)}>
							<label for="endPoints">Endpoints</label>
						</RadioButton>
						<br />
						<RadioButton id="none" name="labelsVisibility" onChange={this.handleNoneChange.bind(this)}>
							<label for="none">None</label>
						</RadioButton>
						<br />
					</div>
					<div className="option">
						<p>Tick Marks</p>
						<RadioButton id="major" name="ticksVisibility" onChange={this.handleMajorChange.bind(this)}>
							<label for="major">Major</label>
						</RadioButton>
						<br />
						<RadioButton id="minor" name="ticksVisibility" checked onChange={this.handleMinorChange.bind(this)}>
							<label for="minor">Minor</label>
						</RadioButton>
						<br />
						<RadioButton id="noTicks" name="ticksVisibility" onChange={this.handleNoTicksChange.bind(this)}>
							<label for="noTicks">None</label>
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
