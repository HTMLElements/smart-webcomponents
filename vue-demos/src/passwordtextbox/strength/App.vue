<template>
  <div class="vue-root">
    <div
      class="demo-description"
    >Start typing to see the strength popup feedback positioned differently.</div>
    <smart-password-text-box
      show-password-strength
      show-password-icon
      select-all-on-focus
      tooltip-arrow
      placeholder="Popup on top"
      tooltip-position="top"
    ></smart-password-text-box>
    <br />
    <br />
    <smart-password-text-box
      show-password-strength
      show-password-icon
      select-all-on-focus
      tooltip-arrow
      placeholder="Popup on right"
      tooltip-position="right"
    ></smart-password-text-box>
    <br />
    <br />
    <smart-password-text-box
      show-password-strength
      show-password-icon
      select-all-on-focus
      tooltip-arrow
      placeholder="Popup on bottom + icon"
      tooltip-position="bottom"
    ></smart-password-text-box>
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
smart-password-text-box {
  margin: 50px;
  width: 300px;
}
</style>
