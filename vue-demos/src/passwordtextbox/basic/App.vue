<template>
  <div class="vue-root">
    <div class="demo-description">Simple password field.</div>
    <smart-password-text-box class="outlined" placeholder></smart-password-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.passwordtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
