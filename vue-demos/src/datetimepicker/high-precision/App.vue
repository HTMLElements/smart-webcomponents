<template>
  <div class="vue-root">
    <p>
      DateTime precision up to a yoctosecond (10⁻²⁴ second) support. Engineering/Scientific
      Formats
    </p>
    <smart-date-time-picker
      calendar-button
      enable-mouse-wheel-action
      spin-buttons
      spin-buttons-position="left"
      format-string="FP"
      value="new smartUtilities.DateTime(2019, 2, 19, 12, 54, 111, 333, 31, 40, 436, 144, 490, 59, 99)"
    ></smart-date-time-picker>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-date-time-picker {
  width: 320px;
}
</style>
