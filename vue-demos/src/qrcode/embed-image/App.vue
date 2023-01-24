<template>
  <div class="vue-root">
    <p>When the Error Correction Level is sufficiently high, it is possible to embed an Image inside the QR Code.<br>
        The maximum size of the image depends on the Error Correction Level and the QR Code value.</p>
    <div class="qrcode-container">
        <smart-qrcode value="ANGULAR.IO" embed-image="https://www.htmlelements.com/demos/images/angular.svg"
        image-width="60px" image-height="60px"></smart-qrcode>
        <smart-qrcode value="VUEJS.ORG" embed-image="https://www.htmlelements.com/demos/images/vuejs.svg"
        image-width="60px" image-height="60px"></smart-qrcode>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.qrcode.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>