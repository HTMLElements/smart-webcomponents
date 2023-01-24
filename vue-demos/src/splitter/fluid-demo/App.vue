<template>
  <div class="vue-root">
    <smart-splitter orientation="horizontal" id="horizontalSplitter"></smart-splitter>
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
          content:
            '<smart-splitter id="verticalSplitter">' +
            '<smart-splitter-item collapsible id="item1">Item 1</smart-splitter-item>' +
            '<smart-splitter-item id="item2">Item 2</smart-splitter-item>' +
            '<smart-splitter-item collapsible id="item3">Item 3</smart-splitter-item>' +
            "</smart-splitter>"
        },
        {
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
html,
body {
  height: 100%;
  margin: 0;
}

#horizontalSplitter #item0 {
  width: 500px;
  height: 250px;
}

#horizontalSplitter #item4 {
  width: 500px;
  height: 250px;
}

#horizontalSplitter #item5 {
  width: 150px;
  height: 150px;
}

#horizontalSplitter {
  width: 100%;
  height: 100%;
}

#verticalSplitter {
  --smart-splitter-item-size: 32.5%;
}
</style>
