<template>
  <div class="vue-root">
    <div class="container">
      <h3>The barcode element supports a wide range of the most common barcode types available</h3>
      <div>Pharmacode:</div>
      <smart-barcode id="pharma" type="pharmacode" value="1234"></smart-barcode>
      <div>Codabar:</div>
      <smart-barcode type="codabar" value="A2402B" ></smart-barcode>
      <div>Code128 A | B | C:</div>
      <smart-barcode type="code128c" value="22481203"></smart-barcode>
      <smart-barcode type="code128a" value="EXAMPLE"></smart-barcode>
      <smart-barcode type="code128b" value="example"></smart-barcode>
      <br/>
      <div>MSI 10 | 11:</div>
      <smart-barcode type="msi10" value="12345"></smart-barcode>
      <smart-barcode type="msi11" value="67890"></smart-barcode>
      <div>Code39:</div>
      <smart-barcode type="code39" value="*1234567AB*" line-width="2" ></smart-barcode>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.barcode.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>