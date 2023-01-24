import React from "react";
import ReactDOM from "react-dom";
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tank = React.createRef();
	}

	handleChange(event) {
		this.tank.current.interval = event.detail.value;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Tank ref={this.tank} id="tank" coerce interval="10" min="0" max="100" value="50"
					scalePosition="both" scaleType="integer"></Tank>
				<div className="options">
					<div className="option">
						<p>Set coercion interval:</p>
						<NumericTextBox id="numericTextBox"
							value="10" min="1" max="100" inputFormat="integer" spinButtons onChange={this.handleChange.bind(this)}></NumericTextBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
