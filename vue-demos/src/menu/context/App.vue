<template>
  <div class="vue-root">
    <p>Right-click anywhere to show the context menu.</p>
    <smart-menu id="menu" mode="dropDown">
      <smart-menu-item label="Default Formatting" separator></smart-menu-item>
      <smart-menu-item label="Format Cells..." separator></smart-menu-item>
      <smart-menu-item label="Insert..."></smart-menu-item>
      <smart-menu-item label="Delete..."></smart-menu-item>
      <smart-menu-item label="Cut"></smart-menu-item>
      <smart-menu-item label="Copy"></smart-menu-item>
      <smart-menu-item label="Paste"></smart-menu-item>
      <smart-menu-item label="Selection List..."></smart-menu-item>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const menu = document.getElementById("menu");
      document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
      });
      document.addEventListener("mousedown", function(event) {
        if (!menu.contains(event.target)) {
          menu.close();
        }
      });
      document.addEventListener("mouseup", function(event) {
        if (event.which === 3 && !menu.contains(event.target)) {
          menu.open(event.pageX, event.pageY);
        }
      });
    });
  }
};
</script>

<style>
#menu {
  height: auto;
}
</style>
