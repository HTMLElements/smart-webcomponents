import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <div className="demo-description">Checkbox fully supports right-to-left (RTL) language locales. You can
			        enable/disable the right-to-left support using rightToLeft property.</div>
			    <CheckBox id="checkBox" rightToLeft>תיבת הסימון</CheckBox>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
