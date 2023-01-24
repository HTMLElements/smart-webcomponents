import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <SwitchButton> <span className="smart-true-content">On</span>
 <span className="smart-false-content">Off</span>
			    </SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
