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
			const target = event.target;

			if (target.groupName === 'columnCount') {
				colorPanel.columnCount = parseInt(target.innerHTML);
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
				const classes = colorPanel.nativeElement.classList;

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
				colorPanel.applyValueMode = target.innerHTML;
				return;
			}

			if (target.groupName === 'palette') {
				colorPanel.palette = target.innerHTML;
				return;
			}

			//Set inverted mode
			if (target.id === 'inverted') {
				colorPanel.inverted = event.detail.value;
				return;
			}

			//Set a new value
			if (target.id === 'rgbValue') {
				colorPanel.value = target.value;
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
				<div className="demo-description">
					<h1> Color Panel Spectrum Grid Display Mode</h1> In this example, the display-mode is set to "spectrumGrid"</div>
				<ColorPanel
					ref={this.colorpanel} id="colorPanel" displayMode="spectrumGrid" onChange={this.handleChange.bind(this)}></ColorPanel>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">Selected color:
			                <input ref={this.rgbInput} type="text" placeholder="#RRGGBB" id="rgbValue"
						/>
					</div>
					<div className="option">
						<div>Toggle Grid Column Size</div>
						<RadioButton groupName="columnCount">5</RadioButton>
						<br />
						<RadioButton groupName="columnCount" checked>10</RadioButton>
						<br />
						<RadioButton groupName="columnCount">15</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>Toggle Grid Color Size</div>
						<RadioButton groupName="columnSize"
							checked>20</RadioButton>
						<br />
						<RadioButton groupName="columnSize">40</RadioButton>
						<br />
						<RadioButton groupName="columnSize">60</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>Toggle Grid Column Gap</div>
						<RadioButton groupName="columnGap"
							checked>3</RadioButton>
						<br />
						<RadioButton groupName="columnGap">6</RadioButton>
						<br />
						<RadioButton groupName="columnGap">9</RadioButton>
						<br />
					</div>
					<div className="option">
						<div>Apply Value Mode</div>
						<RadioButton groupName="applyValueMode"
							checked>instantly</RadioButton>
						<br />
						<RadioButton groupName="applyValueMode">useButtons</RadioButton>
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
					</div>
					<div className="option">
						<div>Inverted</div>
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
