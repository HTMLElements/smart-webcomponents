<template>
  <div class="vue-root">
    <smart-menu id="menu" drop-down-append-to="body">
      <smart-menu-items-group>
        Item 0
        <smart-menu-item>Item 0.0</smart-menu-item>
      </smart-menu-items-group>
      <smart-menu-item>Item 1</smart-menu-item>
    </smart-menu>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="addItem" class="demoButton">Add item</smart-button>
      </div>
      <div class="option">
        <smart-button id="addSubItem" class="demoButton">Add to "Item 0"</smart-button>
      </div>
      <div class="option">
        <smart-button id="removeItem" class="demoButton">Remove "Item 1"</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const menu = document.getElementById("menu");
      let itemCount = 1,
        subItemCount = 0;
      const removeButton = document.getElementById("removeItem");
      const addItemButton = document.getElementById("addItem");
      const addSubItemButton = document.getElementById("addSubItem");
      addItemButton.addEventListener("click", function() {
        itemCount++;
        const newItem = document.createElement("smart-menu-item");
        newItem.innerHTML = "Item " + itemCount;
        menu.addItem(newItem);
      });
      addSubItemButton.addEventListener("click", function() {
        subItemCount++;
        const newItem = document.createElement("smart-menu-item");
        newItem.innerHTML = "Item 0." + subItemCount;
        menu.addItem(newItem, 0);
      });
      removeButton.addEventListener("click", function() {
        menu.removeItem(1);
        removeButton.disabled = true;
      });
    });
  }
};
</script>

<style>
smart-menu {
  margin-left: 5%;
}
</style>
