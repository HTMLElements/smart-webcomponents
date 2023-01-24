<template>
  <div class="vue-root">
    <div>Horizontal tank</div>Value:
    <span id="horizontalTankValue">50000</span>
    <smart-tank
      id="horizontalTank"
      orientation="horizontal"
      min="0"
      max="100000"
      value="50000"
      scale-position="both"
    ></smart-tank>
    <br />
    <br />
    <br />
    <div>Inverted horizontal tank</div>Value:
    <span id="invertedHorizontalTankValue">50000</span>
    <smart-tank
      id="invertedHorizontalTank"
      orientation="horizontal"
      inverted
      min="0"
      max="100000"
      value="50000"
      scale-position="both"
    ></smart-tank>
    <br />
    <br />
    <br />
    <div>Vertical Tank</div>Value:
    <span id="verticalTankValue">50000</span>
    <smart-tank
      id="verticalTank"
      orientation="vertical"
      min="0"
      max="100000"
      value="50000"
      scale-position="both"
    ></smart-tank>
    <br />
    <br />
    <br />
    <div>Inverted vertical Tank</div>Value:
    <span id="invertedVerticalTankValue">50000</span>
    <smart-tank
      id="invertedVerticalTank"
      orientation="vertical"
      min="0"
      max="100000"
      inverted
      value="50000"
      scale-position="both"
    ></smart-tank>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <h3>Set Tanks value:</h3>
        <smart-numeric-text-box
          id="numericTextBox1"
          spin-buttons
          spin-buttons-step="10000"
          value="50000"
          input-format="floatingPoint"
        ></smart-numeric-text-box>
        <br />
        <br />
        <smart-check-box id="checkboxShowUnit">Show unit</smart-check-box>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.numerictextbox.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tanks = [
          "horizontalTank",
          "verticalTank",
          "invertedHorizontalTank",
          "invertedVerticalTank"
        ],
        checkboxShowUnit = document.getElementById("checkboxShowUnit"),
        numericTextBox = document.getElementById("numericTextBox1");
      let value;
      numericTextBox.addEventListener("change", function(event) {
        value = event.detail.value;
        for (let i = 0; i < tanks.length; i++) {
          const tank = document.getElementById(tanks[i]);
          tank.value = value;
        }
      });
      checkboxShowUnit.addEventListener("change", function() {
        for (let i = 0; i < tanks.length; i++) {
          const tank = document.getElementById(tanks[i]);
          tank.showUnit = checkboxShowUnit.checked;
        }
      });
    });
  }
};
</script>

<style>
smart-numeric-text-box {
  width: 100%;
}

smart-tank {
  width: 60%;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
