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
				<Gauge id="gauge" analogDisplayType="needle" scaleType="integer"
					digitalDisplay startAngle={-30} endAngle={210} min="0" max="100" value="25"
					rightToLeft unit='ק"ג' showUnit></Gauge>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
