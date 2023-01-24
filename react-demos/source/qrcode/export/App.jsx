import React from "react";
import ReactDOM from "react-dom";
import { QRcode } from 'smart-webcomponents-react/qrcode';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.qrcode = React.createRef();
	}


	handleSVGBtnClick(){
		this.qrcode.export('svg')
	}
	
	handlePNGBtnClick(){
		this.qrcode.export('png')
	}

	handleJPGBtnClick(){
		this.qrcode.export('jpg')
	}

	init() {

	}

	componentDidMount() {
	}

	render() {
		return (
		<div>
			<p>Click on the export buttons to create a downloadable file.</p>
			<QRcode ref={this.qrcode} id="qrcodeToExport" value="HTMLELEMENTS.COM" labelPosition="bottom" squareWidth={12}></QRcode>
			<br />
			<div class="options">
				<div class="caption">Export</div>
				<div class="option">		
					<Button id="btn1" onClick={this.handleSVGBtnClick.bind(this)}>Export as SVG</Button>
					<br/><br/>
					<Button id="btn2" onClick={this.handlePNGBtnClick.bind(this)}>Export as PNG</Button>
								<br/><br/>
					<Button id="btn3" onClick={this.handleJPGBtnClick.bind(this)}>Export as JPG</Button>
				</div>
			</div>
		</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
