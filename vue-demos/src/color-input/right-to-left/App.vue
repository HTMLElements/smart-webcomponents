<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>smart.ColorInput allows to pick a new color from a list of colors.</h1>
    </div>
    <smart-color-input drop-down-button-position="left" right-to-left locale="he"></smart-color-input>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorinput.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorInput = document.querySelector("smart-color-input"),
        messages = Object.assign({}, colorInput.messages);
      messages["he"] = {
        standardColors: "צבעים סטנדרטיים",
        themeShadeColors: "",
        themeColors: "צבעי נושא"
      };
      colorInput.messages = messages;
      colorInput.placeholder = "אנא בחר צבע";
    });
  }
};
</script>

<style>
</style>
