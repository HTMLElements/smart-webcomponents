import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Gauge } from 'smart-webcomponents-react/gauge';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.gauge = React.createRef();
	}

	handleFontSizeButtonClick() {
		this.gauge.current.nativeElement.style.fontSize = '20px';
	}

	handleColorButtonClick() {
		const svg = this.gauge.current.nativeElement.getElementsByTagName('svg')[0];
		if (svg) {
			svg.style.stroke = 'red';
			svg.style.fill = 'red';
		}
	}

	handleResizeButtonClick() {
		this.gauge.current.nativeElement.style.width = '500px';
	}

	init() {

	}


	componentDidMount() {

	}

	render() {
		return (
			<div>
				<Gauge ref={this.gauge} id="gauge" analogDisplayType="fill" digitalDisplay
					startAngle={-30} endAngle={210} min="0" max="100" value="0"></Gauge>
				<div className="options">
					<div className="caption">Appearance</div>
					<div className="option">
						<Button id="fontSizeButton" onClick={this.handleFontSizeButtonClick.bind(this)}>Set font-size to 20px</Button>
					</div>
					<div className="option">
						<Button id="colorButton" onClick={this.handleColorButtonClick.bind(this)}>Set label fill and stroke to red</Button>
					</div>
					<div className="option">
						<Button id="resizeButton" onClick={this.handleResizeButtonClick.bind(this)}>Resize Gauge</Button>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
