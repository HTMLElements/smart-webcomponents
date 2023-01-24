<template>
  <div class="vue-root">
    <smart-numeric-text-box
      id="floatingPointNumericTextBox"
      input-format="floatingPoint"
      value="300000000"
      scientific-notation
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <br />
    <smart-numeric-text-box
      id="complexNumericTextBox"
      input-format="complex"
      value="300000000 + 5000i"
      scientific-notation
      spin-buttons
      spin-buttons-position="right"
      spin-buttons-step="1 + 1i"
      enable-mouse-wheel-action
    ></smart-numeric-text-box>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-toggle-button id="toggleScientificNotation" checked>Toggle SI notation</smart-toggle-button>
      </div>
    </div>
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
      const floatingPointNumericTextBox = document.getElementById(
          "floatingPointNumericTextBox"
        ),
        complexNumericTextBox = document.getElementById(
          "complexNumericTextBox"
        );
      document
        .querySelector("#toggleScientificNotation")
        .addEventListener("change", function(event) {
          const enabled = event.detail.value;
          floatingPointNumericTextBox.scientificNotation = enabled;
          complexNumericTextBox.scientificNotation = enabled;
        });
    });
  }
};
</script>

<style>
smart-toggle-button .smart-button {
  padding: 3px;
}

#floatingPointNumericTextBox,
#complexNumericTextBox {
  width: 300px;
  height: 40px;
}
</style>
