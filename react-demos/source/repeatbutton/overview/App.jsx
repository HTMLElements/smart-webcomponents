import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';
import { RepeatButton } from 'smart-webcomponents-react/button';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.progressBar = React.createRef();
		this.circularProgressBar = React.createRef();
		this.progressBarCircularControl = React.createRef();
	}

	handleProgressUpClick() {
		const progressBar = this.progressBar.current,
			circularProgressBar = this.circularProgressBar.current;

		progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
		circularProgressBar.value = Math.min(circularProgressBar.max, circularProgressBar.value + 1);
	}

	handleProgressDownClick() {
		const progressBar = this.progressBar.current,
			circularProgressBar = this.circularProgressBar.current;

		progressBar.value = Math.max(progressBar.min, progressBar.value - 1);
		circularProgressBar.value = Math.max(circularProgressBar.min, circularProgressBar.value - 1);
	}

	handleProgressUpClick() {
		const progressBar = this.progressBar.current,
			circularProgressBar = this.circularProgressBar.current;

		progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
		circularProgressBar.value = Math.min(circularProgressBar.max, circularProgressBar.value + 1);
	}

	handleProgressUpClick() {
		const progressBar = this.progressBar.current,
			circularProgressBar = this.circularProgressBar.current;

		progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
		circularProgressBar.value = Math.min(circularProgressBar.max, circularProgressBar.value + 1);
	}

	handleIncrementButtonClick() {
		const progressBar = this.progressBarCircularControl.current
		progressBar.value = Math.min(progressBar.max, progressBar.value + 1);
	}

	handleDecrementButtonClick() {
		const progressBar = this.progressBarCircularControl.current;
		progressBar.value = Math.max(progressBar.min, progressBar.value - 1);
	}

	init() {

	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="smart-demo-container">
					<div className="module">
						<p>Repeat buttons are normal buttons that repeat a single action until release.</p>
						<p>The repeat button can simply trigger an action multiple times depending
			                on the time interval applied.</p>
					</div>
					<div className="module">
						<div className="repeat-buttons-container">
							<RepeatButton><i className="material-icons">keyboard_arrow_left</i>
							</RepeatButton>
							<RepeatButton><i className="material-icons">keyboard_arrow_right</i>
							</RepeatButton>
							<RepeatButton><i className="material-icons">keyboard_arrow_up</i>
							</RepeatButton>
							<RepeatButton><i className="material-icons">keyboard_arrow_down</i>
							</RepeatButton>
						</div>
						<p>Repeat buttons can be used for navigation.</p>
					</div>
					<div className="module">
						<div className="repeat-buttons-container">
							<RepeatButton><i className="material-icons">replay_10</i>
							</RepeatButton>
							<RepeatButton><i className="material-icons">forward_10</i>
							</RepeatButton>
						</div>
						<p>A repeat button can also be used to configure a range control.</p>
					</div>
					<section id="repeat-button-demo">
						<div className="module">
							<h2>Demo usage</h2>
							<br />
							<p>Repeating actions can be performed using Repeat buttons.</p>
						</div>
						<div className="module">
							<div className="repeat-buttons-container">
								<RepeatButton id="progressUp" onClick={this.handleProgressUpClick.bind(this)}><i className="material-icons">arrow_upward</i>
								</RepeatButton>
								<RepeatButton id="progressDown" onClick={this.handleProgressDownClick.bind(this)}><i className="material-icons">arrow_downward</i>
								</RepeatButton>
							</div>
							<p>Repeat buttons that control the fill of the progress bar.</p>
						</div>
						<div className="module">
							<div className="progress-bar-container">
								<ProgressBar ref={this.progressBar} id="progressBar" orientation="vertical"
									inverted showProgressValue value={5}></ProgressBar>
								<CircularProgressBar ref={this.circularProgressBar} id="progressBarCircular" showProgressValue value={5}></CircularProgressBar>
							</div>
							<p>Progress bars : vertical and circular.</p>
						</div>
						<div className="module">
							<p>Repeat button nested inside a Circular progress bar.</p>
						</div>
						<div className="module">
							<div className="progress-bar-container">
								<CircularProgressBar ref={this.progressBarCircularControl} id="progressBarCircularControl" value={25}>
									<RepeatButton id="incrementButton" onClick={this.handleIncrementButtonClick.bind(this)}><i className="material-icons">arrow_upward</i>
									</RepeatButton>
									<RepeatButton id="decrementButton" onClick={this.handleDecrementButtonClick.bind(this)}><i className="material-icons">arrow_downward</i>
									</RepeatButton>
								</CircularProgressBar>
							</div>
						</div>
					</section>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
