import React from "react";
import ReactDOM from "react-dom";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.barcode = React.createRef();
	}


	handleBtnClick(){
		this.barcode.value = "A222B@!"
	}

	handleEvent(event) {
		let detail = event.detail;
		document.getElementById('value').textContent = detail.value;
    document.getElementById('pattern').textContent = detail.patternValidity;
    document.getElementById('length').textContent = detail.lengthValidity;
    document.getElementById('chars').textContent = detail.invalidCharacters.join(', ');
	}

	init() {

	}

	componentDidMount() {
	}

	render() {
		return (
		<div>
			<p>When the barcode is set to a invalid value, the <b>invalid</b> event will be triggred.</p>
        The event contains information such as
        <ul>
            <li>the validity of the length</li>
            <li>the validity of the pattern</li>
            <li>an array of the illegal characters</li>
        </ul>
			<p>In addition, the <b>isValid</b> method returns a boolean indicating the validity of the barcode.</p>
			<Barcode ref={this.barcode} id="BarcodeToValidate" value="A5600B" 
				onInvalid={this.handleEvent.bind(this)} labelPosition="bottom" labelFontSize={30}></Barcode>
			<br />
			<h3>Event detail:</h3>
			<ul>
					<li>new Value: <b><span id="value"></span></b></li>
					<li>patternValidity: <b><span id="pattern"></span></b></li>
					<li>lengthValidity: <b><span id="length"></span></b></li>
					<li>illegal Characters: <b><span id="chars"></span></b></li>
			</ul>
			<div class="options">
				<div class="caption">Validity</div>
				<div class="option">		
					<Button onClick={this.handleBtnClick.bind(this)} id="btn1">Set to invalid value</Button>
					<br/><br/>
				</div>
			</div>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
