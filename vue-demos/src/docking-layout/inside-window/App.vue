<template>
  <div class="vue-root">
    <smart-window label="Smart Docking Layout" opened resize-mode="both" id="layoutWindow">
      <smart-docking-layout id="layout"></smart-docking-layout>
    </smart-window>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.dockinglayout.js";
import "smart-webcomponents/source/modules/smart.window.js";
import "smart-webcomponents/source/modules/smart.tree.js";
import "smart-webcomponents/source/modules/smart.gauge.js";
import "smart-webcomponents/source/modules/smart.textbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const layout = document.getElementById("layout");
      const tree = `<smart-tree id="tree" filterable>
<smart-tree-items-group>
<i class="material-icons">folder</i> Attractions
<smart-tree-item>Movies</smart-tree-item>
<smart-tree-item>Circus</smart-tree-item>
<smart-tree-item>Concerts</smart-tree-item>
<smart-tree-item>Monuments</smart-tree-item>
</smart-tree-items-group>
<smart-tree-items-group>
<i class="material-icons">folder</i> Dining
<smart-tree-item>Restaurants</smart-tree-item>
<smart-tree-item>Caf&eacute;s</smart-tree-item>
<smart-tree-item>Bars</smart-tree-item>
</smart-tree-items-group>
<smart-tree-items-group>
<i class="material-icons">folder</i> Education
<smart-tree-item>Schools</smart-tree-item>
<smart-tree-item>Colleges</smart-tree-item>
<smart-tree-item>Universities</smart-tree-item>
<smart-tree-item>Educational courses</smart-tree-item>
</smart-tree-items-group>
<smart-tree-items-group>
<i class="material-icons">folder</i> Family
<smart-tree-item>Babysitting</smart-tree-item>
<smart-tree-item>Family trips</smart-tree-item>
<smart-tree-item>Theme parks</smart-tree-item>
</smart-tree-items-group>
<smart-tree-items-group>
<i class="material-icons">folder</i> Health
<smart-tree-item>Hospitals</smart-tree-item>
<smart-tree-item>Family physicians</smart-tree-item>
<smart-tree-item>Optics</smart-tree-item>
</smart-tree-items-group>
</smart-tree>`,
        multiLine = `
<smart-multiline-text-box id="editor1">
</smart-multiline-text-box>
`;
      document.querySelector("smart-window").whenRendered(() => {
        layout.layout = [
          {
            id: "item0",
            label: "Tabs 0",
            items: [
              {
                label: "Tab A",
                selected: true,
                content: "This is the first item of the Tabs 0."
              },
              {
                label: "Tab B",
                content:
                  "<smart-text-box>Some Text Inside the Text Box</smart-text-box>"
              }
            ],
            autoHide: true,
            autoHidePosition: "left"
          },
          {
            id: "item1",
            label: "Tabs 1",
            items: [
              {
                label: "Tab 1",
                selected: true,
                content: multiLine
              },
              {
                label: "Tab 2",
                content:
                  '<smart-multiline-text-box id="editor2">File Editor 2</smart-multiline-text-box>'
              },
              {
                label: "Tab 3",
                content:
                  '<smart-multiline-text-box id="editor3">File Editor 3</smart-multiline-text-box>'
              }
            ],
            headerPosition: "none",
            tabCloseButtons: true
          },
          {
            id: "item2",
            label: "Solution Explorer",
            items: [
              {
                label: "Tab 4",
                content: tree
              }
            ],
            tabPosition: "hidden"
          },
          {
            id: "item3",
            label: "Tabs 3",
            items: [
              {
                label: "Tab 4",
                selected: true,
                content: "<smart-gauge></smart-gauge>"
              },
              {
                label: "Tab 5",
                content: "Contents of Tab Item 5."
              }
            ],
            autoHide: true,
            autoHidePosition: "top"
          }
        ];
      });
    });
  }
};
</script>

<style>
html,
body,
#app,
.vue-root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#layoutWindow {
  width: 750px;
  height: 500px;
  background-color: #eeedf3;
  top: calc(50% - 500px / 2);
  left: calc(50% - 750px / 2);
}

#layoutWindow .smart-window > .smart-container > .smart-content {
  background-color: #f5f5f5;
}

smart-docking-layout,
.smart-window smart-gauge {
  width: 100%;
  height: 100%;
}

smart-docking-layout smart-splitter-item {
  width: 33.3%;
}

.smart-window smart-text-box,
.smart-window smart-gauge,
.smart-window smart-multiline-text-box,
.smart-window smart-tree {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #f5f5f5;
}

/* ------------ Google fonts ------------ */

/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  margin-right: 10px;
}

/* ------------ */
</style>
