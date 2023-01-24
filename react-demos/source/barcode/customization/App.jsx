import React from "react";
import ReactDOM from "react-dom";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { NumberInput } from 'smart-webcomponents-react/numberinput';
import { ColorPicker } from 'smart-webcomponents-react/colorpicker';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.barcode = React.createRef();
		this.backgroundColor = React.createRef();
		this.lineColor = React.createRef();
		this.lineWidth = React.createRef();
		this.lineHeight = React.createRef();
		this.labelColor = React.createRef();
		this.labelFontSize = React.createRef();
	}


	handleBtnClick(){
		this.barcode.backgroundColor = this.backgroundColor;
		this.barcode.lineColor = this.lineColor;
		this.barcode.lineWidth = this.lineWidth;
		this.barcode.lineHeight = this.lineHeight;
		this.barcode.labelColor = this.labelColor;
		this.barcode.labelFontSize = this.labelFontSize;
	}
	

	init() {

	}

	componentDidMount() {
	}

	render() {
		return (
		<div>
			<p>The barcode component supports a wide variety of customization options.</p>
			<p>Use the settings menu to style the barcode:</p>
			<Barcode ref={this.barcode} id="BarcodeToStyle" value="A5600B"></Barcode>
			<br />
			<div class="options">
				<h4>Background Color:</h4>
				<ColorPicker ref={this.backgroundColor} id="background-color" class="option" value="white"></ColorPicker>
				<br/>
				<h4>Line Color:</h4>		
				<ColorPicker ref={this.lineColor} id="line-color" class="option" value="black"></ColorPicker>
				<br/>
							<h4>Line Width:</h4>		
				<NumberInput ref={this.lineWidth} id="line-width" class="option" value={4} min={1} max={10}></NumberInput>
				<br/>
							<h4>Line Height:</h4>		
				<NumberInput ref={this.lineHeight} id="line-height" class="option" value={50} min={25} max={100}></NumberInput>
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
