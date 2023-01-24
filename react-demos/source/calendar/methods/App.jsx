import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.dateinput = React.createRef();
	}

	handleClearSelection(methodName) {
		this.calendar.current.clearSelection();
	}

	handleToday(methodName) {
		this.calendar.current.today();
	}

	handleNavForward(methodName) {
		this.calendar.current.navigate(1);
	}

	handleNavBackward(methodName) {
		this.calendar.current.navigate(-1);
	}

	handleSelectDate(methodName) {
		this.calendar.current.select(this.dateinput.current.value);
	}

	handleDisabled(methodName) {
		this.calendar.current.disabled = !this.calendar.current.disabled;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar}></Calendar>
				<div className="options">
					<div className="caption">
						<Button onClick={this.handleClearSelection.bind(this)} id="clearSelection">Clear Selection</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleToday.bind(this)} id="today">Today</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleNavBackward.bind(this)} id="navBackward">Navigate Backward</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleNavForward.bind(this)} id="navForward">Navigate Forward</Button>
					</div>
					<div className="option">
						<input className="text-input" ref={this.dateinput} id="dateInput" placeholder="e.g. 2019-1-1" />
					</div>
					<div className="option">
						<Button onClick={this.handleSelectDate.bind(this)} id="selectDate">Select Date</Button>
					</div>
					<div className="option">
						<Button onClick={this.handleDisabled.bind(this)} style={{ width: 'auto' }} id="disabled">Enable/Disable</Button>
					</div>
				</div>
			</div >
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
