<template>
  <div class="vue-root">
    <smart-toast
      position="top-left"
      auto-open
      show-close-button
      type="mail"
      class="blink"
      right-to-left
    >יש לך 2 הודעות חדשות.</smart-toast>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.toast.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
