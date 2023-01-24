<template>
  <div class="vue-root">
    <smart-docking-layout id="layout"></smart-docking-layout>
    <div class="options">
      <div class="option">
        <smart-drop-down-list>
          <smart-list-item value="itemA">ItemA</smart-list-item>
          <smart-list-item value="itemB">ItemB</smart-list-item>
          <smart-list-item value="itemC">ItemC</smart-list-item>
          <smart-list-item value="itemD">ItemD</smart-list-item>
        </smart-drop-down-list>
      </div>
      <br />
      <div class="option">
        <smart-button id="autoHideTop">AutoHideTop</smart-button>
      </div>
      <div class="option">
        <smart-button id="autoHideBottom">AutoHideBottom</smart-button>
      </div>
      <div class="option">
        <smart-button id="autoHideLeft">AutoHideLeft</smart-button>
      </div>
      <div class="option">
        <smart-button id="autoHideRight">AutoHideRight</smart-button>
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
          type: "LayoutGroup",
          orientation: "horizontal",
          items: [
            {
              type: "LayoutPanel",
              label: "Window A",
              items: [
                {
                  id: "itemA",
                  label: "#itemA",
                  content: 'Content of item with id "itemA"',
                  selected: true
                }
              ]
            },
            {
              type: "LayoutGroup",
              id: "verticalGroup",
              orientation: "vertical",
              items: [
                {
                  type: "LayoutPanel",
                  label: "Window B",
                  items: [
                    {
                      id: "itemB",
                      label: "#itemB",
                      content: 'Content of item with id "itemB"'
                    }
                  ]
                },
                {
                  type: "LayoutPanel",
                  label: "Window C",
                  items: [
                    {
                      id: "itemC",
                      label: "#itemC",
                      content: 'Content of item with id "itemC"'
                    }
                  ]
                }
              ]
            },
            {
              type: "LayoutPanel",
              label: "Window D",
              items: [
                {
                  id: "itemD",
                  label: "#itemD",
                  content: 'Content of item with id "itemD"'
                }
              ]
            }
          ]
        }
      ];
      document
        .getElementById("autoHideTop")
        .addEventListener("click", function() {
          smartDockingLayout.autoHideTop(dropDownList.selectedValues[0]);
        });
      document
        .getElementById("autoHideBottom")
        .addEventListener("click", function() {
          smartDockingLayout.autoHideBottom(dropDownList.selectedValues[0]);
        });
      document
        .getElementById("autoHideLeft")
        .addEventListener("click", function() {
          smartDockingLayout.autoHideLeft(dropDownList.selectedValues[0]);
        });
      document
        .getElementById("autoHideRight")
        .addEventListener("click", function() {
          smartDockingLayout.autoHideRight(dropDownList.selectedValues[0]);
        });
    });
  }
};
</script>

<style>
#verticalGroup {
  --smart-splitter-item-size: 50%;
}

smart-docking-layout {
  width: 75%;
  height: 600px;
  --smart-splitter-item-size: 33.3%;
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
