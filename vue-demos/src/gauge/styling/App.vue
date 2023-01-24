<template>
  <div class="vue-root">
    <smart-gauge
      id="needleGauge1"
      analog-display-type="needle"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="70"
      scale-position="outside"
      needle-position="edge"
    ></smart-gauge>
    <smart-gauge
      id="needleGauge2"
      analog-display-type="needle"
      digital-display
      start-angle="-50"
      end-angle="230"
      min="0"
      max="100"
      value="40"
      scale-position="inside"
      show-ranges
    ></smart-gauge>
    <smart-gauge
      id="fillGauge1"
      analog-display-type="fill"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="10"
      scale-position="inside"
      ticks-position="scale"
      show-ranges
    ></smart-gauge>
    <smart-gauge
      id="fillGauge2"
      analog-display-type="fill"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="10"
      scale-position="outside"
    ></smart-gauge>
    <smart-gauge
      id="fillGauge3"
      analog-display-type="fill"
      digital-display
      start-angle="90"
      end-angle="90"
      min="0"
      max="10"
      value="1.7"
      scale-position="outside"
      ticks-position="track"
      ticks-visibility="major"
    ></smart-gauge>
    <smart-gauge
      id="lineGauge"
      analog-display-type="line"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="90"
      scale-position="inside"
      ticks-position="track"
    ></smart-gauge>
    <div id="fuelGaugeContainer">
      <smart-gauge
        id="fuelGauge"
        analog-display-type="needle"
        start-angle="45"
        end-angle="135"
        min="0"
        max="40"
        value="40"
        scale-position="inside"
        show-ranges
        label-format-function="fuelGaugeLabelFormatFunction"
      ></smart-gauge>
      <img src="../../../images/fuel.png" />
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
      const needleGauge2 = document.getElementById("needleGauge2");
      const fillGauge1 = document.getElementById("fillGauge1");
      const fillGauge2 = document.getElementById("fillGauge2");
      const fuelGauge = document.getElementById("fuelGauge");

      needleGauge2.ranges = [
        {
          startValue: 0,
          endValue: 25,
          className: "range1"
        },
        {
          startValue: 25,
          endValue: 50,
          className: "range2"
        },
        {
          startValue: 50,
          endValue: 75,
          className: "range3"
        },
        {
          startValue: 75,
          endValue: 100,
          className: "range4"
        }
      ];
      fillGauge1.ranges = [
        {
          startValue: 0,
          endValue: 19.5,
          className: "range1"
        },
        {
          startValue: 20.5,
          endValue: 39.5,
          className: "range2"
        },
        {
          startValue: 40.5,
          endValue: 59.5,
          className: "range3"
        },
        {
          startValue: 60.5,
          endValue: 79.5,
          className: "range4"
        },
        {
          startValue: 80.5,
          endValue: 100,
          className: "range5"
        }
      ];
      fillGauge2.digitalDisplayPosition = "bottom";
      fuelGauge.ranges = [
        { startValue: "0", endValue: "2", className: "range1" },
        { startValue: "19", endValue: "21", className: "range2" },
        { startValue: "38", endValue: "40", className: "range3" }
      ];
    });
  }
};
</script>

<style>
smart-gauge {
  width: 250px;
}

smart-gauge {
  float: left;
  margin-left: 40px;
}

#needleGauge1 .smart-needle {
  height: 30px;
  fill: maroon;
}

#needleGauge1 .smart-needle-central-circle {
  display: none;
}

#needleGauge2 .smart-needle,
#needleGauge2 .smart-needle-central-circle {
  fill: #3e3e3e;
}

#needleGauge2 .smart-range {
  fill: #3d6990;
}

#needleGauge2 .range1 {
  opacity: 0.25;
}

#needleGauge2 .range2 {
  opacity: 0.5;
}

#needleGauge2 .range3 {
  opacity: 0.75;
}

#needleGauge2 .smart-label {
  fill: black;
}

#fillGauge1 .smart-value {
  fill: #4384b7;
  stroke: #5eb9ff;
}

#fillGauge2 .smart-track {
  width: 150px;
}

#lineGauge,
#fuelGauge {
  background-color: black;
}

#lineGauge .smart-track {
  width: 50px;
  fill: #333333;
}

#lineGauge .smart-line {
  stroke: white;
}

#lineGauge .smart-tick {
  stroke: #f2f2f2;
}

#lineGauge .smart-label {
  fill: white;
}

#fillGauge1 .range1 {
  fill: #30c842;
}

#fillGauge1 .range2 {
  fill: #96e244;
}

#fillGauge1 .range3 {
  fill: #feff4b;
}

#fillGauge1 .range4 {
  fill: #f1a31b;
}

#fillGauge1 .range5 {
  fill: #f70e21;
}

#fuelGauge {
  font-weight: bold;
  font-size: 20px;
}

#fuelGauge .smart-tick {
  stroke: white;
}

#fuelGauge .smart-label {
  fill: white;
}

#fuelGauge .smart-needle {
  width: 5px;
  stroke: #f72e38;
  stroke-width: 5px;
  stroke-linejoin: round;
  fill: #f72e38;
}

#fuelGauge .smart-needle-central-circle {
  display: none;
}

#fuelGauge .smart-range {
  width: 15px;
  opacity: 1;
}

#fuelGauge .range1 {
  fill: #ff270d;
}

#fuelGauge .range2 {
  fill: #6dd962;
}

#fuelGauge .range3 {
  fill: white;
}

#fuelGaugeContainer {
  position: relative;
  float: left;
}

#fuelGaugeContainer img {
  position: absolute;
  right: 15px;
  bottom: 15px;
}
</style>
