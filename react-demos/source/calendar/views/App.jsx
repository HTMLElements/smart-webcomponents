import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.calendar = React.createRef();
	}

	handleChange(view, event) {
		if (event.detail.value) {
			this.calendar.current.view = view;
		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Calendar ref={this.calendar} className="calendar-views" view="landscape" viewSections={["title", "header"]}
					selectionMode="one"></Calendar>
				<div className="options">
					<div className="caption">View Mode</div>
					<div className="option">
						<RadioButton onChange={this.handleChange.bind(this, 'landscape')} checked>Landscape</RadioButton>
						<RadioButton onChange={this.handleChange.bind(this, 'portrait')}>Portrait</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
