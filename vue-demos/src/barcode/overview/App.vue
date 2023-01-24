<template>
  <div class="vue-root">
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
                        Barcodes can be rendered as an &lt;svg> and &lt;canvas> element.<br/>
                        Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.
                    </p>
                </div>
                <div class="module">
                    <smart-barcode render-as="svg" type="code128a" value="SVG RENDER"></smart-barcode>
                    <smart-barcode render-as="canvas" type="code128a" value="CANVAS REN"></smart-barcode>
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
                    <smart-barcode  type="pharmacode" value="12345"></smart-barcode>
                    <smart-barcode  type="code128c" value="22481203"></smart-barcode>
                    <smart-barcode  type="codabar" value="A2402B"></smart-barcode>
                    <smart-barcode  type="code39" value="*1234*"></smart-barcode>
                    <smart-barcode  type="code128a" value="EXAMPLE"></smart-barcode>
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
                    <smart-barcode value="A2402B" label-position="top" label-font-size="30" label-color="orange" label-font="arial" line-color="orange"></smart-barcode>
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
                            <img height="150" alt="Dinner table" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Kitchen_table.jpg/1280px-Kitchen_table.jpg">
                            <smart-button class="success purchase-button">Purchase Now</smart-button>
                        </div>
                        <div class="card-footer">
                            <smart-barcode value="23849" type="code128c" label-font="arial"></smart-barcode>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card-body">
                            <h3>Modern Wardrobe</h3>
                            <img height="150" alt="Modern Wardrobe" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Sliding-wardrobe.jpg">
                            <smart-button class="success purchase-button">Purchase Now</smart-button>
                        </div>
                        <div class="card-footer">
                            <smart-barcode value="86941" type="code128c" label-font="arial"></smart-barcode>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card-body">
                            <h3>Office Chair</h3>
                            <img height="150" alt="Office Chair" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Aeron_chair_JN.jpg">
                            <smart-button class="success purchase-button">Purchase Now</smart-button>
                        </div>
                        <div class="card-footer">
                            <smart-barcode value="03278" type="code128c" label-font="arial"></smart-barcode>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.barcode.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>
<style>
/* fallback */
@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');
}

        /* ------------ */
.smart-demo {
margin: 0 !important;
}

.smart-demo section > h2:first-of-type {
	border-top: 1px solid rgba(0,0,0,.12);
	font-weight: 400;
	font-size: 24px;
	line-height: 40px;
	margin-bottom: 30px;
	color: #3949ab;
	padding-top: 80px;
}

#barcode-demo-container{
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
}

.card-container{
    text-align: center;
    max-width: 280px;
    padding: 10px 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.card-body{
    border-bottom: 1px solid black;
    margin-bottom: 10px;
}

.purchase-button{
    margin: 10px;
}
</style>