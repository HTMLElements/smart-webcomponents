<template>
  <div class="vue-root">
    <smart-password-text-box
      placeholder="סיסמה:"
      locale="he"
      show-password-strength
      tooltip-arrow
      tooltip-position="bottom"
      right-to-left
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
      const passwordTextBox = document.querySelector("smart-password-text-box"),
        messages = Object.assign({}, passwordTextBox.messages);
      messages["he"] = {
        passwordStrength: "חוזק סיסמה",
        short: "קצר",
        weak: "חלש",
        far: "הוגן",
        good: "טוב",
        strong: "חזק",
        showPassword: "הראה סיסמה"
      };
      passwordTextBox.messages = messages;
    });
  }
};
</script>

<style>
</style>
