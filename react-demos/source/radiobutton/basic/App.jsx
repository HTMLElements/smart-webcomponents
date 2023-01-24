import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <RadioButton>Radio Button 1</RadioButton>
			    <RadioButton checked>Radio Button 2</RadioButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
