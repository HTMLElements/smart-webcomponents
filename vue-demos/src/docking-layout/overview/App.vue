<template>
  <div class="vue-root">
    <smart-docking-layout></smart-docking-layout>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dockinglayout.js";
import "smart-webcomponents/source/modules/smart.textbox.js";
import "smart-webcomponents/source/modules/smart.slider.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const docking = document.querySelector("smart-docking-layout");
      docking.layout = [
        {
          type: "LayoutGroup",
          orientation: "horizontal",
          items: [
            {
              type: "LayoutGroup",
              items: [
                {
                  type: "LayoutPanel",
                  id: "tabPanel",
                  label: "Input",
                  items: [
                    {
                      label: "TextBox Tab",
                      content:
                        '<smart-multiline-text-box id="multiLine">Write more text here ...</smart-multiline-text-box>'
                    },
                    {
                      label: "Slider Tab",
                      content: '<smart-slider id="slider"></smart-slider>'
                    }
                  ]
                },
                {
                  type: "LayoutPanel",
                  label: "Output",
                  items: [
                    {
                      id: "outputTab",
                      label: "Output",
                      headerPosition: "none",
                      content: "Write more text here ..."
                    }
                  ]
                }
              ],
              orientation: "vertical"
            },
            {
              id: "item0",
              label: "Tabs 0",
              items: [
                {
                  label: "Tab A",
                  selected: true,
                  content:
                    "What is Lorem Ipsum?\n" +
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of" +
                    "type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in " +
                    "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n" +
                    "Why do we use it?\n" +
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal " +
                    "distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their" +
                    "default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on " +
                    "purpose (injected humour and the like)."
                }
              ]
            }
          ]
        }
      ];

      docking.whenRendered(() => {
        document
          .getElementById("tabPanel")
          .addEventListener("change", function(event) {
            const target = event.target;
            if (target.tagName === "smart-slider") {
              document.getElementById("outputTab").innerHTML =
                event.detail.value;
            } else if (target.tagName === "smart-multiline-text-box") {
              document.getElementById("outputTab").innerHTML = target.value;
            } else if (target.tagName === "Smart-TABS") {
              const tabs = target;
              const selectedTabItem = tabs.getElementsByTagName(
                "smart-tab-item"
              )[tabs.selectedIndex];
              if (selectedTabItem === undefined) {
                return;
              }
              if (selectedTabItem.label.toLowerCase().indexOf("slider") > -1) {
                const slider = selectedTabItem.querySelector("smart-slider");
                document.getElementById("outputTab").innerHTML = slider.value;
              } else if (
                selectedTabItem.label.toLowerCase().indexOf("textbox") > -1
              ) {
                const textBoxValue = selectedTabItem.querySelector(
                  "smart-multiline-text-box"
                ).value;
                document.getElementById("outputTab").innerHTML = textBoxValue;
              }
            }
          });
      });
    });
  }
};
</script>

<style>
smart-docking-layout {
  width: 100%;
  height: 500px;
  background-color: #eeedf3;
}

smart-docking-layout .smart-items-container smart-splitter-item.smart-element,
smart-docking-layout
  .smart-items-container
  > .smart-container
  > smart-splitter-item.smart-element {
  width: 50%;
  height: 50%;
}

smart-docking-layout smart-tabs-window smart-slider.smart-element,
smart-docking-layout smart-tabs-window smart-multiline-text-box.smart-element {
  height: 100%;
  width: 100%;
}

smart-docking-layout smart-tabs-window smart-multiline-text-box.smart-element {
  display: block;
}
</style>
