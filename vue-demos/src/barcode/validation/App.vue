<template>
  <div class="vue-root">
    <p>When the barcode is set to a invalid value, the <b>invalid</b> event will be triggred.
    The event contains information such as</p>
    <ul>
        <li>the validity of the length</li>
        <li>the validity of the pattern</li>
        <li>an array of the illegal characters</li>
    </ul>
    <p>In addition, the <b>isValid</b> method returns a boolean indicating the validity of the barcode.</p>
    <smart-barcode id="BarcodeToValidate" value="A5600B" label-position="bottom" label-font-size="30"></smart-barcode>
    <br />
    <h3>Event detail:</h3>
    <ul>
        <li>new Value: <b><span id="value"></span></b></li>
        <li>patternValidity: <b><span id="pattern"></span></b></li>
        <li>lengthValidity: <b><span id="length"></span></b></li>
        <li>illegal Characters: <b><span id="chars"></span></b></li>
    </ul>
    <div class="options">
      <div class="caption">Validity</div>
      <div class="option">		
        <smart-button id="btn1">Set to invalid value</smart-button>
        <br/><br/>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.barcode.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.readyState === "complete" ? init() : (window.onload = init);

      function init() {
        var barcode = document.getElementById("BarcodeToValidate");
        barcode.addEventListener('invalid', function(event) {
            let detail = event.detail
            LogInvalid(detail)
        });

        document.getElementById('btn1').addEventListener('click', function() {
            barcode.value = "A222B@!";
        });
      }

      function LogInvalid(detail) {
        document.getElementById('value').textContent = detail.value;
        document.getElementById('pattern').textContent = detail.patternValidity;
        document.getElementById('length').textContent = detail.lengthValidity;
        document.getElementById('chars').textContent = detail.invalidCharacters.join(', ');
      }
    });
  }
};
</script>