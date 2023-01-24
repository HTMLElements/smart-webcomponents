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
				const classes = colorPicker.nativeElement.classList;

				for (let i = 0; i < classes.length; i++) {
					if (classes[i].indexOf(className) > -1) {
						classes.remove(classes.item(i));
					}
				}

				classes.add(className + '-' + size);
				return;
			}

			if (event.target.id === 'enableCustomColors') {
				colorPicker.enableCustomColors = event.target.checked;
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
			    <div className="demo-description">This example allows you to customize the Color Picker with its API</div>
			    <ColorPicker ref={this.colorpicker}></ColorPicker>
			        <div className="options">
			            <div className="option">
			                 <h3>Toggle Grid Color Size</h3>
			                <RadioButton groupName="gridSettings">10</RadioButton>
			                <br/>
			                <RadioButton groupName="gridSettings" checked>20</RadioButton>
			                <br/>
			                <RadioButton groupName="gridSettings">30</RadioButton>
			                <br/>
			            </div>
			            <div className="option">
			                 <h3>Toggle Grid Column Gap</h3>
			                <RadioButton  groupName="gapSettings" checked>1</RadioButton>
			                <br/>
			                <RadioButton groupName="gapSettings">2.5</RadioButton>
			                <br/>
			                <RadioButton groupName="gapSettings">5</RadioButton>
			                <br/>
			            </div>
			            <div className="option">
			                 <h3>Enable/Disable Custom Colors</h3>
			                <CheckBox  id="enableCustomColors">Enable Custom Colors</CheckBox>
			                <br/>
			            </div>
			        </div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
