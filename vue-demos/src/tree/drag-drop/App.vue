<template>
  <div class="vue-root">
    <em>
      Note:
      <strong>Communities</strong> cannot be dragged and
      <strong>Financial services</strong> cannot be dropped.
    </em> You
    can drag items only from Tree A. Items in Tree B are not draggable.
    <br />
    <br />
    <smart-tree id="tree1" class="animation" allow-drag allow-drop>
      <smart-tree-item>Home</smart-tree-item>
      <smart-tree-items-group expanded>
        Solutions
        <smart-tree-item>Education</smart-tree-item>
        <smart-tree-item>Transportation</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-item style="color:red;">Communities</smart-tree-item>
      <smart-tree-item style="color:blue;">Financial services</smart-tree-item>
      <smart-tree-items-group>
        Support
        <smart-tree-item>Support home</smart-tree-item>
        <smart-tree-item>Customer Service</smart-tree-item>
        <smart-tree-item>Knowledge base</smart-tree-item>
        <smart-tree-item>Books</smart-tree-item>
        <smart-tree-item>Training and certification</smart-tree-item>
        <smart-tree-item>Support programs</smart-tree-item>
        <smart-tree-item>Forums</smart-tree-item>
        <smart-tree-item>Documentation</smart-tree-item>
        <smart-tree-item>Updates</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
    <smart-tree id="tree2" allow-drop scroll-mode="scrollButtons">
      <smart-tree-item>Products</smart-tree-item>
      <smart-tree-items-group expanded>
        Support
        <smart-tree-item>Support home</smart-tree-item>
        <smart-tree-item>Customer Service</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-item>Knowledge base</smart-tree-item>
      <smart-tree-item>Forum</smart-tree-item>
    </smart-tree>
    <br />
    <br />
    <div style="clear:both;"></div>
    <smart-multiline-text-box placeholder="Drop Tree items here..."></smart-multiline-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.multilinetextbox.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree1 = document.getElementById("tree1");
      tree1.addEventListener("dragStart", function(event) {
        if (event.detail.items[0].label === "Communities") {
          event.preventDefault();
        }
      });
      tree1.addEventListener("dragEnd", function(event) {
        if (event.detail.items[0].label === "Financial services") {
          event.preventDefault();
          return;
        }
        if (!event.detail.container.closest("smart-tree")) {
          const textBox = event.detail.target.closest(
            "smart-multiline-text-box"
          );
          if (textBox) {
            textBox.value = event.detail.items[0].label;
          }
        }
      });
    });
  }
};
</script>

<style>
smart-tree {
  width: 200px;
  margin-left: 50px;
  float: left;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
    margin-left: 0px;
    margin-top: 50px;
  }

  smart-multiline-text-box {
    margin-left: 0px;
    margin-top: 50px;
  }
}

smart-multiline-text-box {
  width: 300px;
  height: 200px;
  margin-left: 50px;
  margin-top: 50px;
}
</style>
