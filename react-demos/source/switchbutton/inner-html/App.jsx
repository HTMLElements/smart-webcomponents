import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <SwitchButton> <span className="smart-true-content">Hello</span>
 <span className="smart-false-content">Bye</span>
			    </SwitchButton>
			    <br />
			    <SwitchButton orientation="vertical"> <span className="smart-true-content">Hello</span>
 <span className="smart-false-content">Bye</span>
			    </SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
