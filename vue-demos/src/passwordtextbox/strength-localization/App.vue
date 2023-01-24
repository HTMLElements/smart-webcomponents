<template>
  <div class="vue-root">
    <div class="demo-description">Start typing to see the localized strength popup feedback</div>
    <smart-password-text-box
      show-password-strength
      show-password-icon
      select-all-on-focus
      tooltip-arrow
      placeholder="Your password"
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
      passwordTextBox.messages = {
        en: {
          passwordStrength: "Password strength",
          short: "Short",
          weak: "Weak",
          far: "Far",
          good: "Good",
          strong: "Strong",
          showPassword: "Show password"
        },
        de: {
          passwordStrength: "Passwortstärke",
          short: "kurz",
          weak: "schwach",
          far: "weit",
          good: "gut",
          strong: "stark",
          showPassword: "Passwort anzeigen"
        }
      };
      passwordTextBox.locale = "de";
    });
  }
};
</script>

<style>
smart-password-text-box {
  margin: 50px;
}
</style>
