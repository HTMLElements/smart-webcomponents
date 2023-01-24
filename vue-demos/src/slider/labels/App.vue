<template>
  <div class="vue-root">
    <smart-slider
      id="horizontalSlider"
      show-tooltip
      min="17"
      max="769"
      value="172"
      scale-position="both"
    ></smart-slider>
    <br />
    <smart-slider
      id="verticalSlider"
      show-tooltip
      orientation="vertical"
      inverted
      min="-100"
      max="0"
      value="-4"
      scale-position="both"
    ></smart-slider>
    <div class="options">
      <div class="option">
        <p>Labels</p>
        <smart-radio-button id="all" name="labelsVisibility" checked>
          <label for="all">All</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="endPoints" name="labelsVisibility">
          <label for="endPoints">Endpoints</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="none" name="labelsVisibility">
          <label for="none">None</label>
        </smart-radio-button>
        <br />
      </div>
      <div class="option">
        <p>Tick Marks</p>
        <smart-radio-button id="major" name="ticksVisibility">
          <label for="major">Major</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="minor" name="ticksVisibility" checked>
          <label for="minor">Minor</label>
        </smart-radio-button>
        <br />
        <smart-radio-button id="noTicks" name="ticksVisibility">
          <label for="noTicks">None</label>
        </smart-radio-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const horizontalSlider = document.getElementById("horizontalSlider"),
        verticalSlider = document.getElementById("verticalSlider");
      // labels
      document
        .getElementById("all")
        .addEventListener("change", function() {
          horizontalSlider.labelsVisibility = "all";
          verticalSlider.labelsVisibility = "all";
        });
      document
        .getElementById("endPoints")
        .addEventListener("change", function() {
          horizontalSlider.labelsVisibility = "endPoints";
          verticalSlider.labelsVisibility = "endPoints";
        });
      document
        .getElementById("none")
        .addEventListener("change", function() {
          horizontalSlider.labelsVisibility = "none";
          verticalSlider.labelsVisibility = "none";
        });
      // ticks
      document
        .getElementById("major")
        .addEventListener("change", function() {
          horizontalSlider.ticksVisibility = "major";
          verticalSlider.ticksVisibility = "major";
        });
      document
        .getElementById("minor")
        .addEventListener("change", function() {
          horizontalSlider.ticksVisibility = "minor";
          verticalSlider.ticksVisibility = "minor";
        });
      document
        .getElementById("noTicks")
        .addEventListener("change", function() {
          horizontalSlider.ticksVisibility = "none";
          verticalSlider.ticksVisibility = "none";
        });
    });
  }
};
</script>

<style>
.container {
  float: left;
  width: 300px;
}

#horizontalSlider {
  width: 570px;
  height: 100px;
}

#verticalSlider {
  width: 120px;
  height: 500px;
  margin-left: 40px;
}
</style>
