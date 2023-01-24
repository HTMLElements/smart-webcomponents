<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Smart.DateRangeInput</b> is an input that allows to select a Date/Date
        range from a Calendar drop down.
      </p>
      <p>
        <b>Readonly</b> will turn the input in to a DatePicker/DateTimePicker.
      </p>
      <p>
        <b>Timepicker</b> will enable/disable time selection from a menu that is
        available when the user clicks on the time icon(string) at the bottom of
        the popup.
      </p>
      <p>
        <b>Icons</b> will enable/disable quick action icons(buttons) inside the
        popup.
      </p>
      <p>
        <b>RenderMode</b> radio buttons allow to change the appearance of the input.
      </p>
    </div>
    <smart-date-range-input placeholder="Please Select" drop-down-button-position="right"></smart-date-range-input>
    <smart-time-box></smart-time-box>
    <smart-time-input></smart-time-input>
    <smart-date-input></smart-date-input>
    <div class="options">
      <div class="description">Readonly DateInput acts as a simple DateTimeInput.</div>
      <div class="option">
        <smart-check-box class="readonly">Readonly</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box class="timepicker">Timepicker</smart-check-box>
      </div>
      <div class="option">
        <smart-check-box class="icons">Icons</smart-check-box>
      </div>
      <div class="option">
        <div class="description">Render Mode</div>
        <smart-radio-button checked class="render-mode">Default</smart-radio-button>
        <smart-radio-button class="render-mode">Outlined</smart-radio-button>
        <smart-radio-button class="render-mode">Underlined</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.daterangeinput.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const input = document.querySelector("smart-date-range-input");
      document
        .querySelector(".options")
        .addEventListener("change", function(event) {
          const target = event.target;
          const targetClassList = target.classList;
          if (targetClassList.contains("readonly")) {
            input.readonly = event.detail.value;
            return;
          }
          if (targetClassList.contains("timepicker")) {
            input.timepicker = event.detail.value;
            return;
          }
          if (targetClassList.contains("icons")) {
            input.icons = event.detail.value;
            return;
          }
          if (targetClassList.contains("render-mode")) {
            input.classList.remove("underlined", "outlined");
            const textContent = target.textContent.toLowerCase();
            if (textContent.indexOf("underlined") > -1) {
              input.classList.add("underlined");
            } else if (textContent.indexOf("outlined") > -1) {
              input.classList.add("outlined");
            }
          }
        });
    });
  }
};
</script>

<style>
</style>
