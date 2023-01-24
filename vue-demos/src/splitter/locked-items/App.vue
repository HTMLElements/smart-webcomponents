<template>
  <div class="vue-root">
    <smart-splitter id="horizontalSplitter">
      <smart-splitter-item size="25%">Item 1</smart-splitter-item>
      <smart-splitter-item locked>Item 2 - locked</smart-splitter-item>
      <smart-splitter-item locked>Item 3 - locked</smart-splitter-item>
      <smart-splitter-item size="25%">Item 4</smart-splitter-item>
    </smart-splitter>
    <div class="description">
      Item 2 and Item 3 are Locked. The Size of Item 2 and 3 is maintained on
      resize.
    </div>
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
      // const splitter = document.querySelector("smart-splitter");
    });
  }
};
</script>

<style>
smart-splitter {
  width: 100%;
}

@media screen and (max-width: 700px) {
  smart-splitter {
    width: 100%;
  }
}
</style>
