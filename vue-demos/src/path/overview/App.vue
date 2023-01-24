<template>
  <div class="vue-root">
    <smart-path
      label="Path Control"
      value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"
    ></smart-path>
    <smart-path
      indicator
      label="Path Indicator"
      value="C:\Users\Inowotny\Documents\LabVIEW Projects\PathControlPlay\DesktopPath.gvi"
    ></smart-path>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.path.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-path {
  float: left;
  margin: 2.5%;
}
</style>
