import React from "react";
import ReactDOM from "react-dom";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpicker = React.createRef();
	}

	init() {


		const colorPicker = this.colorpicker.current,
			messages = Object.assign({}, colorPicker.messages);
		messages['he'] = {
			'redPrefix': 'ר:',
			'greenPrefix': 'ז:',
			'bluePrefix': 'ב:',
			'hexPrefix': '#:',
			'alphaPrefix': 'אלפא:',
			'ok': 'בסדר',
			'cancel': 'בטל',
			'customColor': 'צבע מותאם אישית',
			'standardColors': 'צבעים סטנדרטיים',
			'themeColors': 'צבעי נושא'
		};

		colorPicker.messages = messages;
		colorPicker.placeholder = 'אנא בחר צבע';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1>smartColorPicker allows picking a color from a drop-down</h1>
				</div>

				<ColorPicker ref={this.colorpicker} enableCustomColors rightToLeft locale="he"></ColorPicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
