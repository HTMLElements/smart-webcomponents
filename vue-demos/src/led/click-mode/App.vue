<template>
  <div class="vue-root">
    Click mode "press" :
    <smart-led click-mode="press"></smart-led>
    <br />
    <br />Click mode "release" :
    <smart-led click-mode="release"></smart-led>
    <br />
    <br />Click mode "pressAndRelease" :
    <smart-led click-mode="pressAndRelease"></smart-led>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.led.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
