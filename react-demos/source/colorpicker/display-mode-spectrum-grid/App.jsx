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
			const target = event.target;

			if (target.groupName === 'columnCount') {
				colorPicker.columnCount = parseInt(target.innerHTML);
				return;
			}

			//Set new Grid Item size
			if (target.groupName === 'columnSize' || target.groupName === 'columnGap') {
				let size, className = target.groupName === 'columnSize' ? 'item-size' : 'column-gap';
				switch (target.innerHTML) {
					case '3':
					case '5':
					case '20':
						size = 'small';
						break;
					case '6':
					case '10':
					case '40':
						size = 'medium';
						break;
					case '15':
					case '9':
					case '60':
						size = 'large';
						break;
				}

				//Remove the oldClass
				const classes = colorPicker.nativeElement.classList;

				for (let i = 0; i < classes.length; i++) {
					if (classes[i].indexOf(className) > -1) {
						classes.remove(classes.item(i));
					}
				}

				classes.add(className + '-' + size);
				return;
			}

			//Set ApplyValueMode and Palette
			if (target.groupName === 'applyValueMode') {
				colorPicker.applyValueMode = target.innerHTML;
				return;
			}

			if (target.groupName === 'palette') {
				colorPicker.palette = target.innerHTML;
				return;
			}

			//Set inverted mode
			if (target.id === 'inverted') {
				colorPicker.inverted = event.detail.value;
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
				<div className="demo-description">The Color Picker's display-mode is set to "spectrumGrid"</div>
				<ColorPicker
					ref={this.colorpicker} displayMode="spectrumGrid" placeholder="Select a Color"></ColorPicker>
				<div className="options">
					<div className="option">
						<h3>Toggle Grid Column Size</h3>
						<RadioButton groupName="columnCount">5</RadioButton>
						<br />
						<RadioButton groupName="columnCount" checked>10</RadioButton>
						<br />
						<RadioButton groupName="columnCount">15</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Toggle Grid Color Size</h3>
						<RadioButton groupName="columnSize" checked>20</RadioButton>
						<br />
						<RadioButton groupName="columnSize">40</RadioButton>
						<br />
						<RadioButton groupName="columnSize">60</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Toggle Grid Column Gap</h3>
						<RadioButton groupName="columnGap" checked>3</RadioButton>
						<br />
						<RadioButton groupName="columnGap">6</RadioButton>
						<br />
						<RadioButton groupName="columnGap">9</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Apply Value Mode</h3>
						<RadioButton groupName="applyValueMode" checked>instantly</RadioButton>
						<br />
						<RadioButton groupName="applyValueMode">useButtons</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Palette</h3>
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
					</div>
					<div className="option">
						<h3>Inverted</h3>
						<CheckBox id="inverted">inverted</CheckBox>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
