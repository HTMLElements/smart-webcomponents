<template>
  <div class="vue-root">
    <smart-multiline-text-box
      enter-key-behavior="newLine"
      select-all-on-focus
      auto-focus
      placeholder="smart Text Area"
    ></smart-multiline-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.multilinetextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
