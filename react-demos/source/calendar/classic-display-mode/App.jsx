import React from "react";
import ReactDOM from "react-dom";
import { Calendar } from 'smart-webcomponents-react/calendar';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Calendar calendarMode="classic"></Calendar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
