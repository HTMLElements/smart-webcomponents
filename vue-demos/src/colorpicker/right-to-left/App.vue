<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>smartColorPicker allows picking a color from a drop-down</h1>
    </div>
    <smart-color-picker enable-custom-colors right-to-left locale="he"></smart-color-picker>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPicker = document.querySelector("smart-color-picker"),
        messages = Object.assign({}, colorPicker.messages);
      messages["he"] = {
        redPrefix: "ר:",
        greenPrefix: "ז:",
        bluePrefix: "ב:",
        hexPrefix: "#:",
        alphaPrefix: "אלפא:",
        ok: "בסדר",
        cancel: "בטל",
        customColor: "צבע מותאם אישית",
        standardColors: "צבעים סטנדרטיים",
        themeColors: "צבעי נושא"
      };
      colorPicker.messages = messages;
      colorPicker.placeholder = "אנא בחר צבע";
    });
  }
};
</script>

<style>
</style>
