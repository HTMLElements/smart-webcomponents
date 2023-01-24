import React from "react";
import ReactDOM from "react-dom";
import { Led } from 'smart-webcomponents-react/led';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="container">False | True | Null | Disabled | Readonly</div>
				<div className="container metro-blue">
					<Led></Led>
					<Led checked></Led>
					<Led checked={null}></Led>
					<Led checked disabled></Led>
					<Led checked readonly></Led>
					<div className="theme-name">Blue theme</div>
					<div className="clearing"></div>
				</div>
				<div className="container metro-dark">
					<Led></Led>
					<Led checked></Led>
					<Led checked={null}></Led>
					<Led checked disabled></Led>
					<Led checked readonly></Led>
					<div className="theme-name">Dark theme</div>
					<div className="clearing"></div>
				</div>
				<div className="container metro-light">
					<Led></Led>
					<Led checked></Led>
					<Led checked={null}></Led>
					<Led checked disabled></Led>
					<Led checked readonly></Led>
					<div className="theme-name">Light theme</div>
					<div className="clearing"></div>
				</div>
				<div className="container metro-red">
					<Led></Led>
					<Led checked></Led>
					<Led checked={null}></Led>
					<Led checked disabled></Led>
					<Led checked readonly></Led>
					<div className="theme-name">Red theme</div>
					<div className="clearing"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
