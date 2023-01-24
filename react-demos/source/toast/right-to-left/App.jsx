import React from "react";
import ReactDOM from "react-dom";
import { Toast } from 'smart-webcomponents-react/toast';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Toast  position="top-left" autoOpen showCloseButton type="mail"
			    className="blink" rightToLeft>יש לך 2 הודעות חדשות.</Toast>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
