import React from "react";
import ReactDOM from "react-dom";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.qrcode = React.createRef();
	}


	handleSVGOptionClick(){
		this.barcode.renderAs = "svg";
		document.getElementById('element-html').textContent = document.querySelector('smart-qrcode').firstChild.firstChild.outerHTML;
	}
	
	handleCanvasOptionClick(){
		this.barcode.renderAs = "canvas";
		document.getElementById('element-html').textContent = document.querySelector('smart-qrcode').firstChild.firstChild.outerHTML;
	}

	init() {
		
	}

	componentDidMount() {
		document.getElementById('element-html').textContent = document.querySelector('smart-qrcode').firstChild.firstChild.outerHTML;
	}

	render() {
		return (
			<div>
				<p>The QR Code component supports &lt;svg&gt; and &lt;canvas&gt; rendering modes.</p>
				<p>Using the <b>svg</b> rendering mode is recommended as the QR Code doesn't lose quality when it is zoomed.</p>
				<QRcode ref={this.qrcode} id="QRcodeToRender" value="HTMLELEMENTS.COM" labelPosition="bottom" labelFontSize={30}></QRcode>
				<br />
				<h3>Rendered HTML:</h3>
				<div>
						<code id="element-html"></code>
				</div>
				<div class="options">
					<div class="caption">Render Mode</div>
					<div class="option">		
						<RadioButton onClick={this.handleSVGOptionClick.bind(this)} id="svg-option" checked>Render as SVG</RadioButton >
						<br/><br/>
						<RadioButton onClick={this.handleCanvasOptionClick.bind(this)} id="canvas-option">Render as Canvas</RadioButton >
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
