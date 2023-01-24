<template>
  <div class="vue-root">
    <smart-progress-bar show-progress-value right-to-left></smart-progress-bar>
    <smart-progress-bar orientation="vertical" show-progress-value right-to-left></smart-progress-bar>
    <smart-circular-progress-bar show-progress-value right-to-left></smart-circular-progress-bar>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.progressbar.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const progressBars = document.querySelectorAll("smart-progress-bar");
      progressBars[0].value = 50;
      progressBars[1].value = 50;

      const circularProgressBars = document.querySelectorAll(
        "smart-circular-progress-bar"
      );
      circularProgressBars[0].value = 50;

      for (let i = 0; i < progressBars.length; i++) {
        progressBars[i].formatFunction = value => value + "%";
      }
      for (let i = 0; i < circularProgressBars.length; i++) {
        circularProgressBars[i].formatFunction = value => value + "%";
      }
    });
  }
};
</script>

<style>
#progressbar1 {
  margin-bottom: 20px;
}

#progressbar3 {
  margin-top: 20px;
}
</style>
