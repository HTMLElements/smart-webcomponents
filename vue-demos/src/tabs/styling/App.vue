<template>
  <div class="vue-root">
    <smart-tabs class="styleOneTabs demoTabs">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2" selected>Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
    </smart-tabs>
    <br />
    <smart-tabs class="styleOneTabs demoTabs" tab-position="left">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4" selected>Content 4</smart-tab-item>
    </smart-tabs>
    <br />
    <smart-tabs id="styleTwoTab" class="demoTabs">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2" selected>Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
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
  height: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tabs {
    width: 100%;
  }
}
.smart-tabs-selection-bar {
  background: transparent;
}
.styleOneTabs .smart-tab-strip {
  background-color: #3e3e3e;
}

.styleOneTabs .smart-tab-label-container {
  color: #f2f2f2;
}

.styleOneTabs .smart-tab-label-container.smart-tab-selected {
  background-color: #f2f2f2;
  color: black;
}

.styleOneTabs .smart-tab-label-container.smart-tab-hovered {
  background-color: #5e5e5e;
  color: #f2f2f2;
}

#styleTwoTab {
  border-color: #4384b7;
}

#styleTwoTab .smart-tab-strip {
  background-color: #4384b7;
}

#styleTwoTab .smart-tab-label-container {
  border-width: 3px;
  border-style: solid;
  border-color: transparent transparent #4384b7 transparent;
  color: #f2f2f2;
}

#styleTwoTab .smart-tab-label-container.smart-tab-selected,
#styleTwoTab .smart-tab-label-container.smart-tab-hovered {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#styleTwoTab .smart-tab-label-container.smart-tab-selected {
  border-color: #4384b7 #4384b7 #f2f2f2 #4384b7;
  background-color: #f2f2f2;
  color: black;
}

#styleTwoTab .smart-tab-label-container.smart-tab-hovered {
  border-bottom-color: transparent;
  background-color: #366d93;
  color: #f2f2f2;
}
</style>
