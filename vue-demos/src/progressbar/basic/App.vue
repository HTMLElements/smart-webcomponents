<template>
  <div class="vue-root">
    <smart-progress-bar id="progressbar1"></smart-progress-bar>
    <smart-progress-bar id="progressbar2" orientation="vertical"></smart-progress-bar>
    <smart-circular-progress-bar id="progressbar3"></smart-circular-progress-bar>
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
      document.getElementById("progressbar1").value = 50;
      document.getElementById("progressbar2").value = 50;
      document.getElementById("progressbar3").value = 50;
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
