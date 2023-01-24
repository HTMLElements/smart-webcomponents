<template>
  <div class="vue-root">
    <p>The QR Code component supports a wide variety of customization options.</p>
    <p>Use the settings menu to style the barcode:</p>
    <smart-qrcode id="QRcodeToStyle" value="HTMLELEMENTS.COM" square-width="12"></smart-qrcode>
    <br />
	<div class="options">
            <h4>Background Color:</h4>		
			<smart-color-picker id="background-color" class="option" value="white"></smart-color-picker>
			<br/>
			<h4>Line Color:</h4>		
			<smart-color-picker id="line-color" class="option" value="black"></smart-color-picker>
			<br/>
            <h4>Square Width:</h4>		
			<smart-number-input id="square-width" class="option" value="12" min="8" max="30"></smart-number-input>
			<br/>
            <h4>Display Label:</h4>
			<smart-check-box id="label-display" class="option">Visible</smart-check-box>
			<br/>
            <h4>Label Color:</h4>		
			<smart-color-picker id="label-color" class="option" value="black"></smart-color-picker>
			<br/>
            <h4>Label Font Size:</h4>		
			<smart-number-input id="label-font-size" class="option" value="14" max="20" min="10"></smart-number-input>
			<br/><br/>
            <smart-button id="apply-btn">Apply</smart-button>	
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.qrcode.js";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.numberinput.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.colorpicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);

      function init() {
        document.getElementById('apply-btn').addEventListener('click', function() {
            customizeQRcode();
        });
      }

      function customizeQRcode() {
          let qrCode = document.getElementById('QRcodeToStyle');
          qrCode.backgroundColor = document.getElementById('background-color').value;
          qrCode.lineColor = document.getElementById('line-color').value;
          qrCode.squareWidth = parseInt(document.getElementById('square-width').value);
          qrCode.displayLabel = document.getElementById('label-display').checked;
          qrCode.labelColor = document.getElementById('label-color').value;
          qrCode.labelFontSize = parseInt(document.getElementById('label-font-size').value);
      }
    });
  }
};
</script>