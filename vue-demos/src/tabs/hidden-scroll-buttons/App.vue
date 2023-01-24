<template>
  <div class="vue-root">
    <p>overflow: 'auto'</p>
    <smart-tabs class="demoTabs" selected-index="1" overflow="auto">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
      <smart-tab-item label="TAB 5">Content 5</smart-tab-item>
      <smart-tab-item label="TAB 6">Content 6</smart-tab-item>
      <smart-tab-item label="TAB 7">Content 7</smart-tab-item>
    </smart-tabs>
    <p>overflow: 'hidden'</p>
    <smart-tabs class="demoTabs" selected-index="1" overflow="hidden">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
      <smart-tab-item label="TAB 5">Content 5</smart-tab-item>
      <smart-tab-item label="TAB 6">Content 6</smart-tab-item>
      <smart-tab-item label="TAB 7">Content 7</smart-tab-item>
    </smart-tabs>
    <p>overflow: 'scroll'</p>
    <smart-tabs class="demoTabs" selected-index="1" overflow="scroll">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
      <smart-tab-item label="TAB 5">Content 5</smart-tab-item>
      <smart-tab-item label="TAB 6">Content 6</smart-tab-item>
      <smart-tab-item label="TAB 7">Content 7</smart-tab-item>
    </smart-tabs>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-tabs {
  width: 100%;
  height: 200px;
}
@media only screen and (max-width: 600px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
