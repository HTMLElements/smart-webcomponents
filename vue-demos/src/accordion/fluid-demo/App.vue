<template>
  <div class="vue-root">
    <smart-accordion id="accordion">
      <smart-accordion-item label="Item 1">Content</smart-accordion-item>
      <smart-accordion-item label="Item 3">Content</smart-accordion-item>
      <smart-accordion-item label="Item 2">Content</smart-accordion-item>
      <smart-accordion-item label="Item 4">Content</smart-accordion-item>
      <smart-accordion-item label="Item 5">Content</smart-accordion-item>
      <smart-accordion-item label="Item 6">Content</smart-accordion-item>
      <smart-accordion-item label="Item 7">Content</smart-accordion-item>
      <smart-accordion-item label="Item 8">Content</smart-accordion-item>
      <smart-accordion-item label="Item 9">Content</smart-accordion-item>
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
body {
  width: 100vw;
  height: 99vh;
  margin: 0px;
  padding: 0px;
}

smart-accordion {
  width: 100%;
  height: 100%;
}
</style>
