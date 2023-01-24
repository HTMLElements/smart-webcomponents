<template>
  <div class="vue-root">
    <smart-multiline-text-box
      enter-key-behavior="newLine"
      vertical-scroll-bar-visibility="auto"
      horizontal-scroll-bar-visibility="auto"
      placeholder="Auto Scrollbars"
    ></smart-multiline-text-box>
    <smart-multiline-text-box
      enter-key-behavior="newLine"
      vertical-scroll-bar-visibility="disabled"
      horizontal-scroll-bar-visibility="disabled"
      placeholder="Disabled Scrollbars"
    ></smart-multiline-text-box>
    <smart-multiline-text-box
      enter-key-behavior="newLine"
      vertical-scroll-bar-visibility="visible"
      horizontal-scroll-bar-visibility="visible"
      placeholder="Visible Scrollbars"
    ></smart-multiline-text-box>
    <smart-multiline-text-box
      enter-key-behavior="newLine"
      vertical-scroll-bar-visibility="hidden"
      horizontal-scroll-bar-visibility="hidden"
      placeholder="Hidden Scrollbars"
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
