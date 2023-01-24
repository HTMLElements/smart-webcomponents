<template>
  <div class="vue-root">
    <div class="demo-description">Start typing to see the show password icon</div>
    <smart-password-text-box show-password-icon placeholder="Your password"></smart-password-text-box>
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
