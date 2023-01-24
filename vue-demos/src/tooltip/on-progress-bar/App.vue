<template>
  <div class="vue-root">
    <smart-progress-bar id="linearProgressBar"></smart-progress-bar>
    <smart-tooltip id="tooltip" selector="linearProgressBar" arrow></smart-tooltip>
    <smart-circular-progress-bar id="circularProgressBar"></smart-circular-progress-bar>
    <smart-tooltip id="tooltip2" selector="circularProgressBar" arrow position="left"></smart-tooltip>
    <div class="options">
      <h3>Tooltip Position:</h3>
      <smart-radio-button checked>Top</smart-radio-button>
      <br />
      <smart-radio-button>Bottom</smart-radio-button>
      <br />
      <smart-radio-button>Left</smart-radio-button>
      <br />
      <smart-radio-button>Right</smart-radio-button>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.progressbar.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tooltip.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tooltip = document.getElementById("tooltip");
      const tooltip2 = document.getElementById("tooltip2");
      document
        .getElementsByTagName("smart-radio-button")[0]
        .addEventListener("change", function() {
          tooltip.position = "top";
          tooltip2.position = "top";
        });
      document
        .getElementsByTagName("smart-radio-button")[1]
        .addEventListener("change", function() {
          tooltip.position = "bottom";
          tooltip2.position = "bottom";
        });
      document
        .getElementsByTagName("smart-radio-button")[2]
        .addEventListener("change", function() {
          tooltip.position = "left";
          tooltip2.position = "left";
        });
      document
        .getElementsByTagName("smart-radio-button")[3]
        .addEventListener("change", function() {
          tooltip.position = "right";
          tooltip2.position = "right";
        });
      const progressBar = document.querySelector("smart-progress-bar");
      const circularProgressBar = document.querySelector(
        "smart-circular-progress-bar"
      );

      progressBar.value = 50;
      circularProgressBar.value = 75;
      tooltip.innerHTML = "Progress: " + progressBar.value + "%";
      tooltip2.innerHTML = "Progress: " + circularProgressBar.value + "%";
    });
  }
};
</script>

<style>
smart-progress-bar {
  position: absolute;
  top: 25%;
  left: 15%;
}

smart-circular-progress-bar {
  position: absolute;
  top: 20%;
  left: 35%;
}
</style>
