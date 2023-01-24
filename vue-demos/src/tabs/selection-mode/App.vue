<template>
  <div class="vue-root">
    <p>selectionMode: 'none'; Click the button to select another tab.</p>
    <smart-tabs class="demoTabsShort" id="fourthTabs" selection-mode="none" selected-index="3">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <p>selectionMode: 'click'</p>
    <smart-tabs class="demoTabsShort" selection-mode="click" selected-index="0">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <p>selectionMode: 'dblclick'</p>
    <smart-tabs class="demoTabsShort" selection-mode="dblclick" selected-index="1">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <p>selectionMode: 'mouseenter'</p>
    <smart-tabs class="demoTabsShort" selection-mode="mouseenter" selected-index="2">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <br />
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="selectFirstTab" class="demoButton">Select first tab</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document
        .getElementById("selectFirstTab")
        .addEventListener("click", function() {
          document.getElementById("fourthTabs").select(0);
        });
    });
  }
};
</script>

<style>
smart-tabs {
  width: 60%;
  height: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
