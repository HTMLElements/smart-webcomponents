<template>
  <div class="vue-root">
    <smart-docking-layout id="layout"></smart-docking-layout>
    <div class="options">
      <div class="caption">Insert Layout</div>
      <div class="option">
        <smart-button id="insertLayoutLeft">Left</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertLayoutRight">Right</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertLayoutTop">Top</smart-button>
      </div>
      <div class="option">
        <smart-button id="insertLayoutBottom">Bottom</smart-button>
      </div>
    </div>
    <br />
    <br />
    <div class="description">Insert Top Level Docking Layout Item on Left, Right, Top, Bottom</div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dockinglayout.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const smartDockingLayout = document.querySelector("smart-docking-layout"),
        //input = document.getElementById("indexInput"),
        tabsWindowObject = {
          label: "New Item",
          items: [
            {
              label: "New Tab Item",
              content: "New Tab Item Content"
            }
          ]
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
      let insertCount = 0;
      const validate = function() {
        insertCount++;
        if (insertCount === 2) {
          document.getElementById("insertLayoutLeft").disabled = true;
          document.getElementById("insertLayoutRight").disabled = true;
          document.getElementById("insertLayoutTop").disabled = true;
          document.getElementById("insertLayoutBottom").disabled = true;
          return true;
        }
        if (insertCount > 2) {
          return false;
        }
        return true;
      };
      document
        .getElementById("insertLayoutLeft")
        .addEventListener("click", function() {
          const result = validate();
          if (!result) {
            return;
          }
          smartDockingLayout.insertLayoutLeft(tabsWindowObject);
        });
      document
        .getElementById("insertLayoutRight")
        .addEventListener("click", function() {
          const result = validate();
          if (!result) {
            return;
          }
          smartDockingLayout.insertLayoutRight(tabsWindowObject);
        });
      document
        .getElementById("insertLayoutTop")
        .addEventListener("click", function() {
          const result = validate();
          if (!result) {
            return;
          }
          smartDockingLayout.insertLayoutTop(tabsWindowObject);
        });
      document
        .getElementById("insertLayoutBottom")
        .addEventListener("click", function() {
          const result = validate();
          if (!result) {
            return;
          }
          smartDockingLayout.insertLayoutBottom(tabsWindowObject);
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
