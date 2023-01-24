<template>
  <div class="vue-root">
    <i>Hint: Scroll to the bottom to lazy load items.</i>
    <smart-list-menu id="listMenu">
      <smart-menu-item>Janet Leverling</smart-menu-item>
      <smart-menu-item>Andrew Fuller</smart-menu-item>
      <smart-menu-item>Robert King</smart-menu-item>
      <smart-menu-item>Anne Dodsworth</smart-menu-item>
      <smart-menu-item>Margaret Peacock</smart-menu-item>
      <smart-menu-item>Michael Suyama</smart-menu-item>
      <smart-menu-item>Nancy Davolio</smart-menu-item>
      <smart-menu-item>Steven Buchanan</smart-menu-item>
      <smart-menu-item>Laura Callahan</smart-menu-item>
    </smart-list-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listmenu.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const listMenu = document.getElementById("listMenu");
      listMenu.addEventListener("scrollBottomReached", function() {
        listMenu.displayLoadingIndicator = true;
        setTimeout(function() {
          for (let i = 0; i < 5; i++) {
            const newItem = document.createElement("smart-menu-items-group");
            newItem.value = "emptyItem";
            listMenu.addItem(newItem);
          }
          listMenu.displayLoadingIndicator = false;
        }, 1000);
      });
      listMenu.addEventListener("expand", function(event) {
        if (event.detail.value === "emptyItem") {
          listMenu.displayLoadingIndicator = true;
          setTimeout(function() {
            for (let i = 0; i < 3; i++) {
              const newItem = document.createElement("smart-menu-item");
              listMenu.addItem(newItem, event.detail.path);
            }
            listMenu.displayLoadingIndicator = false;
          }, 1000);
          event.detail.item.value = "populatedItem";
        }
      });
    });
  }
};
</script>

<style>
#listMenu {
  height: 300px;
}
</style>
