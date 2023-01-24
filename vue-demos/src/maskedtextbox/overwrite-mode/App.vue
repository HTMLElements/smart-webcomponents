<template>
  <div class="vue-root">
    <smart-masked-text-box id="maskedTextBox" value="10201" is-overwrite-mode reset-on-space></smart-masked-text-box>
    <br />
    <smart-check-box id="checkBox" checked>Is Overwrite Mode</smart-check-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const maskedTextBox = document.getElementById("maskedTextBox"),
        checkBox = document.getElementById("checkBox");
      checkBox.addEventListener("change", function() {
        maskedTextBox.isOverwriteMode = checkBox.checked;
      });
    });
  }
};
</script>

<style>
</style>
