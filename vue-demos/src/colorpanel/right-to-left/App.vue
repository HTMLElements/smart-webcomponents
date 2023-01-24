<template>
  <div class="vue-root">
    <div class="demo-description">
      <h1>Color Panel</h1>In this example is demonstrated the smartColorPanel Web Component with
      Right To Left layout.
    </div>
    <smart-color-panel right-to-left locale="he"></smart-color-panel>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.colorpanel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const colorPanel = document.querySelector("smart-color-panel"),
        messages = Object.assign({}, colorPanel.messages);
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
      colorPanel.messages = messages;
    });
  }
};
</script>

<style>
</style>
