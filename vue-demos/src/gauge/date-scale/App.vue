<template>
  <div class="vue-root">
    <smart-gauge
      id="gauge1"
      analog-display-type="fill"
      scale-position="outside"
      mode="date"
      date-label-format-string="d"
      min="new Date(2000, 0, 1)"
      max="new Date(2020, 0, 1)"
      value="new Date(2001, 10, 1)"
      show-ranges
    ></smart-gauge>
    <smart-gauge
      id="gauge2"
      analog-display-type="line"
      coerce
      scale-position="outside"
      mode="date"
      min="new Date(2017, 0, 1)"
      max="new Date(2019, 0, 1)"
      value="new Date(2018, 0, 1)"
      custom-interval
    ></smart-gauge>
    <smart-gauge
      id="gauge3"
      analog-display-type="line"
      inverted
      show-unit
      ticks-position="track"
      unit="μs"
      mode="date"
      date-label-format-string="uu"
      min="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 45)"
      max="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 347)"
      value="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 300)"
    ></smart-gauge>
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
      document.getElementById("gauge1").ranges = [
        {
          startValue: "new Date(2000, 0, 1)",
          endValue: "new Date(2003, 0, 1)",
          className: "range1"
        },
        {
          startValue: "new Date(2003, 0, 1)",
          endValue: "new Date(2009, 0, 1)",
          className: "range2"
        },
        {
          startValue: "new Date(2009, 0, 1)",
          endValue: "new Date(2020, 0, 1)",
          className: "range3"
        }
      ];
      document.getElementById("gauge2").customTicks = [
        "new Date(2017, 0, 1)",
        "new Date(2018, 0, 1)",
        "new Date(2018, 4, 17)",
        "new Date(2019, 0, 1)"
      ];
    });
  }
};
</script>

<style>
smart-gauge {
  width: 300px;
  height: 300px;
}

smart-gauge .smart-range.range1 {
  fill: maroon;
}

smart-gauge .smart-range.range2 {
  fill: orange;
}

smart-gauge .smart-range.range3 {
  fill: forestgreen;
}
</style>
