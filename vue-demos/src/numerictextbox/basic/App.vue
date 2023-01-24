<template>
  <div class="vue-root">
    <smart-numeric-text-box
      id="myCustomElement"
      input-format="floatingPoint"
      value="100"
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
#myCustomElement {
  width: 300px;
  height: 40px;
}
</style>
