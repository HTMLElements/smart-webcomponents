import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.gauge = React.createRef();
	}

	handleNeedleChange() {
		this.gauge.current.analogDisplayType = 'needle';
	}

	handleFillChange() {
		this.gauge.current.analogDisplayType = 'fill';
	}

	handleLineChange() {
		this.gauge.current.analogDisplayType = 'line';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Gauge ref={this.gauge} id="gauge" analogDisplayType="fill" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="100" value="30"></Gauge>
				<div className="options">
					<div className="caption">Analog Display Type</div>
					<div className="option">
						<RadioButton groupName="analogDisplayType" onChange={this.handleNeedleChange.bind(this)}>needle</RadioButton>
						<br />
						<RadioButton checked groupName="analogDisplayType" onChange={this.handleFillChange.bind(this)}>fill</RadioButton>
						<br />
						<RadioButton groupName="analogDisplayType" onChange={this.handleLineChange.bind(this)}>line</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
