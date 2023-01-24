<template>
  <div class="vue-root">
    <smart-accordion id="accordion">
      <smart-accordion-item label="First Item">First Item Content.</smart-accordion-item>
      <smart-accordion-item label="Second Item">Second Item Content.</smart-accordion-item>
      <smart-accordion-item label="Third Item">Third Item Content.</smart-accordion-item>
      <smart-accordion-item label="Fourth Item">Fourth Item Content.</smart-accordion-item>
    </smart-accordion>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-accordion {
  width: 300px;
  height: 500px;
}
</style>
