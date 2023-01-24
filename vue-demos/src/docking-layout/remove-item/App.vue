<template>
  <div class="vue-root">
    <smart-docking-layout id="layout"></smart-docking-layout>
    <div class="options">
      <div class="option">
        <smart-drop-down-list id="dropDownList">
          <smart-list-item value="tab0">Tab 0</smart-list-item>
          <smart-list-item value="tab1">Tab 1</smart-list-item>
          <smart-list-item value="tab2">Tab 2</smart-list-item>
          <smart-list-item value="tab3">Tab 3</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <smart-button id="remove">Remove</smart-button>
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
      const smartDockingLayout = document.querySelector("smart-docking-layout");
      //const dropDownList = document.querySelector("smart-drop-down-list");
      smartDockingLayout.draggable = false;
      smartDockingLayout.layout = [
        {
          type: "LayoutGroup",
          orientation: "horizontal",
          items: [
            {
              id: "tab0",
              type: "LayoutPanel",
              label: "Tabs 0",
              size: "65%",
              items: [
                {
                  label: "Tab 0",
                  content: "Content of Tab 0"
                }
              ]
            },
            {
              id: "tab1",
              type: "LayoutPanel",
              label: "Tabs 1",
              items: [
                {
                  label: "Tab 1",
                  content: "Content of Tab 1"
                }
              ]
            }
          ]
        },
        {
          type: "LayoutGroup",
          orientation: "horizontal",
          items: [
            {
              id: "tab2",
              type: "LayoutPanel",
              label: "Tabs 2",
              size: "25%",
              items: [
                {
                  label: "Tab 2",
                  content: "Content of Tab 2"
                }
              ]
            },
            {
              id: "tab3",
              type: "LayoutPanel",
              label: "Tabs 3",
              items: [
                {
                  label: "Tab 3",
                  content: "Content of Tab 3"
                }
              ]
            }
          ]
        }
      ];
      let itemsCount = 0;
      document.getElementById("remove").addEventListener("click", function() {
        const dropDownList = document.querySelector("smart-drop-down-list");
        smartDockingLayout.removeAt(dropDownList.selectedValues[0]);
        dropDownList.removeAt(dropDownList.selectedIndexes[0]);
        itemsCount++;
        if (itemsCount === 3) {
          document.getElementById("remove").disabled = true;
          dropDownList.disabled = true;
          return;
        }
      });
    });
  }
};
</script>

<style>
smart-docking-layout {
  width: 75%;
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
