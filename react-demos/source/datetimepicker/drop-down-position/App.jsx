import React from "react";
import ReactDOM from "react-dom";
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.datetimepicker = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.radiobutton3 = React.createRef();
		this.radiobutton4 = React.createRef();
		this.radiobutton5 = React.createRef();
		this.radiobutton6 = React.createRef();
		this.radiobutton7 = React.createRef();
		this.radiobutton8 = React.createRef();
		this.radiobutton9 = React.createRef();
		this.radiobutton10 = React.createRef();
	}

	handleBottomChange() {
		this.datetimepicker.current.dropDownPosition = 'bottom';
	}

	handleTopChange() {
		this.datetimepicker.current.dropDownPosition = 'top';
	}

	handleOverlayBottomChange() {
		this.datetimepicker.current.dropDownPosition = 'overlay-bottom';
	}

	handleOverlayCenterChange() {
		this.datetimepicker.current.dropDownPosition = 'overlay-center';
	}

	handleOverlayTopChange() {
		this.datetimepicker.current.dropDownPosition = 'overlay-top';
	}

	handleCenterBottomChange() {
		this.datetimepicker.current.dropDownPosition = 'center-bottom';
	}

	handleCenterTopChange() {
		this.datetimepicker.current.dropDownPosition = 'center-top';
	}

	handleLeftChange() {
		this.datetimepicker.current.calendarButton = true;
		this.datetimepicker.current.calendarButtonPosition = 'left';
	}

	handleRightChange() {
		this.datetimepicker.current.calendarButton = true;
		this.datetimepicker.current.calendarButtonPosition = 'right';
	}

	handleNoneChange() {
		this.datetimepicker.current.calendarButton = false;
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DateTimePicker ref={this.datetimepicker} calendarButton calendarButtonPosition="right"
					enableMouseWheelAction dropDownPosition="bottom"></DateTimePicker>
				<div className="options">
					<div className="caption">Dropdown Position:</div>
					<div className="option">
						<RadioButton ref={this.radiobutton} checked onChange={this.handleBottomChange.bind(this)}>Bottom</RadioButton>
						<RadioButton ref={this.radiobutton2} onChange={this.handleTopChange.bind(this)}>Top</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton3} onChange={this.handleOverlayBottomChange.bind(this)}>Overlay bottom</RadioButton>
						<RadioButton ref={this.radiobutton4} onChange={this.handleOverlayCenterChange.bind(this)}>Overlay center</RadioButton>
						<RadioButton ref={this.radiobutton5} onChange={this.handleOverlayTopChange.bind(this)}>Overlay top</RadioButton>
						<br />
						<RadioButton ref={this.radiobutton6} onChange={this.handleCenterBottomChange.bind(this)}>Center bottom</RadioButton>
						<RadioButton ref={this.radiobutton7} onChange={this.handleCenterTopChange.bind(this)}>Center top</RadioButton>
					</div>
					<br />
					<div className="caption">Calendar Button Position:</div>
					<div className="option">
						<RadioButton ref={this.radiobutton8} onChange={this.handleLeftChange.bind(this)}>Left</RadioButton>
						<RadioButton ref={this.radiobutton9} checked onChange={this.handleRightChange.bind(this)}>Right</RadioButton>
						<RadioButton ref={this.radiobutton10} onChange={this.handleNoneChange.bind(this)}>None</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
