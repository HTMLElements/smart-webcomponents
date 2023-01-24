import React from "react";
import ReactDOM from "react-dom";
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
			if (event.target.groupName === 'applyValueMode') {
				colorPanel.applyValueMode = event.target.innerHTML;
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
				<h1>Display Mode "materialGrid"</h1>
				<ColorPanel ref={this.colorpanel} id="colorPanel" displayMode="materialGrid" onChange={this.handleChange.bind(this)}></ColorPanel>
				<div className="options">
					<div className="option">Selected color:
			            <input ref={this.rgbInput} type="text" className="Input" placeholder="#RRGGBB" id="rgbValue" />
					</div>
					<div className="option">
						<h3>Toggle Grid Color Size</h3>
						<br />
						<RadioButton groupName="columnSize" checked>20</RadioButton>
						<br />
						<RadioButton groupName="columnSize">40</RadioButton>
						<br />
						<RadioButton groupName="columnSize">60</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Toggle Grid Column Gap</h3>
						<br />
						<RadioButton groupName="columnGap" checked>1</RadioButton>
						<br />
						<RadioButton groupName="columnGap">5</RadioButton>
						<br />
						<RadioButton groupName="columnGap">10</RadioButton>
						<br />
					</div>
					<div className="option">
						<h3>Apply Value Mode</h3>
						<RadioButton groupName="applyValueMode" checked>instantly</RadioButton>
						<br />
						<RadioButton groupName="applyValueMode">useButtons</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
