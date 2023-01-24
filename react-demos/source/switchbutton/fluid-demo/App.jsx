import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
				<SwitchButton className="fluid-theme"></SwitchButton>
				<SwitchButton className="fluid-theme" inverted></SwitchButton>
				<SwitchButton className="fluid-theme" disabled></SwitchButton>
				<SwitchButton className="fluid-theme" inverted
					disabled></SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
