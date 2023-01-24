<template>
  <div class="vue-root">
    <div>
      <smart-time-picker id="timePicker" format="24-hour"></smart-time-picker>
    </div>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <div class="container">
          <p>Selection</p>
          <smart-radio-button checked group-name="selection">Hours</smart-radio-button>
          <smart-radio-button group-name="selection">Minutes</smart-radio-button>
        </div>
        <div class="container">
          <p>Minute interval</p>
          <smart-radio-button checked group-name="minuteInterval">1</smart-radio-button>
          <smart-radio-button group-name="minuteInterval">5</smart-radio-button>
          <smart-radio-button group-name="minuteInterval">15</smart-radio-button>
        </div>
        <br />
        <smart-button id="setHours" class="demoButton">Set hours to 20</smart-button>
        <smart-button id="setMinutes" class="demoButton">Set minutes to 12</smart-button>
        <smart-button id="setNow" class="demoButton">Set to now</smart-button>
        <br />
        <br />
        <div>
          Current value:
          <strong id="valueLog"></strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.timepicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const timePicker = document.getElementById("timePicker"),
        valueLog = document.getElementById("valueLog"),
        selection = document.querySelectorAll('[group-name="selection"]'),
        minuteInterval = document.querySelectorAll(
          '[group-name="minuteInterval"]'
        );
      valueLog.innerHTML =
        timePicker.value.getHours() + ":" + timePicker.value.getMinutes();
      timePicker.addEventListener("change", function(event) {
        const value = event.detail.value;
        valueLog.innerHTML = value.getHours() + ":" + value.getMinutes();
      });
      selection[0].addEventListener("change", function() {
        timePicker.selection = "hour";
      });
      selection[1].addEventListener("change", function() {
        timePicker.selection = "minute";
      });
      minuteInterval[0].addEventListener("change", function() {
        timePicker.minuteInterval = 1;
      });
      minuteInterval[1].addEventListener("change", function() {
        timePicker.minuteInterval = 5;
      });
      minuteInterval[2].addEventListener("change", function() {
        timePicker.minuteInterval = 15;
      });
      document.getElementById("setHours").addEventListener("click", function() {
        timePicker.setHours(20);
      });
      document
        .getElementById("setMinutes")
        .addEventListener("click", function() {
          timePicker.setMinutes(12);
        });
      document.getElementById("setNow").addEventListener("click", function() {
        timePicker.value = new Date();
      });
    });
  }
};
</script>

<style>
smart-time-picker {
  width: 300px;
}
@media only screen and (max-width: 700px) {
  smart-time-picker {
    width: 100%;
  }
}
</style>
