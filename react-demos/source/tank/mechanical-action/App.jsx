import React from "react";
import ReactDOM from "react-dom";
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	handleTanklChange(event) {
		const value = event.detail.value;

		document.getElementById(this.id + 'Value').innerHTML = parseFloat(value).toFixed(2);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>mechanicalAction: 'switchUntilReleased'
				<Tank id="smartTank1"
					orientation="vertical" min="0" max="100" value="10" mechanicalAction="switchUntilReleased" onChange={this.handleTanklChange}></Tank>Value: <span id="smartTank1Value">10.00</span>
				<br />
				<br />mechanicalAction: 'switchWhenReleased'
				<Tank id="smartTank2"
					orientation="vertical" min="0" max="100" value="20" mechanicalAction="switchWhenReleased" onChange={this.handleTanklChange}></Tank>Value: <span id="smartTank2Value">20.00</span>
				<br />
				<br />mechanicalAction: 'switchWhileDragging'
				<Tank id="smartTank3"
					orientation="vertical" min="0" max="100" value="30" mechanicalAction="switchWhileDragging" onChange={this.handleTanklChange}></Tank>Value: <span id="smartTank3Value">30.00</span>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
