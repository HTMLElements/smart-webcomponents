<template>
  <div class="vue-root">
    <smart-numeric-text-box
      id="myCustomElement"
      value="0"
      input-format="integer"
      word-length="uint64"
      radix-display
      drop-down-enabled
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      placeholder="Please type..."
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const myCustomElement = document.querySelector("smart-numeric-text-box");
      let messagesEnglish = myCustomElement.messages.en;
      messagesEnglish.binary = "binary";
      messagesEnglish.octal = "octal";
      messagesEnglish.decimal = "decimal";
      messagesEnglish.hexadecimal = "hexadecimal";
    });
  }
};
</script>

<style>
#myCustomElement {
  width: 300px;
  height: 40px;
}
</style>
