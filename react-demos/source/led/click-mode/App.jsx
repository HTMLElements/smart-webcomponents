import React from "react";
import ReactDOM from "react-dom";
import { Led } from 'smart-webcomponents-react/led';

class App extends React.Component {

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>Click mode "press" :
				<Led clickMode="press"></Led>
				<br />
				<br />Click mode "release" :
				<Led clickMode="release"></Led>
				<br />
				<br />Click mode "pressAndRelease" :
				<Led clickMode="pressAndRelease"></Led>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
