import React from "react";
import ReactDOM from "react-dom";
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <SwitchButton className="ios-theme" checked inverted></SwitchButton>
			    <br />
			    <SwitchButton className="circle-theme"></SwitchButton>
			    <br />
			    <SwitchButton className="heart-theme"></SwitchButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
