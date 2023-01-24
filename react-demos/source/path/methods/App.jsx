import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Path } from 'smart-webcomponents-react/path';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.path = React.createRef();
		this.log = React.createRef();
	}

	value = "C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi";

	handleChange(event) {
		this.log.current.innerHTML = event.detail.value;
	}

	init() {
		const path = this.path.current;

		document.addEventListener('click', function (event) {
			const methodName = event.target.textContent;

			switch (methodName) {
				case "setToNotAPath":
					path.setToNotAPath();
					break;
				case "setToEmptyPath":
					path.setToEmptyPath();
					break;
				case "open":
					path.open();
					break;
				case "close":
					path.close();
					break;
			}
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Path ref={this.path} onChange={this.handleChange.bind(this)} label="Path Control" value={this.value}></Path>
				<div className="options">
					<div className="option">
						<Button>setToNotAPath</Button>
					</div>
					<div className="option">
						<Button>setToEmptyPath</Button>
					</div>
					<div className="option">
						<Button>open</Button>
					</div>
					<div className="option">
						<Button>close</Button>
					</div>
					<div className="option">
						<h4>Value:</h4>
						<div ref={this.log} id="log">C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
