import React from "react";
import ReactDOM from "react-dom";
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Gauge id="gauge1" analogDisplayType="needle" digitalDisplay
					startAngle={-30} endAngle={210} min="-9223372036854775808" max="9223372036854775807"
					value="0" scaleType="integer" wordLength="int64" significantDigits={2}></Gauge>
				<Gauge id="gauge2" analogDisplayType="line" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="1.8E+19" value="1.7E+19"
					scaleType="integer" wordLength="uint64" significantDigits={2} coerce
					interval="1E+18"></Gauge>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
