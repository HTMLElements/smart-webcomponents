<template>
  <div class="vue-root">
    <smart-splitter id="horizontalSplitter">
      <smart-splitter-item size="25%" collapsible>Item 1</smart-splitter-item>
      <smart-splitter-item size="25%" collapsible>item 2</smart-splitter-item>
      <smart-splitter-item collapsible>item 3</smart-splitter-item>
    </smart-splitter>
    <div class="options">
      <div class="caption">Methods</div>
      <div class="option">
        <smart-button id="appendItem">Append Item</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertBefore">Insert Before</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeItem">Remove Item</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertButton">Insert</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeButton">Remove</smart-button>
      </div>
      <div class="option">
        <smart-button id="collapseItem">Collapse</smart-button>
      </div>
      <div class="option">
        <smart-button id="expandItem">Expand</smart-button>
      </div>
      <div class="option">
        <smart-button id="showSplitterBar">Show Splitter Bar</smart-button>
      </div>
      <div class="option">
        <smart-button id="hideSplitterBar">Hide Splitter Bar</smart-button>
      </div>
      <div class="option">
        <smart-button id="lockSplitterItem">Lock Splitter Item</smart-button>
      </div>
      <div class="option">
        <smart-button id="unlockSplitterItem">Unlock Splitter Item</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const splitter = document.querySelector("smart-splitter");
      document
        .getElementById("appendItem")
        .addEventListener("click", function() {
          if (splitter.items.length === 0) {
            return;
          }
          const item = document.createElement("smart-splitter-item");
          item.innerHTML = "New Item Content";
          splitter.appendChild(item);
        });
      document
        .getElementById("insertBefore")
        .addEventListener("click", function() {
          if (splitter.items.length === 0) {
            return;
          }
          const item = document.createElement("smart-splitter-item");
          item.innerHTML = "New Item Content";
          splitter.insertBefore(item, splitter.items[0]);
        });
      document
        .getElementById("removeItem")
        .addEventListener("click", function() {
          if (splitter.items.length === 0) {
            return;
          }
          splitter.removeChild(splitter.items[0]);
        });
      document
        .getElementById("insertButton")
        .addEventListener("click", function() {
          if (splitter.items.length === 0) {
            return;
          }
          splitter.insert(0, {
            content: "Newly Inserted Item"
          });
        });
      document
        .getElementById("removeButton")
        .addEventListener("click", function() {
          if (splitter.items.length === 0) {
            return;
          }
          splitter.removeAt(0);
        });
      document
        .getElementById("showSplitterBar")
        .addEventListener("click", function() {
          if (splitter.items.length === 0) {
            return;
          }
          splitter.showBar(0);
        });
      document
        .getElementById("hideSplitterBar")
        .addEventListener("click", function() {
          splitter.hideBar(0);
        });
      document
        .getElementById("collapseItem")
        .addEventListener("click", function() {
          splitter.collapse(0);
        });
      document
        .getElementById("expandItem")
        .addEventListener("click", function() {
          splitter.expand(0);
        });
      document
        .getElementById("lockSplitterItem")
        .addEventListener("click", function() {
          splitter.lockItem(0);
        });
      document
        .getElementById("unlockSplitterItem")
        .addEventListener("click", function() {
          splitter.unlockItem(0);
        });
    });
  }
};
</script>

<style>
smart-splitter {
  width: 60%;
}

@media screen and (max-width: 700px) {
  smart-splitter {
    width: 100%;
  }
}
</style>
