<template>
  <div class="vue-root">
    <smart-date-time-picker
      id="dateTimePicker"
      calendar-button
      drop-down-display-mode="default"
      drop-down-position="center-bottom"
      enable-mouse-wheel-action
      spin-buttons
      spin-buttons-position="left"
    ></smart-date-time-picker>
    <div class="options">
      <div class="caption">Display Mode</div>
      <div class="option">
        <smart-radio-button checked>Default</smart-radio-button>
        <smart-radio-button>Classic (NI theme)</smart-radio-button>
        <smart-radio-button>Calendar only</smart-radio-button>
        <smart-radio-button>Time picker only</smart-radio-button>
        <smart-radio-button>
          Auto (based on
          <strong>formatString</strong>)
        </smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const dateTimePicker = document.getElementById("dateTimePicker"),
        radioButtons = document.getElementsByTagName("smart-radio-button");
      radioButtons[0].addEventListener("change", function() {
        dateTimePicker.dropDownDisplayMode = "default";
      });
      radioButtons[1].addEventListener("change", function() {
        dateTimePicker.dropDownDisplayMode = "classic";
      });
      radioButtons[2].addEventListener("change", function() {
        dateTimePicker.dropDownDisplayMode = "calendar";
      });
      radioButtons[3].addEventListener("change", function() {
        dateTimePicker.dropDownDisplayMode = "timePicker";
      });
      radioButtons[4].addEventListener("change", function() {
        dateTimePicker.dropDownDisplayMode = "auto";
      });
    });
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
