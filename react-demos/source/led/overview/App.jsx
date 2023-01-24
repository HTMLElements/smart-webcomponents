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
			<div>Round and Square LED shapes
				<br />
				<br />
				<Led></Led>
				<Led shape="square"></Led>- checked=false;
				<br />
				<Led checked={null}></Led>
				<Led shape="square" checked={null}></Led>- checked='null';
				<br />
				<Led checked></Led>
				<Led shape="square" checked></Led>- checked=true;</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
