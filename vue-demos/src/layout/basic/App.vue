<template>
  <div class="vue-root">
    <smart-layout>
      <smart-layout-item>Item 1</smart-layout-item>
      <smart-layout-item>Item 2</smart-layout-item>
      <smart-layout-group orientation="horizontal">
        <smart-layout-item>Item 3</smart-layout-item>
        <smart-layout-item>Item 4</smart-layout-item>
      </smart-layout-group>
    </smart-layout>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.layout.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
