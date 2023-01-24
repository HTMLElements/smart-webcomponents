import React from "react";
import ReactDOM from "react-dom";
import { DropDownButton } from 'smart-webcomponents-react/dropdownbutton';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tank } from 'smart-webcomponents-react/tank';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.dropdownbutton = React.createRef();
		this.tank = React.createRef();
	}

	handleDropDownButtonPositionButtonClick(event) {
		const that = this;
		let mode = event.target.textContent.trim();

		that.dropdownbutton.current.dropDownButtonPosition = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	handleDropDownOpenMode(event) {
		const that = this;
		let mode = event.target.textContent.trim();

		that.dropdownbutton.current.dropDownOpenMode = mode.charAt(0).toLowerCase() + mode.slice(1);
	}

	init() {
		this.dropdownbutton.current.placeholder = this.tank.current.value.toString();
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div id="container">
					<DropDownButton ref={this.dropdownbutton} dropDownWidth="auto">
						<Tank ref={this.tank} id="tank" className="animation" max={100} scaleType="integer"
							value={75} interval={10}></Tank>
					</DropDownButton>
					<div className="options">
						<div className="option">
							<div>Button Position:</div>
							<RadioButton  onClick={this.handleDropDownButtonPositionButtonClick.bind(this)}>Left</RadioButton>
							<br />
							<RadioButton  checked onClick={this.handleDropDownButtonPositionButtonClick.bind(this)}>Right</RadioButton>
							<br />
							<RadioButton  onClick={this.handleDropDownButtonPositionButtonClick.bind(this)}>Top</RadioButton>
							<br />
							<RadioButton  onClick={this.handleDropDownButtonPositionButtonClick.bind(this)}>Bottom</RadioButton>
							<br />
						</div>
						<div className="option">
							<div>Open Mode:</div>
							<RadioButton  checked onClick={this.handleDropDownOpenMode.bind(this)}>Default</RadioButton>
							<br />
							<RadioButton  onClick={this.handleDropDownOpenMode.bind(this)}>DropDownButton</RadioButton>
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
