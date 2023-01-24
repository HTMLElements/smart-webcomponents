<template>
  <div class="vue-root">
    <smart-tank
      id="tank"
      logarithmic-scale
      orientation="vertical"
      min="1"
      max="1000"
      value="100"
      scale-position="both"
      show-tooltip
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
  width: 250px;
  height: 400px;
}

@media only screen and (max-width: 700px) {
  smart-tank {
    width: 100%;
  }
}
</style>
