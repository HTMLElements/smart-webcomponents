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
			if (event.target.groupName === 'columnSettings') {
				colorPicker.columnCount = parseInt(event.target.innerHTML);
				return;
			}
			
			if (event.target.id === 'inverted') {
				colorPicker.inverted = event.target.checked;
				return;
			}

			//Set ApplyValueMode and Palette
			if (event.target.groupName === 'applyValueMode') {
				colorPicker.applyValueMode = event.target.innerHTML;
				return;
			}

			if (event.target.groupName === 'palette') {
				colorPicker.palette = event.target.innerHTML;
				return;
			}
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">This example demonstrates the "hexagonal" display mode of the Color Picker.</div>
				<ColorPicker
					ref={this.colorpicker} displayMode="hexagonal"></ColorPicker>
				<div className="options">
					<div className="option">
						<div>Column Count</div>
						<RadioButton  groupName="columnSettings">4</RadioButton>
						<br />
						<RadioButton  groupName="columnSettings" checked>8</RadioButton>
						<br />
						<RadioButton  groupName="columnSettings">14</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>ApplyValueMode</div>
						<RadioButton  groupName="applyValueMode"
							checked>instantly</RadioButton>
						<br />
						<RadioButton  groupName="applyValueMode">useButtons</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>Palette Color</div>
						<RadioButton  groupName="palette"
							checked>default</RadioButton>
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
					<div className="option">
						<div>Inverted Colors</div>
						<CheckBox  id="inverted">Inverted</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
