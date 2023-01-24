import React from "react";
import ReactDOM from "react-dom";
import ColorInput from "smart-webcomponents-react/colorinput";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorinput = React.createRef();
	}

	placeholder = 'אנא בחר צבע';

	init() {
		const colorInput = this.colorinput.current,
			messages = Object.assign({}, colorInput.messages);

		messages['he'] = {
			'standardColors': 'צבעים סטנדרטיים',
			'themeShadeColors': '',
			'themeColors': 'צבעי נושא'
		};

		colorInput.messages = messages;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>smart.ColorInput allows to pick a new color from a list of colors.</h1>
				</div>
				<ColorInput ref={this.colorinput} dropDownButtonPosition="left" rightToLeft locale="he" placeholder={this.placeholder}></ColorInput>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
