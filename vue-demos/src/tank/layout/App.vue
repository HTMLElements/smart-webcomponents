<template>
  <div class="vue-root">
    <div class="underlined">Horizontal tank</div>Value:
    <span id="horizontalTankValue">30.00</span>
    <smart-tank
      id="horizontalTank"
      orientation="horizontal"
      min="0"
      max="100"
      value="30"
      scale-position="none"
    ></smart-tank>
    <br />
    <br />
    <br />
    <div class="underlined">Inverted horizontal tank</div>Value:
    <span id="invertedHorizontalTankValue">30.00</span>
    <smart-tank
      id="invertedHorizontalTank"
      orientation="horizontal"
      inverted
      min="0"
      max="100"
      value="30"
      scale-position="none"
    ></smart-tank>
    <br />
    <br />
    <br />
    <div class="underlined">Vertical Tank</div>Value:
    <span id="verticalTankValue">30.00</span>
    <smart-tank
      id="verticalTank"
      orientation="vertical"
      min="0"
      max="100"
      value="30"
      scale-position="none"
    ></smart-tank>
    <br />
    <br />
    <br />
    <div class="underlined">Inverted vertical Tank</div>Value:
    <span id="invertedVerticalTankValue">30.00</span>
    <smart-tank
      id="invertedVerticalTank"
      orientation="vertical"
      inverted
      min="0"
      max="100"
      value="30"
      scale-position="none"
    ></smart-tank>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const horizontalTank = document.getElementById("horizontalTank"),
        verticalTank = document.getElementById("verticalTank"),
        invertedHorizontalTank = document.getElementById(
          "invertedHorizontalTank"
        ),
        invertedVerticalTank = document.getElementById("invertedVerticalTank"),
        horizontalTankValue = document.getElementById("horizontalTankValue"),
        verticalTankValue = document.getElementById("verticalTankValue"),
        invertedHorizontalTankValue = document.getElementById(
          "invertedHorizontalTankValue"
        ),
        invertedVerticalTankValue = document.getElementById(
          "invertedVerticalTankValue"
        );
      horizontalTank.addEventListener("change", function(event) {
        const value = event.detail.value;
        horizontalTankValue.innerHTML = parseFloat(value).toFixed(2);
      });
      verticalTank.addEventListener("change", function(event) {
        const value = event.detail.value;
        verticalTankValue.innerHTML = parseFloat(value).toFixed(2);
      });
      invertedHorizontalTank.addEventListener("change", function(event) {
        const value = event.detail.value;
        invertedHorizontalTankValue.innerHTML = parseFloat(value).toFixed(2);
      });
      invertedVerticalTank.addEventListener("change", function(event) {
        const value = event.detail.value;
        invertedVerticalTankValue.innerHTML = parseFloat(value).toFixed(2);
      });
    });
  }
};
</script>

<style>
#horizontalTank,
#invertedHorizontalTank {
  width: 180px;
  height: 120px;
}

#verticalTank,
#invertedVerticalTank {
  width: 120px;
  height: 180px;
}
</style>
