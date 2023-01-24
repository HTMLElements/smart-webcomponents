<template>
  <div class="vue-root">
    <div class="smart-grid-layout">
      <div class="row">
        <div class="col">Header</div>
      </div>
      <div class="row">
        <div class="col-sm-2">
          <smart-list-box id="listBox">
            <smart-list-item>Accordion</smart-list-item>
            <smart-list-item>Breadcrumb</smart-list-item>
            <smart-list-item>Button</smart-list-item>
            <smart-list-item>Calendar</smart-list-item>
            <smart-list-item>Card</smart-list-item>
            <smart-list-item>CardView</smart-list-item>
            <smart-list-item>Carousel</smart-list-item>
            <smart-list-item>Chart</smart-list-item>
            <smart-list-item>Checkbox</smart-list-item>
            <smart-list-item>Chip</smart-list-item>
            <smart-list-item>ColorPanel</smart-list-item>
            <smart-list-item>ColorPicker</smart-list-item>
            <smart-list-item>ComboBox</smart-list-item>
            <smart-list-item>DateTimePicker</smart-list-item>
            <smart-list-item>DropDownButton</smart-list-item>
            <smart-list-item>DropDownList</smart-list-item>
            <smart-list-item>FileUpload</smart-list-item>
            <smart-list-item>GanttChart</smart-list-item>
            <smart-list-item>Gauge</smart-list-item>
            <smart-list-item>Grid</smart-list-item>
            <smart-list-item>Input</smart-list-item>
            <smart-list-item>ListBox</smart-list-item>
          </smart-list-box>
        </div>
        <div class="col-sm-8">
          <smart-layout></smart-layout>
        </div>
        <div class="col-sm-2">
          <smart-tree id="tree"></smart-tree>
        </div>
      </div>
      <div class="row">
        <div class="col">Footer</div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.grid.js";
import "smart-webcomponents/source/modules/smart.layout.js";
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const layout = document.querySelector("smart-layout"),
        tree = document.getElementById("tree");
      layout.allowContextMenu = true;
      layout.allowLiveSplit = true;

      layout.dataSource = [
        {
          label: "Item 1",
          type: "tabs",
          position: "top",
          items: [
            {
              content: "Test",
              label: "tab"
            },
            {
              content: "Test 2"
            }
          ]
        },
        {
          label: "Item 1",
          orientation: "horizontal",
          items: [
            {
              content: "Test"
            },
            {
              content: "Test 2"
            }
          ]
        }
      ];

      layout.whenRendered(() => {
        tree.dataSource = layout.dataSource;
        tree.animation = "none";
        tree.whenRendered(() => {
          tree.expandAll();
        });
      });

      layout.addEventListener("stateChange", function() {
        tree.dataSource = layout.dataSource;
        tree.expandAll();
      });
      layout.addEventListener("change", function(event) {
        tree.selectedIndexes = [event.detail.selectedIndex];
        tree.ensureVisible(event.detail.selectedIndex);
      });
      tree.addEventListener("change", function(event) {
        layout.selectedIndex = event.detail.selectedIndexes[0];
      });
    });
  }
};
</script>

<style>
body {
  margin: 0 auto;
  height: 100vh;
}

.smart-grid-layout {
  --smart-grid-layout-rows: 10% 80% 10%;
  --smart-grid-layout-row-gap: 0;
  --smart-grid-layout-col-gap: 0;
  height: 100%;
}

.smart-grid-layout .row {
  /*background: #36434F;*/
}

.smart-grid-layout .col-sm-2 {
  padding: 0;
}

.smart-grid-layout .col-sm-8 {
  background: #ebedf0;
}

smart-layout,
smart-tree,
smart-list-box {
  width: 100%;
  height: 100%;
}
</style>
