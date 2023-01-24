<template>
  <div class="vue-root">
    <smart-tank
      orientation="horizontal"
      min="0"
      max="10"
      value="5"
      scale-position="both"
      show-unit
      right-to-left
      unit="קג"
    ></smart-tank>
    <br />
    <br />
    <smart-tank
      orientation="vertical"
      min="-100"
      max="0"
      value="-50"
      scale-position="both"
      show-unit
      right-to-left
      unit="קג"
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
</style>
