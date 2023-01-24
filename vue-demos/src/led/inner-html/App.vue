<template>
  <div class="vue-root">
    <smart-led>
      <span class="smart-true-content">Hello</span>
      <span class="smart-false-content">Bye</span>
    </smart-led>
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
  font-size: 20px;
}
</style>
