import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.progressbar = React.createRef();
		this.progressbar2 = React.createRef();
		this.progressbar3 = React.createRef();
		this.input = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();
		this.button4 = React.createRef();
		this.button5 = React.createRef();
		this.button6 = React.createRef();
		this.button7 = React.createRef();
	}

	setValue() {
		const that = this;

		const customElement = that.progressbar.current,
			progressBar2 = that.progressbar2.current,
			progressBar3 = that.progressbar3.current,
			input = that.input.current;
		const value = parseInt(input.value, 10) || 0;

		customElement.value = value;
		progressBar2.value = value;
		progressBar3.value = value;
	}

	setSettings(key) {
		const that = this;

		const progressBar1 = that.progressbar.current,
			progressBar2 = that.progressbar2.current,
			progressBar3 = that.progressbar3.current;
		const layoutButtons = [that.button2.current, that.button3.current];
		const minButtons = [that.button4.current, that.button5.current];
		const maxButtons = [that.button6.current, that.button7.current];

		switch (key) {
			case 'normal':
				progressBar1.inverted = false;
				progressBar2.inverted = false;
				progressBar3.inverted = false;
				layoutButtons[0].disabled = true;
				layoutButtons[1].disabled = false;
				break;
			case 'inverted':
				progressBar1.inverted = true;
				progressBar2.inverted = true;
				progressBar3.inverted = true;
				layoutButtons[0].disabled = false;
				layoutButtons[1].disabled = true;
				break;
			case 0:
				progressBar1.min = 0;
				progressBar2.min = 0;
				progressBar3.min = 0;
				minButtons[0].disabled = true;
				minButtons[1].disabled = false;
				break;
			case 50:
				progressBar1.min = 50;
				progressBar2.min = 50;
				progressBar3.min = 50;
				minButtons[0].disabled = false;
				minButtons[1].disabled = true;
			case 100:
				progressBar1.max = 100;
				progressBar2.max = 100;
				progressBar2.max = 100;
				maxButtons[0].disabled = true;
				maxButtons[1].disabled = false;
				break;
			case 200:
				progressBar1.max = 200;
				progressBar2.max = 200;
				progressBar2.max = 200;
				maxButtons[0].disabled = false;
				maxButtons[1].disabled = true;
				break;
			default:
				break;
		}
	}

	render() {
		return (
			<div>
				<div className="progress-bar-layout"> <span className="label">Horizontal</span>
					<ProgressBar ref={this.progressbar} id="progressbar1"
						className="smart-unselectable" value={50} showProgressValue></ProgressBar> <span className="label">Vertical</span>
					<ProgressBar ref={this.progressbar2}
						id="progressbar2" className="smart-unselectable" orientation="vertical" value={50}
						showProgressValue></ProgressBar>
				</div>
				<div className="options"> <span className="label">Settings</span>
					<div>
						<input ref={this.input} type="text" id="input" value={30} />
						<Button ref={this.button} className="settings-button" onclick={this.setValue.bind(this)}>Set Value</Button>
					</div> <span className="label">Layout:</span>
					<div>
						<Button ref={this.button2} className="layout" onclick={this.setSettings.bind(this, 'normal')} disabled>Normal</Button>
						<Button ref={this.button3} className="layout" onclick={this.setSettings.bind(this, 'inverted')}>inverted</Button>
					</div> <span className="label">Min:</span>
					<div>
						<Button ref={this.button4} className="min" onclick={this.setSettings.bind(this, 0)} disabled>0</Button>
						<Button ref={this.button5} className="min" onclick={this.setSettings.bind(this, 50)}>50</Button>
					</div> <span className="label">Max:</span>
					<div>
						<Button ref={this.button6} className="max" onclick={this.setSettings.bind(this, 100)} disabled>100</Button>
						<Button ref={this.button7} className="max" onclick={this.setSettings.bind(this, 200)}>200</Button>
					</div>
				</div>
				<div> <span className="label">Circular</span>
					<CircularProgressBar ref={this.progressbar3} id="progressbar3"
						className="smart-unselectable" value={50} showProgressValue></CircularProgressBar>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
