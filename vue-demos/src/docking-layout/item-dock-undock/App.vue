<template>
  <div class="vue-root">
    <smart-docking-layout id="layout"></smart-docking-layout>
    <div class="options">
      <div class="caption">Choose an Item</div>
      <div class="option">
        <smart-drop-down-list sorted>
          <smart-list-item value="A">Tabs A</smart-list-item>
          <smart-list-item value="B">Tabs B</smart-list-item>
          <smart-list-item value="C">Tabs C</smart-list-item>
          <smart-list-item value="D">Tabs D</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <smart-button id="dock">Dock</smart-button>
      </div>
      <div class="option">
        <smart-button id="undock">Undock</smart-button>
      </div>
    </div>
    <br />
    <br />
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
        dropDownList = document.querySelector("smart-drop-down-list");
      smartDockingLayout.layout = [
        {
          type: "LayoutPanel",
          items: [
            {
              id: "A",
              label: "A",
              content: "Content of item with id #itemA",
              selected: true
            }
          ],
          autoHide: true,
          autoHidePosition: "top"
        },
        {
          type: "LayoutPanel",
          items: [
            {
              id: "B",
              label: "B",
              content: "Content of item with id #itemB"
            }
          ],
          autoHide: true,
          autoHidePosition: "left"
        },
        {
          type: "LayoutPanel",
          items: [
            {
              id: "C",
              label: "C",
              content: "Content of item with id #itemC"
            }
          ],
          autoHide: true,
          autoHidePosition: "right"
        },
        {
          type: "LayoutPanel",
          items: [
            {
              id: "D",
              label: "D",
              content: "Content of item with id #itemD"
            }
          ],
          autoHide: true,
          autoHidePosition: "bottom"
        }
      ];
      //const input = document.getElementById("indexInput"),
      // inputPosition = document.getElementById("positionInput");
      document.getElementById("dock").addEventListener("click", function() {
        smartDockingLayout.dock(dropDownList.selectedValues[0]);
      });
      document.getElementById("undock").addEventListener("click", function() {
        smartDockingLayout.undock(dropDownList.selectedValues[0]);
      });
    });
  }
};
</script>

<style>
smart-docking-layout
  .smart-items-container
  > .smart-container
  > smart-splitter-item {
  width: 50%;
}

smart-docking-layout {
  width: 50%;
  height: 600px;
}

#container {
  margin-left: 0;
}
</style>
