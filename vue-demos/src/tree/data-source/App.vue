<template>
  <div class="vue-root">
    <smart-tree
      id="tree"
      scroll-mode="scrollbar"
      class="animation"
      selection-mode="oneOrMany"
      show-lines
    ></smart-tree>
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
      const treeDataSource = [
        {
          label: "Cats",
          selected: true,
          items: [
            {
              label: "Tiger",
              selected: true
            },
            {
              label: "Lion"
            },
            {
              label: "Jaguar"
            },
            {
              label: "Leopard"
            },
            {
              label: "Serval"
            },
            {
              label: "Domestic cat"
            }
          ]
        },
        {
          label: "Dogs",
          //   expanded: true,
          items: [
            {
              label: "Gray wolf"
            },
            {
              label: "Ethiopian wolf",
              selected: true
            },
            {
              label: "Arctic fox",
              selected: true
            },
            {
              label: "Dingo"
            },
            {
              label: "Domestic dog",
              selected: true
            }
          ]
        }
      ];
      document.getElementById("tree").dataSource = treeDataSource;
    });
  }
};
</script>

<style>
</style>
