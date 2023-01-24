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
				<Gauge analogDisplayType="fill" startAngle={0} endAngle={180}
					min="-15" max="15" value="13" sizeMode="auto"></Gauge>
				<Gauge analogDisplayType="needle" startAngle={-30}
					endAngle={210} min="0" max="100" value="0" sizeMode="auto"></Gauge>
				<Gauge analogDisplayType="needle" startAngle={30}
					endAngle={70} min="0" max="100" value="100" sizeMode="auto"></Gauge>
				<Gauge analogDisplayType="fill" startAngle={30}
					endAngle={70} min="0" max="100" value="100" sizeMode="auto"></Gauge>
				<Gauge id="gaugeLargeFont" analogDisplayType="fill"
					startAngle={30} endAngle={70} min="0" max="100" value="100" sizeMode="auto"></Gauge>
				<Gauge analogDisplayType="line" startAngle={-30}
					endAngle={-70} min="0" max="100" value="100" sizeMode="auto"></Gauge>
				<Gauge analogDisplayType="line" startAngle={-70}
					endAngle={-30} min="0" max="100" value="100" sizeMode="auto"></Gauge>
				<Gauge analogDisplayType="line" startAngle={80}
					endAngle={100} min="0" max="100" value="100" sizeMode="auto"></Gauge>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
