<template>
  <div class="vue-root">
    <smart-slider
      id="slider"
      show-tooltip
      orientation="horizontal"
      min="0"
      max="100"
      value="30"
      scale-position="both"
    ></smart-slider>
    <smart-tank id="tank" show-tooltip min="0" max="100" value="30" scale-position="both"></smart-tank>
    <smart-gauge
      id="gauge"
      analog-display-type="fill"
      digital-display
      start-angle="-30"
      end-angle="210"
      min="0"
      max="100"
      value="0"
    ></smart-gauge>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="redTicks">
          tick color to
          <span style="color: red;">red</span>
        </smart-button>
        <smart-button id="blueTicks">
          tick color to
          <span style="color: blue;">blue</span>
        </smart-button>
        <br />
        <smart-button id="redLabels">
          label color to
          <span style="color: red;">red</span>
        </smart-button>
        <smart-button id="blueLabels">
          label color to
          <span style="color: blue;">blue</span>
        </smart-button>
        <br />
        <smart-button id="resize">Resize elements</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.gauge.js";
import "smart-webcomponents/source/modules/smart.slider.js";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const slider = document.getElementById("slider"),
        tank = document.getElementById("tank"),
        gauge = document.getElementById("gauge");
      document.getElementById("redTicks").addEventListener("click", function() {
        slider.style.setProperty("--smart-border", "red");
        tank.style.setProperty("--smart-border", "red");
        gauge.style.setProperty("--smart-border", "red");
      });
      document
        .getElementById("blueTicks")
        .addEventListener("click", function() {
          slider.style.setProperty("--smart-border", "blue");
          tank.style.setProperty("--smart-border", "blue");
          gauge.style.setProperty("--smart-border", "blue");
        });
      document
        .getElementById("redLabels")
        .addEventListener("click", function() {
          slider.style.setProperty("--smart-background-color", "red");
          tank.style.setProperty("--smart-background-color", "red");
          gauge.style.setProperty("--smart-background-color", "red");
        });
      document
        .getElementById("blueLabels")
        .addEventListener("click", function() {
          slider.style.setProperty("--smart-background-color", "blue");
          tank.style.setProperty("--smart-background-color", "blue");
          gauge.style.setProperty("--smart-background-color", "blue");
        });
      document.getElementById("resize").addEventListener("click", function() {
        slider.style.width = "500px";
        tank.style.height = "100px";
        gauge.style.width = "200px";
      });
    });
  }
};
</script>

<style>
#slider {
  width: 300px;
  height: 100px;
  margin-bottom: 50px;
}

#tank {
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
}

#gauge {
  width: 300px;
}
</style>
