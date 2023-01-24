import React from "react";
import ReactDOM from "react-dom";
import { ColorInput } from "smart-webcomponents-react/colorinput"

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<ColorInput dropDownButtonPosition="right" readonly></ColorInput>
				<ColorInput displayMode="grid"></ColorInput>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
