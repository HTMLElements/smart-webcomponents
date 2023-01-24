<template>
  <div class="vue-root">
    <smart-tank
      id="horizontalTank"
      orientation="horizontal"
      min="0"
      max="10"
      value="5"
      inverted
      scale-position="both"
    ></smart-tank>
    <br />
    <br />
    <smart-tank
      id="verticalTank"
      orientation="vertical"
      inverted
      min="-100"
      max="0"
      value="-50"
      scale-position="both"
    ></smart-tank>
    <div class="options">
      <div class="option">
        <p>Labels</p>
        <smart-radio-button checked group-name="labelsVisibility">All</smart-radio-button>
        <br />
        <smart-radio-button group-name="labelsVisibility">Endpoints</smart-radio-button>
        <br />
        <smart-radio-button group-name="labelsVisibility">None</smart-radio-button>
      </div>
      <div class="option">
        <p>Tick Marks</p>
        <smart-radio-button group-name="ticksVisibility">Major</smart-radio-button>
        <br />
        <smart-radio-button checked group-name="ticksVisibility">Minor</smart-radio-button>
        <br />
        <smart-radio-button group-name="ticksVisibility">None</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const horizontalTank = document.getElementById("horizontalTank"),
        verticalTank = document.getElementById("verticalTank"),
        labelsVisibility = document.querySelectorAll(
          '[group-name="labelsVisibility"]'
        ),
        ticksVisibility = document.querySelectorAll(
          '[group-name="ticksVisibility"]'
        );
      labelsVisibility[0].addEventListener("change", function() {
        if (labelsVisibility[0].checked) {
          horizontalTank.labelsVisibility = "all";
          verticalTank.labelsVisibility = "all";
        }
      });
      labelsVisibility[1].addEventListener("change", function() {
        if (labelsVisibility[1].checked) {
          horizontalTank.labelsVisibility = "endPoints";
          verticalTank.labelsVisibility = "endPoints";
        }
      });
      labelsVisibility[2].addEventListener("change", function() {
        if (labelsVisibility[2].checked) {
          horizontalTank.labelsVisibility = "none";
          verticalTank.labelsVisibility = "none";
        }
      });
      ticksVisibility[0].addEventListener("change", function() {
        if (ticksVisibility[0].checked) {
          horizontalTank.ticksVisibility = "major";
          verticalTank.ticksVisibility = "major";
        }
      });
      ticksVisibility[1].addEventListener("change", function() {
        if (ticksVisibility[1].checked) {
          horizontalTank.ticksVisibility = "minor";
          verticalTank.ticksVisibility = "minor";
        }
      });
      ticksVisibility[2].addEventListener("change", function() {
        if (ticksVisibility[2].checked) {
          horizontalTank.ticksVisibility = "none";
          verticalTank.ticksVisibility = "none";
        }
      });
    });
  }
};
</script>

<style>
smart-tank {
  width: 300px;
}

smart-tank #verticalTank {
  height: 300px;
  width: 150px;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
