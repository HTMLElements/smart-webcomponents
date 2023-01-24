<template>
  <div class="vue-root">
    <p>Click on the export buttons to create a downloadable file.</p>
    <smart-barcode id="BarcodeToExport" value="A5600B" label-position="bottom" label-font-size="30"></smart-barcode>
    <br />
    <div class="options">
      <div class="caption">Export</div>
      <div class="option">		
        <smart-button id="btn1">Export as SVG</smart-button>
        <br/><br/>
        <smart-button id="btn2">Export as PNG</smart-button>
              <br/><br/>
        <smart-button id="btn3">Export as JPG</smart-button>
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
        document.getElementById('btn1').addEventListener('click', function() {
          exportBarcode('svg');
        });
        document.getElementById('btn2').addEventListener('click',function() {
            exportBarcode('png');
        });
        document.getElementById('btn3').addEventListener('click',function() {
            exportBarcode('jpg');
        });
      }

      function exportBarcode(type) {
        var barcode = document.getElementById("BarcodeToExport");
        barcode.export(type)
      }
    });
  }
};
</script>