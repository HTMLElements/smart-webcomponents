import React from "react";
import ReactDOM from "react-dom";
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.colorpicker = React.createRef();
		this.frame = React.createRef();
		this.frameHeader = React.createRef();
		this.frameContent = React.createRef();
	}

	handleHeaderBackgroundChange(event) {
		this.frameHeader.current.style.backgroundColor = event.detail.value;
	}

	handleHeaderColorChange(event) {
		this.frameHeader.current.style.color = event.detail.value;
	}

	handleContentBackgroundChange(event) {
		this.frameContent.current.style.backgroundColor = event.detail.value;
	}

	handleContentColorChange(event) {
		this.frameContent.current.style.color = event.detail.value;
	}

	handleBorderChange(event) {
		this.frame.current.style.borderColor = event.detail.value;
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div id="demoBox">
					<div ref={this.frame} id="frame">
						<div ref={this.frameHeader} id="frameHeader">Header</div>
						<div ref={this.frameContent} id="frameContent">Content</div>
					</div>
				</div>
				<br />
				<div>Border Color</div>
				<br />
				<ColorPicker ref={this.colorpicker} dropDownAppendTo="body" displayMode="default"
					dropDownWidth="auto" placeholder="Border Color" id="borderColor" onChange={this.handleBorderChange.bind(this)}></ColorPicker>
				<br />
				<div>Header Background</div>
				<br />
				<ColorPicker  dropDownAppendTo="body" displayMode="default"
					dropDownWidth="auto" placeholder="Header Background Color" id="headerBackground" onChange={this.handleHeaderBackgroundChange.bind(this)}></ColorPicker>
				<div>Header Font Color</div>
				<br />
				<ColorPicker  dropDownAppendTo="body" displayMode="default"
					dropDownWidth="auto" placeholder="Header Font Color" id="headerColor" onChange={this.handleHeaderColorChange.bind(this)}></ColorPicker>
				<div>Background</div>
				<br />
				<ColorPicker  dropDownAppendTo="body" displayMode="default"
					dropDownWidth="auto" placeholder="Background Color" id="background" onChange={this.handleContentBackgroundChange.bind(this)}></ColorPicker>
				<div>Font Color</div>
				<br />
				<ColorPicker  dropDownAppendTo="body" displayMode="default"
					dropDownWidth="auto" placeholder="Font Color" id="color" onChange={this.handleContentColorChange.bind(this)}></ColorPicker>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
