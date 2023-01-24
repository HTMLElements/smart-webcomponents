<template>
  <div class="vue-root">
    <em>Note: Sub-items can be removed by swiping left or right and can be edited by double-clicking or pressing F2.</em>
    <br />
    <br />
    <smart-tree id="tree" editable show-lines show-root-lines toggle-element-position="near">
      <smart-tree-items-group expanded>
        Groceries
        <smart-tree-item>Bread</smart-tree-item>
        <smart-tree-item>Milk</smart-tree-item>
        <smart-tree-item>Potatoes</smart-tree-item>
        <smart-tree-item label="editorTemplate"></smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group expanded>
        To do
        <smart-tree-item>Check car</smart-tree-item>
        <smart-tree-item>Attend board meeting</smart-tree-item>
        <smart-tree-item>Take kids from school</smart-tree-item>
        <smart-tree-item>Change light bulb</smart-tree-item>
        <smart-tree-item label="editorTemplate"></smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const editorTemplate = document.createElement("template");
      editorTemplate.id = "editorTemplate";
      editorTemplate.innerHTML = `<input class="tree-input" placeholder="New item..." />
      <smart-button class="btn primary" title="Add item">+</smart-button>`;
      document.body.appendChild(editorTemplate);

      function handleSwipe(event) {
        const originalTarget = event.originalEvent.target,
          closestItem =
            originalTarget.closest("smart-tree-item") ||
            originalTarget.closest("smart-tree-items-group");
        if (
          closestItem &&
          closestItem.level > 1 &&
          closestItem.label !== "editorTemplate"
        ) {
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
      tree.addEventListener("click", function(event) {
        const target = event.target;
        const button = target.closest("smart-button");
        if (!button) {
          return;
        }
        const input = button.previousElementSibling,
          //treeItemsGroup = button.closest("smart-tree-items-group");
          editorItem = button.closest("smart-tree-item");
        if (input.value) {
          const newItem = document.createElement("smart-tree-item");
          newItem.innerHTML = input.value;
          tree.addBefore(newItem, editorItem);
          input.value = "";
        }
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

.tree-input {
  height: 30px;
  width: 200px;
  outline: none;
}

.btn {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: block;
  position: absolute;
  right: 16px;
  top: 12px;
}

smart-button {
  border: none;
  font-family: "smart-icons";
}
</style>
