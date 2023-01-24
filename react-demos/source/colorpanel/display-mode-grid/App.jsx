import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPanel } from 'smart-webcomponents-react/colorpanel';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpanel = React.createRef();
	}

	//Palette Colors for pallette = 'custom'
	paletteColors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

	//Pre-set Palette Custom Colors ( User selected colors )
	paletteCustomColors = ['#808080', '#ffd8b1', '#aaffc3'];

	init() {
		const colorPanel = this.colorpanel.current;

		document.addEventListener('change', function (event) {
			//Set new Grid Item size
			if (event.target.groupName === 'columnSettings') {
				colorPanel.columnCount = parseInt(event.target.innerHTML);
				return;
			}

			if (event.target.groupName === 'palette') {
				colorPanel.palette = event.target.innerHTML;
				return;
			}

			if (event.target.id === 'enableCustomColors') {
				colorPanel.enableCustomColors = event.target.checked;
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
				<div className="demo-description">
					<h1> Color Panel Display Mode</h1> In this example, the display-mode is set to "grid"</div>
				<ColorPanel ref={this.colorpanel} paletteColors={this.paletteColors} paletteCustomColors={this.paletteCustomColors}
					id="colorPanel" displayMode="grid"></ColorPanel>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<div>Select Grid Column Count</div>
						<RadioButton groupName="columnSettings">4</RadioButton>
						<br />
						<RadioButton groupName="columnSettings" checked>8</RadioButton>
						<br />
						<RadioButton groupName="columnSettings">14</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>Palette</div>
						<RadioButton groupName="palette" checked>default</RadioButton>
						<br />
						<RadioButton groupName="palette">gray</RadioButton>
						<br />
						<RadioButton groupName="palette">red</RadioButton>
						<br />
						<RadioButton groupName="palette">green</RadioButton>
						<br />
						<RadioButton groupName="palette">blue</RadioButton>
						<br />
						<RadioButton groupName="palette">custom</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>Enable/Disable Custom Colors</div>
						<CheckBox id="enableCustomColors">Enable Custom Colors</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
