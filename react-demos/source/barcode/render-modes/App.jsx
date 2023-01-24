import React from "react";
import ReactDOM from "react-dom";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.barcode = React.createRef();
	}


	handleSVGOptionClick(){
		this.barcode.renderAs = "svg";
		document.getElementById('element-html').textContent = document.querySelector('smart-barcode').firstChild.firstChild.outerHTML;
	}
	
	handleCanvasOptionClick(){
		this.barcode.renderAs = "canvas";
		document.getElementById('element-html').textContent = document.querySelector('smart-barcode').firstChild.firstChild.outerHTML;
	}

	init() {
		
	}

	componentDidMount() {
		document.getElementById('element-html').textContent = document.querySelector('smart-barcode').firstChild.firstChild.outerHTML;
	}

	render() {
		return (
			<div>
				<p>The barcode component supports &lt;svg&gt; and &lt;canvas&gt; rendering modes.</p>
				<p>Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.</p>
				<Barcode ref={this.barcode} id="BarcodeToRender" value="A5600B" labelPosition="bottom" labelFontSize={30}></Barcode>
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
