<template>
  <div class="vue-root">
    <smart-splitter id="splitter0"></smart-splitter>
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
      const splitter0 = document.getElementById("splitter0");
      splitter0.dataSource = [
        {
          id: "item00",
          collapsible: true,
          content: `Left Pane`,
          size: 200
        },
        {
          id: "item01",
          content:
            '<smart-splitter id="nestedSplitter0" orientation="horizontal">' +
            '<smart-splitter-item size=200 collapsible id="item02" collapsible>Nested Splitter Top Pane</smart-splitter-item>' +
            '<smart-splitter-item id="item03">Nested Splitter Bottom Content</smart-splitter-item>' +
            "</smart-splitter>"
        }
      ];
    });
  }
};
</script>

<style>
smart-splitter {
  width: 100%;
}

@media screen and (max-width: 700px) {
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  smart-splitter {
    width: 100%;
    height: 100%;
  }
}
</style>
