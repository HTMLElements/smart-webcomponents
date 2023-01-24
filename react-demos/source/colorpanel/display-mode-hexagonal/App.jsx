import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpanel = React.createRef();
		this.rgbInput = React.createRef();
	}

	handleChange(event) {
		this.rgbInput.current.value = event.detail.value;
	}

	init() {
		const colorPanel = this.colorpanel.current;

		document.addEventListener('change', function (event) {
			if (event.target.id === 'rgbValue') {
				colorPanel.value = event.target.value;
				return;
			}

			if (event.target.id === 'inverted') {
				colorPanel.inverted = event.target.checked;
				return;
			}

			if (event.target.id === 'enableCustomColors') {
				colorPanel.enableCustomColors = event.target.checked;
				return;
			}

			//Set ApplyValueMode and Palette
			if (event.target.groupName === 'palette') {
				colorPanel.palette = event.target.innerHTML;
				return;
			}
		});

		this.rgbInput.current.value = colorPanel.value;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<h1>Dispaly Mode "hexagonal"</h1>
				<ColorPanel ref={this.colorpanel} id="colorPanel" displayMode="hexagonal" onChange={this.handleChange.bind(this)}></ColorPanel>
				<div className="options">
					<div className="option">Selected color:
			            <input ref={this.rgbInput} placeholder="#RRGGBB" className="Input" id="rgbValue"/>
					</div>
					<div className="option">
						<CheckBox  id="inverted">Inverted</CheckBox>
					</div>
					<div className="option">
						<h3>Palette</h3>
						<RadioButton  groupName="palette" checked>default</RadioButton>
						<br />
						<RadioButton  groupName="palette">gray</RadioButton>
						<br />
						<RadioButton  groupName="palette">red</RadioButton>
						<br />
						<RadioButton  groupName="palette">green</RadioButton>
						<br />
						<RadioButton  groupName="palette">blue</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
