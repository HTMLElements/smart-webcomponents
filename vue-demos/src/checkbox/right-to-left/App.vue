<template>
  <div class="vue-root">
    <div class="demo-description">
      Checkbox fully supports right-to-left (RTL) language locales. You can
      enable/disable the right-to-left support using rightToLeft property.
    </div>
    <smart-check-box id="checkBox" right-to-left>תיבת הסימון</smart-check-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
