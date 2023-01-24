<template>
  <div class="vue-root">
    <smart-docking-layout id="layout" right-to-left></smart-docking-layout>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dockinglayout.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      document.querySelector("smart-docking-layout").layout = [
        {
          type: "LayoutGroup",
          orientation: "horizontal",
          items: [
            {
              type: "LayoutPanel",
              label: "חלון א",
              items: [
                {
                  id: "Itme",
                  label: "#Itme",
                  content: 'תוכן הפריט עם המזהה "Itme"',
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
                  label: "חלון ב",
                  size: "50%",
                  items: [
                    {
                      id: "פריט ב",
                      label: "#פריט ב",
                      content: 'תוכן הפריט עם המזהה "פריט ב"'
                    }
                  ]
                },
                {
                  type: "LayoutPanel",
                  label: "חלון ג",
                  items: [
                    {
                      id: "פריט ג",
                      label: "#פריט ג",
                      content: 'תוכן הפריט עם המזהה "פריט ג"'
                    }
                  ]
                }
              ]
            },
            {
              type: "LayoutPanel",
              label: "חלון ד",
              items: [
                {
                  id: "פריטים",
                  label: "#פריטים",
                  content: 'תוכן הפריט עם המזהה "פריטים"'
                }
              ]
            }
          ]
        }
      ];
    });
  }
};
</script>

<style>
smart-docking-layout .smart-splitter[orientation="horizontal"] {
  --smart-splitter-item-size: 33.3%;
}

smart-docking-layout {
  width: 75%;
  height: 600px;
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
