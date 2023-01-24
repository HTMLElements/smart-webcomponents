import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <SwitchButton className="labels-on-right"></SwitchButton>
			    <br />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
