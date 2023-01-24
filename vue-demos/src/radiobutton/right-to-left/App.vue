<template>
  <div class="vue-root">
    <smart-radio-button enable-container-click right-to-left>לחצן רדיו 1</smart-radio-button>
    <smart-radio-button enable-container-click checked right-to-left>לחצן רדיו 2</smart-radio-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
