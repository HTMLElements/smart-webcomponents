<template>
  <div class="vue-root">
    <smart-date-time-picker
      class="demoDateTimePickerWide"
      calendar-button
      enable-mouse-wheel-action
      spin-buttons
      spin-buttons-position="left"
    ></smart-date-time-picker>
    <div class="options">
      <div class="caption">Formats</div>
      <div class="option">
        <smart-drop-down-list id="chooseFormat">
          <smart-list-item value="dd-MMM-yy HH:mm:ss.fff" selected>default pattern</smart-list-item>
          <smart-list-item value="d">short date pattern</smart-list-item>
          <smart-list-item value="D">long date pattern</smart-list-item>
          <smart-list-item value="t">short time pattern</smart-list-item>
          <smart-list-item value="T">long time pattern</smart-list-item>
          <smart-list-item value="f">long date, short time pattern</smart-list-item>
          <smart-list-item value="F">long date, long time pattern</smart-list-item>
          <smart-list-item value="M">month/day pattern</smart-list-item>
          <smart-list-item value="Y">month/year pattern</smart-list-item>
          <smart-list-item value="FP">full precision</smart-list-item>
          <smart-list-item value="FT">full precision time</smart-list-item>
          <smart-list-item value="PP">processor precision</smart-list-item>
          <smart-list-item value="PT">processor precision time</smart-list-item>
          <smart-list-item value="dddd-MMMM-yyyy">custom</smart-list-item>
        </smart-drop-down-list>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dateTimePicker = document.getElementsByTagName(
        "smart-date-time-picker"
      )[0];
      document
        .getElementById("chooseFormat")
        .addEventListener("change", function(event) {
          dateTimePicker.formatString = event.detail.value;
        });
    });
  }
};
</script>

<style>
smart-date-time-picker {
  position: relative;
  width: 300px;
  left: 5px;
}
</style>
