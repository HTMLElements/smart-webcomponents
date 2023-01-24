<template>
  <div class="vue-root">
    <h4>Hint:</h4>
    <p>Double click inside a Splitter Item in order to split it in two section.</p>
    <smart-splitter orientation="horizontal" id="horizontalSplitter">
      <smart-splitter-item>Item 1</smart-splitter-item>
      <smart-splitter-item>Item 2</smart-splitter-item>
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
      splitter.addEventListener("dblclick", function(event) {
        const splitterItem = event.target.closest("smart-splitter-item");
        if (splitterItem) {
          splitterItem.content =
            "<smart-splitter>" +
            "<smart-splitter-item>" +
            splitterItem.innerHTML +
            "</smart-splitter-item>" +
            "<smart-splitter-item>New Item" +
            "</smart-splitter-item>" +
            "</smart-splitter>";
        }
      });
    });
  }
};
</script>

<style>
#horizontalSplitter smart-splitter-item {
  width: 50%;
  height: 50%;
}

#controlPanel {
  margin-top: 1%;
}

#horizontalSplitter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
}
</style>
