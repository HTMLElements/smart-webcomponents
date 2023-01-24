<template>
  <div class="vue-root">
    <smart-docking-layout id="layout"></smart-docking-layout>
    <div class="options">
      <div class="caption">Snap Mode</div>
      <div class="option">
        <smart-radio-button checked>Advanced</smart-radio-button>
        <smart-radio-button>Simple</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dockinglayout.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.querySelector("smart-docking-layout").layout = [
        {
          id: "item1",
          label: "Tabs 1",
          items: [
            {
              label: "Tab 1",
              content: "Content of Tab 1",
              selected: true
            },
            {
              label: "Tab 2",
              content: "Content of Tab 2"
            }
          ],
          dropPosition: ["top", "bottom", "left", "layout-left", "layout-top"]
        },
        {
          id: "item2",
          label: "Tabs 2",
          items: [
            {
              label: "Tab 3",
              content: "Content of Tab 3"
            }
          ]
        }
      ];
      const radioButtons = document.getElementsByTagName("smart-radio-button");
      for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener("click", function() {
          document.querySelector(
            "smart-docking-layout"
          ).snapMode = this.innerHTML.toLowerCase();
        });
      }
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
