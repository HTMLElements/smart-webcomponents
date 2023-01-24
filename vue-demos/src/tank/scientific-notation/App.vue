<template>
  <div class="vue-root">
    <smart-tank
      id="tank"
      orientation="vertical"
      min="0"
      max="1000000000"
      value="100"
      scientific-notation
      logarithmic-scale
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
    height: 100%;
  }
  html,
  body,
  #app,
  .vue-root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
