import React from "react";
import ReactDOM from "react-dom";
import { QRcode } from 'smart-webcomponents-react/qrcode';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<div class="container">
					<h3>QR Code is a two-dimensional version of the barcode. It typically contains data that points to a website or application.</h3>
					<QRcode value="HTMLELEMENTS.COM"></QRcode>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
