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
			if (event.target.groupName === 'gridSettings' || event.target.groupName === 'gapSettings') {
				let size, className = event.target.groupName === 'gridSettings' ? 'item-size' : 'column-gap';

				switch (event.target.innerHTML) {
					case '10':
					case '1':
						size = 'small';
						break;
					case '20':
					case '2.5':
						size = 'medium';
						break;
					case '30':
					case '5':
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

			if (event.target.id === 'enableCustomColors') {
				colorPanel.enableCustomColors = event.target.checked;
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
				<div className="demo-description">Color Panel with display-mode="default"</div>
				<ColorPanel ref={this.colorpanel} id="colorPanel" displayMode="default" onChange={this.handleChange.bind(this)}></ColorPanel>
				<div className="options">
					<div className="caption">Settings</div>
					<div className="option">
						<label>Selected color:</label>
						<br />
						<input ref={this.rgbInput} className="Input" type="text" placeholder="#RRGGBB" id="rgbValue" />
					</div>
					<div className="option">
						<label>Toggle Grid Color Size</label>
						<br />
						<RadioButton  groupName="gridSettings">10</RadioButton>
						<br />
						<RadioButton  groupName="gridSettings" checked>20</RadioButton>
						<br />
						<RadioButton  groupName="gridSettings">30</RadioButton>
						<br />
					</div>
					<div className="option">
						<label>Toggle Grid Column Gap</label>
						<br />
						<RadioButton  groupName="gapSettings" checked>1</RadioButton>
						<br />
						<RadioButton  groupName="gapSettings">2.5</RadioButton>
						<br />
						<RadioButton  groupName="gapSettings">5</RadioButton>
						<br />
					</div>
					<div className="option">
						<label>Enable/Disable Custom Colors</label>
						<br />
						<CheckBox  id="enableCustomColors">Enable Custom Colors</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
