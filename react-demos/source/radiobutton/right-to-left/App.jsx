import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <RadioButton rightToLeft>לחצן רדיו 1</RadioButton>
			    <RadioButton checked rightToLeft>לחצן רדיו 2</RadioButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
