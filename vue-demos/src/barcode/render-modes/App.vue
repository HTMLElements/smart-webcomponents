<template>
  <div class="vue-root">
    <p>The barcode component supports &lt;svg> and &lt;canvas> rendering modes.</p>
    <p>Using the <b>svg</b> rendering mode is recommended as the barcode doesn't lose quality when it is zoomed.</p>
    <smart-barcode id="BarcodeToRender" value="A5600B" label-position="bottom" label-font-size="30"></smart-barcode>
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
import "smart-webcomponents/source/modules/smart.barcode.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);
      var barcode = document.getElementById('BarcodeToRender');
      function init() {
        document.getElementById('element-html').textContent = barcode.firstChild.firstChild.outerHTML;
        document.getElementById('svg-option').addEventListener('click', function () {
            renderBarcode('svg');
        });
        document.getElementById('canvas-option').addEventListener('click', function () {
            renderBarcode('canvas');
        });
      }

      function renderBarcode(type) {
        barcode.renderAs = type;
        document.getElementById('element-html').textContent = barcode.firstChild.firstChild.outerHTML;
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