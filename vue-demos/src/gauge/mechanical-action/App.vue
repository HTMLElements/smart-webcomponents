<template>
  <div class="vue-root">
    <smart-gauge
      id="needleGauge"
      analog-display-type="needle"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="100"
    ></smart-gauge>
    <smart-gauge
      id="fillGauge"
      analog-display-type="fill"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="20"
      ticks-position="scale"
    ></smart-gauge>
    <smart-gauge
      id="lineGauge"
      analog-display-type="line"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="75"
      ticks-position="scale"
    ></smart-gauge>
    <div class="options">
      <div class="caption">Mechanical action</div>
      <div class="option">
        <smart-radio-button id="switchWhileDragging" name="mechanicalAction" checked>
          <label for="switchWhileDragging">switchWhileDragging</label>
        </smart-radio-button>
        <br />
        <smart-radio-button type="radio" id="switchUntilReleased" name="mechanicalAction">
          <label for="switchUntilReleased">switchUntilReleased</label>
        </smart-radio-button>
        <br />
        <smart-radio-button type="radio" id="switchWhenReleased" name="mechanicalAction">
          <label for="switchWhenReleased">switchWhenReleased</label>
        </smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.gauge.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const gauges = [].slice.call(
        document.getElementsByTagName("smart-gauge")
      );
      document
        .getElementById("switchWhileDragging")
        .addEventListener("change", function() {
          gauges.map(function(g) {
            g.mechanicalAction = "switchWhileDragging";
          });
        });
      document
        .getElementById("switchUntilReleased")
        .addEventListener("change", function() {
          gauges.map(function(g) {
            g.mechanicalAction = "switchUntilReleased";
          });
        });
      document
        .getElementById("switchWhenReleased")
        .addEventListener("change", function() {
          gauges.map(function(g) {
            g.mechanicalAction = "switchWhenReleased";
          });
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
