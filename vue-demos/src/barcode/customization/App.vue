<template>
  <div class="vue-root">
    <p>The barcode component supports a wide variety of customization options.</p>
    <p>Use the settings menu to style the barcode:</p>
    <smart-barcode id="BarcodeToStyle" value="A5600B"></smart-barcode>
    <br>
    <div class="options">
      <h4>Background Color:</h4>		
			<smart-color-picker id="background-color" class="option" value="white"></smart-color-picker>
			<br>
			<h4>Line Color:</h4>		
			<smart-color-picker id="line-color" class="option" value="black"></smart-color-picker>
			<br>
      <h4>Line Width:</h4>		
			<smart-number-input id="line-width" class="option" value="4" min="1" max="10"></smart-number-input>
			<br>
      <h4>Line Height:</h4>		
			<smart-number-input id="line-height" class="option" value="50" min="25" max="100"></smart-number-input>
			<br>
      <h4>Label Color:</h4>		
			<smart-color-picker id="label-color" class="option" value="black"></smart-color-picker>
			<br>
      <h4>Label Font Size:</h4>		
			<smart-number-input id="label-font-size" class="option" value="14" max="60" min="10"></smart-number-input>
			<br/><br/>
      <smart-button id="apply-btn">Apply</smart-button>	
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.barcode.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.numberinput.js";
import "smart-webcomponents/source/modules/smart.colorpicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);

      function init() {
        document.getElementById('apply-btn').addEventListener('click', function() {
            customizeBarcode();
        });
      }

      function customizeBarcode() {
        let barcode = document.getElementById('BarcodeToStyle');
        barcode.backgroundColor = document.getElementById('background-color').value;
        barcode.lineColor = document.getElementById('line-color').value;
        barcode.lineWidth = parseInt(document.getElementById('line-width').value);
        barcode.lineHeight = parseInt(document.getElementById('line-height').value);
        barcode.labelColor = document.getElementById('label-color').value;
        barcode.labelFontSize = parseInt(document.getElementById('label-font-size').value);
      }
    });
  }
};
</script>