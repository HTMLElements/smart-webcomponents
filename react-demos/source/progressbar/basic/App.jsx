import React from "react";
import ReactDOM from "react-dom";
import { ProgressBar, CircularProgressBar } from 'smart-webcomponents-react/progressbar';

class App extends React.Component {
	render() {
		return (
			<div>
			    <ProgressBar  id="progressbar1" value={50}></ProgressBar>
			    <ProgressBar  id="progressbar2" orientation="vertical"
			    value={50}></ProgressBar>
			    <CircularProgressBar id="progressbar3" value={50}></CircularProgressBar>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
