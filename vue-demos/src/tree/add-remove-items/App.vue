<template>
  <div class="vue-root">
    <smart-tree
      id="tree"
      filterable
      filter-input-placeholder="Filter query..."
      filter-mode="contains"
      show-lines
      show-root-lines
      toggle-element-position="near"
    >
      <smart-tree-items-group id="numbers" expanded>
        Numbers
        <smart-tree-item id="three">3</smart-tree-item>
        <smart-tree-item>2</smart-tree-item>
        <smart-tree-item id="one">1</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group id="letters" expanded>
        Letters
        <smart-tree-item>A</smart-tree-item>
        <smart-tree-item>C</smart-tree-item>
        <smart-tree-item id="zed">Z</smart-tree-item>
        <smart-tree-item>B</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group id="greekLetters" expanded>
        Greek letters
        <smart-tree-item>β</smart-tree-item>
        <smart-tree-item>δ</smart-tree-item>
        <smart-tree-item>α</smart-tree-item>
        <smart-tree-item>γ</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
    <div class="options">
      <div class="caption">Settings</div>
      <smart-button id="addBefore" class="demoButton">Add before "Z"</smart-button>
      <br />
      <br />
      <smart-button id="addAfter" class="demoButton">Add after "3"</smart-button>
      <br />
      <br />
      <smart-button id="addTo" class="demoButton">Add to "Letters"</smart-button>
      <br />
      <br />
      <smart-button id="addGroupTo" class="demoButton">
        Add to
        <br />"Greek letters"
      </smart-button>
      <br />
      <br />
      <smart-button id="removeItem" class="demoButton">Remove "1"</smart-button>
      <br />
      <br />
      <smart-check-box id="sorted">Sorted</smart-check-box>
      <br />
      <br />
      <smart-check-box id="autoSort" checked>Auto sort</smart-check-box>
      <br />
      <em>Note: Items can also be removed by swiping left or right.</em>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      function handleSwipe(event) {
        const originalTarget = event.originalEvent.target,
          closestItem =
            originalTarget.closest("smart-tree-item") ||
            originalTarget.closest("smart-tree-items-group");
        if (closestItem) {
          const remove = window.confirm(
            'Do you wish to remove item "' + closestItem.label + '"?'
          );
          if (remove) {
            tree.removeItem(closestItem);
          }
        }
      }
      const tree = document.getElementById("tree");
      tree.addEventListener("swipeleft", function(event) {
        handleSwipe(event);
      });
      tree.addEventListener("swiperight", function(event) {
        handleSwipe(event);
      });
      document
        .getElementById("addBefore")
        .addEventListener("click", function(event) {
          const newItem = document.createElement("smart-tree-item");
          newItem.label = "Y";
          tree.addBefore(newItem, "zed");
          event.target.disabled = true;
        });
      document
        .getElementById("addAfter")
        .addEventListener("click", function(event) {
          const newItem = document.createElement("smart-tree-item");
          newItem.innerHTML = "0";
          tree.addAfter(newItem, "three");
          event.target.disabled = true;
        });
      document
        .getElementById("addTo")
        .addEventListener("click", function(event) {
          const newItem = document.createElement("smart-tree-item");
          newItem.innerHTML = "D";
          tree.addTo(newItem, "letters");
          event.target.disabled = true;
        });
      document
        .getElementById("addGroupTo")
        .addEventListener("click", function(event) {
          const newItemsGroup = document.createElement(
            "smart-tree-items-group"
          );
          newItemsGroup.innerHTML =
            "Capital letters<smart-tree-item>Α</smart-tree-item><smart-tree-item>Γ</smart-tree-item><smart-tree-item>Δ</smart-tree-item><smart-tree-item>Σ</smart-tree-item><smart-tree-item>Β</smart-tree-item>";
          newItemsGroup.expanded = true;
          tree.addTo(newItemsGroup, "greekLetters");
          event.target.disabled = true;
        });
      document
        .getElementById("removeItem")
        .addEventListener("click", function(event) {
          tree.removeItem("one");
          event.target.disabled = true;
        });
      document
        .getElementById("sorted")
        .addEventListener("change", function(event) {
          tree.sorted = event.detail.value;
        });
      document
        .getElementById("autoSort")
        .addEventListener("change", function(event) {
          tree.autoSort = event.detail.value;
        });
    });
  }
};
</script>

<style>
smart-tree {
  width: 60%;
  height: 450px;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
    height: 100%;
  }
}
</style>
