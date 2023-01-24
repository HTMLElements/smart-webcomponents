import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Button  className="smart-material" id="button">Click Me</Button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
