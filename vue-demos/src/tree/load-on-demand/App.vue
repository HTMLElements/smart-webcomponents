<template>
  <div class="vue-root">
    <smart-tree id="tree" class="animation" show-lines show-root-lines>
      <smart-tree-items-group>Group 0</smart-tree-items-group>
      <smart-tree-item>Item 1</smart-tree-item>
      <smart-tree-items-group>Group 2</smart-tree-items-group>
      <smart-tree-items-group>
        Group 3
        <smart-tree-item>Item 1.1</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree = document.getElementById("tree");
      tree.addEventListener("expanding", function(event) {
        if (
          event.detail.label === "Group 2" &&
          event.detail.children.length === 0
        ) {
          const load = window.confirm("Do you wish to load items dynamically?");
          if (!load) {
            event.preventDefault();
          }
        }
      });
      tree.addEventListener("expand", function(event) {
        if (event.detail.children.length > 0) {
          return;
        }
        tree.displayLoadingIndicator = true;
        setTimeout(function() {
          const newItem1 = document.createElement("smart-tree-item"),
            newItem2 = document.createElement("smart-tree-item");
          newItem1.label = "Item " + event.detail.path + ".0";
          newItem2.label = "Item " + event.detail.path + ".1";
          tree.addTo(newItem1, event.detail.item);
          tree.addTo(newItem2, event.detail.item);
          if (event.detail.item.level < 4) {
            const newItemsGroup = document.createElement(
              "smart-tree-items-group"
            );
            newItemsGroup.label = "Group " + event.detail.path + ".2";
            tree.addTo(newItemsGroup, event.detail.item);
          }
          tree.displayLoadingIndicator = false;
        }, 1000);
      });
    });
  }
};
</script>

<style>
smart-tree {
  width: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
  }
}
</style>
