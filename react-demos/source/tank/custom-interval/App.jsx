import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.tank = React.createRef();
		this.tank2 = React.createRef();
		this.tank3 = React.createRef();
	}

	handleToggleCustomIntervalChange(event) {
		const checked = event.detail.value;

		this.tank.current.customInterval = checked;
		this.tank2.current.customInterval = checked;
		this.tank3.current.customInterval = checked;
	}

	handleToggleCoerceChange(event) {
		const checked = event.detail.value;

		this.tank.current.coerce = checked;
		this.tank2.current.coerce = checked;
		this.tank3.current.coerce = checked;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<p>Tank with floating point scale:</p>
				<Tank ref={this.tank} id="tank1" orientation="horizontal" min="100" max="10000" value="1000" coerce customInterval customTicks={[100, 200, 1000, 8000, 10000]}></Tank>
				<p>Tank with integer scale:</p>
				<Tank ref={this.tank2} id="tank2" orientation="horizontal"
					scaleType="integer" wordLength="int64" min="-9223372036854775808" max="9223372036854775807"
					value="1000" coerce customInterval customTicks={[-9e18, 0, 1e18, 5e18]}></Tank>
				<p>Tank with logarithmic scale:</p>
				<Tank ref={this.tank3} id="tank3" orientation="horizontal"
					min="100" max="10000" logarithmic-scale value="1000" coerce customInterval
					customTicks={[100, 200, 1000, 8000, 10000]}></Tank>
				<div className="options">
					<div className="option">
						<p>Settings</p>
						<CheckBox id="toggleCustomInterval" checked onChange={this.handleToggleCustomIntervalChange.bind(this)}>Custom interval</CheckBox>
						<CheckBox id="toggleCoerce" checked onChange={this.handleToggleCoerceChange.bind(this)}>Coerce</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
