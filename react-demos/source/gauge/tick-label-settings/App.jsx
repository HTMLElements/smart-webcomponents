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
		this.gauge4 = React.createRef();
		this.gauge5 = React.createRef();
		this.gauge6 = React.createRef();
		this.gauge7 = React.createRef();
		this.gauge8 = React.createRef();
		this.gauge9 = React.createRef();
		this.gauge10 = React.createRef();
	}

	handleAllChange() {
		this.gauges.map(function (g) {
			g.labelsVisibility = 'all';
		});
	}

	handleEndPointsChange() {
		this.gauges.map(function (g) {
			g.labelsVisibility = 'endPoints';
		});
	}

	handleNoneChange() {
		this.gauges.map(function (g) {
			g.labelsVisibility = 'none';
		});
	}

	handleMajorChange() {
		this.gauges.map(function (g) {
			g.ticksVisibility = 'major';
		});
	}

	handleMinorChange() {
		this.gauges.map(function (g) {
			g.ticksVisibility = 'minor';
		});
	}

	handleNoTicksChange() {
		this.gauges.map(function (g) {
			g.ticksVisibility = 'none';
		});
	}

	init() {
		this.gauges = [this.gauge.current, this.gauge2.current, this.gauge3.current, this.gauge4.current, this.gauge5.current, this.gauge6.current, this.gauge7.current, this.gauge8.current, this.gauge9.current, this.gauge10.current];
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<h3>Gauge with analogDisplayType: 'needle'</h3>
				<div>
					<div className="gauge-container">
						<Gauge ref={this.gauge} digitalDisplay analogDisplayType="needle" startAngle={-30}
							min="0" max="100" endAngle={210} value="10" scalePosition="outside"></Gauge>
					</div>
					<div className="gauge-container">
						<Gauge ref={this.gauge2} digitalDisplay analogDisplayType="needle" startAngle={-30}
							min="0" max="100" endAngle={210} value="20" scalePosition="inside"></Gauge>
					</div>
				</div>
				<br style={{ clear: 'both' }} />
				<h3>Gauge with analogDisplayType: 'fill'</h3>
				<div>
					<div className="gauge-container">
						<Gauge ref={this.gauge3} digitalDisplay analogDisplayType="fill" startAngle={-30}
							min="0" max="100" endAngle={210} value="30" scalePosition="outside" ticksPosition="scale"></Gauge>
					</div>
					<div className="gauge-container">
						<Gauge ref={this.gauge4} digitalDisplay analogDisplayType="fill" startAngle={-30}
							min="0" max="100" endAngle={210} value="40" scalePosition="inside" ticksPosition="scale"></Gauge>
					</div>
					<div className="gauge-container">
						<Gauge ref={this.gauge5} digitalDisplay analogDisplayType="fill" startAngle={-30}
							min="0" max="100" endAngle={210} value="50" scalePosition="inside" ticksPosition="track"></Gauge>
					</div>
					<div className="gauge-container">
						<Gauge ref={this.gauge6} digitalDisplay analogDisplayType="fill" startAngle={-30}
							min="0" max="100" endAngle={210} value="60" scalePosition="outside" ticksPosition="track"></Gauge>
					</div>
				</div>
				<br style={{ clear: 'both' }} />
				<h3>Gauge with analogDisplayType: 'line'</h3>
				<div>
					<div className="gauge-container">
						<Gauge ref={this.gauge7} digitalDisplay analogDisplayType="line" startAngle={-30}
							min="0" max="100" endAngle={210} value="70" scalePosition="outside" ticksPosition="scale"></Gauge>
					</div>
					<div className="gauge-container">
						<Gauge ref={this.gauge8} digitalDisplay analogDisplayType="line" startAngle={-30}
							min="0" max="100" endAngle={210} value="60" scalePosition="inside" ticksPosition="scale"></Gauge>
					</div>
					<div className="gauge-container">
						<Gauge ref={this.gauge9} digitalDisplay analogDisplayType="line" startAngle={-30}
							min="0" max="100" endAngle={210} value="50" scalePosition="inside" ticksPosition="track"></Gauge>
					</div>
					<div className="gauge-container">
						<Gauge ref={this.gauge10} digitalDisplay analogDisplayType="line" startAngle={-30}
							min="0" max="100" endAngle={210} value="40" scalePosition="outside" ticksPosition="track"></Gauge>
					</div>
				</div>
				<div className="options">
					<div className="option">
						<div className="caption">Labels</div>
						<RadioButton id="all" name="labelsVisibility"
							checked onChange={this.handleAllChange.bind(this)}>
							<label for="all">All</label>
						</RadioButton>
						<br />
						<RadioButton id="endPoints" name="labelsVisibility"
							onChange={this.handleEndPointsChange.bind(this)}>
							<label for="endPoints">Endpoints</label>
						</RadioButton>
						<br />
						<RadioButton id="none" name="labelsVisibility"
							onChange={this.handleNoneChange.bind(this)}>
							<label for="none">None</label>
						</RadioButton>
						<br />
					</div>
					<hr />
					<div className="option">
						<div className="caption">Tick Marks</div>
						<RadioButton id="major" name="ticksVisibility"
							onChange={this.handleMajorChange.bind(this)}>
							<label for="major">Major</label>
						</RadioButton>
						<br />
						<RadioButton id="minor" name="ticksVisibility"
							checked onChange={this.handleMinorChange.bind(this)}>
							<label for="minor">Minor</label>
						</RadioButton>
						<br />
						<RadioButton id="noTicks" name="ticksVisibility"
							onChange={this.handleNoTicksChange.bind(this)}>
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
