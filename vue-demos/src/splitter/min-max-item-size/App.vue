<template>
  <div class="vue-root">
    <smart-splitter orientation="horizontal" id="horizontalSplitter" class="animation">
      <smart-splitter-item min="200" max="350">
        Min: 200
        <br />Max: 350
        <div class="current-size"></div>
      </smart-splitter-item>
      <smart-splitter-item min="100" max="200">
        Min: 100
        <br />Max: 200
        <div class="current-size"></div>
      </smart-splitter-item>
      <smart-splitter-item min="50" max="300">
        Min: 50
        <br />Max: 300
        <div class="current-size"></div>
      </smart-splitter-item>
    </smart-splitter>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-splitter {
  width: 100%;
}

@media screen and (max-width: 700px) {
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  smart-splitter {
    width: 100%;
    height: 100%;
  }
}
</style>
