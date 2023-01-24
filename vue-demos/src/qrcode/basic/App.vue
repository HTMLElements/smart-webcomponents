<template>
  <div class="vue-root">
    <div class="container">
        <h3>QR Code is a two-dimensional version of the barcode. It typically contains data that points to a website or application.</h3>
		<smart-qrcode  value="HTMLELEMENTS.COM"></smart-qrcode>
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