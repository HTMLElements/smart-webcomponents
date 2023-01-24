<template>
  <div class="vue-root">
    <smart-calendar
      class="calendar-views"
      view="landscape"
      view-sections="['title', 'header']"
      selection-mode="one"
    ></smart-calendar>
    <div class="options">
      <div class="caption">View Mode</div>
      <div class="option">
        <smart-radio-button checked>Landscape</smart-radio-button>
        <smart-radio-button>Portrait</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar");
      const radioButtons = document.querySelectorAll("smart-radio-button");
      radioButtons[0].addEventListener("change", function() {
        if (radioButtons[0].checked) {
          calendar.view = "landscape";
        }
      });
      radioButtons[1].addEventListener("change", function() {
        if (radioButtons[1].checked) {
          calendar.view = "portrait";
        }
      });
    });
  }
};
</script>

<style>
</style>
