<template>
  <div class="vue-root">
    <p>Use the settings menu to change the error correction level of the QR Code.</p>
    <p>The higher the Error Correction Level, the higher is the amount of data that can be retrieved if part of the QR Code is damaged or hidden.</p>
    <smart-qrcode id="qrcode" value="HTMLELEMENTS.COM" render-as="canvas"></smart-qrcode>
    <div class="options">
      <div class="caption">Error Correction Level</div>
      <div class="option">		
        <smart-radio-button id="low-option">Set to Low</smart-radio-button>
        <br/><br/>
        <smart-radio-button  id="high-option" checked>Set to High</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.qrcode.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);

      function init() {
        document.getElementById('low-option').addEventListener('click', function () {
            setErrorLevel('L');
        });
        document.getElementById('high-option').addEventListener('click', function () {
            setErrorLevel('H');
        });
      }

      function setErrorLevel(erLevel) {
        let qrCode = document.getElementById('qrcode');
        qrCode.errorLevel = erLevel;
      }
    });
  }
};
</script>