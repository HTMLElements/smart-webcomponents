import React from "react";
import ReactDOM from "react-dom";
import { PowerButton } from "smart-webcomponents-react/button";
import { CircularProgressBar } from "smart-webcomponents-react/progressbar";

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<section id="power-button">
						<div className="module">
							<p>Power button is a two-state type of toggle button with an indicator.</p>
							<p>Used as indicator.</p>
						</div>
						<div className="module power-button-flat-light">
							<div>
								<PowerButton></PowerButton>
								<br />
								<PowerButton hover></PowerButton>
								<br />
								<PowerButton checked></PowerButton>
								<br />
								<PowerButton disabled></PowerButton>
							</div>
						</div>
						<div className="module"></div>
						<div className="module power-button-light">
							<div>
								<PowerButton className="raised"></PowerButton>
								<br />
								<PowerButton className="raised"></PowerButton>
								<br />
								<PowerButton className="checked raised" checked></PowerButton>
								<br />
								<PowerButton className="raised" disabled></PowerButton>
							</div>
							<p>Raised Power button</p>
						</div>
						<div className="module power-button-dark">
							<h2>Demo usage</h2>
						</div>
						<div className="module power-button">
							<div>
								<CircularProgressBar id="progressBarAnimated" indeterminate value={100}>
									<PowerButton style={{ border: "none" }} id="powerButtonAnimation"></PowerButton>
								</CircularProgressBar>
							</div>
							<p>A power button can control the loading process.</p>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
