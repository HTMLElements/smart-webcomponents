<template>
  <div class="vue-root">
    <smart-date-time-picker
      calendar-button
      enable-mouse-wheel-action
      drop-down-position="center-bottom"
      spin-buttons
      spin-buttons-position="left"
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
@media only screen and (max-width: 500px) {
  .smart-drop-down.smart-date-time-drop-down {
    left: 70%;
  }
}
</style>
