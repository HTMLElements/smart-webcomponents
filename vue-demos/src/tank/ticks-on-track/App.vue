<template>
  <div class="vue-root">
    <smart-tank
      id="tank"
      orientation="vertical"
      min="0"
      max="50"
      value="20"
      scale-position="both"
      ticks-position="track"
    ></smart-tank>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tank.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-tank {
  width: 100%;
  height: 400px;
}
</style>
