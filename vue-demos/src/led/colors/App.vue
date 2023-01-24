<template>
  <div class="vue-root">
    <smart-led></smart-led>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.led.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-led {
  width: 200px;
  height: 200px;
}

smart-led .smart-true-content-container {
  background-color: lightblue;
}
</style>
