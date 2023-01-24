import React from "react";
import ReactDOM from "react-dom";
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.horizontalTankValue = React.createRef();
		this.verticalTankValue = React.createRef();
		this.invertedHorizontalTankValue = React.createRef();
		this.invertedVerticalTankValue = React.createRef();
	}

	handleHorizontalTankChange(event) {
		const value = event.detail.value;
		this.horizontalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
	}

	handleVerticalTankChange(event) {
		const value = event.detail.value;
		this.verticalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
	}

	handleInvertedHorizontalTankChange(event) {
		const value = event.detail.value;
		this.invertedHorizontalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
	}

	handleInvertedVerticalTankChange(event) {
		const value = event.detail.value;
		this.invertedVerticalTankValue.current.innerHTML = parseFloat(value).toFixed(2);
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="underlined">Horizontal tank</div>Value: <span ref={this.horizontalTankValue} id="horizontalTankValue">30.00</span>
				<Tank id="horizontalTank" orientation="horizontal" min="0" max="100"
					value="30" scalePosition="none" onChange={this.handleHorizontalTankChange.bind(this)}></Tank>
				<br />
				<br />
				<br />
				<div className="underlined">Inverted horizontal tank</div>Value: <span ref={this.invertedHorizontalTankValue} id="invertedHorizontalTankValue">30.00</span>
				<Tank id="invertedHorizontalTank" orientation="horizontal" inverted
					min="0" max="100" value="30" scalePosition="none" onChange={this.handleInvertedHorizontalTankChange.bind(this)}></Tank>
				<br />
				<br />
				<br />
				<div className="underlined">Vertical Tank</div>Value: <span ref={this.verticalTankValue} id="verticalTankValue">30.00</span>
				<Tank id="verticalTank" orientation="vertical" min="0" max="100"
					value="30" scalePosition="none" onChange={this.handleVerticalTankChange.bind(this)}></Tank>
				<br />
				<br />
				<br />
				<div className="underlined">Inverted vertical Tank</div>Value: <span ref={this.invertedVerticalTankValue} id="invertedVerticalTankValue">30.00</span>
				<Tank id="invertedVerticalTank" orientation="vertical" inverted min="0"
					max="100" value="30" scalePosition="none" onChange={this.handleInvertedVerticalTankChange.bind(this)}></Tank>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
