<template>
  <div class="vue-root">
    <smart-gauge
      id="gauge"
      analog-display-type="fill"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="30"
    ></smart-gauge>
    <div class="options">
      <div class="caption">Analog Display Type</div>
      <div class="option">
        <smart-radio-button enable-container-click group-name="analogDisplayType">needle</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click checked group-name="analogDisplayType">fill</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click group-name="analogDisplayType">line</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.gauge.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const analogDisplayTypeRadioButtons = document.querySelectorAll(
          '[group-name="analogDisplayType"]'
        ),
        gauge = document.getElementById("gauge");
      analogDisplayTypeRadioButtons[0].addEventListener("change", function() {
        gauge.analogDisplayType = "needle";
      });
      analogDisplayTypeRadioButtons[1].addEventListener("change", function() {
        gauge.analogDisplayType = "fill";
      });
      analogDisplayTypeRadioButtons[2].addEventListener("change", function() {
        gauge.analogDisplayType = "line";
      });
    });
  }
};
</script>

<style>
smart-gauge {
  width: 250px;
}
</style>
