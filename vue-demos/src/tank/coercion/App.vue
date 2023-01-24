<template>
  <div class="vue-root">
    <smart-tank
      id="tank"
      coerce
      interval="10"
      min="0"
      max="100"
      value="50"
      scale-position="both"
      scale-type="integer"
    ></smart-tank>
    <div class="options">
      <div class="option">
        <p>Set coercion interval:</p>
        <smart-numeric-text-box
          id="numericTextBox"
          value="10"
          min="1"
          max="100"
          input-format="integer"
          spin-buttons
        ></smart-numeric-text-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tank = document.getElementById("tank"),
        numericTextBox = document.getElementById("numericTextBox");
      numericTextBox.addEventListener("change", function(event) {
        tank.interval = event.detail.value;
      });
    });
  }
};
</script>

<style>
smart-tank {
  width: 300px;
}

smart-numeric-text-box {
  width: 100%;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
