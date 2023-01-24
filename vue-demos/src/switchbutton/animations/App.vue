<template>
  <div class="vue-root">
    <h3>Horizontal Switch Button</h3>
    <smart-switch-button switch-mode="click"></smart-switch-button>
    <br />
    <smart-switch-button switch-mode="default"></smart-switch-button>
    <br />
    <smart-switch-button switch-mode="drag"></smart-switch-button>
    <br />
    <smart-switch-button switch-mode="click"></smart-switch-button>
    <h3>Vertical Switch Button</h3>
    <smart-switch-button orientation="vertical" switch-mode="click"></smart-switch-button>
    <smart-switch-button orientation="vertical" switch-mode="click"></smart-switch-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const switchButtons = document.querySelectorAll("smart-switch-button");
      switchButtons[3].checked = null;
      switchButtons[5].checked = null;
    });
  }
};
</script>

<style>
</style>
