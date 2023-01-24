<template>
  <div class="vue-root">
    <smart-tree id="tree" class="animation" show-lines show-root-lines>
      <smart-tree-items-group id="numbers" expanded>
        Numbers
        <smart-tree-item>3</smart-tree-item>
        <smart-tree-item>2</smart-tree-item>
        <smart-tree-item id="one">1</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group id="letters" expanded>
        Letters
        <smart-tree-item>A</smart-tree-item>
        <smart-tree-item>C</smart-tree-item>
        <smart-tree-item>Z</smart-tree-item>
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
      <div class="option">
        <smart-button id="moveUp" title="Move selected item up">Up</smart-button>
        <smart-button id="moveDown" title="Move selected item down">Down</smart-button>
      </div>
    </div>
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
      const tree = document.getElementById("tree");
      document.getElementById("moveUp").addEventListener("click", function() {
        const selectedItem = tree.getItem(tree.selectedIndexes[0]);
        tree.moveUp(selectedItem);
      });
      document.getElementById("moveDown").addEventListener("click", function() {
        const selectedItem = tree.getItem(tree.selectedIndexes[0]);
        tree.moveDown(selectedItem);
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

smart-button {
  font-family: "smart-icons";
  font-size: 16px;
}
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
