import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorPicker = React.createRef();
	}

	init() {
		const colorPicker = this.colorPicker.current;

		document.addEventListener('change', function (event) {
			//Set ApplyValueMode and Palette
			if (event.target.groupName === 'valueFormat') {
				colorPicker.valueFormat = event.target.innerHTML;
				return;
			}
			if (event.target.id === 'editAlphaChannel') {
				colorPicker.editAlphaChannel = event.detail.value;
			}
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<ColorPicker ref={this.colorPicker} enableCustomColors editable></ColorPicker>
				<div className="options">
					<div className="option">
						<h3>Toggle Value Display Mode</h3>
						<RadioButton groupName="valueFormat" checked>default</RadioButton>
						<br />
						<RadioButton groupName="valueFormat">rgb</RadioButton>
						<br />
						<RadioButton groupName="valueFormat">rgba</RadioButton>
						<br />
						<RadioButton groupName="valueFormat">hex</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Edit Alpha Channel</h3>
						<CheckBox id="editAlphaChannel">Edit Alpha Channel</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
