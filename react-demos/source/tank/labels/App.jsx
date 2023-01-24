import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tank = React.createRef();
		this.tank2 = React.createRef();
	}

	handleAllChange() {
		this.tank.current.labelsVisibility = 'all';
		this.tank2.current.labelsVisibility = 'all';
	}

	handleEndPointsChange() {
		this.tank.current.labelsVisibility = 'endPoints';
		this.tank2.current.labelsVisibility = 'endPoints';
	}

	handleNoneChange() {
		this.tank.current.labelsVisibility = 'none';
		this.tank2.current.labelsVisibility = 'none';
	}

	handleMajorChange() {
		this.tank.current.ticksVisibility = 'major';
		this.tank2.current.ticksVisibility = 'major';
	}

	handleMinorChange() {
		this.tank.current.ticksVisibility = 'minor';
		this.tank2.current.ticksVisibility = 'minor';
	}

	handleNoTicksChange() {
		this.tank.current.ticksVisibility = 'none';
		this.tank2.current.ticksVisibility = 'none';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tank ref={this.tank} id="horizontalTank" orientation="horizontal" min="0"
					max="10" value="5" inverted scalePosition="both"></Tank>
				<br />
				<br />
				<Tank ref={this.tank2} id="verticalTank" orientation="vertical" inverted min="-100"
					max="0" value="-50" scalePosition="both"></Tank>
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
