<template>
  <div class="vue-root">
    <smart-drop-down-button drop-down-width="auto">
      <smart-tree>
        <smart-tree-item>Home</smart-tree-item>
        <smart-tree-items-group>
          Solutions
          <smart-tree-item>Education</smart-tree-item>
          <smart-tree-item>Financial services</smart-tree-item>
          <smart-tree-item>Government</smart-tree-item>
          <smart-tree-item>Manufacturing</smart-tree-item>
          <smart-tree-item>All industries and solutions</smart-tree-item>
        </smart-tree-items-group>
        <smart-tree-items-group expanded>
          Products
          <smart-tree-item>PC products</smart-tree-item>
          <smart-tree-item>Mobile products</smart-tree-item>
          <smart-tree-item>All products</smart-tree-item>
        </smart-tree-items-group>
      </smart-tree>
    </smart-drop-down-button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dropdownbutton.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      var dropDownButton = document.querySelector("smart-drop-down-button"),
        tree = dropDownButton.querySelector("smart-tree");
      //Get the label of the selected tree item
      tree.whenRendered(() => {
        dropDownButton.placeholder = tree.querySelector(
          "smart-tree-item[selected], smart-tree-items-group[selected]"
        ).label;
      });
      dropDownButton.addEventListener("change", function() {
        dropDownButton.placeholder = event.detail.item.label;
      });
    });
  }
};
</script>

<style>
smart-drop-down-button {
  --smart-editor-drop-down-max-height: none;
  width: 225px;
}

smart-drop-down-button smart-tree {
  height: auto;
}

.smart-drop-down smart-tree {
  border: 0;
}
</style>
