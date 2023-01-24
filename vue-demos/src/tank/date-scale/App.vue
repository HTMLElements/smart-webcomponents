<template>
  <div class="vue-root">
    <smart-tank
      id="tank1"
      interval="5"
      scale-position="near"
      show-tooltip
      tooltip-position="far"
      mode="date"
      date-label-format-string="d"
      min="new Date(2000, 0, 1)"
      max="new Date(2020, 0, 1)"
      value="new Date(2008, 10, 1)"
    ></smart-tank>
    <br />
    <p>Date Scale</p>
    <p>
      <br />
      <br />
      <br />
      <smart-tank
        id="tank2"
        label-format-function="tank2LabelFormatFunction"
        scale-position="near"
        show-tooltip
        tooltip-position="far"
        mode="date"
        date-label-format-string="MMM d, yyyy"
        min="new Date(2017, 0, 1)"
        max="new Date(2019, 0, 1)"
        value="new Date(2018, 0, 1)"
        custom-interval
      ></smart-tank>
      <br />
    </p>
    <p>Date Scale with Custom Interval</p>
    <p>
      <br />
      <br />
      <br />
      <smart-tank
        id="tank3"
        interval="5"
        inverted
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
      ></smart-tank>
    </p>
    <p>Date Scale with Scientific precision</p>
    <p>
      <br />
      <br />
      <br />
    </p>
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
      document.getElementById("tank2").customTicks = [
        "new Date(2017, 0, 1)",
        "new Date(2018, 0, 1)",
        "new Date(2018, 4, 17)",
        "new Date(2019, 0, 1)"
      ];
      // eslint-disable-next-line
      function tank2LabelFormatFunction(value) {
        if (
          value.year() === 2020 &&
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
smart-tank {
  width: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
