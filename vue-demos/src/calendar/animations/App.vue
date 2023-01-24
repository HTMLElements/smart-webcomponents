<template>
  <div class="vue-root">
    <h3 id="log">smartCalendar animations On</h3>
    <br />
    <h3 id="animationSwitchLabel">Toggle animation</h3>
    <smart-switch-button id="animationSwitch" switch-mode="click" checked>
      <span class="smart-true-content">ON</span>
      <span class="smart-false-content">OFF</span>
    </smart-switch-button>
    <smart-calendar id="calendar" class="animation"></smart-calendar>
    <br />
    <h3 id="animationDirectionSwitchLabel">Animation direction</h3>
    <smart-switch-button id="animationDirectionSwitch" switch-mode="click" checked>
      <span class="smart-true-content">Landscape</span>
      <span class="smart-false-content">Portrait</span>
    </smart-switch-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";
import "smart-webcomponents/source/modules/smart.switchbutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar"),
        animationSwitch = document.getElementById("animationSwitch"),
        animationDirectionSwitch = document.getElementById(
          "animationDirectionSwitch"
        );
      animationSwitch.addEventListener("change", function(event) {
        if (event.detail.value) {
          calendar.animation = "advanced";
        } else {
          calendar.animation = "none";
        }
        document.getElementById("log").innerHTML =
          "smartCalendar animations " + (event.detail.value ? "On" : "Off");
      });
      animationDirectionSwitch.addEventListener("change", function(event) {
        if (event.detail.value) {
          calendar.scrollButtonsNavigationMode = "landscape";
        } else {
          calendar.scrollButtonsNavigationMode = "portrait";
        }
      });
    });
  }
};
</script>

<style>
</style>
