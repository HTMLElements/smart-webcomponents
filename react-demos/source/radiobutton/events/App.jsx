import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.log = React.createRef();
	}

	handleChange(button, event) {
		this.log.current.textContent = 'Radio Button ' + button + " is " + event.detail.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <RadioButton onChange={this.handleChange.bind(this, 1)} checked>Radio Button 1</RadioButton>
			    <RadioButton onChange={this.handleChange.bind(this, 2)}>Radio Button 2</RadioButton>
				
			    <div className="options">
			        <div className="Events"></div>
			        <div className="option"><span ref={this.log} id="log"></span>
			        </div>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
