<template>
  <div class="vue-root">
    <p>editMode: 'full' - Value validation on blur only.</p>
    <smart-date-time-picker
      calendar-button
      format-string="d"
      enable-mouse-wheel-action
      interval="new smartUtilities.TimeSpan(24, 0, 0)"
      drop-down-position="center-bottom"
      spin-buttons
      spin-buttons-position="left"
      edit-mode="full"
    ></smart-date-time-picker>
    <br />
    <p>editMode: 'default' - Validation while typing and on blur.</p>
    <smart-date-time-picker
      calendar-button
      format-string="d"
      enable-mouse-wheel-action
      interval="new smartUtilities.TimeSpan(24, 0, 0)"
      drop-down-position="center-bottom"
      spin-buttons
      spin-buttons-position="left"
      edit-mode="default"
    ></smart-date-time-picker>
    <br />
    <p>
      editMode: 'partial' - Strict Validation while typing. Delete/Backspace
      set the edit part to min value.
    </p>
    <smart-date-time-picker
      calendar-button
      format-string="d"
      enable-mouse-wheel-action
      interval="new smartUtilities.TimeSpan(24, 0, 0)"
      drop-down-position="center-bottom"
      spin-buttons
      spin-buttons-position="left"
      edit-mode="partial"
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
html,
body {
  min-height: 600px;
}
@media only screen and (max-width: 500px) {
  .smart-drop-down.smart-date-time-drop-down {
    left: 70%;
  }
}
</style>
