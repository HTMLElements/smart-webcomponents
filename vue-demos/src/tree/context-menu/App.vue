<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>Right click on a Tree item to open the Context menu for the target item.</p>
    </div>
    <smart-tree id="tree">
      <smart-tree-items-group expanded>
        <i class="material-icons">fastfood</i> Fast Food
        <smart-tree-item>Subway</smart-tree-item>
        <smart-tree-item>Starbucks</smart-tree-item>
        <smart-tree-item>McDonald's</smart-tree-item>
        <smart-tree-item>Dunkin</smart-tree-item>
        <smart-tree-item>Burger King</smart-tree-item>
        <smart-tree-item>Pizza Hut</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">local_pizza</i> Pizza
        <smart-tree-item>Margherita</smart-tree-item>
        <smart-tree-item>Carbonara</smart-tree-item>
        <smart-tree-item>Quattro Stagioni</smart-tree-item>
        <smart-tree-item>Crudo</smart-tree-item>
        <smart-tree-item>Napoletana</smart-tree-item>
        <smart-tree-item>Frutti di Mare</smart-tree-item>
        <smart-tree-item>Diavola</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">local_bar</i> Drinks
        <smart-tree-item>Wine</smart-tree-item>
        <smart-tree-item>Coffee</smart-tree-item>
        <smart-tree-item>Lemonade</smart-tree-item>
        <smart-tree-item>Iced tea</smart-tree-item>
        <smart-tree-item>Milkshake</smart-tree-item>
      </smart-tree-items-group>
      <smart-tree-items-group>
        <i class="material-icons">cake</i> Snacks
        <smart-tree-item>Hummus</smart-tree-item>
        <smart-tree-item>Candy</smart-tree-item>
        <smart-tree-item>Snack Bars</smart-tree-item>
        <smart-tree-item>Nuts</smart-tree-item>
        <smart-tree-item>Crackers</smart-tree-item>
      </smart-tree-items-group>
    </smart-tree>
    <smart-menu mode="dropDown" close-action="down">
      <smart-menu-item value="addAfter">
        <i class="material-icons">playlist_add</i>Add new sibling item
      </smart-menu-item>
      <smart-menu-item value="addTo">
        <i class="material-icons">playlist_add</i>Add new child item
      </smart-menu-item>
      <smart-menu-item value="removeItem">
        <i class="material-icons">delete</i>Delete item
      </smart-menu-item>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.menu.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tree = document.querySelector("smart-tree"),
        menu = document.querySelector("smart-menu");
      let item, itemGroup;
      tree.addEventListener("contextmenu", function(event) {
        const target = event.target;
        item = target.closest("smart-tree-item");
        itemGroup = target.closest("smart-tree-items-group");
        if (!item && !itemGroup) {
          return;
        }
        //Prevent default context menu
        event.preventDefault();
        const menuItems = menu.items;
        for (let i in menuItems) {
          const menuItem = menuItems[i];
          if (menuItem.value === "addTo" && item) {
            menuItem.disabled = true;
          } else {
            menuItem.disabled = false;
          }
        }
        //Open Smart.Menu
        menu.open(event.pageX, event.pageY);
      });
      menu.addEventListener("itemClick", function(event) {
        const eventDetail = event.detail,
          methodName = eventDetail.value;
        switch (methodName) {
          case "addAfter":
          case "addTo":
            {
              const newItem = document.createElement("smart-tree-item");
              newItem.label = "New item";
              tree[methodName](
                newItem,
                methodName === "addTo" ? itemGroup : item || itemGroup
              );
            }
            break;
          case "removeItem":
            tree[methodName](item || itemGroup);
            break;
        }
      });
    });
  }
};
</script>

<style>
/* fallback */

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

smart-tree {
  width: 60%;
  height: auto;
}

@media only screen and (max-width: 700px) {
  smart-tree {
    width: 100%;
    height: 100%;
  }
  body,
  html {
    width: 100%;
    height: 100%;
  }
}

smart-menu {
  --smart-menu-vertical-default-width: auto;
  --smart-menu-vertical-default-height: auto;
}

.material-icons {
  margin-right: 5px;
  font-size: 16px;
}
</style>
