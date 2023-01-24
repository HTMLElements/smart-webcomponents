import React from "react";
import ReactDOM from "react-dom";
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpanel = React.createRef();
	}

	init() {
		const colorPanel = this.colorpanel.current,
			messages = Object.assign({}, colorPanel.messages);

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

		colorPanel.messages = messages;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1> Color Panel</h1> In this example is demonstrated the smartColorPanel Web Component with
			        Right To Left layout.</div>
				<ColorPanel ref={this.colorpanel} rightToLeft locale="he"></ColorPanel>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
