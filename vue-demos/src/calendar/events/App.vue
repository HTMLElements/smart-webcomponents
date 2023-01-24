<template>
  <div class="vue-root">
    <smart-calendar id="calendar"></smart-calendar>
    <div class="options">
      <div class="caption">Events</div>
      <div class="option" id="log"></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.calendar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const calendar = document.querySelector("smart-calendar");
      calendar.addEventListener("change", function(event) {
        document.getElementById(
          "log"
        ).innerHTML = event.detail.value.toString();
      });
    });
  }
};
</script>

<style>
</style>
