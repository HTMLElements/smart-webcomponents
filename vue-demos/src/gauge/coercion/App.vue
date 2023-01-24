<template>
  <div class="vue-root">
    <smart-gauge
      id="gauge"
      analog-display-type="needle"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="21"
      value="1"
      coerce
      interval="1"
    ></smart-gauge>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-toggle-button id="toggleCoerce" checked>
          Toggle
          <strong>coerce</strong>
        </smart-toggle-button>
      </div>
      <div class="option">
        <smart-button id="setInterval">
          Set
          <strong>interval</strong> to
          <em>2</em>
        </smart-button>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div class="description">
      Coercion - snapping to the nearest value according to the coercion interval
      setting.
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.gauge.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gauge = document.querySelector("smart-gauge");
      document
        .getElementById("toggleCoerce")
        .addEventListener("change", function(event) {
          gauge.coerce = event.detail.value;
        });
      document
        .getElementById("setInterval")
        .addEventListener("click", function() {
          gauge.interval = 2;
        });
    });
  }
};
</script>

<style>
smart-gauge {
  width: 250px;
}
</style>
