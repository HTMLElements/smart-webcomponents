import React from "react";
import ReactDOM from "react-dom";
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpanel = React.createRef();
	}

	messages = {
		'en': {
			'redPrefix': 'R:',
			'greenPrefix': 'G:',
			'bluePrefix': 'B:',
			'hexPrefix': '#:',
			'alphaPrefix': 'Alpha:',
			'ok': 'OK',
			'cancel': 'CANCEL',
			'customColor': 'CUSTOM COLOR ...',
			'standardColors': 'Standard colors',
			'themeColors': 'Theme colors'
		},
		'de': {
			'redPrefix': 'R',
			'greenPrefix': 'G',
			'bluePrefix': 'B',
			'hexPrefix': '#',
			'alphaPrefix': 'Alpha',
			'ok': 'OK',
			'cancel': 'STORNIEREN',
			'customColor': 'FREIWAEHLBARE FARBE ...',
			'standardColors': 'Standardfarben',
			'themeColors': 'Themenfarben'
		},
		'fr': {
			'redPrefix': 'R:',
			'greenPrefix': 'G:',
			'bluePrefix': 'B:',
			'hexPrefix': '#',
			'alphaPrefix': 'Alpha =',
			'ok': ' APPROUVER',
			'cancel': 'ANNULER',
			'customColor': 'COULEUR PERSONNALISEE ...',
			'standardColors': 'Couleurs standard',
			'themeColors': 'Couleurs du thème'
		}
	};

	init() {
		const colorPanel = this.colorpanel.current;

		document.addEventListener('change', function (event) {
			if (event.target.groupName === 'displayMode') {
				colorPanel.displayMode = event.target.innerHTML;
				return;
			}

			if (event.target.groupName === 'locale') {
				colorPanel.locale = event.target.innerHTML;
			}
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">
					<h1> Color Panel Localization</h1> In this example, the Color Panel is localized.</div>
				<ColorPanel ref={this.colorpanel} messages={this.messages} id="colorPanel" editAlphaChannel enableCustomColors></ColorPanel>
				<div className="options">
					<div className="option">
						<h3>Locale</h3>
						<RadioButton groupName="locale" checked>en</RadioButton>
						<br />
						<RadioButton groupName="locale">de</RadioButton>
						<br />
						<RadioButton groupName="locale">fr</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Display Mode</h3>
						<RadioButton groupName="displayMode" checked>default</RadioButton>
						<br />
						<RadioButton groupName="displayMode">grid</RadioButton>
						<br />
						<RadioButton groupName="displayMode">spectrumGrid</RadioButton>
						<br />
						<RadioButton groupName="displayMode">materialGrid</RadioButton>
						<br />
						<RadioButton groupName="displayMode">palette</RadioButton>
						<br />
						<RadioButton groupName="displayMode">radial</RadioButton>
						<br />
						<RadioButton groupName="displayMode">hexagonal</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
