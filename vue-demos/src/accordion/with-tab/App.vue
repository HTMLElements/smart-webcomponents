<template>
  <div class="vue-root">
    <smart-accordion id="accordion">
      <smart-accordion-item label="Tabs 1">
        <smart-tabs class="demoTabs" selected-index="1">
          <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
          <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
        </smart-tabs>
      </smart-accordion-item>
      <smart-accordion-item label="Tabs 2">
        <smart-tabs class="demoTabs" selected-index="1">
          <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
          <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
        </smart-tabs>
      </smart-accordion-item>
      <smart-accordion-item label="Tabs 3">
        <smart-tabs class="demoTabs" selected-index="1">
          <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
          <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
          <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
        </smart-tabs>
      </smart-accordion-item>
      <smart-accordion-item label="Tabs 4">
        <smart-tabs class="demoTabs" selected-index="1">
          <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
          <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
          <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
          <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
        </smart-tabs>
      </smart-accordion-item>
    </smart-accordion>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.accordion.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const accordionItems = document.querySelectorAll("smart-accordion-item");
      accordionItems[0].index = 0;
      accordionItems[1].index = 1;
      accordionItems[2].index = 2;
      accordionItems[3].index = 3;
    });
  }
};
</script>

<style>
html,
body,
#app,
.vue-root {
  width: 99%;
  height: 99%;
}

body {
  font-family: Arial, sans-serif;
  margin: 0px auto 0px auto;
  padding: 0px 0px 0px 0px;
  height: 100vh;
}

smart-accordion {
  float: left;
  width: 100%;
  height: 100%;
  margin-right: 50px;
}

.demoTabs {
  width: 100%;
  height: 100%;
}
</style>
