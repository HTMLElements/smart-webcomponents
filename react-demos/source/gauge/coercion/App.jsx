import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.gauge = React.createRef();
	}

	handleToggleCoerceChange(event) {
		this.gauge.current.coerce = event.detail.value;
	}

	handleSetIntervalClick() {
		this.gauge.current.interval = 2;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Gauge ref={this.gauge} id="gauge" analogDisplayType="needle" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="21" value="1" coerce interval="1"></Gauge>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<ToggleButton id="toggleCoerce" checked onChange={this.handleToggleCoerceChange.bind(this)}>Toggle <strong>coerce</strong>
						</ToggleButton>
					</div>
					<div className="option">
						<Button id="setInterval" onClick={this.handleSetIntervalClick.bind(this)}>Set <strong>interval</strong> to <em>2</em>
						</Button>
					</div>
				</div>
				<br />
				<br />
				<br />
				<div className="description">Coercion - snapping to the nearest value according to the coercion interval
			        setting.</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
