<template>
  <div class="vue-root">
    <smart-tabs id="horizontalTabs1" class="demoTabs" selected-index="1" reorder close-buttons>
      <smart-tab-item label="TAB 1">Content 1</smart-tab-item>
      <smart-tab-item label="TAB 2">Content 2</smart-tab-item>
      <smart-tab-item label="TAB 3">Content 3</smart-tab-item>
      <smart-tab-item label="TAB 4">Content 4</smart-tab-item>
    </smart-tabs>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="reorder">
          Position TAB 4
          <br />at index 0
        </smart-button>
      </div>
      <div class="option">
        <div id="log"></div>
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
      const tabs = [].slice.call(document.getElementsByTagName("smart-tabs")),
        reorder = document.getElementById("reorder"),
        log = document.getElementById("log");
      tabs.map(function(t) {
        t.addEventListener("reorder", function(event) {
          const target = event.target;
          log.innerHTML =
            "Moved a tab from position " +
            event.detail.originalIndex +
            " to position " +
            event.detail.newIndex +
            " in <em>" +
            target.id +
            "</em>.";
        });
      });
      reorder.addEventListener("click", function() {
        tabs[0].getElementsByTagName("smart-tab-item")[3].index = 0;
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
