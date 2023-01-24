import React from "react";
import ReactDOM from "react-dom";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.qrcode = React.createRef();
		this.backgroundColor = React.createRef();
		this.lineColor = React.createRef();
		this.squareWidth = React.createRef();
		this.displayLabel = React.createRef();
		this.labelColor = React.createRef();
		this.labelFontSize = React.createRef();
	}


	handleBtnClick(){
		this.qrcode.backgroundColor = this.backgroundColor;
		this.qrcode.lineColor = this.lineColor;
		this.qrcode.squareWidth = this.squareWidth;
		this.qrcode.displayLabel = this.displayLabel;
		this.qrcode.labelColor = this.labelColor;
		this.qrcode.labelFontSize = this.labelFontSize;
	}
	

	init() {

	}

	componentDidMount() {
	}

	render() {
		return (
		<div>
			<p>The QR Code component supports a wide variety of customization options.</p>
			<p>Use the settings menu to style the QR Code:</p>
			<QRcode ref={this.qrcode} id="QRcodeToStyle" value="HTMLELEMENTS.COM" squareWidth={12}></QRcode>
			<br />
			<div class="options">
				<h4>Background Color:</h4>
				<ColorPicker ref={this.backgroundColor} id="background-color" class="option" value="white"></ColorPicker>
				<br/>
				<h4>Line Color:</h4>		
				<ColorPicker ref={this.lineColor} id="line-color" class="option" value="black"></ColorPicker>
				<br/>
				<h4>Square Width:</h4>		
				<NumberInput ref={this.squareWidth} id="square-width" class="option" value={12} min={8} max={30}></NumberInput>
				<br/>
				<h4>Display Label:</h4>
				<CheckBox id="label-display" class="option">Visible</CheckBox>
				<br/>
				<h4>Label Color:</h4>		
				<ColorPicker ref={this.labelColor} id="label-color" class="option" value="black"></ColorPicker>
				<br/>
				<h4>Label Font Size:</h4>		
				<NumberInput ref={this.labelFontSize} id="label-font-size" class="option" value={14} max={60} min={10}></NumberInput>
				<br/><br/>
				<Button onClick={this.handleBtnClick.bind(this)} id="apply-btn">Apply</Button>	
			</div>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
