<template>
  <div class="vue-root">
    <smart-docking-layout id="layout"></smart-docking-layout>
    <div class="options">
      <div class="option">
        <smart-drop-down-list>
          <smart-list-item value="tab1">Tab 1</smart-list-item>
          <smart-list-item value="tab2">Tab 2</smart-list-item>
          <smart-list-item value="tab3">Tab 3</smart-list-item>
        </smart-drop-down-list>
      </div>
      <div class="option">
        <smart-button id="update">Update</smart-button>
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
        dropDownList = document.querySelector("smart-drop-down-list");
      smartDockingLayout.layout = [
        {
          id: "tab1",
          type: "LayoutPanel",
          label: "Tabs 1",
          items: [
            {
              label: "Tab 1",
              content: "Content of Tab 1",
              selected: true
            }
          ]
        },
        {
          id: "tab2",
          type: "LayoutPanel",
          label: "Tabs 2",
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
      ];
      document.getElementById("update").addEventListener("click", function() {
        const targetItem = document.getElementById(
          dropDownList.selectedValues[0]
        );
        if (targetItem) {
          smartDockingLayout.update(targetItem, {
            size: "33%",
            label: "Updated",
            items: [
              {
                index: 0,
                label: "Updated",
                content: "Updated"
              }
            ]
          });
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
