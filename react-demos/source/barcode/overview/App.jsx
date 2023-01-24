import React from "react";
import ReactDOM from "react-dom";
import { Barcode } from 'smart-webcomponents-react/barcode';
import { Button } from 'smart-webcomponents-react/button';

class App extends React.Component {

	componentDidMount() {
	}

	render() {
		return (
		<div class="smart-demo container">             
			<div>
        <section>
             <div>
                <h2>A barcode is a method of representing data in a visual, machine-readable form.</h2>
                <div class="module">
                    <p>
                        Barcodes are ideal components for programmatically encoding data.
                        They are commonly used for storing data such as item serial numbers in retailers and warehouses.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2>Barcode rendering modes</h2>
            <div class="module">
                <p>
                    Barcodes can be rendered as an &lt;svg&lt; and &lt;canvas&lt; element.<br/>
                    Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.
                </p>
            </div>
            <div class="module">
                <Barcode render-as="svg" type="code128a" value="SVG RENDER"></Barcode>
                <Barcode render-as="canvas" type="code128a" value="CANVAS REN"></Barcode>
            </div>

        </section>

        <section>
            <h2>Barcode Types</h2>
            <div class="module">
                <p>
                    The barcode element supports a wide range of the most common barcode types available: 
                    <ul>
                        <li><b>PharmaCode</b></li>
                        <li><b>CodaBar</b></li>
                        <li><b>Code128A | Code128B | Code128C</b></li>
                        <li><b>MSI | MSI10 | MSI11 | MSI1010 | MSI1110</b></li>
                        <li><b>EAN8 | EAN13</b></li>
                        <li><b>Code39</b></li>
                        <li><b>Code93</b></li>
                    </ul>
                </p>
            </div>
            <div >
                <Barcode  type="pharmacode" value="12345"></Barcode>
                <Barcode  type="code128c" value="22481203"></Barcode>
                <Barcode  type="codabar" value="A2402B"></Barcode>
                <Barcode  type="code39" value="*1234*"></Barcode>
                <Barcode  type="code128a" value="EXAMPLE"></Barcode>
            </div>

        </section>

        <section>
            <h2>Appearance</h2>
            <div class="module">
                <p>The barcode's color, background color and bar dimensions can be customized by their respective properties.</p>
                <p>The label of the barcode can be set to visible or hidden with <b>displayLabel</b>.
                    Its color, font, size, margins and position can be customized by their respective properties.</p>
            </div>
            <div class="module ">
                <Barcode value="A2402B" labelPosition="top" LabelFontSize={30} labelColor="orange" labelFont="arial" labelCOlor="orange"></Barcode>
            </div>	
        </section>

        <section>
            <h2>Demo</h2>
            <div class="module">
            </div>
            <div id="barcode-demo-container" class="module">
                <div class="card-container">
                    <div class="card-body">
                        <h3>Dinner Table</h3>
                        <img height="150" alt="Dinner table" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kitchen_table.jpg/1280px-Kitchen_table.jpg"/>
                        <Button class="success purchase-button">Purchase Now</Button>
                    </div>
                    <div class="card-footer">
                        <Barcode value="23849" type="code128c" labelFont="arial"></Barcode>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-body">
                        <h3>Modern Wardrobe</h3>
                        <img height="150" alt="Modern Wardrobe" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Sliding-wardrobe.jpg"/>
                        <Button class="success purchase-button">Purchase Now</Button>
                    </div>
                    <div class="card-footer">
                        <Barcode value="86941" type="code128c" labelFont="arial"></Barcode>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-body">
                        <h3>Office Chair</h3>
                        <img height="150" alt="Office Chair" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Aeron_chair_JN.jpg"/>
                        <Button class="success purchase-button">Purchase Now</Button>
                    </div>
                    <div class="card-footer">
                        <Barcode value="03278" type="code128c" labelFont="arial"></Barcode>
                    </div>
                </div>
            </div>
        </section>
			</div>
	 </div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
