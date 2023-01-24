<template>
  <div class="vue-root">
    <smart-masked-text-box id="maskedTextBox"></smart-masked-text-box>
    <div id="validationStatus"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const maskedTextBox = document.getElementById("maskedTextBox"),
        validationStatus = document.getElementById("validationStatus");
      maskedTextBox.validation = function(value) {
        if (value.length === 5) {
          return true;
        }
        return false;
      };
      maskedTextBox.addEventListener("validation", function(event) {
        const details = event.detail;
        console.log("Validation success : " + details.success);
        if (details.success) {
          validationStatus.innerHTML = "Validation successful!";
        } else {
          validationStatus.innerHTML = "Please, fill the mask...";
        }
      });
    });
  }
};
</script>

<style>
</style>
