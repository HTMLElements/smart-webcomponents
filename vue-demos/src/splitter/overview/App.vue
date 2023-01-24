<template>
  <div class="vue-root">
    <smart-splitter id="main" orientation="horizontal">
      <smart-splitter-item>
        <smart-splitter orientation="vertical"></smart-splitter>
      </smart-splitter-item>
      <smart-splitter-item>
        <smart-splitter orientation="vertical">
          <smart-splitter-item size="20%"></smart-splitter-item>
          <smart-splitter-item></smart-splitter-item>
        </smart-splitter>
      </smart-splitter-item>
    </smart-splitter>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const splitter = document.querySelector("smart-splitter");
      splitter.dataSource = [
        {
          id: "item0",
          size: "50%",
          content:
            "<smart-splitter>" +
            '<smart-splitter-item size="33%" collapsible id="item1">Item 1</smart-splitter-item>' +
            '<smart-splitter-item size="33%" id="item2">Item 2</smart-splitter-item>' +
            '<smart-splitter-item collapsible id="item3">Item 3</smart-splitter-item>' +
            "</smart-splitter>"
        },
        {
          size: "25%",
          id: "item4",
          content: "Item 4"
        },
        {
          id: "item5",
          content: "Item 5"
        }
      ];
    });
  }
};
</script>

<style>
</style>
