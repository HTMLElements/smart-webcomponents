<template>
  <div class="vue-root">
    <div id="tabs"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.tabs.innerHTML = `
<smart-tabs class="demoTabs" selected-index="1">
<smart-tab-item label="TAB 1">Content 1</smart-tab-item>
<smart-tab-item label="TAB 2">Content 2</smart-tab-item>
<smart-tab-item label="TAB 3">Content 3</smart-tab-item>
<smart-tab-item label="TAB 4">Content 4</smart-tab-item>
</smart-tabs>
`;
    });
  }
};
</script>

<style>
</style>
