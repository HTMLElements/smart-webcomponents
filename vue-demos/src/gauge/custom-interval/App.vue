<template>
  <div class="vue-root">
    <div class="container">
      <smart-gauge
        id="gauge1"
        analog-display-type="fill"
        coerce
        scale-position="outside"
        min="0"
        max="10000"
        value="100"
        custom-interval
        custom-ticks="[100, 1000, 5000, 10000]"
      ></smart-gauge>
      <p>Gauge with floating point scale:</p>
    </div>
    <div class="container">
      <smart-gauge
        id="gauge2"
        analog-display-type="fill"
        coerce
        scale-position="outside"
        scale-type="integer"
        significant-digits="3"
        word-length="int64"
        min="-9223372036854775808"
        max="9223372036854775807"
        value="-3e18"
        custom-interval
        custom-ticks="[-9e18, -3e18, 1e18, 9e18]"
      ></smart-gauge>
      <p>Gauge with 64-bit Integer scale:</p>
    </div>
    <div class="container">
      <smart-gauge
        id="gauge3"
        analog-display-type="fill"
        coerce
        logarithmic-scale
        scale-position="outside"
        min="1"
        max="100"
        value="55"
        custom-interval
        custom-ticks="[1, 2, 3, 5, 8, 13, 21, 34, 55, 89]"
      ></smart-gauge>
      <p>Gauge with logarithmic scale and Fibonacci numbers as custom ticks:</p>
    </div>
    <div class="container">
      <smart-gauge
        id="gauge4"
        analog-display-type="fill"
        label-format-function="gauge4LabelFormatFunction"
        coerce
        scale-position="outside"
        min="1"
        max="26"
        value="10"
        custom-interval
        custom-ticks="[1, 2, 3, 5, 10, 13, 18, 22, 24, 26]"
      ></smart-gauge>
      <p>Gauge with letters:</p>
    </div>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-check-box id="toggleCustomInterval" enable-container-click checked>Custom interval</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box id="toggleCoerce" enable-container-click checked>Coerce</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.gauge.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gauge1 = document.getElementById("gauge1"),
        gauge2 = document.getElementById("gauge2"),
        gauge3 = document.getElementById("gauge3"),
        gauge4 = document.getElementById("gauge4");
      document
        .getElementById("toggleCustomInterval")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          gauge1.customInterval = checked;
          gauge2.customInterval = checked;
          gauge3.customInterval = checked;
          gauge4.customInterval = checked;
        });
      document
        .getElementById("toggleCoerce")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          gauge1.coerce = checked;
          gauge2.coerce = checked;
          gauge3.coerce = checked;
          gauge4.coerce = checked;
        });
    });
  }
};
</script>

<style>
smart-gauge {
  width: 300px;
}
.container {
  margin-top: 10px;
}
</style>
