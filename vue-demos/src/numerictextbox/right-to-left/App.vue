<template>
  <div class="vue-root">
    <smart-numeric-text-box
      id="myCustomElement"
      input-format="integer"
      drop-down-enabled
      value="100"
      spin-buttons
      radix-display
      spin-buttons-step="1"
      enable-mouse-wheel-action
      locale="he"
      right-to-left
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
      const numericTextBox = document.querySelector("smart-numeric-text-box"),
        messages = Object.assign({}, numericTextBox.messages);
      messages["he"] = {
        binary: "בינארי",
        octal: "אוקטלית",
        decimal: "עשרוני",
        hexadecimal: "הקסדצימלי",
        integerOnly:
          "smartNumericTextBox: The property {{property}} can only be set when inputFormat is integer.",
        noInteger:
          "smartNumericTextBox: the property {{property}} cannot be set when inputFormat is integer.",
        significantPrecisionDigits:
          "smartNumericTextBox: the properties significantDigits and precisionDigits cannot be set at the same time."
      };
      numericTextBox.messages = messages;
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
