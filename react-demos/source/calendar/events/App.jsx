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
				<Calendar id="calendar" onChange={this.handleChange.bind(this)}></Calendar>
				<div className="options">
					<div className="caption">Events</div>
					<div className="option" ref={this.log} id="log"></div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
