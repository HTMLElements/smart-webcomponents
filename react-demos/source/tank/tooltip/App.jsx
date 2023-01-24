import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tank = React.createRef();
	}

	handleCheckboxEnableTooltipChange(event) {
		this.tank.current.showTooltip = event.detail.value;
	}

	handleCheckboxFarTooltipChange(event) {
		if (event.detail.value) {
			this.tank.current.tooltipPosition = 'far';
		}
		else {
			this.tank.current.tooltipPosition = 'near';
		}
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tank ref={this.tank} id="tank" tooltipPosition="far" showTooltip orientation="vertical"
					min="0" max="10" value="5" scalePosition="both"></Tank>
				<br />
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<CheckBox checked id="checkboxEnableTooltip" onChange={this.handleCheckboxEnableTooltipChange.bind(this)}>Enable tooltip</CheckBox>
						<br />
						<CheckBox checked id="checkboxFarTooltip" onChange={this.handleCheckboxFarTooltipChange.bind(this)}>Set tooltipPosition 'far'</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
