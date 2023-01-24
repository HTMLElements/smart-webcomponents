import React from "react";
import ReactDOM from "react-dom";
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
			if (event.target.groupName === 'columnSize' || event.target.groupName === 'columnGap') {
				let size, className = event.target.groupName === 'columnSize' ? 'item-size' : 'column-gap';
				switch (event.target.innerHTML) {
					case '1':
					case '20':
						size = 'small';
						break;
					case '5':
					case '40':
						size = 'medium';
						break;
					case '10':
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
			if (event.target.groupName === 'applyValueMode') {
				colorPicker.applyValueMode = event.target.innerHTML;
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
				<div className="demo-description">This example demonstrates the "materialGrid" display mode of the Color
			        Picker.</div>
				<ColorPicker ref={this.colorpicker} displayMode="materialGrid"></ColorPicker>
				<div className="options">
					<div className="option">
						<div>Toggle Grid Color Size</div>
						<RadioButton groupName="columnSize"
							checked>20</RadioButton>
						<RadioButton groupName="columnSize">40</RadioButton>
						<RadioButton groupName="columnSize">60</RadioButton>
					</div>
					<div className="option">
						<div>Toggle Grid Column Gap</div>
						<RadioButton groupName="columnGap"
							checked>1</RadioButton>
						<RadioButton groupName="columnGap">5</RadioButton>
						<RadioButton groupName="columnGap">10</RadioButton>
					</div>
					<div className="option">
						<div>Apply Value Mode</div>
						<RadioButton groupName="applyValueMode"
							checked>instantly</RadioButton>
						<RadioButton groupName="applyValueMode">useButtons</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
