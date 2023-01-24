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
			//Set new Grid Item size
			if (event.target.groupName === 'applyValueMode') {
				colorPanel.applyValueMode = event.target.innerHTML;
				return;
			}

			if (event.target.id === 'hidePreviewContainer' || event.target.id === 'hideRGBEditor' ||
				event.target.id === 'hideHEXEditor' || event.target.id === 'hideAlphaEditor' ||
				event.target.id === 'inverted') {
				colorPanel[event.target.id] = event.target.checked;
				return;
			}

			//Set a new value
			if (event.target.id === 'rgbValue') {
				colorPanel.value = event.target.value;
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
				<h1>Display Mode "palette"</h1>
				<ColorPanel ref={this.colorpanel} id="colorPanel" editAlphaChannel displayMode="radial" onChange={this.handleChange.bind(this)}></ColorPanel>
				<div className="options">
					<div className="option">Selected color:
			            <input ref={this.rgbInput} type="text" className="Input" placeholder="#RRGGBB"
							id="rgbValue" />
					</div>
					<div className="option">
						<h3>ApplyValueMode</h3>
						<RadioButton group-name="applyValueMode" checked>instantly</RadioButton>
						<br />
						<RadioButton group-name="applyValueMode">useButtons</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Color Editors</h3>
						<CheckBox id="hidePreviewContainer">Hide Preview Container</CheckBox>
						<br />
						<CheckBox id="hideRGBEditor">Hide RGB Editor</CheckBox>
						<br />
						<CheckBox id="hideHEXEditor">Hide HEX Editor</CheckBox>
						<br />
						<CheckBox id="hideAlphaEditor">Hide Alpha Editor</CheckBox>
						<br />
					</div>
					<div className="option">
						<CheckBox id="inverted">inverted</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
