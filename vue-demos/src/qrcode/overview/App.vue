<template>
  <div class="vue-root">
    <div class="smart-demo">
         <section>
             <div>
                <h2>A QR Code is a type of two-dimensional barcode that representing data in a visual, machine-readable form.</h2>
                <div class="module">
                    <p>
                        QR codes are ideal components for programmatically encoding data.
                        They are often cused to ontain data for a locator, identifier, or tracker that points to a website or application.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h2>QR Code rendering modes</h2>
            <div class="module">
                <p>
                    QR Codes can be rendered as an &lt;svg> and &lt;canvas> element.<br/>
                    Using the <b>svg</b> rendering mode is recommended as the QR Code doesn't lose quality when it is zoomed.
                </p>
            </div>
            <div class="module qrcode-container">
                <smart-qrcode render-as="svg" value="SVG RENDER"></smart-qrcode>
                <smart-qrcode render-as="canvas" value="CANVAS REN"></smart-qrcode>
            </div>
        </section>

        <section>
            <h2>QR Code Encoding Modes</h2>
            <div class="module">
                <p>
                    The qrcode element supports the following encoding modes:
                    <ul>
                        <li>
                            <b>Numeric</b>
                        </li>
                        <li>
                            <b>Alphanumeric</b>
                        </li>
                        <li>
                            <b>Byte / Binary</b>
                        </li>
                        <li>
                            <b>Kanji</b>
                        </li>
                    </ul>
                </p>
            </div>
            <div class="module qrcode-container">
                <smart-qrcode  value="こんにちは世界" display-label="true" label-position="top" label-font-size="20"></smart-qrcode>
                <smart-qrcode  value="HELLO WORLD" display-label="true" label-position="top" label-font-size="20"></smart-qrcode>
            </div>
        </section>

        <section>
            <h2>QR Code Error Correction Levels</h2>
            <div class="module">
                <p>
                    The QR Code component supports all four error correction levels: <b>L</b>, <b>M</b>, <b>Q</b>, and <b>H</b>.<br>
                    The higher the Error Correction Level, the higher is the amount of data that can be retrieved if part of the QR Code is damaged or hidden. 
                </p>
            </div>
            <div class="module qrcode-container">
                <div>
                    <h4><b>L</b> level encoding of <b>"Hello world"</b></h4>
                    <smart-qrcode value="Hello world" error-level="L"></smart-qrcode>
                </div>
                <div>
                    <h4><b>H</b> level encoding of <b>"Hello world"</b></h4>
                    <smart-qrcode value="Hello world" error-level="H"></smart-qrcode>
                </div>
            </div>
        </section>

        <section>
            <h2>QR Code Embed Image</h2>
            <div class="module">
                <p>
                    When the Error Correction Level is sufficiently high, it is possible to embed an Image inside the QR Code.<br>
                    The maximum size of the image depends on the Error Correction Level and the QR Code value.
                </p>
            </div>
            <div class="module qrcode-container">
                <smart-qrcode value="GITHUB.COM" embed-image="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png"
                image-width="40px" image-height="40px"></smart-qrcode>
                <smart-qrcode value="ANGULAR.IO" embed-image="https://angular.io/assets/images/logos/angular/angular.svg"
                image-width="60px" image-height="60px"></smart-qrcode>
            </div>
        </section>

        <section>
            <h2>Appearance</h2>
            <div class="module">
                <p>The QR Code's color, background color and square dimensions can be customized by their respective properties.</p>
                <p>The label of the QR Code can be set to visible or hidden with <b>displayLabel</b>.
                    Its color, font, size, margins and position can be customized by their respective properties.</p>
            </div>
            <div class="module qrcode-container">
                <smart-qrcode value="HTMLELEMENTS.COM" label-position="top" label-font-size="15" label-color="orange" label-font="arial" line-color="orange" display-label="true"></smart-qrcode>
                <smart-qrcode value="JQWIDGETS.COM" label-position="top" label-font-size="20" label-color="red" label-font="helvetica" line-color="darkblue" display-label="true"></smart-qrcode>
            </div>	
        </section>

        <section>
            <h2>Demo</h2>
            <div class="module">
            </div>
            <div id="barcode-demo-container" class="module">
                <div class="card-container">
                    <div class="card-body">
                        <h3>Rock Concert</h3>
                        <img height="170" alt="Rock Concert" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Interior_del_estadio_Ruca_Che.JPG"/>
                        <h4>For more information:</h4>
                    </div>
                    <div class="card-footer">
                        <smart-qrcode value="Rock Concert" square-width="6"></smart-qrcode>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-body">
                        <h3>7-day Spa Vacation</h3>
                        <img height="170" alt="Spa massage" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Taj_Spa_4.jpg"/>
                        <h4>For more information:</h4>
                    </div>
                    <div class="card-footer">
                        <smart-qrcode value="Spa Vacation" square-width="6"></smart-qrcode>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-body">
                        <h3>10-day Skiing Holiday</h3>
                        <img height="170" alt="Skiing village" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Ruka_Village_%288361909910%29.jpg/1280px-Ruka_Village_%288361909910%29.jpg"/>
                        <h4>For more information:</h4>
                    </div>
                    <div class="card-footer">
                        <smart-qrcode value="Skiing Holiday" square-width="6"></smart-qrcode>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.qrcode.js";

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
    max-width: 320px;
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

.qrcode-container{
    display: flex;
    justify-content: space-around;
    max-width: 800px;
    flex-wrap: wrap;
    text-align: center;
}
</style>