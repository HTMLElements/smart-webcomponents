<template>
  <div class="vue-root">
    <div class="options">
      <div class="option">Choose an Item</div>
      <div class="option">
        <smart-drop-down-list sorted>
          <smart-list-item>Tabs 0</smart-list-item>
          <smart-list-item>Tabs 1</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <div class="option">Choose a method:</div>
        <smart-button id="insertIntoLeft">InsertIntoLeft</smart-button>
        <br />
        <smart-button id="insertIntoRight">InsertIntoRight</smart-button>
        <br />
        <smart-button id="insertIntoTop">InsertIntoTop</smart-button>
        <br />
        <smart-button id="insertIntoBottom">InsertIntoBottom</smart-button>
      </div>
    </div>
    <smart-docking-layout id="layout"></smart-docking-layout>
    <!-- script -->
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dockinglayout.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const smartDockingLayout = document.querySelector("smart-docking-layout"),
        //input = document.getElementById("indexInput"),
        dropDownList = document.querySelector("smart-drop-down-list"),
        tabsWindowObject = {
          label: "New Item",
          size: "50%",
          items: [
            {
              label: "New Tab Item",
              content: "New Tab Item Content"
            }
          ]
        },
        createListItem = function() {
          const item = document.createElement("smart-list-item");
          item.label = "Tabs " + dropDownList.items.length;
          dropDownList.appendChild(item);
        };
      smartDockingLayout.layout = [
        {
          type: "LayoutPanel",
          label: "Tabs 0",
          items: [
            {
              label: "Tab 0",
              content: "Content of Tab 0"
            }
          ]
        },
        {
          type: "LayoutPanel",
          label: "Tabs 1",
          items: [
            {
              label: "Tab 1",
              content: "Content of Tab 1"
            }
          ]
        }
      ];
      document
        .getElementById("insertIntoLeft")
        .addEventListener("click", function() {
          const index = dropDownList.selectedIndexes[0];
          smartDockingLayout.insertIntoLeft(index, tabsWindowObject);
          createListItem();
        });
      document
        .getElementById("insertIntoRight")
        .addEventListener("click", function() {
          const index = dropDownList.selectedIndexes[0];
          smartDockingLayout.insertIntoRight(index, tabsWindowObject);
          createListItem();
        });
      document
        .getElementById("insertIntoTop")
        .addEventListener("click", function() {
          const index = dropDownList.selectedIndexes[0];
          smartDockingLayout.insertIntoTop(index, tabsWindowObject);
          createListItem();
        });
      document
        .getElementById("insertIntoBottom")
        .addEventListener("click", function() {
          const index = dropDownList.selectedIndexes[0];
          smartDockingLayout.insertIntoBottom(index, tabsWindowObject);
          createListItem();
        });
      smartDockingLayout.addEventListener("stateChange", function() {
        const dockingLayout = smartDockingLayout;
        let layoutItems = dockingLayout.items,
          //index,
          //tabItem,
          i,
          undockedItems = dockingLayout.undockedItems;
        for (i = 0; i < layoutItems.length; i++) {
          layoutItems[i].label = "Tabs " + i;
          layoutItems[i].update(0, "Tab " + i, "Content of Tab " + i);
        }
        for (i = 0; i < undockedItems.length; i++) {
          undockedItems[i].label = "Undocked Tabs";
          undockedItems[i].update(0, "Tab", "Content of Undocked Tab");
        }
      });
    });
  }
};
</script>

<style>
smart-docking-layout {
  width: 50%;
  --smart-splitter-item-size: 50%;
}

smart-docking-layout {
  width: 50%;
  height: 600px;
}

#container {
  margin-left: 0;
}

#insertIntoLeft,
#insertIntoRight,
#insertIntoTop,
#insertIntoBottom {
  width: 100%;
}
</style>
