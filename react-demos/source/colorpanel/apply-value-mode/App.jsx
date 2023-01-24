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
			if (event.target.groupName === 'applyValueMode') {
				colorPanel.applyValueMode = event.target.innerHTML;
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
				<ColorPanel ref={this.colorpanel} id="colorPanel" displayMode="default" enableCustomColors onChange={this.handleChange.bind(this)}></ColorPanel>
				<div className="options">
					<h1>Apply Value Mode</h1>
					<div className="option">Selected color:
			            <br />
						<input ref={this.rgbInput} type="text" className="Input" placeholder="#RRGGBB" id="rgbValue" />
					</div>
					<div className="option">
						<RadioButton  id="applyValueModeInstantly" groupName="applyValueMode" checked>instantly</RadioButton>
						<RadioButton  id="applyValueModeUseButtons" groupName="applyValueMode">useButtons</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
