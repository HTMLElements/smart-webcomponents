<template>
  <div class="vue-root">
    <smart-list-box item-height="36" virtualized id="list"></smart-list-box>
    <br />
    <div class="options">
      <div class="caption">Virtualization</div>
      <div class="option">
        <smart-button id="button">Load 1 million items</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let array = [];
      for (let i = 0; i < 1000000; i++) {
        array.push("Item" + i);
      }
      document.getElementById("button").onclick = function() {
        document.getElementById("list").dataSource = array;
      };
    });
  }
};
</script>

<style>
smart-list-box {
  width: 300px;
  height: 500px;
}
@media only screen and (max-width: 700px) {
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  smart-list-box {
    width: 100%;
    height: 100%;
  }
}
</style>
