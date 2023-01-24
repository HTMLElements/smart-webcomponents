import React from "react";
import ReactDOM from "react-dom";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

class App extends React.Component {

	handleChange(event) {
		console.log("New Color: " + event.detail.value)
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>smartColorPicker allows picking a color from a drop-down</h1>
				</div>
				<ColorPicker onChange={this.handleChange}  enableCustomColors></ColorPicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
