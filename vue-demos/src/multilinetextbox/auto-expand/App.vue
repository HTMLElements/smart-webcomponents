<template>
  <div class="vue-root">
    <smart-multiline-text-box placeholder="Enter Text" auto-expand></smart-multiline-text-box>
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
smart-multiline-text-box {
  max-height: 100px;
  --smart-editor-label-padding: 5px;
}
</style>
