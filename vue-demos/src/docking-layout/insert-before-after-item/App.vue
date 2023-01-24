<template>
  <div class="vue-root">
    <smart-docking-layout id="layout"></smart-docking-layout>
    <div class="options">
      <div class="caption">Choose an Item</div>
      <div class="option">
        <smart-drop-down-list selected-indexes="[0]" sorted>
          <smart-list-item>Tabs 0</smart-list-item>
          <smart-list-item>Tabs 1</smart-list-item>
          <smart-list-item>Tabs 2</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="caption">Choose a method</div>
      <div class="option">
        <smart-button id="insertBeforeItem">InsertBeforeItem</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertAfterItem">InsertAfterItem</smart-button>
      </div>
    </div>
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
          size: "25%",
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
        },
        {
          type: "LayoutPanel",
          label: "Tabs 2",
          items: [
            {
              label: "Tab 2",
              content: "Content of Tab 2"
            }
          ]
        }
      ];
      let itemsCount = 0;
      document
        .getElementById("insertAfterItem")
        .addEventListener("click", function() {
          if (itemsCount === 1) {
            document.getElementById("insertAfterItem").disabled = true;
            document.getElementById("insertBeforeItem").disabled = true;
          }
          smartDockingLayout.insertAfterItem(
            dropDownList.selectedIndexes[0],
            tabsWindowObject
          );
          createListItem();
          itemsCount++;
        });
      document
        .getElementById("insertBeforeItem")
        .addEventListener("click", function() {
          if (itemsCount === 1) {
            document.getElementById("insertAfterItem").disabled = true;
            document.getElementById("insertBeforeItem").disabled = true;
          }
          smartDockingLayout.insertBeforeItem(
            dropDownList.selectedIndexes[0],
            tabsWindowObject
          );
          createListItem();
          itemsCount++;
        });
      smartDockingLayout.addEventListener("stateChange", function() {
        let layoutItems = smartDockingLayout.items,
          //index,
          //tabItem,
          i;
        let undockedItems = smartDockingLayout.undockedItems;
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
  width: calc(100% - 300px);
}

@media only screen and (max-width: 1400px) {
  smart-docking-layout {
    width: 60%;
  }
}

@media only screen and (max-width: 700px) {
  smart-docking-layout {
    width: 100%;
    position: relative;
    margin: 10px 0px;
  }
}
</style>
