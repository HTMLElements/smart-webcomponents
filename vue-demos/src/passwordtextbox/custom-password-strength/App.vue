<template>
  <div class="vue-root">
    <smart-password-text-box
      show-password-strength
      show-password-icon
      tooltip-arrow
      placeholder="Password strength callback"
      tooltip-position="top"
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
    onMounted(() => {
      const passwordTextBox = document.querySelector("smart-password-text-box");
      passwordTextBox.passwordStrength = function(password) {
        const passwordLength = password.length;
        if (passwordLength < 3) {
          return "short";
        } else if (passwordLength < 10) {
          return "weak";
        } else {
          return "strong";
        }
      };
    });
  }
};
</script>

<style>
smart-password-text-box {
  margin: 50px;
  width: 300px;
}
</style>
