import React from "react";
import ReactDOM from "react-dom";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

class App extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <ColorPicker  editable></ColorPicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
