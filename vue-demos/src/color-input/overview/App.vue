<template>
  <div class="vue-root">
    <smart-color-input drop-down-button-position="right" readonly></smart-color-input>
    <smart-color-input display-mode="grid"></smart-color-input>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorinput.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
