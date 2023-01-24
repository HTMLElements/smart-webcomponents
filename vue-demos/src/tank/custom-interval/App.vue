<template>
  <div class="vue-root">
    <p>Tank with floating point scale:</p>
    <smart-tank
      id="tank1"
      orientation="horizontal"
      min="100"
      max="10000"
      value="1000"
      coerce
      custom-interval
      custom-ticks="[100, 200, 1000, 8000, 10000]"
    ></smart-tank>
    <p>Tank with integer scale:</p>
    <smart-tank
      id="tank2"
      orientation="horizontal"
      scale-type="integer"
      word-length="int64"
      min="-9223372036854775808"
      max="9223372036854775807"
      value="1000"
      coerce
      custom-interval
      custom-ticks="[-9e18, 0, 1e18, 5e18]"
    ></smart-tank>
    <p>Tank with logarithmic scale:</p>
    <smart-tank
      id="tank3"
      orientation="horizontal"
      min="100"
      max="10000"
      logarithmic-scale
      value="1000"
      coerce
      custom-interval
      custom-ticks="[100, 200, 1000, 8000, 10000]"
    ></smart-tank>
    <div class="options">
      <div class="option">
        <p>Settings</p>
        <smart-check-box id="toggleCustomInterval" checked>Custom interval</smart-check-box>
        <smart-check-box id="toggleCoerce" checked>Coerce</smart-check-box>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tank1 = document.getElementById("tank1"),
        tank2 = document.getElementById("tank2"),
        tank3 = document.getElementById("tank3");
      document
        .getElementById("toggleCustomInterval")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          tank1.customInterval = checked;
          tank2.customInterval = checked;
          tank3.customInterval = checked;
        });
      document
        .getElementById("toggleCoerce")
        .addEventListener("change", function(event) {
          const checked = event.detail.value;
          tank1.coerce = checked;
          tank2.coerce = checked;
          tank3.coerce = checked;
        });
    });
  }
};
</script>

<style>
smart-tank {
  width: 300px;
  height: 150px;
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
