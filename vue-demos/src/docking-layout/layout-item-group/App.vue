<template>
  <div class="vue-root">
    <smart-docking-layout></smart-docking-layout>
    <div class="description">
      Smart Docking Layout has two types of Layout Groups. Layout group represents
      a container of items. There are "horizontal" and "vertical" groups and
      you can put layout group inside another layout group with API and UI drag
      and drop.
    </div>
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
      const docking = document.querySelector("smart-docking-layout");
      docking.layout = [
        {
          //The Base Group
          type: "LayoutGroup",
          orientation: "vertical",
          items: [
            {
              //DockingLayout Item A
              label: "TabsWindow A",
              size: "25%",
              items: [
                {
                  //Tab Item A1 of Item A
                  label: "Tab A1",
                  content: "Content of A1"
                }
              ]
            },
            {
              //A new Inner Horizontal Panel Group
              type: "LayoutGroup",
              orientation: "horizontal",
              items: [
                {
                  //DockingLayout Item B
                  label: "TabsWindow B",
                  size: "50%",
                  items: [
                    {
                      //Tab Item B1 of Item B
                      label: "Tab B1",
                      selected: true,
                      content: "Content of B1"
                    }
                  ]
                },
                {
                  //DockingLayout Item C
                  label: "TabsWindow C",
                  size: "50%",
                  items: [
                    {
                      //Tab Item C2 of Item C
                      label: "Tab C2",
                      content: "Content of C2"
                    }
                  ]
                }
              ]
            },
            {
              //A new Inner Vertical Panel Group
              type: "LayoutGroup",
              orientation: "vertical",
              size: "50%",
              items: [
                {
                  //DockingLayout Item D
                  label: "TabsWindow D",
                  size: "50%",
                  items: [
                    {
                      //Tab Item D1 of Item D
                      label: "Tab D1",
                      content: "Content of D1"
                    }
                  ]
                },
                {
                  //DockingLayout Item E
                  label: "TabsWindow E",
                  size: "50%",
                  items: [
                    {
                      //Tab Item E1 of Item E
                      label: "Tab E1",
                      content: "Content of E1"
                    }
                  ]
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
smart-docking-layout {
  width: 100%;
  height: 500px;
}
</style>
