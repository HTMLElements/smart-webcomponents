<template>
  <div class="vue-root">
    <div class="sideGaugeContainer">
      <smart-gauge
        id="leftGauge"
        class="sideGauge"
        analog-display-type="needle"
        start-angle="60"
        end-angle="180"
        min="0"
        max="10"
        value="9"
        ticks-visibility="major"
        custom-interval
        custom-ticks="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        labels-visibility="none"
        show-ranges
        draw-needle="customDrawNeedleFunction2"
      ></smart-gauge>
    </div>
    <div class="sideGaugeContainer">
      <smart-gauge
        id="rightGauge"
        class="sideGauge"
        analog-display-type="needle"
        start-angle="0"
        end-angle="120"
        min="0"
        max="10"
        value="1.5"
        inverted
        ticks-visibility="major"
        custom-interval
        custom-ticks="[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
        labels-visibility="none"
        show-ranges
        draw-needle="customDrawNeedleFunction2"
      ></smart-gauge>
    </div>
    <div id="centralGaugeContainer">
      <div id="firstCircle">
        <div id="secondCircle"></div>
      </div>
      <smart-gauge
        id="centralGauge"
        analog-display-type="needle"
        start-angle="-40"
        end-angle="220"
        min="0"
        max="20"
        value="18.5"
        ticks-visibility="major"
        labels-visibility="none"
        show-ranges
        draw-needle="customDrawNeedleFunction1"
      ></smart-gauge>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.gauge.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const leftGauge = document.getElementById("leftGauge");
      leftGauge.ranges = [
        { startValue: "0", endValue: "10", className: "borderRange" }
      ];

      const rightGauge = document.getElementById("rightGauge");
      rightGauge.ranges = [
        { startValue: "0", endValue: "10", className: "borderRange" }
      ];

      const centralGauge = document.getElementById("centralGauge"),
        ranges = [];
      for (let i = 0; i < 20; i++) {
        ranges.push({
          startValue: i,
          endValue: i + 1,
          className: "range" + (i + 1)
        });
      }
      centralGauge.ranges = ranges;
    });
  }
};
</script>

<style>
smart-gauge {
  border-radius: 50%;
}

#centralGaugeContainer {
  position: absolute;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-color: #eff0f2;
  left: 200px;
}

#centralGauge {
  width: 100%;
  height: 100%;
}

#centralGauge .smart-tick {
  width: 26px;
}

#centralGauge .smart-needle-central-circle {
  display: none;
}

#centralGauge .value-circle {
  fill: #ea7a72;
}

#centralGauge .smart-range {
  width: 25px;
}

smart-gauge .smart-range.range1,
smart-gauge .smart-range.range2,
smart-gauge .smart-range.range3,
smart-gauge .smart-range.range4,
smart-gauge .smart-range.range5 {
  fill: #2c66bf;
}

smart-gauge .smart-range.range6,
smart-gauge .smart-range.range7,
smart-gauge .smart-range.range8,
smart-gauge .smart-range.range9,
smart-gauge .smart-range.range10 {
  fill: #b7251d;
}

smart-gauge .smart-range.range11,
smart-gauge .smart-range.range12,
smart-gauge .smart-range.range13,
smart-gauge .smart-range.range14,
smart-gauge .smart-range.range15 {
  fill: #eda606;
}

smart-gauge .smart-range.range16,
smart-gauge .smart-range.range17,
smart-gauge .smart-range.range18,
smart-gauge .smart-range.range19,
smart-gauge .smart-range.range20 {
  fill: #23893c;
}

smart-gauge .smart-range.range1,
smart-gauge .smart-range.range6,
smart-gauge .smart-range.range11,
smart-gauge .smart-range.range16 {
  opacity: 0.4;
}

smart-gauge .smart-range.range2,
smart-gauge .smart-range.range7,
smart-gauge .smart-range.range12,
smart-gauge .smart-range.range17 {
  opacity: 0.55;
}

smart-gauge .smart-range.range3,
smart-gauge .smart-range.range8,
smart-gauge .smart-range.range13,
smart-gauge .smart-range.range18 {
  opacity: 0.7;
}

smart-gauge .smart-range.range4,
smart-gauge .smart-range.range9,
smart-gauge .smart-range.range14,
smart-gauge .smart-range.range19 {
  opacity: 0.85;
}

#firstCircle,
#secondCircle {
  position: absolute;
  border-radius: 50%;
  width: 225px;
  height: 225px;
  background-color: white;
  transform: translate(-50%, -50%);
  margin-top: 50%;
  margin-left: 50%;
}

#secondCircle {
  border: 1.5px solid #eff0f2;
  width: 175px;
  height: 175px;
}

.sideGaugeContainer {
  position: absolute;
  border: 1.5px solid #cdd0d5;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  top: 50px;
}

.sideGaugeContainer:first-child {
  left: 79px;
}

.sideGaugeContainer:nth-child(2) {
  left: 416px;
}

.sideGauge {
  width: 180px;
  height: 180px;
}

.sideGauge .smart-tick {
  width: 14px;
  stroke: #cdd0d5;
  stroke-width: 1.5px;
}

.sideGauge .smart-needle {
  width: 4px;
}

.sideGauge .smart-needle-central-circle {
  fill: white;
  stroke: #ea7a72;
  stroke-width: 2px;
}

.sideGauge .value-needle {
  fill: #ea7a72;
}

.sideGauge .smart-range {
  width: 1.5px;
  fill: #cdd0d5;
}
</style>
