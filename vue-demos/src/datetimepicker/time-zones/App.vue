<template>
  <div class="vue-root">
    <p>
      Original value of all DateTimePickers:
      <code>2019-08-17 11:24:15:350:111:100:009:078:087:765:012 -06:00</code> (Central
      Standard Time)
    </p>
    <p>displayKind: 'unspecified'</p>
    <smart-date-time-picker
      calendar-button
      display-kind="unspecified"
      format-string="dd-MMM-yy HH:mm:ss.fff zzz"
      enable-mouse-wheel-action
      interval="new smartUtilities.TimeSpan(1, 0, 0)"
      spin-buttons
      spin-buttons-position="left"
      value="new smartUtilities.DateTime(2019, 8, 17, 11, 24, 15, 350, 111, 100, 9, 78, 87, 765, 12, 'Central Standard Time')"
    ></smart-date-time-picker>
    <p>displayKind: 'UTC'</p>
    <smart-date-time-picker
      calendar-button
      display-kind="UTC"
      format-string="dd-MMM-yy HH:mm:ss.fff zzz"
      enable-mouse-wheel-action
      interval="new smartUtilities.TimeSpan(1, 0, 0)"
      spin-buttons
      spin-buttons-position="left"
      value="new smartUtilities.DateTime(2019, 8, 17, 11, 24, 15, 350, 111, 100, 9, 78, 87, 765, 12, 'Central Standard Time')"
    ></smart-date-time-picker>
    <p>displayKind: 'local'</p>
    <smart-date-time-picker
      calendar-button
      display-kind="local"
      format-string="dd-MMM-yy HH:mm:ss.fff zzz"
      enable-mouse-wheel-action
      interval="new smartUtilities.TimeSpan(1, 0, 0)"
      spin-buttons
      spin-buttons-position="left"
      value="new smartUtilities.DateTime(2019, 8, 17, 11, 24, 15, 350, 111, 100, 9, 78, 87, 765, 12, 'Central Standard Time')"
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
smart-date-time-picker {
  width: 320px;
}
</style>
