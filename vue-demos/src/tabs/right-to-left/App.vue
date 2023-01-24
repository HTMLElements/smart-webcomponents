<template>
  <div class="vue-root">
    <smart-tabs class="demoTabs" selected-index="0" right-to-left>
      <smart-tab-item label="לוח 1">תוכן 1</smart-tab-item>
      <smart-tab-item label="לוח 2">תוכן 2</smart-tab-item>
      <smart-tab-item label="לוח 3">תוכן 3</smart-tab-item>
      <smart-tab-item label="לוח 4">תוכן 4</smart-tab-item>
      <smart-tab-item label="לוח 5">תוכן 5</smart-tab-item>
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
</style>
