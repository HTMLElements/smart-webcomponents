import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpicker = React.createRef();
	}

	init() {
		const colorPicker = this.colorpicker.current;

		document.addEventListener('change', function (event) {
			//Set new Grid Item size
			if (event.target.groupName === 'applyValueMode') {
				colorPicker.applyValueMode = event.target.innerHTML;
				return;
			}

			if (event.target.id === 'hidePreviewContainer' || event.target.id === 'hideRGBEditor' ||
				event.target.id === 'hideHEXEditor' || event.target.id === 'hideAlphaEditor') {
				colorPicker[event.target.id] = event.target.checked;
				return;
			}

			//Set a new value
			if (event.target.id === 'rgbValue') {
				colorPicker.value = event.target.value;
			}
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This example demonstrates the "palette" display mode of the Color Picker.</div>
				<ColorPicker
					ref={this.colorpicker} editAlphaChannel displayMode="palette"></ColorPicker>
				<div className="options">
					<div className="option">
						<div>Apply Value Mode</div>
						<RadioButton  groupName="applyValueMode"
							checked>instantly</RadioButton>
						<br />
						<RadioButton  groupName="applyValueMode">useButtons</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>Color Editors</div>
						<CheckBox  id="hidePreviewContainer">Hide Preview Container</CheckBox>
						<br />
						<CheckBox  id="hideRGBEditor">Hide RGB Editor</CheckBox>
						<br />
						<CheckBox  id="hideHEXEditor">Hide HEX Editor</CheckBox>
						<br />
						<CheckBox  id="hideAlphaEditor">Hide Alpha Editor</CheckBox>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
