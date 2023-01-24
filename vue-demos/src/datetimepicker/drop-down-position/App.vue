<template>
  <div class="vue-root">
    <smart-date-time-picker
      calendar-button
      calendar-button-position="right"
      enable-mouse-wheel-action
      drop-down-position="bottom"
    ></smart-date-time-picker>
    <div class="options">
      <div class="caption">Dropdown Position:</div>
      <div class="option">
        <smart-radio-button checked>Bottom</smart-radio-button>
        <smart-radio-button>Top</smart-radio-button>
        <br />
        <smart-radio-button>Overlay bottom</smart-radio-button>
        <smart-radio-button>Overlay center</smart-radio-button>
        <smart-radio-button>Overlay top</smart-radio-button>
        <br />
        <smart-radio-button>Center bottom</smart-radio-button>
        <smart-radio-button>Center top</smart-radio-button>
      </div>
      <br />
      <div class="caption">Calendar Button Position:</div>
      <div class="option">
        <smart-radio-button>Left</smart-radio-button>
        <smart-radio-button checked>Right</smart-radio-button>
        <smart-radio-button>None</smart-radio-button>
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
      const dateTimePicker = document.querySelector("smart-date-time-picker"),
        radioButtons = document.getElementsByTagName("smart-radio-button");
      radioButtons[0].addEventListener("change", function() {
        dateTimePicker.dropDownPosition = "bottom";
      });
      radioButtons[1].addEventListener("change", function() {
        dateTimePicker.dropDownPosition = "top";
      });
      radioButtons[2].addEventListener("change", function() {
        dateTimePicker.dropDownPosition = "overlay-bottom";
      });
      radioButtons[3].addEventListener("change", function() {
        dateTimePicker.dropDownPosition = "overlay-center";
      });
      radioButtons[4].addEventListener("change", function() {
        dateTimePicker.dropDownPosition = "overlay-top";
      });
      radioButtons[5].addEventListener("change", function() {
        dateTimePicker.dropDownPosition = "center-bottom";
      });
      radioButtons[6].addEventListener("change", function() {
        dateTimePicker.dropDownPosition = "center-top";
      });
      radioButtons[7].addEventListener("change", function() {
        dateTimePicker.calendarButton = true;
        dateTimePicker.calendarButtonPosition = "left";
      });
      radioButtons[8].addEventListener("change", function() {
        dateTimePicker.calendarButton = true;
        dateTimePicker.calendarButtonPosition = "right";
      });
      radioButtons[9].addEventListener("change", function() {
        dateTimePicker.calendarButton = false;
      });
    });
  }
};
</script>

<style>
html,
body {
  height: 700px;
}
smart-date-time-picker {
  top: 350px;
  left: 25%;
  position: relative;
}

@media only screen and (max-width: 600px) {
  html,
  body {
    height: initial;
  }

  .options {
    display: none;
  }
  smart-date-time-picker {
    top: 0px;
    left: 0px;
  }
}
@media only screen and (max-width: 500px) {
  .smart-drop-down.smart-date-time-drop-down {
    left: 125%;
  }
}
</style>
