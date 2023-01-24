import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleChange(event) {
		this.log.current.innerHTML = event.detail.value.toString();
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Calendar onChange={this.handleChange.bind(this)} id="calendar"></Calendar>
				<div>
					<h3>Event Log:</h3>
					<div ref={this.log} id="eventLog"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
