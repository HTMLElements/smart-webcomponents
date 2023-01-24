<template>
  <div class="vue-root">
    <smart-slider
      id="slider1"
      interval="5"
      orientation="vertical"
      scale-position="near"
      show-tooltip
      tooltip-position="far"
      mode="date"
      date-label-format-string="d"
      min="new Date(2000, 0, 1)"
      max="new Date(2020, 0, 1)"
      value="new Date(2008, 10, 1)"
    ></smart-slider>
    <br />
    <smart-slider
      id="slider2"
      label-format-function="slider2LabelFormatFunction"
      scale-position="near"
      show-tooltip
      tooltip-position="far"
      mode="date"
      date-label-format-string="MMM d, yyyy"
      min="new Date(2017, 0, 1)"
      max="new Date(2019, 0, 1)"
      value="new Date(2018, 0, 1)"
      custom-interval
    ></smart-slider>
    <br />
    <smart-slider
      id="slider3"
      interval="5"
      inverted
      orientation="vertical"
      scale-position="near"
      show-tooltip
      show-unit
      tooltip-position="far"
      unit="μs"
      mode="date"
      date-label-format-string="uu"
      min="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 45)"
      max="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 347)"
      value="new smartUtilities.DateTime(2018, 3, 19, 2, 12, 35, 133, 300)"
    ></smart-slider>
    <br />
    <smart-slider
      id="slider4"
      range-slider
      coerce
      interval="1"
      scale-position="far"
      show-tooltip
      mode="date"
      date-label-format-string="MMM, yy"
      min="new Date(2018, 0, 1)"
      max="new Date(2018, 11, 1)"
    ></smart-slider>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.getElementById("slider2").customTicks = [
        "new Date(2017, 0, 1)",
        "new Date(2018, 0, 1)",
        "new Date(2018, 4, 17)",
        "new Date(2019, 0, 1)"
      ];
      document.getElementById("slider4").values = [
        "new Date(2018, 1, 1)",
        "new Date(2018, 5, 1)"
      ];

      // eslint-disable-next-line
      function slider2LabelFormatFunction(value) {
        if (
          value.year() === 2018 &&
          value.month() === 5 &&
          value.day() === 17
        ) {
          return (
            '<div id="birthday">' +
            value.toString("MMM d, yyyy") +
            "<br/>★Peter's birthday★</div>"
          );
        }
        return value.toString("MMM d, yyyy");
      }
    });
  }
};
</script>

<style>
#slider1,
#slider3 {
  width: 100px;
}

#slider2 {
  --smart-slider-tooltip-width: 140px;
  --smart-slider-tooltip-height: 50px;
  width: 800px;
  height: 100px;
}

#slider2 .smart-tooltip {
  z-index: 10;
}

#birthday {
  text-align: center;
  color: maroon;
}

#slider4 {
  width: 800px;
}

.smart-slider[orientation="vertical"] .smart-track {
  height: 100%;
}
</style>
