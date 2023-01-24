<template>
  <div class="vue-root">
    <smart-tabs class="demoTabs"></smart-tabs>
    <div class="options">
      <div class="caption">Settings</div>
      <div class="option">
        <smart-button id="loadDataSource" class="demoButton">Load a different dataSource</smart-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const tabs = document.querySelector("smart-tabs");
      
      tabs.dataSource = [
        {
          label: "Group 1",
          items: [
            {
              label: "Item 1.1",
              content: "Content 1.1"
            },
            {
              label: "Item 1.2",
              content: "Content 1.2"
            },
            {
              label: "Item 1.3",
              content: "Content 1.3"
            }
          ]
        },
        {
          label: "Item 2",
          content: "Content 2"
        },
        {
          label: "Item 3",
          content: "Content 3",
          selected: true
        }
      ];
      document
        .getElementById("loadDataSource")
        .addEventListener("click", function() {
          tabs.dataSource = [
            {
              label: "Item A",
              content: "Content A",
              index: 3
            },
            {
              label: "Item B",
              content: "Content B",
              index: 2
            },
            {
              label: "Item C",
              content: "Content C",
              index: 1
            },
            {
              label: "Item D",
              labelSize: 80,
              content: "Content D",
              index: 0
            }
          ];
        });
    });
  }
};
</script>

<style>
smart-tabs {
  width: 60%;
}
@media only screen and (max-width: 600px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
