import React from "react";
import ReactDOM from "react-dom";
import { Path } from 'smart-webcomponents-react/path';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Path label="Path Control" value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"></Path>
			    <Path label="Path Control Wrap" wrap value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"></Path>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
