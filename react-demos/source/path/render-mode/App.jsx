import React from "react";
import ReactDOM from "react-dom";
import { Path } from 'smart-webcomponents-react/path';

class App extends React.Component {

	value = "C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Path label="Path Control" className="underlined" value={this.value}></Path>
				<Path label="Path Indicator" className="filled" value={this.value}></Path>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
