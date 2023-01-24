import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.log = React.createRef();
	}

	handleAnimationChange(event) {
		if (event.detail.value) {
			this.calendar.current.animation = 'advanced';
		} 
		else {
			this.calendar.current.animation = 'none';
		}

		this.log.current.innerHTML = 'smartCalendar animations ' + (event.detail.value ? 'On' : 'Off');
	}

	handleAnimationDirectionChange(event) {
		if (event.detail.value) {
			this.calendar.current.scrollButtonsNavigationMode = 'landscape';
		} 
		else {
			this.calendar.current.scrollButtonsNavigationMode = 'portrait';
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<h3 ref={this.log} id="log">smartCalendar animations On</h3>
				<br />
				<h3 id="animationSwitchLabel">Toggle animation</h3>
				<SwitchButton onChange={this.handleAnimationChange.bind(this)} id="animationSwitch" switchMode="click"
					checked> <span className="smart-true-content">ON</span>
					<span className="smart-false-content">OFF</span>
				</SwitchButton>
				<Calendar ref={this.calendar} id="calendar"></Calendar>
				<br />
				<h3 id="animationDirectionSwitchLabel">Animation direction</h3>
				<SwitchButton onChange={this.handleAnimationDirectionChange.bind(this)} id="animationDirectionSwitch" switchMode="click"
					checked> <span className="smart-true-content">Landscape</span>
					<span className="smart-false-content">Portrait</span>
				</SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
