<template>
  <div class="vue-root">
    <p>The QR Code component supports &lt;svg> and &lt;canvas> rendering modes.</p>
    <p>Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.</p>
    <smart-qrcode id="qrcode-to-render" value="HTMLELEMENTS.COM"></smart-qrcode>
    <br />
    <h3>Rendered HTML:</h3>
    <div>
        <code id="element-html"></code>
    </div>
	<div class="options">
		<div class="caption">Render Mode</div>
		<div class="option">		
			<smart-radio-button id="svg-option" checked>Render as SVG</smart-radio-button>
			<br/><br/>
			<smart-radio-button  id="canvas-option">Render as Canvas</smart-radio-button>
		</div>
			
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.qrcode.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);
      function init() {
        let qrCode = document.getElementById('qrcode-to-render');
        document.getElementById('element-html').textContent = qrCode.firstChild.firstChild.outerHTML;
        document.getElementById('svg-option').addEventListener('click', function () {
            renderQRcode('svg');
        });
        document.getElementById('canvas-option').addEventListener('click', function () {
            renderQRcode('canvas');
        });
      }

      function renderQRcode(type) {
        let qrCode = document.getElementById('qrcode-to-render');
        qrCode.renderAs = type;
        document.getElementById('element-html').textContent = qrCode.firstChild.firstChild.outerHTML;
      }
    });
  }
};
</script>
<style>
  #element-html{
  display: block;
  font-family: Consolas,"courier new";
  background-color: #f1f1f1;
  max-width: 500px;
  max-height: 300px;
  word-wrap: break-word;
  overflow: scroll;
}
</style>