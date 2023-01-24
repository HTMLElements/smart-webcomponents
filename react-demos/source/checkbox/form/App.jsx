import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	init() {
	
	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <form action="" name="testPost" method="get">
			        <CheckBox id="checkBox" name="checkBox" value="checkBoxValue">Check Box</CheckBox>
			        <br />
			        <br />
			        <input type="submit" value="Submit"/>
			    </form>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
