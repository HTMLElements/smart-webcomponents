import React from "react";
import ReactDOM from "react-dom";
import { Barcode } from 'smart-webcomponents-react/barcode';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
			<div class="container">
					<h3>The Barcode element supports a wide range of the most common Barcode types available</h3>
					<div>Pharmacode:</div>
					<Barcode id="pharma" type="pharmacode" value="1234"></Barcode>
							<div>Codabar:</div>
					<Barcode type="codabar" value="A2402B" ></Barcode>
							<div>Code128 A | B | C:</div>
							<Barcode type="code128c" value="22481203"></Barcode>
					<Barcode type="code128a" value="EXAMPLE"></Barcode>
							<Barcode type="code128b" value="example"></Barcode>
							<br/>
							<div>MSI 10 | 11:</div>
					<Barcode type="msi10" value="12345"></Barcode>
					<Barcode type="msi11" value="67890"></Barcode>
							<div>Code39:</div>
					<Barcode type="code39" value="*1234567AB" lineWidth={2} ></Barcode>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
