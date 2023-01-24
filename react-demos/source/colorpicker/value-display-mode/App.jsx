import React from "react";
import ReactDOM from "react-dom";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorPicker = React.createRef();
		this.input = React.createRef();
	}

	handleChange(event) {
		this.input.current.value = event.detail.value;
	}

	init() {
		const colorPicker = this.colorPicker.current;

		document.addEventListener('change', function (event) {
			//Set ApplyValueMode and Palette
			if (event.target.groupName === 'valueDisplayMode') {
				colorPicker.valueDisplayMode = event.target.innerHTML;
				return;
			}

			//Set a new value
			if (event.target.id === 'rgbValue') {
				colorPicker.value = event.targett.value;
			}
		});

		this.input.current.value = colorPicker.value;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">The demo shows switching between different value display modes of the
			        Color Picker</div>
				<ColorPicker ref={this.colorPicker} enableCustomColors onChange={this.handleChange.bind(this)}></ColorPicker>
				<div className="options">
					<div className="option">Selected color:
			            <input ref={this.input} type="text" className="Input" placeholder="#RRGGBB" id="rgbValue" />
					</div>
					<div className="option">
						<div>Toggle Value Display Mode</div>
						<RadioButton groupName="valueDisplayMode"
							checked>default</RadioButton>
						<br />
						<RadioButton groupName="valueDisplayMode">colorBox</RadioButton>
						<br />
						<RadioButton groupName="valueDisplayMode">colorCode</RadioButton>
						<br />
						<RadioButton groupName="valueDisplayMode">none</RadioButton>
						<br />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
