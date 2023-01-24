<template>
  <div class="vue-root">
    <smart-calendar></smart-calendar>
    <div class="options">
      <div class="caption">Scroll Buttons Position</div>
      <div class="option">
        <smart-radio-button enable-container-click group-name="a">Near</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click group-name="a">Far</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click checked group-name="a">Both</smart-radio-button>
        <br />
      </div>
      <div class="caption">Scroll Buttons Navigation Mode</div>
      <div class="option">
        <smart-radio-button enable-container-click checked group-name="b">Landscape</smart-radio-button>
        <br />
        <smart-radio-button enable-container-click group-name="b">Portrait</smart-radio-button>
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
      document
        .getElementsByTagName("smart-radio-button")[0]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.scrollButtonsPosition = "near";
          }
        });
      document
        .getElementsByTagName("smart-radio-button")[1]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.scrollButtonsPosition = "far";
          }
        });
      document
        .getElementsByTagName("smart-radio-button")[2]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.scrollButtonsPosition = "both";
          }
        });
      document
        .getElementsByTagName("smart-radio-button")[3]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.scrollButtonsNavigationMode = "landscape";
          }
        });
      document
        .getElementsByTagName("smart-radio-button")[4]
        .addEventListener("change", function(event) {
          if (event.detail.value) {
            calendar.scrollButtonsNavigationMode = "portrait";
          }
        });
    });
  }
};
</script>

<style>
</style>
