import React from "react";
import ReactDOM from "react-dom";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.qrcode = React.createRef();
	}


	handleLowClick(){
		this.qrcode.errorLevel = "L"
	}
	
	handleHighClick(){
		this.qrcode.errorLevel = "H"
	}

	init() {

	}

	componentDidMount() {
	}

	render() {
		return (
		<div>
			<p>Use the settings menu to change the error correction level of the QR Code.</p>
			<p>The higher the Error Correction Level,
			the higher is the amount of data that can be retrieved if part of the QR Code is damaged or hidden.</p>
			<QRcode ref={this.qrcode} value="HTMLELEMENTS.COM" renderAs="canvas"></QRcode>
			<br />
			<div class="options">
				<div class="caption">Error Correction Level</div>
				<div class="option">		
					<RadioButton id="ToLow" onClick={this.handleLowClick.bind(this)}>Set to Low</RadioButton>
					<br/><br/>
					<RadioButton id="ToHigh" onClick={this.handleHighClick.bind(this)}>Set to High</RadioButton>
				</div>
			</div>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
