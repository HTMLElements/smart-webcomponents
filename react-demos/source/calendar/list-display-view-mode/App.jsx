import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
		this.radiobutton = React.createRef();
		this.radiobutton2 = React.createRef();
		this.radiobutton3 = React.createRef();
	}

	handleChange(mode, event) {
		if (event.detail.value) {
			this.calendar.current.displayMode = mode;
		}
	}

	handleDisplayModeChange(event) {
		if (this.calendar.current.displayMode === 'month') {
			this.radiobutton.current.checked = true;
		}
		else if (this.calendar.current.displayMode === 'year') {
			this.radiobutton2.current.checked = true;
		}
		else {
			this.radiobutton3.current.checked = true;
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} onDisplayModeChange={this.handleDisplayModeChange.bind(this)} displayModeView="list"></Calendar>
				<br />
				<div className="options">
					<div className="caption">Choose Mode</div>
					<div className="option">
						<RadioButton ref={this.radiobutton} onChange={this.handleChange.bind(this, 'month')} checked>Month</RadioButton>
						<RadioButton ref={this.radiobutton2} onChange={this.handleChange.bind(this, 'year')}>Year</RadioButton>
						<RadioButton ref={this.radiobutton3} onChange={this.handleChange.bind(this, 'decade')}>Decade</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
