<template>
  <div class="vue-root">
    <smart-tabs id="tabs" class="demoTabs" selected-index="0">
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
    </smart-tabs>
    <div class="options">
      <div class="caption">Choose tab index</div>
      <div class="option">
        <input id="index" type="number" value="0" />
      </div>
      <div class="option">
        <smart-button id="insert" class="demoButton">Insert at index</smart-button>
      </div>
      <div class="option">
        <smart-button id="remove" class="demoButton">Remove at index</smart-button>
      </div>
      <div class="option">
        <smart-button id="update" class="demoButton">Update at index</smart-button>
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
      const tabs = document.getElementById("tabs"),
        index = document.getElementById("index");
      document.getElementById("insert").addEventListener("click", function() {
        tabs.insert(parseInt(index.value), {
          label: "New TAB",
          content: "New content"
        });
      });
      document.getElementById("remove").addEventListener("click", function() {
        tabs.removeAt(parseInt(index.value));
      });
      document.getElementById("update").addEventListener("click", function() {
        tabs.update(parseInt(index.value), "Updated TAB", "Updated content");
      });
    });
  }
};
</script>

<style>
#index {
  border: 1px solid #ddd;
  height: 30px;
  width: 60px;
}
smart-tabs {
  width: 60%;
}
@media only screen and (max-width: 600px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
