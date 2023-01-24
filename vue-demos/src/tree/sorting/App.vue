<template>
  <div class="vue-root">
    <smart-tree
      id="tree1"
      filterable
      show-lines
      show-root-lines
      sort-direction="asc"
      sorted
      toggle-element-position="near"
    >
      <smart-tree-items-group expanded>
        Numbers
        <smart-tree-item>2</smart-tree-item>
        <smart-tree-item>3</smart-tree-item>
        <smart-tree-item>1</smart-tree-item>
        <smart-tree-item>10</smart-tree-item>
        <smart-tree-item>210</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group expanded>
        Letters
        <smart-tree-item value="1000">A</smart-tree-item>
        <smart-tree-item value="50">C</smart-tree-item>
        <smart-tree-item value="30000">D</smart-tree-item>
        <smart-tree-item value="2">B</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group expanded>
        Greek letters
        <smart-tree-item>β</smart-tree-item>
        <smart-tree-item>δ</smart-tree-item>
        <smart-tree-item>α</smart-tree-item>
        <smart-tree-item>γ</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
    <p>Sort direction: ascending</p>
    <br />
    <br />
    <smart-tree
      id="tree2"
      filterable
      show-lines
      show-root-lines
      sort-direction="desc"
      sorted
      toggle-element-position="near"
    >
      <smart-tree-items-group expanded>
        Numbers
        <smart-tree-item>2</smart-tree-item>
        <smart-tree-item>3</smart-tree-item>
        <smart-tree-item>1</smart-tree-item>
        <smart-tree-item>10</smart-tree-item>
        <smart-tree-item>210</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group expanded>
        Letters
        <smart-tree-item value="1000">A</smart-tree-item>
        <smart-tree-item value="50">C</smart-tree-item>
        <smart-tree-item value="30000">D</smart-tree-item>
        <smart-tree-item value="2">B</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group expanded>
        Greek letters
        <smart-tree-item>β</smart-tree-item>
        <smart-tree-item>δ</smart-tree-item>
        <smart-tree-item>α</smart-tree-item>
        <smart-tree-item>γ</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
    <p>Sort direction: descending</p>
    <br />
    <br />
    <smart-tree
      id="tree3"
      filterable
      show-lines
      show-root-lines
      sorted
      toggle-element-position="near"
    >
      <smart-tree-items-group expanded>
        Numbers
        <smart-tree-item>2</smart-tree-item>
        <smart-tree-item>3</smart-tree-item>
        <smart-tree-item>1</smart-tree-item>
        <smart-tree-item>10</smart-tree-item>
        <smart-tree-item>210</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group expanded>
        Letters
        <smart-tree-item value="1000">A</smart-tree-item>
        <smart-tree-item value="50">C</smart-tree-item>
        <smart-tree-item value="30000">D</smart-tree-item>
        <smart-tree-item value="2">B</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group expanded>
        Greek letters
        <smart-tree-item>β</smart-tree-item>
        <smart-tree-item>δ</smart-tree-item>
        <smart-tree-item>α</smart-tree-item>
        <smart-tree-item>γ</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
    <p>Sorting via a custom function</p>
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
      document.getElementById("tree3").sort = customSortingFunction;

      function customSortingFunction(items, parentItem) {
        if (parentItem.label === "Numbers") {
          items.sort(function(a, b) {
            return parseFloat(a.label) - parseFloat(b.label);
          });
        } else if (parentItem.label === "Letters") {
          items.sort(function(a, b) {
            return parseFloat(b.value) - parseFloat(a.value);
          });
        } else {
          // apply default sorting
          items.sort(function(a, b) {
            return a.label.localeCompare(b.label);
          });
        }
      }
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
