<template>
  <div class="vue-root">
    <smart-calendar id="calendar"></smart-calendar>
    <div class="options">
      <div class="caption">Choose a locale</div>
      <div class="option">
        <smart-drop-down-list selected-indexes="[0]" id="localePicker"></smart-drop-down-list>
      </div>
      <div class="option">
        <div id="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const comboBox = document.getElementById("localePicker"),
        calendar = document.querySelector("smart-calendar");
      comboBox.dataSource = [
        "en",
        "tr",
        "ar",
        "ru",
        "de",
        "es",
        "pt",
        "fr",
        "zh",
        "ja",
        "it",
        "bg",
        "nl"
      ];
      comboBox.addEventListener("change", function(event) {
        calendar.locale = event.detail.label;
        document.getElementById("log").innerHTML =
          "Current locale is  " + event.detail.label.toUpperCase();
      });
    });
  }
};
</script>

<style>
</style>
